"use strict"

class Dice {
  constructor() {
     this.nilaiDadu=0;

  }
  roll() {
    this.nilaiDadu=Math.floor((Math.random() * 4) + 1);
    return this.nilaiDadu;
  }
}

export default Dice
