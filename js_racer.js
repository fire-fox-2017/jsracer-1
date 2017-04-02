"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, pos) {
    this.players = players;
    this.length = length;
    this.pos = pos;
    this.playersObj = this.create_player_obj();
    this.winner = {name: '', isWin : false};
  }

  create_player_obj() {
    let objContainer = [];
    for(let i = 0; i < this.players.length; i++) {
      let playerObj = {
        'name': this.players[i],
        'pos': 0,
        'isWon': false
      }
      objContainer.push(playerObj);
    }
    return objContainer;
  }

  print_board() {
    for(let i = 0; i < this.playersObj.length; i++) {
      this.print_line(this.playersObj[i].name, this.playersObj[i].pos);
    }
  }

  print_line(player, pos) {
    let line = [];
    for(let i = 0; i < this.length; i++) {
      if(pos === i) {
        line.push(player);
      }
        line.push(' ');
    }
    console.log(line.join('|'));
  }

  advanced_player(player) {
    for(let i = 0; i < this.playersObj.length; i++) {
      let lastPos = this.playersObj[i].pos += Dice.roll();
      if(lastPos >= this.length - 2){
        this.print_line(this.playersObj[i].name, this.length - 1);
        this.playersObj[i].pos = this.length - 1;
        this.winner.name = this.playersObj[i].name;
        this.winner.isWin = true;
      }else{
        this.print_line(this.playersObj[i].name, lastPos);
      }
    }
  }

  play() {
    do {
      if(this.winner.isWin === false) {
        this.advanced_player();
        this.sleep(1000);
        this.reset_board();
      }
    } while (this.winner.isWin === false) //kondisi yang terus jalan
    this.print_board();
    console.log(this.winner.name +" is Winner !!")
  }

  finished() {

  }
  winner() {

  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}


export default JSRacer
