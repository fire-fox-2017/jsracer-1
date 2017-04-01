"use strict"

const { Dice } = require('./dice.js')

class JSRacer {
  constructor(players, length) {
    this.players = this.setObjectPlayer(players);
    this.length = length;
    this.turn = 0;
    this.max = 3;
    this.snake = this.set_snake();
    this.ladder = this.set_ladder();
    this.finished = false;
    this.message = "";
  }
  get_random(max, min) {
    return Math.floor(Math.random() * (max - min - 1) + min);
  }
  setObjectPlayer(players) {
    let array = [];
    for (let i = 0; i < players.length; i++) {
      let object = {
        name: players[i],
        position: 0
      }
      array.push(object);
    }
    return array;
  }
  set_snake() {
    let snake = [];
    snake.push(this.get_random(this.length - 2, this.max));
    snake.push(this.get_random(snake[0], 1));
    return snake;
  }
  set_ladder() {
    let ladder = [];
    let position = this.get_random(this.length - this.max - 1, 1);
    if (position == this.snake[0]) {
      position++;
    }
    ladder.push(position);
    ladder.push(this.get_random(this.length -ladder[0] -1, 1));
    return ladder;
  }
  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      this.print_line(this.players[i].name, this.players[i].position);
    }
  }
  print_line(player, pos) {
    let line = [];
    for (let i = 0; i < this.length; i++) {
      if (i == pos) {
        line.push(player);
      } else if (i == this.snake[0]) {
        line.push("~");
      } else if (i == this.ladder[0]) {
        line.push("#");
      } else {
        line.push(" ");
      }
    }
    console.log(line.join("|"));
  }
  advanced_player() {
    let dice = new Dice();
    let step = dice.roll();
    // Checking to avoid stepping over the finish line
    if (this.players[this.turn].position + step >= this.length - 1) {
      this.players[this.turn].position = this.length - 1;
    } else {
      this.players[this.turn].position += step;
    }
    // Checking if there is a trap or a gift
    if (this.players[this.turn].position == this.snake[0]) {
      this.players[this.turn].position -= this.snake[1];
      this.message = "Player " + this.players[this.turn].name + " stepped into a snake, move backwards " + this.snake[1] + " steps.";
    } else if (this.players[this.turn].position == this.ladder[0]) {
      this.players[this.turn].position += this.ladder[1];
      this.message = "Player " + this.players[this.turn].name + " get a ladder, move forwards "+ this.ladder[1] + " steps.";
    }
    console.log(this.message);
    // Change state to finished if a player reach the finish line
    if (this.players[this.turn].position == this.length - 1) {
      this.finish(this.turn);
    }
    // Change turns
    this.turn = (this.turn + 1) % this.players.length;

    return this;
  }
  finish(turn) {
    this.winner(turn);
    this.finished = true;
  }
  winner(turn) {
    console.log(`Player '${this.players[turn].name}' is the winner`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = {
  JSRacer
}
