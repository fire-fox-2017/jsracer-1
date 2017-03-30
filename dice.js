"use strict"

class Dice {
  constructor(params) {
    this._diceRandom;
    this.params=params;
  }
  roll() {//random kecepatan
    let temp=Math.ceil(this.params/4);
    this._diceRandom= Math.floor((Math.random() * temp) + 1);
    return this._diceRandom;
  }
}

export default Dice
