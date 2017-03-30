"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, pos) {
    this._players = players;
    this._setPlayers = this.setObj();
    this._length = length;
    this._pos = pos;
    this._dice = new Dice();
    this._finish = { name : '', isWinner : false }
  }

  setObj() {
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
      let lastPos = this._setPlayers[i].pos += this._dice.roll(6, 1);
      if(this._setPlayers[i].pos > this._length - 2){
        this._finish.name = this._setPlayers[i].name;
        this._finish.isWinner = true;
        this.print_line(this._setPlayers[i].name, this._length-2)
      }else{
        this.print_line(this._setPlayers[i].name, lastPos)
      }
      
    }
  }
  
  play() {
    do {
      //this._finish ? console.log(' Game is Over ') : this.advanced_player()
      this.advanced_player()
      this.sleep(2000)
      this.reset_board()
      //console.log('--------------------------------------------------------------');
      if(this._finish.isWinner === true){
        this.print_board()
        console.log(this._finish.name + " is the Winner !!")
      }
    } while(this._finish.isWinner === false)

  }

  // finished() {
  //   for (let i = 0; i < this._game.length; i++) {
  //     console.log(this._game[i].pos)
  //     if(this._game[i].pos == this._length) {
  //       return true; 
  //     }else{
  //       return false;
  //     }
  //   }
  // }

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


