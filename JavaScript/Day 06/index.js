//Simple buisness name generator which generates the name based on different string combinations
function adjective_generator() {
  let adj1 = "Crazy";
  let adj2 = "Amazing";
  let adj3 = "Fire";
  let random = Math.random();
  if (random > 0.1 && random < 0.4) {
    return adj1;
  } else if (random > 0.5 && random < 0.8) {
    return adj2;
  } else {
    return adj3;
  }
}
function name_generator() {
  let name1 = "Engine";
  let name2 = "Foods";
  let name3 = "Garments";
  let random = Math.random();
  if (random > 0.1 && random < 0.4) {
    return name2;
  } else if (random > 0.5 && random < 0.8) {
    return name1;
  } else {
    return name3;
  }
}
function word_generator() {
  let word1 = "Bros";
  let word2 = "Limited";
  let word3 = "Hub";
  let random = Math.random();
  if (random > 0.1 && random < 0.4) {
    return word3;
  } else if (random > 0.5 && random < 0.8) {
    return word2;
  } else {
    return word1;
  }
}

function business_name_generator() {
  let buisness_name =
    adjective_generator() + " " + name_generator() + " " + word_generator();
  return buisness_name;
}

console.log(business_name_generator());
