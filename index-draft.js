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
    return 'not an integer'
  }
  if (incomeValue % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(evenOddCheckFunction(incomeValue));


const inputData1 = '100';
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
    } if (inputData1 < inputData2) {
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
