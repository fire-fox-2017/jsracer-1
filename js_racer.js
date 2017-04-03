"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players=players;
    this.panjang=length;
    this.nilai =new Dice();
    this.winner='';

  }
  print_board() {
    for(let i =0;i<this.players.length;i++){
      if(this.finished()){

        console.log(this.print_line(this.players[i].name,this.players[i].pos));


      }else{
        console.log(this.print_line(this.players[i].name,this.players[i].pos));
      }
    }
    if(this.finished()){
      console.log(`Permainan berakhir, pemenangnya : ${this.winner}`);

    }

    console.log('\n');

  }

  print_line(player, pos) {
    if(pos>=this.panjang){
      garis='||||||||||||||||||||'+player;
      return garis
    }
    let garis='';
    for(let i=0;i<this.panjang;i++){


      if(i==pos){
        garis=garis+player;
      }else{
        garis =garis+ '|';
      }

    }
    return garis;
  }

  advanced_player(player) {
    this.players[player].pos =this.players[player].pos+this.nilai.roll();

  }
  finished() {

    for(let i =0;i<this.players.length;i++){
     if(this.players[i].pos>=this.panjang){
      this.winner=this.players[i].name;
       return true;
     }
    }
    return false;
  }
  winner() {
    return this.winner;
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
