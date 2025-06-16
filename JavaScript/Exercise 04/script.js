function random_color_generator() {
  let random = Math.random();
  let color;
  console.log(random);
  if (random > 0 && random < 0.1) {
    color = "red";
  } else if (random > 0.1 && random < 0.2) {
    color = "green";
  } else if (random > 0.2 && random < 0.3) {
    color = "pink";
  } else if (random > 0.3 && random < 0.4) {
    color = "grey";
  } else if (random > 0.4 && random < 0.5) {
    color = "aqua";
  } else if (random > 0.5 && random < 0.6) {
    color = "blue";
  } else if (random > 0.6 && random < 0.7) {
    color = "yellow";
  } else if (random > 0.7 && random < 0.8) {
    color = "beige";
  } else if (random > 0.8 && random < 0.9) {
    color = "violet";
  } else {
    color = "aquamarine";
  }
  return color;
}

function random_backgroundColor_generator() {
  let random = Math.random();
  let backgroundColor;
  console.log(random);
  if (random > 0 && random < 0.1) {
    backgroundColor = "green";
  } else if (random > 0.1 && random < 0.2) {
    backgroundColor = "pink";
  } else if (random > 0.2 && random < 0.3) {
    backgroundColor = "grey";
  } else if (random > 0.3 && random < 0.4) {
    backgroundColor = "aqua";
  } else if (random > 0.4 && random < 0.5) {
    backgroundColor = "blue";
  } else if (random > 0.5 && random < 0.6) {
    backgroundColor = "yellow";
  } else if (random > 0.6 && random < 0.7) {
    backgroundColor = "beige";
  } else if (random > 0.7 && random < 0.8) {
    backgroundColor = "violet";
  } else if (random > 0.8 && random < 0.9) {
    backgroundColor = "aquamarine";
  } else {
    backgroundColor = "black";
  }
  return backgroundColor;
}

let boxes = document.getElementsByClassName("box");
console.log(boxes);

let box1 = boxes[0];
console.log(box1);

let box2 = boxes[1];
console.log(box2);

let box3 = boxes[2];
console.log(box3);

let box4 = boxes[3];
console.log(box4);

let box5 = boxes[4];
console.log(box5);

box1.style.color = random_color_generator();
box1.style.backgroundColor = random_backgroundColor_generator();
box2.style.color = random_color_generator();
box2.style.backgroundColor = random_backgroundColor_generator();
box3.style.color = random_color_generator();
box3.style.backgroundColor = random_backgroundColor_generator();
box4.style.color = random_color_generator();
box4.style.backgroundColor = random_backgroundColor_generator();
box5.style.color = random_color_generator();
box5.style.backgroundColor = random_backgroundColor_generator();
