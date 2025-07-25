console.log("Hello");
console.log("Welcome");

// Async nature of JavaScript

setTimeout(() => {
  console.log("I am inside timeout 1");
}, 0);

setTimeout(() => {
  console.log("I am inside timeout 2");
}, 0);

console.log("End");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("jon");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
