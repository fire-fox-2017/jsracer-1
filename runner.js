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
let racer = new JSRacer();
racer.reset_board();
racer.print_board();
sleep(500);
while (!racer.finished) {
	racer.reset_board();
	racer.advanced_player();
	racer.print_board();
 	sleep(500);
}