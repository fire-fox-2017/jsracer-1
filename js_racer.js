"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._players = this.player_pool(players);
    this._length = length; //21
    this._finishStatus = false;
    this._winner = [];
  }

  player_pool(players){
    let temp = [];
    for (let i = 0; i < players.length; i++) {
      let obj = {
        name: players[i],
        position: 0
      }
      temp.push(obj);
    }
    return temp;
  }

  print_board() {
    for (let i = 0; i < this._players.length; i++) {
        this.print_line(this._players[i].name, 0);
    }
  }

  print_line(player, position) {
    let temp = [];
    for (let i = 0; i < this._length; i++) {
      if (i === position) {
        temp.push(player);
      } else {
        temp.push(' ');
      }
    }
    console.log(temp.join('|'));
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
        this._winner.push(this._players[i].name);
      }
    }
    return `${this._winner} is the winner`;
  }

  advanced_player() {
    let dice = new Dice();
    this.print_board();
    do {
      for (let i = 0; i < this._players.length; i++) {
        let currentPosition = this._players[i].position;
        if (this._finishStatus === false) {
          let diceRoll = dice.roll();
          this._players[i].position = currentPosition + diceRoll;
        }
        if (this._players[i].position >= this._length-1) {
          this._finishStatus = true;
          this._players[i].position = this._length-1;
        }
        this.print_line(this._players[i].name, this._players[i].position);
      }
    } while (this._finishStatus === false);
    console.log(this.finished());
  }

  // advanced_player() {
  //   let dice = new Dice();
  //   if(this._players[0].position===0){
  //   this.print_board();
  //   }
  //     for (let i = 0; i < this._players.length; i++) {
  //       let currentPosition = this._players[i].position;
  //       if (this._finishStatus === false) {
  //         let diceRoll = dice.roll();
  //         this._players[i].position = currentPosition + diceRoll;
  //       }
  //       if (this._players[i].position >= this._length-1) {
  //         this._finishStatus = true;
  //         this._players[i].position = this._length-1;
  //       }
  //       this.print_line(this._players[i].name, this._players[i].position);
  //     }
  //     if (this._finishStatus === false) {
  //       console.log(this.finished());
  //     }
  // }


  // reset_board() {
  //   console.log("\x1B[2J")
  // }


}

let race1 = new JSRacer(['a', 'b', 'c'], 20, 0);

race1.advanced_player();


export default JSRacer
