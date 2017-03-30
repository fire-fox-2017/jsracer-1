"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.pemain = players
    this.panjangBoard = length
    this.posisi = this.advanced_player(this.pemain.length)
    this.dice = new Dice()
    this.pemenang = ""
    this.selesai = false
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
    while(!this.selesai){
      this.sleep(1000)
      this.reset_board()
      for (let i = 0; i < this.pemain.length; i++){
        // console.log(this.posisi == [ 0, 0, 0, 0 ]);
        if (!this.selesai){
          this.posisi[i] += this.dice.roll();
        }
        if (this.posisi[i]>=this.panjangBoard-1 ){
          this.posisi[i] = this.panjangBoard-1
          //fin = true;
          this.selesai = true;
          this.pemenang=this.pemain[i];
        }
        console.log(this.print_line(this.pemain[i],this.posisi[i]))
      }
    }
    console.log(this.winner());
  }
  print_line(player, pos) {
    let line = []
    for (let i = 0; i < this.panjangBoard; i++) {
      if (i == pos) {
        line.push(player)
      } else {
        line.push("_")
      }
    }
    return line.join("|")
  }
  advanced_player(player) {
    let arr = []
    for (let i = 0; i < player; i++) {
      arr.push(0)
    }
    return arr
  }
  // finished() {
  //   if (this.posisi){
  //
  //   }
  // }
  winner() {
    return `selamat ${this.pemenang} menang`
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
