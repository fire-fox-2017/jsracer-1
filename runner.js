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

// test Racers
let players = ["A", "B", "C", "D"];
let length = 25;

let racers = new JSRacer(players, length);

racers.reset_board();
racers.print_board();
sleep(1000);
while (!racers.finished()) {
  racers.reset_board();
  racers.advanced_player();
  racers.print_board();
  racers.winner();
  sleep(1000);
}
