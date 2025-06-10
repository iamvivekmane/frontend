console.log("hello world");

let age = 16;

let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("are you crazy?");
} else {
  console.log("You cannot drive");
}

let a = 10;

let b = 8;

//ternary operator
let c = a > b ? a - b : b - a;

// works like same
// if (a > b) {
//   let c = a - b;
// } else {
//   let c = a - b;
// }
