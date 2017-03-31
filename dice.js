"use strict"

class Dice {
  constructor(dice) {
    this.dice =dice
  }
  roll() {
    let rollDice = Math.floor((Math.random()*6)+1)
    return rollDice
  }
}

let dice = new Dice()
console.log(dice.roll())
export default Dice
