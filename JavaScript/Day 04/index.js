console.log("Loops");
let a = 1;
//Better to do this using a loop
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);
// console.log(a + 4);

let obj = {
  name: "John",
  role: "programmer",
  company: "unknown",
};

let i = 0;
//For loop
for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

//for in loop
for (const key in obj) {
  console.log(key);
}

// for of loop
for (const c of "object") {
  console.log(c);
}

// while loop
while (i < 6) {
  console.log(i++);
}

// do-while loop
do {
  console.log(i);
  i++;
} while (i < 4);
