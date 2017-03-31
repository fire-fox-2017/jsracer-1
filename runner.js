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
let players = ['a', 'b', 'c', 'd', 'e'];
let length = 20;
let race = new JSRacer(players, length);
race.print_board();


// simulate racing
do {
  race.reset_board();
  race.print_board();

  // move players
  for (let i = 0 ; i < players.length ; i++) {
      race.advanced_player(players[i]);
  }

  sleep(500);

} while(!race._finished);

// race.reset_board();
race.print_board();
race.winner();
