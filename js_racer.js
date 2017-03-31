"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = this.setObject(players);
    this.length = length;
    this.sides = sides;
  }
  setObject(players){
    let arr=[];
    for (let i = 0; i<players.length; i++){
      let obj={
        name : players[i],
        position : 0
      };
      arr.push(obj);
    }

    return arr;
  }

  print_board() {
    let board =[]
    for(let i=0; i<this.players.length; i++){
      board.push([]);
      board[i].unshift(this.players[i].name);
      for(let j=0; j<this.length; j++){
        board[i].push(" ");
      }
      console.log(board[i].join("|"));
    }
  }
  print_line() {
    let line=[];
    do {
      this.advanced_player();
      for(let i=0; i<this.players.length; i++) {
        if(this.players[i].position <= this.length){
          for(let j=0; j<=this.length; j++){
            if (this.players[i].position === j){
                line.push(this.players[i].name)
            } else {
                line.push(" ")
            }
          }
          console.log(line.join("|"))
          line=[]
        }
      }
      this.finished()
    }
    while (this.finished()===false);
    if(this.finished()){
      console.log(`The winner is player ${this.winner()}`);
    }
  }
  advanced_player() {
    let dice = new Dice();
    for(let i=0; i<this.players.length; i++) {
      this.players[i].position += dice.roll();
      if (this.players[i].position>this.length){
        this.players[i].position=this.length;
        break;
      }
    }
  }
  finished() {
    let finish = false;
    for(let i=0; i<this.players.length; i++) {
      if(this.players[i].position >= this.length){
        finish = true;
      }
    }
    return finish;
  }
  winner() {
    if(this.finished()){
      for(let i=0; i<this.players.length; i++) {
        if(this.players[i].position >= this.length){
          return this.players[i].name;
        }
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
var racer = new JSRacer(["a","b","c"],30,0)
racer.print_board()
racer.print_line()
export default JSRacer
