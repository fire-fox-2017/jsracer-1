"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.length = length
    this.position = this.advanced_player(this.player.length)
    this.dice = new Dice()
    this.win = ""
    this.finish = false
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  print_board() {
    while(this.finish === false){
      this.sleep(1000)
      this.reset_board()
      for (let i = 0; i < this.player.length; i++){
        if (this.finish === false){
          this.position[i] += this.dice.roll();
        }
        if (this.position[i] >= this.length -1 ){
          this.position[i] = this.length-1
          this.finish = true;
          this.win= this.player[i];
        }
        console.log(this.print_line(this.player[i],this.position[i]))
      }
    }
    console.log(this.winner());
  }
  print_line(player, pos) {
    let track = []
    for (let b = 0; b < this.length; b++) {
      if (b == pos) {
        track.push(player)
      } else {
        track.push("_")
      }
    }
    return track.join("|")
  }
  advanced_player(player) {
    let starter = []
    for (let a = 0; a < player; a++) {
      starter.push(0)
    }
    return starter
  }

  winner() {
    return `Congratulation ${this.win} WIN!!`
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
