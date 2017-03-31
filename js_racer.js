"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this._player = this.setObjectPlayer(players)
    this._PanjangPapan = length;
    this._sides = sides;
    this._finished = false;
  }


  setObjectPlayer(players){
    let arr =[]
    for(let i=0;i<players.length;i++){
      let objk = {
        name : players[i],
        position : 0
      }
      arr.push(objk)
    }
    return arr;
  }

  print_board() {
    for(let i=0;i<this._player.length;i++){
      let jalur = this.print_line(this._player[i].name, this._player[i].position)
    }
  }

  print_line(player, pos) {
    let papan=[];
    for(let i=0;i<this._PanjangPapan;i++){
      if(i==pos){
        papan.push(player)
      }
      else{
        papan.push(' ')
      }
    }
    console.log(papan.join('|'))
  }

  advanced_player() {
    let rolldadu = new Dice();

    do{
      for(let i=0;i<this._player.length;i++){
        let lastPosition = this._player[i].position;
        let nilairoll = rolldadu.roll()
        if(this._finished == false){
          this._player[i].position = lastPosition+nilairoll;
        }

        if(this._player[i].position>this._PanjangPapan-2){
          this._finished = true;
          this._player[i].position=19;
        }
        this.print_line(this._player[i].name, this._player[i].position)
      }
      this.sleep(1000)
      this.reset_board()
    }while(this._finished == false)
    this.print_board()
    this.winner();
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }


  finished() {


  }

  winner() {
    let tampung;
    for(let i=0;i<this._player.length;i++){
      if(this._player[i].position==19)
      {
        tampung=this._player[i].name;
      }
    }
    console.log(`Pemenang adalah si ${tampung}`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}




export default JSRacer
