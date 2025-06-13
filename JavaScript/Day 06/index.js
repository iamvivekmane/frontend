console.log("Strings");
let a = "hello";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);

let real_name = "vivek";
let friend = "rohan";
console.log(
  "His real_name is " + real_name + " and his friends real_name is " + friend
);

// It is called template literals
console.log(
  `His real_name is ${real_name} and his friends real_name is ${friend}`
);

let b = "random";
console.log(b.toUpperCase());

//This is property
console.log(b.length);

//This is a function
console.log(b.toLowerCase());

console.log(b.slice(1, 5));

console.log(b.slice(1));

let dialogue = "hello handsome";

let new_dialogue = dialogue.replace("handsome", "bro");

console.log(new_dialogue);

console.log(b.concat(a, "hiii"));

//It shows that the strings are immutable, cannot change the string but you can make a new string from it.
console.log(b);
