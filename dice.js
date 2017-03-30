"use strict"

class Dice {
  constructor() {

  }
  roll() {
    // return number between 1 - 6
    return Math.floor(Math.random() * 6) + 1;
  }
}

export default Dice
