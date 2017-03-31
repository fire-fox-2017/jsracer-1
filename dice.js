"use strict"

class Dice {
  constructor() {

  }
  roll() {
    let dice = Math.floor(Math.random()*6)+1;
    return dice;
  }
}

export default Dice
