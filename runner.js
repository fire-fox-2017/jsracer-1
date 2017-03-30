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

let player = [{'name':'A','pos':0},{'name':'B','pos':0},{'name':'C','pos':0}];
let racer = new JSRacer(player,20);
let i=0;
racer.reset_board();
racer.print_board();
sleep(1000);
while(!racer.finished()){
  i++;
  if(i==1){
    racer.advanced_player(0);
  }else if(i==2){

    racer.advanced_player(1);
  }else if(i==3){
    racer.advanced_player(2);
    i=0;
  }

  racer.reset_board();
  racer.print_board();
  sleep(1000);


}


/*
racer.print_board();

racer.print_board();
racer.print_board();
*/

// Your code here...
