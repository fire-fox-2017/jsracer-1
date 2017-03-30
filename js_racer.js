"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    let dices = [];
    for (let i = 0; i < players.length; i++) {
      let randomizer = new Dice();
      dices.push(randomizer);
    }
    this.sides = dices;
    this.maxPos = 0;
    let position = [];
    for (let i = 0; i < players.length; i++) {
      position.push(0);
    }
    this.pos = position;
  }
  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      console.log(this.print_line(this.players[i], this.pos[i]));
    }
  }
  print_line(player, pos) {
    let lineSymbol = `| `;
    let linePassed = lineSymbol.repeat(pos);
    let playerPos = `|${player}`;
    let lineToGo = lineSymbol.repeat(this.length - pos);
    let currentLine = `${linePassed}${playerPos}${lineToGo}`;
    return currentLine;
  }
  advanced_player() {
    let newPos = [];
    for (let i = 0; i < this.players.length; i++) {
      let advancedPos = this.pos[i] + this.sides[i].roll();
      if (advancedPos > this.length) {
        advancedPos = this.length;
      }
      newPos.push(advancedPos);
    }
    this.pos = newPos;

    this.maxPos = this.pos.reduce((a,b)=> {
      return a > b ? a : b;
    });

  }
  finished() {
    if (this.maxPos >= this.length) {
      return true;
    } else {
      return false;
    }
  }
  winner() {
    let winners = [];
    if (this.finished()) {
      for (let i = 0; i < this.players.length; i++) {
        if (this.pos[i] === this.length) {
          winners.push(this.players[i]);
        }
      }
      if (winners.length === 1) {
        let winner = winners.join("");
        console.log(`Player ${winner} is the winner!`);
      } else {
        let winner = winners.join(", ");
        console.log(`It's a tie between ${winner}!`);
      }
    }


  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
