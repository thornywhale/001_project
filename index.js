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

const tryToGuessNumber = function (min, max) {
  function getRandomInteger(min, max) {
    return Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
    );
  }
  const SECRET_NUMBER = getRandomInteger(min, max);
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