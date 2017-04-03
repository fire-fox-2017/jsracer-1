'use strict'

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, pos) {
    this._players = players;
    this._setPlayers = this.setObjPlayers();
    this._length = length;
    this._pos = pos;
    this._dice = new Dice();
    this._finish = { name : '', isWinner : false }
  }

  setObjPlayers() {
    let arr = [];
    for (let i = 0; i < this._players.length; i++) {
      let player = {
        name: this._players[i],
        pos: 0
      }
      arr.push(player)
    }
    return arr
  }

  print_board() {
    for (let i = 0; i < this._setPlayers.length; i++) {
      this.print_line(this._setPlayers[i].name, this._setPlayers[i].pos)
    }
  }
  print_line(player, pos) {
    let line = [];
    for (let i = 0; i <= this._length; i++) {
      if (pos == i) {
        line.push(player)
      }else{
        line.push(' ');
      }

    }
    console.log(line.join("|"));
  }

  advanced_player() {
    for (let i = 0; i < this._setPlayers.length; i++) {
      let lastPos = this._finish.isWinner == true ? this._setPlayers[i].pos += this._dice.roll(0, 0) : this._setPlayers[i].pos += this._dice.roll(7, 1);
      if(this._setPlayers[i].pos >= (this._length - 1)){
        this._finish.name = this._setPlayers[i].name;
        this._finish.isWinner = true;
        this.print_line(this._setPlayers[i].name, this._length)
      }else{
        this.print_line(this._setPlayers[i].name, lastPos)
      }

    }
  }

  play() {
    do {
        this.sleep(700)
        this.reset_board()
        this.advanced_player()

    } while(this._finish.isWinner === false)
    console.log(this._finish.name + " is the Winner !!")
  }

  winner(player) {
    return 'you win' + player
  }

  reset_board() {
    console.log("\x1B[2J")
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}

export default JSRacer
