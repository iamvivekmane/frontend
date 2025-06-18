console.log("hello i am there for them");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("jack");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("yes i am done 2");
      resolve("jack 2");
    }, 1000);
  }
});

// // Waits for all promises to resolve
// let p3 = Promise.all([prom1, prom2]);
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

//  // Returns the status and value for all promises always
// let p3 = Promise.allSettled([prom1, prom2]);
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

// // Waits till first promise to settle and returns the result or error
// let p3 = Promise.race([prom1, prom2]);
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });
