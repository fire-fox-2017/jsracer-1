"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, track, sides,finished) {
    this.players = players;
    this.track = track;
    this.sides = sides;
    this.stats = this.player_status();
    this.finished = false
  }
  print_line(player, pos) {
    let road = []
    for (var i=0; i<this.track; i++) {
      if (pos === i) {
        road.push(player);
      }
        road.push(' ');
    }
    console.log(road.join('|'))
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
    // console.log('objarr ', objarr);
    return objarr
  }

  print_board() {
    for (var i=0; i<this.stats.length; i++) {
      this.print_line(this.stats[i].name,this.stats[i].position)
    }
  }

  advanced_player(player) {
    let players = this.stats
    var dice = new Dice();

    while (!this.finished) {
      for (var i = 0; i < players.length; i++) {
        var player = players[i]
        player.position += dice.roll
        this.print_line(players[i].name,player.position);

        // console.log('lastpos ', player);
        // console.log('masuk sini: ', player === this.track);

        if (player.position === this.track) {
          this.finished = true
          this.print_line(this.stats[i].name,this.length-1);
          return `The winner is: ${players.name}`
        }
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
console.log(game.advanced_player())
