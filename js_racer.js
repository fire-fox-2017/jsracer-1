"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._players=players;
    this._length=length;
    this.arrPlayer=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.arrTemp=[];
    this.wins=0;
    this.status="start";
    for(let i=0;i<length;i++){
      this.arrTemp.push(0);
    }
  }

  print_board() {
  this.reset_board();
    do{
      this.print_line();
      this.sleep(1000);
      this.reset_board();
    }while(this.status!="finish");
      this.print_line();
      this.winner();
  }
  print_line() {
    let my_Dice= new Dice(this._length);
    for(let i =0;i<this._players;i++){
      let patern="|";
      if(this.status==="start"){
        this.arrTemp[i]+=my_Dice.roll();
      }
      for(let j=1;j<=this._length;j++){
        if(this.arrTemp[i]>=this._length){
          this.wins=i;
          this.status="finish";
          this.arrTemp[i]=this._length;
          if(this.arrTemp[i]==j){
            patern+=this.arrPlayer[i]+"|";
          }else{
            patern+=" |";
          }
        }else {
          if(this.arrTemp[i]==j){
            patern+=this.arrPlayer[i]+"|";
          }else{
            patern+=" |";
          }
        }
      }
      console.log(patern);
    }
  }
  winner() {
    let temp=`The winners "${this.arrPlayer[this.wins]}"`;
    console.log(temp);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
      }
    }
  }
}

export default JSRacer
