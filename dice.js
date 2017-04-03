"use strict"

class Dice {
  constructor() {
  }
  roll() {
    // Min 1 , Max 6,
    return Math.ceil(Math.random()*6);
  }
}

export default Dice
