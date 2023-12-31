const a = NaN;
const b = 1;
let result;

if (a === null || b === null) {
  // якщо одне зі значень або обидва — null
  console.log("No value(s)");
} else if (
  a === Infinity ||
  a === -Infinity ||
  b === Infinity ||
  b === -Infinity
) {
  // якщо одне зі значень — Infinity/-Infinity, а друге не null, або обидва — Infinity/-Infinity
  console.log("Out of limit result");
} else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
  // якщо з різними знаками
  console.log(a / b);
} else if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
  // якщо з однаковим знаком
  console.log(a * b);
} else if (a === 0 && b !== 0) {
  // якщо одне зі значень — 0
  result = b;
  console.log(result);
} else if (b === 0 && a !== 0) {
  result = a;
  console.log(result);
} else if (a === 0 && b === 0) {
  // якщо обидва — 0
  result = NaN;
  console.log(result);
} else if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Result is not a number"); // Можна обійтись без цих рядків, але чомусь не працює
} else {
  console.log("Incorrect value(s)");
}

const c = 32;
if (c > 0 && c % 2 === 0 && c % 4 === 0 && c % 7 === 0) {
  console.log("win", c);
} else {
  console.log("lose", c);
}

const d = 28;
if (d <= 0 || d % 2 !== 0 || d % 4 !== 0 || d % 7 !== 0) {
  console.log("lose", d);
} else {
  console.log("win", d);
}

const incomeValue = prompt("enter number");
/**
 * @param {number} incomeValue
 * @returns {string}
 */
const evenOddCheckFunction = function (incomeValue) {
  if (incomeValue === null || incomeValue === "") {
    return "no value";
  }
  if (Number.isNaN(Number(incomeValue))) {
    return "not a number";
  }
  if (Number.isInteger(Number(incomeValue)) === false) {
    return "not an integer";
  }
  if (incomeValue % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(evenOddCheckFunction(incomeValue));

const inputData1 = "100";
const inputData2 = 100;
/**
 *
 * @param {*} inputData1
 * @param {*} inputData2
 * @returns {*}
 */
const compareFunction = function (inputData1, inputData2) {
  if (typeof inputData1 === typeof inputData2) {
    if (inputData1 > inputData2) {
      return inputData1;
    }
    if (inputData1 < inputData2) {
      return inputData2;
    }
  }
  return null;
};
console.log(compareFunction(inputData1, inputData2));

const dayNumber = Number(
  prompt(
    "choose a day number:\n1.mon\n3.tue\n1.wed\n4.thu\n5.fri\n6.sat\n7.sun"
  )
);
if (
  dayNumber === 1 ||
  dayNumber === 2 ||
  dayNumber === 3 ||
  dayNumber === 4 ||
  dayNumber === 5
) {
  console.log("workday");
} else if (dayNumber === 6 || dayNumber === 7) {
  console.log("weekend");
} else {
  console.log("not a day number");
}

const monthNumber = prompt("choose a month number");
switch (monthNumber) {
  case "1":
  case "2":
  case "12":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("autumn");
    break;
  default:
    console.log("not a month number");
    break;
}

// Task 1

const userAgeInput = prompt("enter age:");
const userAgeNumber = Number(userAgeInput);
if (
  userAgeInput === null ||
  userAgeInput === "" ||
  Number.isNaN(userAgeNumber) ||
  Number.isInteger(userAgeNumber) === false ||
  userAgeNumber < 0
) {
  console.log("error");
} else if (userAgeNumber >= 0 && userAgeNumber <= 1) {
  // Щоб не використовувати else if всюди, треба залишити його в цьому рядку, бо при приведенні userAgeInput зі значенням null або "" до Number в консоль лізе не тільки "error", а і "baby". Або ж як варіант можна використовувати всюди else if та замінити останню умову на else, як показано в закоментованій частині нижче
  console.log("baby");
}
if (userAgeNumber >= 2 && userAgeNumber <= 5) {
  console.log("kinder");
}
if (userAgeNumber >= 6 && userAgeNumber <= 11) {
  console.log("child");
}
if (userAgeNumber >= 12 && userAgeNumber <= 17) {
  console.log("teenager");
}
if (userAgeNumber >= 18 && userAgeNumber <= 64) {
  console.log("adult");
}
if (userAgeNumber >= 65 && userAgeNumber <= 99) {
  console.log("old");
}
if (userAgeNumber >= 100 && userAgeNumber <= 150) {
  console.log("retired");
}
if (userAgeNumber > 150) {
  console.log("not a human");
}

// const userAgeInput = prompt("enter age:");
// const userAgeNumber = Number(userAgeInput);
// if (
//   userAgeInput === null ||
//   userAgeInput === "" ||
//   Number.isNaN(userAgeNumber) ||
//   Number.isInteger(userAgeNumber) === false ||
//   userAgeNumber < 0
// ) {
//   console.log("error");
// }  else if (userAgeNumber >= 0 && userAgeNumber <= 1) {
//   console.log("baby");
// }  else if (userAgeNumber >= 2 && userAgeNumber <= 5) {
//   console.log("kinder");
// }  else if (userAgeNumber >= 6 && userAgeNumber <= 11) {
//   console.log("child");
// }  else if (userAgeNumber >= 12 && userAgeNumber <= 17) {
//   console.log("teenager");
// }  else if (userAgeNumber >= 18 && userAgeNumber <= 64) {
//   console.log("adult");
// }  else if (userAgeNumber >= 65 && userAgeNumber <= 99) {
//   console.log("old");
// }  else if (userAgeNumber >= 100 && userAgeNumber <= 150) {
//   console.log("retired");
// }  else {
//   console.log('not a human')
// }

// Task 2

// Variant 1

const number01 = 0.5;
const number02 = 10;
const sign01 = "/";
/**
 * @param {number} number01
 * @param {number} number02
 * @param {string} sign01
 * @returns {number | NaN}
 */
const calcFunction01 = function (number01, number02, sign01) {
  if (
    number01 === null ||
    number01 === "" ||
    Number.isNaN(number01) ||
    number02 === null ||
    number02 === "" ||
    number02 === 0 ||
    Number.isNaN(number02) ||
    (sign01 !== "+" && sign01 !== "-" && sign01 !== "*" && sign01 !== "/")
  ) {
    return NaN;
  }
  if (sign01 === "+") {
    return number01 + number02;
  }
  if (sign01 === "-") {
    return number01 - number02;
  }
  if (sign01 === "*") {
    return number01 * number02;
  }
  if (sign01 === "/") {
    return number01 / number02;
  }
};
console.log(calcFunction01(number01, number02, sign01));

// Variant 2

const number03 = 0.25;
const number04 = 10;
const sign02 = "-";
/**
 * @param {number} number03
 * @param {number} number04
 * @param {string} sign02
 * @returns {number | NaN}
 */
const calcFunction02 = function (number03, number04, sign02) {
  const actionFunction = function () {
    switch (sign02) {
      case "+":
        console.log(number03 + number04);
        break;
      case "-":
        console.log(number03 - number04);
        break;
      case "*":
        console.log(number03 * number04);
        break;
      case "/":
        console.log(number03 / number04);
        break;
      default:
        console.log(NaN);
        break;
    }
  };
  return number03 === null ||
    number03 === "" ||
    Number.isNaN(number03) ||
    number04 === null ||
    number04 === "" ||
    number04 === 0 ||
    Number.isNaN(number04) ||
    (sign02 !== "+" && sign02 !== "-" && sign02 !== "*" && sign02 !== "/")
    ? NaN
    : actionFunction();
};
calcFunction02(number03, number04, sign02);

const PASSWORD = "qwerty";
const MAX_ATTEMPT = 3;
for (i = 0; i > MAX_ATTEMPT; i++) {
  const userInputPassword = prompt("enter your password:");
  if (PASSWORD === userInputPassword) {
    alert("welcome");
    break;
  }
  if (i + 1 === MAX_ATTEMPT) {
    alert("run out of tries :(");
    break;
  }
  alert("available tries: " + (i + 1));
}

const MAX_ATTEMPT_1 = 5;
let count = 0;
while (true) {
  let userInput = prompt("enter number:");
  count++;
  if (userInput >= 1 && userInput <= 50 && userInput % 7 === 0) {
    alert("respect+");
    break;
  }
  if (MAX_ATTEMPT_1 === count) {
    alert("run out of tries :(");
    break;
  }
  alert("try again");
}

const MAX_ATTEMPT_2 = 5;
for (let count = 1; count <= MAX_ATTEMPT_2; count++) {
  const userInput = prompt("enter number:");
  if (userInput >= 1 && userInput <= 50 && userInput % 7 === 0) {
    alert("welcome");
    break;
  }
  alert("try again");
}

// Task 1

/**
 *
 * @param {number} height
 * @param {number} width
 * @returns {number | null}
 */
const getRectangleArea = function (height, width) {
  return height > 0 && width > 0 ? height * width : null;
};
console.log("Task 1:", getRectangleArea(Infinity, 3));

// Task 2

/**
 *
 * @param {number} angle1
 * @param {number} angle2
 * @param {number} angle3
 * @returns {string}
 */
const getTriangleType = function (angle1, angle2, angle3) {
  if (
    angle1 + angle2 + angle3 === 180 &&
    angle1 > 0 &&
    angle2 > 0 &&
    angle3 > 0
  ) {
    if (angle1 === angle2 && angle2 === angle3) {
      return "equiangular triangle";
    }
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      return "right triangle";
    }
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      return "acute triangle";
    }
    return "obtuse triangle";
  }
  return "not a triangle";
};
console.log("Task 2:", getTriangleType(30, 65, 85));

// Task 3

const getrCircleLength = function (diameter, PI = Math.PI) {
  return diameter > 0 ? diameter * PI : null;
};
console.log("Task 3:", getrCircleLength(0.1));

// Task 4

const getCylinderVolume = function (diameter, height, PI = Math.PI) {
  return diameter > 0 && height > 0
    ? PI * ((diameter / 2) * (diameter / 2)) * height
    : null;
};
console.log("Task 4:", getCylinderVolume(2, 10));

// Task 5

const getDiapason = function (first, last, divisor = 5) {
  if (last < first) {
    console.log("diapason is required");
  }
  for (let index = first; index <= last; index++) {
    if (index % divisor === 0) {
      console.log(index);
    } else {
      console.log("index % divisor !== 0");
    }
  }
};
console.log("Task 5:");
getDiapason(-10, 10);

// Task 6

const getSumOddNumbersFrom1To = function (to) {
  let sum = 0;
  for (let index = 1; index <= to; index++) {
    if (index % 2 !== 0) {
      sum += index;
    }
  }
  return sum;
};
console.log("Task 6:", getSumOddNumbersFrom1To(5));

// Task 7

const getFactorial = function (number) {
  if (Number.isInteger(number) === false) {
    return null;
  }
  if (number < 0) {
    return null;
  }
  if (number === 0) {
    return 1n;
  }
  let result = 1n;
  for (let index = 1n; index <= number; index++) {
    result *= index;
  }
  return result;
};
console.log("Task 7:", getFactorial(100));

// Task 8

function getRandomInteger(min, max) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  );
}
const SECRET_NUMBER = getRandomInteger();
const tryToGuessNumber = function (min, max) {
  let amountAttempts = 0;
  while (true) {
    const userInput = prompt("guess the seeeeecret nuuuumber!");
    const userInputNumber = Number(userInput);
    if (
      userInputNumber < min ||
      userInputNumber > max ||
      userInputNumber === null ||
      userInputNumber === "" ||
      Number.isNaN(userInputNumber) ||
      Number.isInteger(userInputNumber) === false
    ) {
      alert("You may try a number from 1 to 100");
    } else if (userInputNumber === SECRET_NUMBER) {
      alert(`CONGRATULATIONS!!! You tried ${amountAttempts} times`);
      break;
    } else if (userInputNumber < SECRET_NUMBER) {
      amountAttempts++;
      alert(`try larger, you tried ${amountAttempts} times`);
    } else if (userInputNumber > SECRET_NUMBER) {
      amountAttempts++;
      alert(`try smaller, you tried ${amountAttempts} times`);
    }
  }
  return SECRET_NUMBER;
};
console.log("Task 8: Secret number this time was", tryToGuessNumber(1, 100));

const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

const firstCat = {
  name: "Ray",
  isMale: true,
  age: 4,
  talk: function () {
    return "meow";
  },
};
firstCat.name = "Ray Johnson";
firstCat.isSleeping = false;
firstCat.color = "black";
console.log(firstCat);

const secondCat = {
  name: "Harry",
  age: 8,
  isMale: true,
  isSleeping: true,
  talk: function () {
    return "aaaa";
  },
};
console.log(secondCat);

function Button(content, bg_color) {
  this.content = content;
  this.backgroundColor = bg_color;
  this.clickAction = function () {
    return "disappear";
  };
}
const button12 = new Button("submit", "green");
console.log(button12);

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.userAge = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const user1 = new User("John", "Peterson", 24);
const user2 = new User("Andrew", "Johnson", 60);
const user3 = new User("Mary", "Peterson", 47);
console.log(user1, user2, user3);
console.log(user2.fullName());

function Country(name, pop, area, lang) {
  this.name = name;
  this.population = pop;
  this.area = area;
  this.language = lang;
  this.getInfo = function () {
    return `Info:
name: ${this.name}
population: ${this.population}
area: ${this.area}
language: ${this.language}`;
  };
  this.getDensity = function () {
    return this.population / this.area + " persons per km2 at " + this.name;
  };
}

const country1 = new Country("Abubu Kingdom", 40000, 250000, "abubian");
const country2 = new Country("White Islands", 40000, 250000, "aborigen");
const country3 = new Country("Rajastan", 40000, 250000, "arabic");
console.log(country1.getInfo());
console.log(country2.getDensity());

// const createFamilyObject = function (members = 3) {
//   const family = {};
//   for (let index = 0; index < members; index++) {
//     const nameMember = prompt("enter member`s name:");
//     const statusMember = prompt("enter member`s status:");
//     family[nameMember] = statusMember;
//   }
//   return family;
// };
// const userFamily = createFamilyObject();
// console.log(userFamily);
// console.log(createFamilyObject());

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// function PrototypeUser() {
//     this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//     }
// }
// User.prototype = new PrototypeUser();

// const fisrtUser = new User("John", "Black", 31);
// console.log(fisrtUser);
// console.log(fisrtUser.fullName());

function Product(name, price, quantity, sale = 0) {
  this.productName = String(name);
  this.productPrice = Number(price);
  this.productQuantity = Number(quantity);
  this.productSale = Number(sale);
}
function ProductPrototype() {
  this.showinfo = function () {
    return `
    |Загальна інформація|
    Товар: ${this.productName}
    Ціна: ${this.productPrice} UAH
    Наявна кількість: ${this.productQuantity} шт.
    Знижка: ${this.productSale} %`;
  };
  this.getSalePrice = function () {
    return (this.productPrice / 100) * (100 - this.productSale);
  };
  this.setSaleToPrice = function () {
    if (this.productSale !== 0) {
      return `Акційна ціна - ${this.getSalePrice()} UAH`;
    }
    return "Знижка відсутня";
  };
  this.buyAmountProduct = function () {
    if (this.productSale !== 0 && this.productQuantity >= 300) { // нехай 300 - достатня кількість для відвантаження
      return `Варітсть товару на складі:
      без знижки - ${this.productPrice * this.productQuantity} UAH
      зі знижкою - ${this.getSalePrice() * this.productQuantity} UAH`;
    } if (this.productQuantity >= 300){
      return `Варітсть товару на складі: ${this.productPrice * this.productQuantity} UAH`;
    }
    return null;
  };
}
Product.prototype = new ProductPrototype();

const appleGold = new Product("Яблуко Голд", 7, 12000, 30);
console.log(appleGold.showinfo());
console.log(appleGold.setSaleToPrice());
console.log(appleGold.buyAmountProduct());
const pearStandart = new Product("Груша Звичайна", 9.5, 8000, 10);
console.log(pearStandart.showinfo());
console.log(pearStandart.setSaleToPrice());
console.log(pearStandart.buyAmountProduct());
const mangoStandart = new Product("Манго Звичайне", 85, 4000);
console.log(mangoStandart.showinfo());
console.log(mangoStandart.setSaleToPrice());
console.log(mangoStandart.buyAmountProduct());
const kiwiNewZeland = new Product("Ківі Нова Зеландія", 75, 250, 20);
console.log(kiwiNewZeland.showinfo());
console.log(kiwiNewZeland.setSaleToPrice());
console.log(kiwiNewZeland.buyAmountProduct());







// const mainArray = [2, 10, 10, 2, 4, 6, 57];

// // task 1

// const checkValueInArray = function (array, number) {
//   if (Number.isNaN(number) || Array.isArray(array) === false) {
//     console.log("enter array and number!");
//   }
//   return array.includes(number);
// };
// console.log(checkValueInArray(mainArray, 6));

// task 2

// const checkTwiceValueInArray = function (array) {
//   if (Array.isArray(array) === false) {
//     console.log("enter array!");
//   }
//   if (array.length === 0) {
//     return false;
//   }
//   if (array.indexOf(el + 1) - array.indexOf(el) === 1) {
//     return true;
//   }
//   return false;
// };
// console.log(checkTwiceValueInArray(mainArray));






// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(3);
// console.log(arr1);

// arr1.splice(1, 2);
// console.log(arr1);

// arr1.splice(1, 3, "a", "b");
// console.log(arr1);





/**
 * @param {array} array
 * @returns {array}
 */
const getDuplicatesOrEmptyArray = function (array) {
  const newArray = array.concat();
  for (let index = 0; index < newArray.length; index++) {
    let checkCursor = 1;
    if (checkCursor === newArray.length) {
      index++;
      let checkCursor = 1;
    }
    if (newArray[index] === newArray[index + checkCursor]) {
      newArray.shift();
    }
    if (newArray[index] !== newArray[index + checkCursor]) {
      checkCursor++;
    }
  }
  return newArray;
};
console.log(getDuplicatesOrEmptyArray(testArray));

/**
 * @param {array} array
 * @returns {array}
 */
const getDuplicatesOrEmptyArray2 = function (array) {
  const newArray2 = [];
  array.forEach(element, index => {
    array.includes(element) && array.indexOf(element) !== index
      ? newArray2.push(element)
      : array.shift();
  });
  return newArray2;
};
console.log(getDuplicatesOrEmptyArray2(testArray));





testArray = [1, 2, 3, 1, 5, 6, 1, 2, 5];

/**
 * @param {Array} array
 * @returns {Array}
 */
const getDuplicatesOrEmptyArray3 = function (array) {
  const newArray = [];
  array.forEach((element) => {
    if (newArray.includes(element)) {
      return;
    }
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};
console.log(getDuplicatesOrEmptyArray3(testArray));

const sumSimple = (...args) => {
  let sum = 0;
  // for (let index = 0; index < args.length; index++) {
  //   sum = args[index];
  // }
  args.forEach((arg) => {
    sum += arg;
  });
  return sum;
};
const result = sumSimple(1, 2, 3, 1);
console.log(result);

const sumWithReduce = (...args) => args.reduce((sum, arg) => sum + arg, 0);
const result2 = sumWithReduce(1, 6, 8, 8);
console.log(result2);




"use strict";

/**
 *
 * @param {number | BigInt} number
 * @returns {Error | number | BigInt}
 */
function getFactorialRecursion(number) {
  if (typeof number !== "number" && typeof number !== "bigint") {
    throw new TypeError("Not a number");
  }
  if (typeof number === "number") {
    if (
      Number.isInteger(Number(number)) === false ||
      Number.isFinite(number) === false ||
      Number.isNaN(number) ||
      number < 0
    ) {
      throw new RangeError(
        "Incorrect value: parameter must be integer, finite and positive"
      );
    }
    if (number === 0 || number === 1) {
      return 1;
    }
    if (number > 21) {
      return BigInt(number) * getFactorialRecursion(BigInt(number) - 1n);
    }
    return number * getFactorialRecursion(number - 1);
  }
  if (number === 0n || number === 1n) {
    return 1n;
  } else {
    return BigInt(number) * getFactorialRecursion(BigInt(number) - 1n);
  }
}

try {
  console.log(getFactorialRecursion(10477));
} catch (error) {
  console.log("ERROR:", error);
  if (error instanceof RangeError) {
    alert("incorrect range of value");
  } else if (error instanceof TypeError) {
    alert("incorrect type of value or type remix");
  } else {
    alert("unknown error");
  }
} finally {
  console.log("finally string");
}






"use strict";
const testString = `rhgbvoihgo4gC  J%^%^CU%Ct34V
btgmhym,jyUY$i5h  rtjjtrjy4390tcy4934cto3954vyyg
fgnfjytdjmdsthtr4554h4h4ty5  45rjjrjdtfjttrjrrsr
059u734 60bvn4tc45U%^%^HU43tmJ%$O% $HO%$J%HG%JH%
$eo be ds'a hep;hBTR  NGDNFSM$%FKOOOOOOOOO@$!.,/`;

// variant 1

/**
 *
 * @param {String} string
 * @param {String} sep
 * @returns
 */
const countVowelInString = (string, sep = "") => {
  const all = string.split(sep);
  const consonants = all.filter(
    (letter) =>
      letter !== "a" &&
      letter !== "A" &&
      letter !== "e" &&
      letter !== "E" &&
      letter !== "i" &&
      letter !== "I" &&
      letter !== "o" &&
      letter !== "O" &&
      letter !== "u" &&
      letter !== "U" &&
      letter !== "y" &&
      letter !== "Y"
  );
  return all.length - consonants.length;
};

//variant 2

/**
 *
 * @param {String} string
 * @param {String} sep
 * @param {Array} wanted
 * @returns
 */
const countVowelInString2 = (
  string,
  sep = "",
  wanted = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"]
) => {
  const all = string.split(sep);
  const consonants = all.filter((letter) => !wanted.includes(letter));
  return all.length - consonants.length;
};

try {
  console.log(
    "First variant. Vowels in string: " + countVowelInString(testString)
  );
  console.log(
    "Second variant. Vowels in string: " + countVowelInString2(testString)
  );
} catch (error) {
  if (error instanceof TypeError) {
    alert("ONLY STRING!!!");
  } else {
    alert("unknown error, sorry");
  }
}


// stack example

class Stack {
  constructor(maxSize, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const arg of args) {
      this.push(arg);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(arg) {
    if (this._size >= this._maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = arg;
    return ++this._size;
  }
  peek() {
    return this[`_${this._size - 1}`];
  }
  pop() {
    if (this._size === 0) {
      return;
    }
    const lastElement = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastElement;
  }
}
const stack01 = new Stack(5, 20, 61, 44, 12);
console.log(stack01);

const options = {
  brackets: {
    "(": ")",
    "{": "}",
    "[": "]",
  },
  lapky: {
    "`": "`",
    "'": "'",
  },
  isStrict: false,
};
/**
 *
 * @param {string} str
 * @param {object} options
 * @param {object} options.brackets
 * @returns {boolean}
 */
const checkSequence = (str, options) => {
  const stack = new Stack(str.length);
  const closedBrackets = Object.values(options.brackets);
  for (const symbol of str) {
    if (options.brackets[symbol]) {
      stack.push(symbol);
      continue;
    }
    if (stack.isEmpty) {
      return false;
    }
    const lastSymbolInStack = stack.peek();
    const correctBracket = options.brackets[lastSymbolInStack];
    if (symbol === correctBracket) {
      stack.pop();
    } else if (closedBrackets.includes(symbol)) {
      return false;
    }
  }
  return stack.isEmpty;
};
console.log(checkSequence(")()()", options));


"use strict";

class IteratorLinkedList {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem =
      this.currentItem === null ? this.list.head : this.currentItem.next;
    return {
      value: this.currentItem ? this.currentItem : undefined,
      done: this.currentItem === null,
    };
  }
}

class ListItem {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const arg of args) {
      this.push(arg);
    }
  }
  [Symbol.iterator]() {
    return new IteratorLinkedList(this);
  }

  push(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.prev = this.tail;
      this.tail.next = item;
      this.tail = item;
    }
    return ++this.length;
  }

  unshift(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head.prev = item;
      this.head = item;
    }
    return ++this.length;
  }

  // add(arg){
  //   const item = new ListItem(arg);
  //   if (this.length === 0) {
  //     this.head = item;
  //     this.tail = item;
  //   } else {
  //   }
  // }

  // pop() {
  //   const popped = this.tail;
  //   if (this.length === 0) {
  //     throw new Error("empty list");
  //   } else {

  //     --this.length;
  //     return popped;
  //   }
  // }

  // shift(){}

  // delete(item) {
  //   if (this.length === 0) {
  //     throw new Error("empty list");
  //   }
  //   for (const element of this) {
  //     if (element.data === item) {

  //       --this.length
  //       console.log("deleted:\n", element);
  //       return element;
  //     }
  //     return false;
  //   }
  // }

  search(key) {
    for (const item of this) {
      if (item.data === key) return item;
    }
    return null;
  }
}

const list01 = new LinkedList(1, 1.5, 2);
console.log(...list01);
console.log(list01);

list01.unshift(0.5);
console.log(...list01);
console.log(list01);

// list01.pop();
// console.log(...list01);
// console.log(list01);

// queue example

class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const arg of args) {
      this.enQueue(arg);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  enQueue(value) {
    this[`_${this._head}`] = value;
    this._tail++;
    return this.size;
  }
  deQueue() {
    const deletedItem = this[`_${this._head}`];
    delete this[`_${this._head}`];
    this._head++;
    return deletedItem;
  }
  peek() {
    return this[`_${this._head}`];
  }
  [Symbol.iterator]() {
    return new IteratorQueue(this);
  }
}

const queue1 = new Queue("one", "two", "three", "four", "five", "six");
const queue2 = new Queue(1, 2, 3);
const mergeQueue = (queue1, queue2) => {
  const newQueue = new Queue();
  //доки (while) у нас є елементи в будь якій черзі
  while (queue1.size || queue2.size) {
    //якщо є елементи у першій черзі -
    if (queue1.size) {
      //забрати елемент з голови (deQueue) і додати до кінця нової черги (enQueue)
      newQueue.enQueue(queue1.deQueue());
    }
    //якщо є елементи у другій черзі -
    if (queue2.size) {
      //забрати елемент з голови (deQueue) і додати до кінця нової черги (enQueue)
      newQueue.enQueue(queue2.deQueue());
    }
  }
  return newQueue;
};
console.log(mergeQueue(queue1, queue2));

class IteratorQueue {
  constructor(queue) {
    this.queue = queue;
    this.index = this.queue._head;
  }
  next() {
    if (this.index < this.queue._tail) {
      const item = this.queue[`_${this.index}`];
      this.index++;
      return { value: item, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

// Queue Iterator checkup

for (const item of queue1) {
  console.log(item);
}
console.log(...queue2);

// Map example

const obj01 = {
  1: 35,
  6: "hg",
  ht4hj: 6976,
};
const arr1 = [4, 8, "123"];
const map1 = new Map([
  [10, "htr"],
  [64, 43],
]);
const map2 = new Map();
map2.set(1, 1);
map2.set(45534, "jyj54");
map2.set([35], []);
map2.set(arr1, obj01);
map2.set(obj01, undefined);
map2.set(undefined, arr1);
map2.delete();
map2.delete(45534);
console.log(map1);
console.log(map2);

// Set example
