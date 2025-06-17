let temp = document.querySelector(".container").innerHTML;
console.log(temp);
let temp2 = document.querySelector(".box").innerText;
console.log(temp2);

// console.log((document.querySelector(".box").hidden = true));

document.querySelector(".box").innerHTML = "Hello world";

console.log(document.querySelector(".box").hasAttribute("style"));

console.log(document.querySelector(".box").getAttribute("style"));

document.querySelector(".box").setAttribute("style", "display:inline");

document.querySelector(".box").removeAttribute("style");

console.log(document.querySelector(".box").dataset);

// let div = document.createElement("div");
// div.innerHTML = "i am inserted <b> hello</b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);

// let div = document.createElement("div");
// div.innerHTML = "i am inserted <b> hello</b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").before(div);

// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML(
//   "afterend",
//   "<b> i am under the water please help here too much raining.... </b>"
// );

// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML(
//   "beforeBegin",
//   "<b> i am under the water please help here too much raining.... </b>"
// );

// let element = document.querySelector(".box");
// element.remove();

// console.log(document.querySelector(".container").classList);

// console.log(document.querySelector(".container").className);

// let element2 = document.querySelector(".container").classList.add("random")
// console.log(element2)

// let element3 = document.querySelector(".container").classList.remove("random")
// console.log(element3)


let element4 = document.querySelector(".container").classList.toggle("random")
console.log(element4)

