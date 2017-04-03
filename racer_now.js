"use strict"

class Dice {
  constructor() {

  }
  roll() {
    // return number between 1 - 6
    return Math.floor(Math.random() * 6) + 1;
  }
}

class JSRacer {
  constructor(players, length) {
    this._players = players;
    this._length = length;

    // need to have players position
    // initialize the position to 0
    this._positions = new Object();
    for (let p = 0 ; p < this._players.length ; p++) {
      this._positions[this._players[p]] = 0;
    }

    this._dice = new Dice();
  }
  print_board() {
    for (let i = 0 ; i < this._players.length ; i++) {
      // let track = '';
      // for (let t = 0 ; t <= this._length ; t++) {
      //     if (this._positions[this._players[i]] == t)
      //       track += ` ${this._players[i]} `;
      //     track += "|   "
      //
      // }
      // console.log(track);
      this.print_line(this._players[i], this._positions[this._players[i]]);
    }
  }
  print_line(player, pos) {
    // print each player
    let track = '';
    for (let t = 0 ; t < this._length ; t++) {
        if (pos == t)
          track += ` ${player} |`;
        track += "   |";
    }
    console.log(track);
  }
  advanced_player(player) {
    // increase player position using dice
    this._positions[player] += this._dice.roll();
    console.log(`${player} ${this._positions[player]}`);
  }
  finished() {
    // return boolean?
    return (Object.keys(this._positions).find(key => this._positions[key] >= this._length)) != null ? true : false;
  }
  winner() {
    // print the winner?
    let winner = Object.keys(this._positions).find(key => this._positions[key] >= this._length);
    if ( winner != null)
      console.log(`Player '${winner}' is the Winner!`);
    else
      console.log(`No Winner yet.`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

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
while(!race.finished()){
  race.reset_board();
  race.print_board();

  // move players
  for (let i = 0 ; i < players.length ; i++) {
      race.advanced_player(players[i]);
  }

  sleep(500);

}
race.winner();
