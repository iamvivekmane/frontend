// function factorial_loop(number) {
//   let factorial = 1;
//   for (let i = 1; i < number; i++) {
//     factorial = factorial + factorial * i;
//   }
//   console.log(factorial);
// }
// factorial_loop(5);

function factorial_reduce(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    arr[i] = i;
  }

  let temp = arr.reduce(factorial_loop);
  console.log(temp);

  function factorial_loop() {
    let fact = 1;
    for (let i = 1; i < number; i++) {
      fact = fact + fact * i;
    }
    return fact;
  }
}
factorial_reduce(5);
