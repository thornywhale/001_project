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