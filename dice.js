"use strict"

class Dice {
  constructor() {
    this.num = 0;
  }
<<<<<<< HEAD
  roll() "use strict"

class Dice {
  constructor() {
    this.num = 0;
  }
=======
>>>>>>> e31e14424c8aa1213dc7939bcdbd72a757a53e00

  static roll() {
    let getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNum;
    }
    this.num = getRandomInt(1, 6);
    return this.num;
<<<<<<< HEAD
  }
}

export default Dice{

=======
>>>>>>> e31e14424c8aa1213dc7939bcdbd72a757a53e00
  }
}

export default Dice
