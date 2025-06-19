// let obj = {
//   a: 1,
//   b: "Jack",
// };

// console.log("obj");

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log(name, "is created");
  }
  eats() {
    console.log("I am eating");
  }
  jumps() {
    console.log("I am jumping");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log(name, "is created he is king");
  }

  eats() {
    super.eats();
    console.log("I am eating others");
  }
}
let a = new Animal("Bunny");
console.log(a);
let l = new Lion("Sher");
console.log(l);

//  It returns true if the object is the instance of the class we passed
console.log(l instanceof Lion);
