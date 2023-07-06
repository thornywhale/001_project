const a = NaN;
const b = 1;
let result;

if (a === null || b === null){ // якщо одне зі значень або обидва — null
  console.log('No value(s)') 

} else  if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) { // якщо одне зі значень — Infinity/-Infinity, а друге не null, або обидва — Infinity/-Infinity
  console.log('Out of limit result')

} else  if ((a > 0 && b < 0) || (a < 0 && b > 0)){ // якщо з різними знаками
  console.log(a/b)

} else  if ((a > 0 && b > 0) || (a < 0 && b < 0)){ // якщо з однаковим знаком
  console.log(a*b)

} else  if ((a === 0) && (b !== 0)){ // якщо одне зі значень — 0
  result = b
  console.log(result)
} else  if ((b === 0) && (a !== 0)){
  result = a
  console.log(result)

} else  if ((a === 0) && (b === 0)){ // якщо обидва — 0
  result = NaN;
  console.log(result)

} else  if (a === NaN || b === NaN){
  console.log('Result is not a number') // Можна обійтись без цих рядків, але чомусь не працює

} else {
  console.log('Incorrect value(s)')
  }






  const c = 32;
  if ((c > 0) && (c % 2 === 0) && (c % 4 === 0) && (c % 7 === 0)) {
    console.log('win', c)
  } else {
    console.log('lose', c)
  }

  const d = 28;
  if ((d <= 0) || (d % 2 !== 0) || (d % 4 !== 0) || (d % 7 !== 0)) {
    console.log('lose', d)
  } else {
    console.log('win', d)
  }