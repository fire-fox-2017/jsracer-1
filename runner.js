"use strict"

const { JSRacer } = require('./js_racer.js')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...

let jsracer = new JSRacer(["A","B","C","D","E","F"], 40);
jsracer.print_board();
sleep(2000);
while (!(jsracer.finished)) {
	jsracer.reset_board();
	jsracer.advanced_player();
	jsracer.print_board();
 	sleep(2000);
}
