function dwarfRollCall(dwarves) {
  let numberedDwarves = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedDwarves.push((i+1) + ". " + dwarves[i] + " ");
  }
  return numberedDwarves.join('');
}

function summonCaptainPlanet(planeteerCalls) {
  let loudCalls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    loudCalls.push(planeteerCalls[i].toUpperCase() + "! ");
  }
  return loudCalls;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  let cheese = ['cheddar', 'gouda', 'camembert'];
  for (let foodItems = 0; foodItems < foods.length; foodItems++) {
    for (let cheeseItems = 0; cheeseItems < cheese.length; cheeseItems++) {
      if (foods[foodItems] === cheese[cheeseItems]) {
        return cheese[cheeseItems];
      }
    }
  } return 'no cheese!';
}
