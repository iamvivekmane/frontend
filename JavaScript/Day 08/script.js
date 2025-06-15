let arr = [1, 2, 4, 5, 7];
console.log(arr);
console.log(arr.length);

let str = arr.toString();
console.log(str);

// It will join the elements with the passed string
console.log(arr.join(" and "));

console.log(arr.pop());

//It pushes the element and return the length of the array
console.log(arr.push(10));
console.log(arr);

console.log(arr.shift());
console.log(arr.unshift("ronny"));
console.log(arr);

// delete arr[2];
// console.log(arr);

arr.splice(1, 2);
console.log(arr);
