"use strict"

class Dice {
  constructor() {
    this._roll=0;
  }
  get roll() {
    let sisi= 6;
      this._roll = Math.floor(Math.random() *sisi) + 1;
      return this._roll;
  }
}
export default Dice
