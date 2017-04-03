"use strict"

class Dice {
  constructor() {

  }
  roll(num) {
    //random index
    return Math.floor(Math.random() * num);
  }
}

export default Dice
