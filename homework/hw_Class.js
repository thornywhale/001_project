class Worker {
  constructor(name, surname, moneyPerDay, workDaysEnded) {
    this.name = name;
    this.surname = surname;
    this.moneyPerDay = moneyPerDay;
    this.workDaysEnded = workDaysEnded;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name is not a srting");
    }
    if (name === "") {
      throw new RangeError("name is empty");
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set surname(surname) {
    if (typeof surname !== "string") {
      throw new TypeError("surname is not a srting");
    }
    if (surname === "") {
      throw new RangeError("surname is empty");
    }
    this._surname = surname;
  }
  get surname() {
    return this._surname;
  }
  set moneyPerDay(moneyPerDay) {
    if (typeof moneyPerDay !== "number") {
      throw new TypeError("salary for a day is not a number");
    }
    if (moneyPerDay < 0) {
      throw new RangeError("salary is what you give, not what you get");
    }
    if (Number.isNaN(moneyPerDay) || moneyPerDay === Number.POSITIVE_INFINITY) {
      throw new RangeError("not a salary");
    }
    this._moneyPerDay = moneyPerDay;
  }
  get moneyPerDay() {
    return this._moneyPerDay;
  }
  set workDaysEnded(workDaysEnded) {
    if (typeof workDaysEnded !== "number") {
      throw new TypeError("ended days quantity is not a number");
    }
    if (
      Number.isInteger(workDaysEnded) === false ||
      workDaysEnded < 0 ||
      workDaysEnded > 31
    ) {
      throw new RangeError(
        "ended days quantity must be positive integer from 0 to 31"
      );
    }
    this._workDaysEnded = workDaysEnded;
  }
  get workDaysEnded() {
    return this._workDaysEnded;
  }
  getSalary() {
    return this.workDaysEnded * this.moneyPerDay;
  }
  static workersAmount = 12;
  static createTestWorker() {
    return new Worker("name", "surname", 0, 0);
  }
}
const worker01 = new Worker("Jack", "Jackson", 2000, 18);
const testWorker = Worker.createTestWorker();
console.log(worker01);
console.log(worker01.getSalary());
console.log(testWorker);

class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from is not a number");
    }
    if (
      // якщо передати undefined - присвоїться значення за замовчуванням
      Number.isNaN(from) ||
      from > this._to ||
      from === Number.NEGATIVE_INFINITY
    ) {
      throw new RangeError("from must be reachable and smaller than to");
    }
    this._from = from;
  }
  get from() {
    return this._from;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("to is not a number");
    }
    if (
      // якщо передати undefined - присвоїться значення за замовчуванням
      Number.isNaN(to) ||
      to < this._from ||
      to === Number.POSITIVE_INFINITY
    ) {
      throw new RangeError("to must be reachable and larger than from");
    }
    this._to = to;
  }
  get to() {
    return this._to;
  }
  getRange() {
    return [this.from, this.to];
  }
  validate(number) {
    if (number >= this.from && number <= this.to) {
      return true;
    }
    return false;
  }
}
const validator01 = new RangeValidator();
console.log(validator01);
const validator02 = new RangeValidator(0.5);
console.log(validator02);
console.log(validator02.getRange());
console.log(validator02.validate(-10));
const validator03 = new RangeValidator(-40.8, 20.555);
console.log(validator03);
console.log(validator03.getRange());
console.log(validator03.validate(0));

const brokenValidator01 = new RangeValidator(0, -1.5);
const brokenValidator02 = new RangeValidator(-Infinity);