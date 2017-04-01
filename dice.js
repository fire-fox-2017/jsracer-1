"use strict"

class Dice {
  constructor() {
    this._hasilDadu = 0;

  }
  roll() {
    this._hasilDadu = Math.floor((Math.random() * 6) + 1);
    return this._hasilDadu;
  }
}

export default Dice
