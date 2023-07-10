const evenOddCheckFunction = function () {
  incomeValue = prompt("enter number");
  if (incomeValue === null || incomeValue === "") {
    return "no value";
  } else {
    if (Number.isNaN(Number(incomeValue))) {
      return "not a number";
    } else if (incomeValue % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
};
console.log(evenOddCheckFunction());


const compareFunction = function(inputData1, inputData2){
  if (typeof(inputData1) === typeof(inputData2)) {
      if (inputData1>inputData2) {
        return inputData1;
      } else if (inputData1<inputData2){
        return inputData2;
      } else {
        return null;
      }
  } else {
    return null;
  }
}
console.log(compareFunction('text', -70));