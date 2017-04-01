"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._pemain = players; //pemain
    this._panjang = length; //panjang board
    this._posisi = []; //posisi pemain
    this._pemenang = [];
    this._finish = false;
    this._posisiMax = 0;

    for (var i = 0; i < players.length; i++) {
      this._posisi.push(0);
    }
  }

  print_board() {
    for (let i = 0; i < this._pemain.length; i++) {
      console.log(this.print_line(this._pemain[i],this._posisi[i]));
    }
  }
  print_line(player, pos) {
    let pembatas = '| ';
    let passedPembatas = pembatas.repeat(pos);
    let posPemain = `|${player}`;
    let pembatasGame = pembatas.repeat(this._panjang - pos);
    let lineBoard = `${passedPembatas}${posPemain}${pembatasGame}`;

    return lineBoard;
  }

  advanced_player(player) {
    let langkah = 0;
    let dadu = new Dice();
    for (var i = 0; i < player.length; i++) {
      langkah = dadu.roll();
      if(this._posisi[i] + langkah > this._panjang){
        this._posisi[i] = this._panjang;
        this._pemenang.push(this._pemain[i]);
      } else {
        this._posisi[i]  = this._posisi[i] + langkah;
      }
    }
  }


  finished() {

    // Digunakan untuk mencari posisi terbesar dari tiap pemain
    this._posisiMax = this._posisi.reduce((posisi1, posisi2) => {
      if(posisi1 > posisi2){
        return posisi1;
      } else {
        return posisi2;
      }
    });

    //cek apakah sudah ada yang finish
    if(this._posisiMax >= this._panjang){
      return true;
    } else {
      return false;
    }
  }

  winner() {
      console.log(`Pemenangnya : ${this._pemenang}`);
    }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
