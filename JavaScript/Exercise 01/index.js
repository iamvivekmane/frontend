//Faulty calucaltor
//It performs correct operation only 10% of the time

let number1;
let number2;

function addition(number1, number2) {
  let random = Math.random();
  if (random < 0.1) {
    return number1 - number2;
  } else {
    return number1 + number2;
  }
}

function multiplication(number1, number2) {
  let random = Math.random();
  if (random < 0.1) {
    return number1 + number2;
  } else {
    return number1 * number2;
  }
}

function subtraction(number1, number2) {
  let random = Math.random();
  if (random < 0.1) {
    return number1 / number2;
  } else {
    return number1 - number2;
  }
}

function division(number1, number2) {
  let random = Math.random();
  if (random < 0.1) {
    return number1 ** number2;
  } else {
    return number1 / number2;
  }
}

console.log(addition(10, 1));
console.log(multiplication(10, 1));
console.log(subtraction(10, 1));
console.log(division(10, 1));

console.log(Math.random());
