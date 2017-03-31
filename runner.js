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

// Your code here...
let jsRacer = new JSRacer(['a', 'b', 'c'], 21, 0);
jsRacer.print_board();
jsRacer.advanced_player();
console.log(jsRacer.finished());
