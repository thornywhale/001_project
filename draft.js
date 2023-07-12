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
}  else if (userAgeNumber >= 0 && userAgeNumber <= 1) { // Щоб не використовувати else if всюди, треба залишити його в цьому рядку, бо при приведенні userAgeInput зі значенням null або "" до Number в консоль лізе не тільки "error", а і "baby". Або ж як варіант можна використовувати всюди else if та замінити останню умову на else, як показано в закоментованій частині нижче
  console.log("baby");
}  if (userAgeNumber >= 2 && userAgeNumber <= 5) {
  console.log("kinder");
}  if (userAgeNumber >= 6 && userAgeNumber <= 11) {
  console.log("child");
}  if (userAgeNumber >= 12 && userAgeNumber <= 17) {
  console.log("teenager");
}  if (userAgeNumber >= 18 && userAgeNumber <= 64) {
  console.log("adult");
}  if (userAgeNumber >= 65 && userAgeNumber <= 99) {
  console.log("old");
}  if (userAgeNumber >= 100 && userAgeNumber <= 150) {
  console.log("retired");
}  if (userAgeNumber > 150) {
  console.log('not a human')
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