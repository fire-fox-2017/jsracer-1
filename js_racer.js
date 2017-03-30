"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._players = players;
    this._length = length;

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
          track += ` ${player} |`;
        else
          track += "   |";
    }
    console.log(track);
  }
  advanced_player(player) {
    // increase player position using dice
    this._positions[player] += this._dice.roll();
    if( this._positions[player] > 20)
      this._positions[player] = 20;
    console.log(`${player} ${this._positions[player]}`);
  }
  finished() {
    // return boolean?
    return (Object.keys(this._positions).find(key => this._positions[key] >= this._length)) != null ? true : false;
  }
  winner() {
    // print the winner?
    let winner = Object.keys(this._positions).find(key => this._positions[key] >= this._length);
    if ( winner != null)
      console.log(`Player '${winner}' is the Winner!`);
    else
      console.log(`No Winner yet.`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
