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

let pemainGame = ['A','B','C'];
let panjangBoard = 10;
let js1 = new JSRacer(pemainGame, panjangBoard);

js1.reset_board();
js1.print_board();
sleep(500);
while(js1.finished() === false){
  js1.reset_board();
  js1.advanced_player(pemainGame);
  js1.print_board();
  sleep(500);
}

js1.winner();
