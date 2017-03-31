"use strict"

class Dice {
  constructor() {
    this.num=0;
  }
  roll() {
    this.num= Math.floor(Math.random()*6)+1;
    return this.num
  }
}

export default Dice
