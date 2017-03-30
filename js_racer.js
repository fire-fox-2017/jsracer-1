"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players //[a,b,c]
    this.posisi = this.count_player(players) //[0,0,0]
    this.length = length
    this.winner = ''
    this.dice = new Dice()
    this.status = true
    this.begin = true
  }
  count_player(players){
    let start = []
    for (let i=0; i<players.length; i++){
      start.push(0)
    }
    // console.log(start);
    return start
  }

  print_board() {
    while(this.status == true){
      if (this.begin){
        for(let i=0; i<this.players.length; i++){
          this.print_line(this.players[i],this.posisi[i])
        }
        this.begin = false
      } else {
        for (let i=0; i<this.players.length; i++){
          if(this.status){
            this.posisi[i] += this.dice.roll()
            // console.log(this.posisi[i]);
          }
          if(this.posisi[i] >= this.length-1){
            this.posisi[i] = this.length - 1
            this.status = false
            this.winner = this.players[i]
          }
          this.print_line(this.players[i],this.posisi[i])
        }
      }
    }
    if (!this.status){
      console.log(`The Winner: ${this.winner}`);
    }
  }

  print_line(players, pos) {
    let arr = []
    for (let i=0; i<this.length; i++){
      if(i===pos){
        arr.push(players)
      } else {
        arr.push(' ')
      }
    }
    console.log(arr.join('|'));
  }

  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }

}


let play = new JSRacer (['A','B','C'],15)
// console.log(play.print_line(play.players, play.start));
play.print_board();
// console.log(play.players);

export default JSRacer
