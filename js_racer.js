"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this._players=players;
    this._length=length;
    this._dice=new Dice();

  }
  print_board() {
    for(let i=0; i<3; i++)
    {
      console.log(this.print_line(this._players[i],this._players[i]['posisi']));
      this._players[i]['posisi']=this.advanced_player(this._players[i]);
    }

  }
  print_line(player, pos) {
    let line=[];
    for(let i=0; i<this._length;i++)
    {
      if(pos===i)
      line.push(player['nama']);
      else {
        line.push(" ");
      }
    }
    return line.join('|');
  }
  advanced_player(player) {
    player['posisi']=player['posisi']+this._dice.roll;
    if(player['posisi']>=this._length)
    {
      player['finished']=true;
      return player['posisi']=this._length;
    }
    else {
      return player['posisi'];
    }
  }
  finished() {
    for(let i=0;i<this._players.length;i++){
      if(this._players[i]['finished']===true)
      {
        return true;
      }
      return false;
    }
  }
  winner() {
    for(let i=0;i<this._players.length;i++){
      if(this._players[i]['finished']===true)
      {
        console.log(`${this._players[i]['nama']} Won The Race`);
      }
  }
}
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
