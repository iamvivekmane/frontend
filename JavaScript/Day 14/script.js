// async function getData() {
//   // Simulation of getting data from the server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

// Promises
// settle : resolve or reject
// resolve : promise has settled successfully
// reject : promise has not settled successfully

async function getData() {
  // Simulation of getting data from the server
  // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await x.json();
  return data;
}

//Approach 2
// This function waits till the getData fetches the API
async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main();

// // Approach 1
// data.then((v) => {
//   console.log("data");
//   console.log("process data");
//   console.log("task 2");
// });
