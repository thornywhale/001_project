const MAX_ATTEMPT_1 = 5;
let count = 0;
while (true) {
  let userInput1 = prompt("enter number:");
  count++;
  if (userInput1 >= 1 && userInput1 <= 50 && userInput1 % 7 === 0) {
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
  const userInput2 = prompt('enter number:');
  if (userInput2 >= 1 && userInput2 <= 50 && userInput2 % 7 === 0) {
    alert('welcome');
    break;
  }
  alert('try again');
}
