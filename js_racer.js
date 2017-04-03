"use strict"

import Dice from "./dice.js"
class JSRacer {
  constructor(players, length,sides) {
    this._players = players;
    this._length = length;
    this._sides = sides;
  }
  players(players){
    let tempPlayer = [];
    for (let i = 0; i < players.length; i++) {
      let obj = {
        name: players[i],
        position: 0
      }
      tempPlayer.push(obj);
    }
    return tempPlayer;
  }
  print_board() {
    var dice = new Dice();
    for (let b=0;b<this._players.length;b++){
      let a = dice.roll();
      this.print_line(this._players[b],a);
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
    var dice = new Dice();
    for(let x=0;x<this._length;x++){
      for (let i = 0; i < this._players.length; i++) {
        let playing = this._players[i].position;
        let roll = playing + dice.roll();
        this.print_line(this._players[i].name, roll);
        if (this._players[i].position >= this._length) {
          return finished();
        }
      }
      break;
    }
  }
  finished() {
    for (var i = 0; i < this._players.length; i++) {
      if (this._players[i].position >= this._length) {
        return this.winner();
      }
    }
  }
  winner() {
    for (var i = 0; i < this._players.length; i++) {
      if (this._players[i].position >= this._length) {
        return ''+this._players[i]+' is the winner';
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
