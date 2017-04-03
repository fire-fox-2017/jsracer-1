"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this._players = this.object_players(players);
    this._length = length; //21
    this._sides = sides;
    this._finish = false;
    this.tempWin = [];
  }

  object_players(players){
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
    for (let i = 0; i < this._players.length; i++) {
        this.print_line(this._players[i].name, 0);
    }
  }

  print_line(player, pos) {
    let tempLen = [];
    for (let i = 0; i < this._length; i++) {
      if (i === pos) {
        tempLen.push(player);
      } else {
        tempLen.push(' ');
      }
    }
    console.log(tempLen.join('|'));
  }

  advanced_player() {
    let dice = new Dice();
    do {
      for (let i = 0; i < this._players.length; i++) {
        let tempLast = this._players[i].position;
        if (this._finish === false) {
          let tempDice = dice.roll();
          this._players[i].position = tempLast + tempDice;
        }

        if (this._players[i].position > this._length-1) {
          this._finish = true;
          this._players[i].position = 20;
        }
        this.print_line(this._players[i].name, this._players[i].position);
      }
    } while (this._finish === false);
  }

  finished() {
    for (var i = 0; i < this._players.length; i++) {
      if (this._players[i].position === this._length-1) {
        return this.winner()
      }
    }
  }

  winner() {
    for (var i = 0; i < this._players.length; i++) {
      if (this._players[i].position === this._length-1) {
        this.tempWin.push(this._players[i].name);
      }
    }
    return ''+this.tempWin+' is the winner';
  }

  reset_board() {
    console.log("\x1B[2J")
  }


}

export default JSRacer
