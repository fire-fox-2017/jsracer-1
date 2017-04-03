"use strict"

class Dice {
  constructor() {

  }
  roll() {
    //random 1-5
    return Math.floor(Math.random() * 5)+1;
  }
}

export default Dice
