"use strict";

// task 1

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name is not srting");
    }
    if (name === "") {
      throw new RangeError("name is empty");
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set color(color) {
    if (typeof color !== "string") {
      throw new TypeError("color is not srting");
    }
    if (color === "") {
      throw new RangeError("name is empty");
    }
    this._color = color;
  }
  get color() {
    return this._color;
  }
  jump() {
    console.log(this._name + " is jumping");
  }
}

class SquirrelFly extends Squirrel {
  constructor(name, color, maxFlyRange) {
    super(name, color);
    this.maxFlyRange = maxFlyRange;
  }
  set maxFlyRange(maxFlyRange) {
    if (typeof maxFlyRange !== "number") {
      throw new TypeError("color is not number");
    }
    if (maxFlyRange <= 0) {
      throw new RangeError("squirrel must fly a lot");
    }
    this._maxFlyRange = maxFlyRange;
  }
  get maxFlyRange() {
    return this._maxFlyRange;
  }
  fly() {
    console.log(this._name + " is flying " + this._maxFlyRange);
  }
}

class SquirrelMagic extends SquirrelFly {
  constructor(name, color, maxFlyRange, words) {
    super(name, color, maxFlyRange);
    this.words = words;
  }
  set words(words) {
    if (Array.isArray(words) === false) {
      throw new TypeError("words is not array");
    }
    if (words.length < 1) {
      throw new RangeError("this type of squirrel must speak");
    }
    this._words = words;
  }
  get words() {
    return this._words;
  }
  speak() {
    for (let index = 0; index < this._words.length; index++) {
      console.log("Lola said: " + this._words[index]);
    }
  }
}

const DonaldCommon = new Squirrel("Donald", "red");
DonaldCommon.jump();

const BobbyUncommon = new SquirrelFly("Bobby", "brown", 250);
BobbyUncommon.jump();
BobbyUncommon.fly();

const BARKING_SPEACH = [
  "«Bark-bark!»",
  "«I`m not a dog!»",
  "«Lets speak together!»",
];
const LolaMagic = new SquirrelMagic("Lola", "white", 500, BARKING_SPEACH);
LolaMagic.jump();
LolaMagic.fly();
LolaMagic.speak();

// task 2

class Goods {
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name is not srting");
    }
    if (name === "") {
      throw new RangeError("name is empty");
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("price is not number");
    }
    if (Number.isNaN(price) || price < 0 || Number.isFinite(price) === false) {
      throw new RangeError("not a price");
    }
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set currency(currency) {
    if (typeof currency !== "string") {
      throw new TypeError("currency is not srting");
    }
    if (currency === "") {
      throw new RangeError("currency is empty");
    }
    this._currency = currency;
  }
  get currency() {
    return this._currency;
  }
  set quantity(quantity) {
    if (typeof quantity !== "number") {
      throw new TypeError("quantity is not number");
    }
    if (
      Number.isNaN(quantity) ||
      Number.isFinite(quantity) === false ||
      Number.isInteger(quantity) === false ||
      quantity < 0
    ) {
      throw new RangeError("not a quantity");
    }
    if (quantity === 0) {
      throw new RangeError("quantity must be enought big");
    }
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  getInfo() {
    console.log(
      "General info: \nGoods name: ",
      this._name,
      "\nPrice: ",
      this._price,
      this._currency,
      "\nQuantity: ",
      this._quantity,
      "x"
    );
  }
  buy() {
    console.log(
      "Your bill: ",
      "\n",
      this._name,
      this._price,
      this._currency,
      "\nx 1",
      "\n   ----------------",
      "\nTotal ammount: ",
      this._price,
      this._currency
    );
  }
  buyAll() {
    console.log(
      "Your Royal Bill: ",
      "\n",
      this._name,
      this._price,
      this._currency,
      "\nx",
      this._quantity,
      "\n   ----------------",
      "\nTotal ammount: ",
      this._price * this._quantity,
      this._currency
    );
  }
}

class PhysicalGoods extends Goods {
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
  set weight(weight) {
    if (typeof weight !== "number") {
      throw new TypeError("weight is not number");
    }
    if (
      Number.isNaN(weight) ||
      Number.isFinite(weight) === false ||
      weight < 0
    ) {
      throw new RangeError("not a weight");
    }
    this._weight = weight;
  }
  get weight() {
    return this._weight;
  }
}

class VirtualGoods extends Goods {
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
  set memorySize(memorySize) {
    if (typeof memorySize !== "number") {
      throw new TypeError("memory size is not number");
    }
    if (
      Number.isNaN(memorySize) ||
      Number.isFinite(memorySize) === false ||
      Number.isInteger(memorySize) === false ||
      memorySize < 0
    ) {
      throw new RangeError("not a memory size");
    }
    this._memorySize = memorySize;
  }
  get memorySize() {
    return this._memorySize;
  }
}

try {
  const pizzaDefault = new Goods("Pizza Standart", 120, "UAH", 180);
  pizzaDefault.getInfo();
  pizzaDefault.buy();
  pizzaDefault.buyAll();

  const avocadoSalad = new PhysicalGoods(
    "Salad with avocado",
    250,
    "UAH",
    100,
    200
  );
  avocadoSalad.getInfo();
  avocadoSalad.buy();
  avocadoSalad.buyAll();

  const durianDefault = new VirtualGoods("Durian fruit", 60, "USD", 50, 50);
  durianDefault.getInfo();
  durianDefault.buy();
  durianDefault.buyAll();
} catch (error) {
  alert("ERROR!");
}