"use strict"

import Dice from "./dice.js"
class JSRacer {
  constructor(players, length,sides) {
    this._players = players;
    this._length = length;
    this._sides = sides;
    this._setPlayers = this.players();
    this._finish = { name : '', isWinner : false }
    this._dice = new Dice();
  }
  players(players){
    let arr = [];
    for (let i = 0; i < this._players.length; i++) {
      let player = {
        name: this._players[i],
        pos: 0
      }
      arr.push(player)
    }
    return arr;
  }
  print_board() {
    for (let i = 0; i < this._setPlayers.length; i++) {
      this.print_line(this._setPlayers[i].name, this._setPlayers[i].pos)
    }
  }
  print_line(player,pos) {
    var track = [];
    for (let i = 0; i < this._length; i++) {
      if (i === pos) {
        track.push(player);
      } else {
        track.push(' ');
      }
    }
    console.log(track.join('|'));
  }
  advanced_player(play) {
    this.reset_board();
    for (let i = 0; i < this._setPlayers.length; i++) {
      if(this._setPlayers[i].pos >= this._length - 2){
        this._finish.name = this._setPlayers[i].name;
        this._finish.isWinner = true;
        this.print_line(this._setPlayers[i].name, this._length)
      }

      if(this._finish.isWinner == true){
        this._setPlayers[i].pos = this._setPlayers[i].pos+this._dice.roll(0);
        this.print_line(this._setPlayers[i].name, this._setPlayers[i].pos);
      }else{
        this._setPlayers[i].pos = this._setPlayers[i].pos+this._dice.roll(6);
        this.print_line(this._setPlayers[i].name, this._setPlayers[i].pos);
      }
    }
  }
  finished() {
    do {
        this.sleep(1000);
        this.reset_board()
        this.advanced_player()
    } while(this._finish.isWinner === false)
    console.log(this._finish.name + " is the Winner !!")
  }
  // winner() {
  //
  // }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
