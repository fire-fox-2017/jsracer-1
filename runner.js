"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function reset_board() {
  console.log("\x1B[2J")
}


// Your code here...
let newGame = new JSRacer(['a', 'b', 'c'], 30, 0);

newGame.print_board();
sleep(2000)
reset_board()
newGame.play();
