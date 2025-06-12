function nice(name) {
  console.log(name + " is nice");
  console.log(name + " is good");
  console.log(name + " is well");
  console.log(name + " is too good");
}

function sum(a, b, c = 3) {
  //   console.log(a + b);
  return a + b + c;
}
//Here c is the default parameter

// console.log("Jonh is nice");
// console.log("Jonh is good");
// console.log("Jonh is well");
// console.log("Jonh is too good");

// nice("ron");
// nice("rock");

sum(3, 7);

let result1 = sum(3, 5);
let result2 = sum(3, 4);
let result3 = sum(3, 2);
let result4 = sum(3, 1, 9);

console.log("The result is " + result1);
console.log("The result is " + result2);
console.log("The result is " + result3);
console.log("The result is " + result4);

//Arrow function
const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(2);
