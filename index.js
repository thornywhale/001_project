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
  console.log(getFactorialRecursion(10476));
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