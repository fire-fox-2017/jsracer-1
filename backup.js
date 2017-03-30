"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players=players;
    this.panjang=length;
    this.sides=sides;
    this.nilai =new Dice();

  }
  print_board() {







    let maju=0;

    for(let i =0;i<this.players.length;i++){
      if(this.players[i].pos>=this.panjang){
        console.log(`${this.players[i].name} MENANG!`);
      }else{
        this.players[i].pos =this.players[i].pos+this.nilai.roll();
        this.print_line(this.players[i].name,this.players[i].pos);
      }

    }
  }


  print_line(player, pos) {
    let garis='|';
    for(let i=0;i<this.panjang;i++){
      garis =garis+ '|';
      if(i==pos){
        garis=garis+player;
      }
    }
    console.log(garis);
  }
  advanced_player(player) {




  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
