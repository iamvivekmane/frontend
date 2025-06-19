let a = prompt("Enter first number");

let b = prompt("Enter second number");

// It throws an error if a integer is not passed(condition)
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("This is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 5;
  // it tries to execute the code if it do not gets executed then it catch/handle the error occured
  try {
    console.log("The sum is a", sum * x);
    return true;
  } catch (error) {
    console.log("An error occured");
    return false;
  } finally {
    // Finally block also gets executed even when the function has returned the value
    console.log("Files are closed and DataBase connection is being closed");
  }
}

let c = main();
