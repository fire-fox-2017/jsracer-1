"use strict"

import JSRacer from "./js_racer"

function reset_board() {
  console.log("\x1B[2J")
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...

let player = new JSRacer(['a', 'b', 'c', 'd'], 30, 0)
player.print_board()
sleep(1000)
reset_board()
player.play()
