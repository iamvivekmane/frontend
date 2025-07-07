// Magical sorting hat

let students = [
  "shubh",
  "anjali",
  "shivani",
  "shivangi",
  "annapurna",
  "shubham",
  "krishnanendu",
  "ravindranathan",
  "shivesh",
  "kaif",
  "enamuel",
];

let houses = [];

for (const student of students) {
  if (student.length < 5) {
    houses.push("Gryffindor");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("Slytherin");
  }
}
console.log(houses);
