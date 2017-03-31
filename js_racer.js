"use strict"

// import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.length = length;
    this.sides = sides;
    this.stats = this.player_status();
  }
  player_status() {
    let objarr = []
    for (var i=0; i<this.players.length; i++) {
      let playerobj = {
        'name': this.players[i],
        'position': 0,
        'winner': false
      }
      objarr.push(playerobj);
    }
    return objarr
  }
  print_board() {
    for (var i=0; i<this.stats.length; i++) {
      this.print_line(this.stats[i].name,this.stats[i].position)
    }
  }
  print_line(player, pos) {
    let road = []
    for (var i=0; i<this.length; i++) {
      if (pos === i) {
        road.push(player);
      }
        road.push(' ');
    }
    console.log(road.join('|'))
  }

  advanced_player(player) {
    for (var i=0; i<this.stats.length; i++) {
      let lastpos = 2 += this.stats[i].position
      if(lastpos<=this.length) {
        this.print_line(this.stats[i].name,lastpos);
      } else if(lastpos>=this.length) {
        this.print_line(this.stats[i].name,this.length-1);
        this.stats.winner = true
        `The winner is: ${this.stats[i].name}`
      }
    }
  }
}
//   finished() {
//
//   }
//   winner() {
//
//   }
//   reset_board() {
//     console.log("\x1B[2J")
//   }
// }

// export default JSRacer
let game = new JSRacer (['a','b','c'],20,0)
console.log(game.print_board())
