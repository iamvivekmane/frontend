let cont = document.getElementById("container");

function init(a) {
  let firstline = document.createElement("div");
  let firstelem = document.createElement("div");
  firstelem.classList.add("first", "lines");
  firstelem.textContent = a;

  let loaderelem = document.createElement("div");
  loaderelem.classList.add("loader");
  firstline.appendChild(firstelem);
  firstline.appendChild(loaderelem);
  cont.appendChild(firstline);
}
function read(b) {
  let secondline = document.createElement("div");
  let secondelem = document.createElement("div");
  secondelem.classList.add("second", "lines");
  secondelem.textContent = b;

  let loaderelem = document.createElement("div");
  loaderelem.classList.add("loader");
  secondline.appendChild(secondelem);
  secondline.appendChild(loaderelem);
  cont.appendChild(secondline);
}

function detect(c) {
  let thirdline = document.createElement("div");
  let thirdelem = document.createElement("div");
  thirdelem.classList.add("third", "lines");
  thirdelem.textContent = c;

  let loaderelem = document.createElement("div");
  loaderelem.classList.add("loader");
  thirdline.appendChild(thirdelem);
  thirdline.appendChild(loaderelem);
  cont.appendChild(thirdline);
}

function send(d) {
  let fourthline = document.createElement("div");
  let fourthelem = document.createElement("div");
  fourthelem.classList.add("fourth", "lines");
  fourthelem.textContent = d;

  let loaderelem = document.createElement("div");
  loaderelem.classList.add("loader");
  fourthline.appendChild(fourthelem);
  fourthline.appendChild(loaderelem);
  cont.appendChild(fourthline);
}
function clean(e) {
  let fifthline = document.createElement("div");
  let fifthelem = document.createElement("div");
  fifthelem.classList.add("fifth", "lines");
  fifthelem.textContent = e;

  let loaderelem = document.createElement("div");
  loaderelem.classList.add("loader");
  fifthline.appendChild(fifthelem);
  fifthline.appendChild(loaderelem);
  cont.appendChild(fifthline);
}
let min = 1000;
let max = 7000;
function getData1() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing hacking");
    }, random);
  });
}
function getData2() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reading your files");
    }, random);
  });
}
function getData3() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Password files detected");
    }, random);
  });
}
function getData4() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sending all passwords and personal files to server");
    }, random);
  });
}
function getData5() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaning up");
    }, random);
  });
}

async function main() {
  let First = await getData1();
  console.log(First);
  init(First);
  let Second = await getData2();
  console.log(Second);
  read(Second);
  let Third = await getData3();
  console.log(Third);
  detect(Third);
  let Fourth = await getData4();
  console.log(Fourth);
  send(Fourth);
  let Fifth = await getData5();
  console.log(Fifth);
  clean(Fifth);
}
main();
