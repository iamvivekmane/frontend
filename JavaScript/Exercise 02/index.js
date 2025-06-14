function adjective_generator() {
  let adj1 = "Crazy";
  let adj2 = "Amazing";
  let adj3 = "Fire";

  let random = Math.random();
  if (random > 0 && random < 0.33) {
    return adj1;
  } else if (random > 0.33 && random < 0.66) {
    return adj2;
  } else {
    return adj3;
  }
}
function name_generator() {
  let name1 = "Engines";
  let name2 = "Foods";
  let name3 = "Garments";

  let random = Math.random();
  if (random > 0 && random < 0.33) {
    return name1;
  } else if (random > 0.33 && random < 0.66) {
    return name2;
  } else {
    return name3;
  }
}
function word_generator() {
  let word1 = "Bros";
  let word2 = "Limited";
  let word3 = "Hub";

  let random = Math.random();
  if (random > 0 && random < 0.33) {
    return word1;
  } else if (random > 0.33 && random < 0.66) {
    return word2;
  } else {
    return word3;
  }
}

function business_name_generator() {
  let business_name =
    adjective_generator() + " " + name_generator() + " " + word_generator();
  return business_name;
}
console.log(business_name_generator());
