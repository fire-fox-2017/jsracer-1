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
var race= new JSRacer([{"nama":"A","posisi":1,"finished":false},{"nama":"B","posisi":2,"finished":false},{"nama":"C","posisi":3,"finished":false}],20,6);

 while(race.finished()!==true)
  {
       sleep(1000);
       race.reset_board();
       race.print_board();
       console.log(race._players[0]['nama']+" "+race._players[0]['posisi']);
       console.log(race._players[1]['nama']+" "+race._players[1]['posisi']);
       console.log(race._players[2]['nama']+" "+race._players[2]['posisi']);
       console.log(race.finished());
  }

  race.winner();

// sleep(1000);
// race.reset_board();
// race.print_board();
// sleep(1000);
// race.reset_board();
// race.print_board();
// console.log(race._players[0]['nama']+" "+race._players[0]['posisi']);
// console.log(race._players[1]['nama']+" "+race._players[1]['posisi']);
// console.log(race._players[2]['nama']+" "+race._players[2]['posisi']);
//console.log(race.finished());
