let a = [1, 93, 5, 6, 88];

// for (let index = 0; index < a.length; index++) {
//   console.log(a[index]);
// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (const key in obj) {
//   if (obj.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

for (const iterator of a) {
  console.log(iterator);
}
