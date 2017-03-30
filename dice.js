"use strict"

class Dice {
  constructor() {
    this.values = [1, 2, 3, 4, 5, 6];
  }
  roll() {
    return Math.floor(Math.random()*this.values.length)+1;
  }
}

export default Dice
