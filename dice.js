"use strict"

class Dice{
  constructor() {
  }

  roll(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default Dice
