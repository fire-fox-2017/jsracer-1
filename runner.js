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

let jsracer = new JSRacer(["A","B","C","D"], 30);
jsracer.print_board();
sleep(500);
while (!(jsracer.finished)) {
	jsracer.reset_board();
	jsracer.advanced_player();
	jsracer.print_board();
 	sleep(500);
}
