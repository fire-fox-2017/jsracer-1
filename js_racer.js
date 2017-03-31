"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._players = players;
    this._length = length;
    this._winner = [];
    this._finished = false;
    // need to have players position
    // initialize the position to 0
    this._positions = new Object();
    for (let p = 0 ; p < this._players.length ; p++) {
      this._positions[this._players[p]] = 0;
    }

    this._dice = new Dice();
  }
  print_board() {
    for (let i = 0 ; i < this._players.length ; i++) {
      // let track = '';
      // for (let t = 0 ; t <= this._length ; t++) {
      //     if (this._positions[this._players[i]] == t)
      //       track += ` ${this._players[i]} `;
      //     track += "|   "
      //
      // }
      // console.log(track);
      this.print_line(this._players[i], this._positions[this._players[i]]);
    }
  }
  print_line(player, pos) {
    // print each player
    let track = '';
    for (let t = 0 ; t < this._length ; t++) {
        if (pos == t)
          track += ` ${player} |`;
        else if (pos == this._length && t == this._length - 1)
          track += `   | ${player} `;
        else
          track += "   |";
    }
    console.log(track);
  }
  advanced_player(player) {
    // increase player position using dice
    this._positions[player] += this._dice.roll();

    if( this._positions[player] >= this._length ){
      this._positions[player] = this._length;
      this._winner.push(player);
      this._finished = true;
    }

    /*
    if (!this._finished) {
      this._positions[player] += this._dice.roll();

      if( this._positions[player] > this._length ){
        this._positions[player] = this._length;
        this._winner.push(player);
        this._finished = true;
        console.log(`winner is ${this._winner}`);
      }

    }
    else if (this._finished && this._winner != player){
      // check if one player is already finished, then the other cannot advance to length
      this._positions[player] += this._dice.roll();
      if( this._positions[player] > this._length)
        this._positions[player] = this._length - 2;
    }
    */

    console.log(`${player} ${this._positions[player]}`);
  }
  finished() {
    // return boolean?
    // return (Object.keys(this._positions).find(key => this._positions[key] >= this._length)) != null ? true : false;
    return this._finished;
  }
  winner() {
    // print the winner?
    // let winner = Object.keys(this._positions).find(key => this._positions[key] >= this._length);
    /*
    if ( this._finished )
      console.log(`Player '${this._winner}' is the Winner!`);
    else
      console.log(`No Winner yet.`);
    */

    if (this._winner.length == 1)
      console.log(`Player '${this._winner[0]}' is the Winner!`);
    else if (this._winner.length > 1) {
      let msg = "The players are tied: ";
      for (let i = 0 ; i < this._winner.length ; i++) {
        msg += `${this._winner[i]}`
        if ( i != this._winner.length -1 ) msg += ", ";
      }
      console.log(msg);
    }
    else
      console.log(`No Winner yet.`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
