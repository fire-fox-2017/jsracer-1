"use strict"

class Dice {
  constructor() {
    this.num = 0;
  }

  roll() "use strict"

class Dice {
  constructor() {
    this.num = 0;
  }

  static roll() {
    let getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNum;
    }
    this.num = getRandomInt(1, 6);
    return this.num;
  }
}

export default Dice{

  }
}

export default Dice
