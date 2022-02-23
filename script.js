"use strict";

// Pseudo code

// Function to check each die's value
function checkDice(d1, d2) {
  let firstDie = d1;
  let secondDie = d2;
  let statement;

  //   If statement for all possible rolls
  //   Main rolls: 7, 11, doubles
  //   Threeman rolls need to be checked within each of these

  //   Two of a kind
  if (firstDie === secondDie) {
    statement = `${firstDie} fingers`;
    if (firstDie === 3 || secondDie === 3) {
      statement += " AND Threeman drinks";
    } else if (firstDie + secondDie === 3) {
      statement += " AND Threeman drinks";
    }
  } else if (firstDie + secondDie === 7) {
    statement = "Person to roller's left drinks";
    if (firstDie === 3 || secondDie === 3) {
      statement += " AND Threeman drinks";
    } else if (firstDie + secondDie === 3) {
      statement += " AND Threeman drinks";
    }
  } else if (firstDie + secondDie === 11) {
    statement = "Person to roller's right drinks";
    if (firstDie === 3 || secondDie === 3) {
      statement += " AND Threeman drinks";
    } else if (firstDie + secondDie === 3) {
      statement += " AND Threeman drinks";
    }
  } else {
    if (firstDie === 3 || secondDie === 3) {
      statement = "Threeman drinks";
    } else if (firstDie + secondDie === 3) {
      statement = "Threeman drinks";
    } else {
      statement = "Shit roll";
    }
  }
  return statement;
}

// Function to apply the dice face image for each value
function diceRoll(f1, f2) {
  let face1 = f1;
  let face2 = f2;

  //   First face all possibilities
  if (face1 === 1) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/1roll.png")';
  } else if (face1 === 2) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/2roll.png")';
  } else if (face1 === 3) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/3roll.png")';
  } else if (face1 === 4) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/4roll.png")';
  } else if (face1 === 5) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/5roll.png")';
  } else if (face1 === 6) {
    document.querySelector(".one").style.backgroundImage =
      'url("diceFaces/6roll.png")';
  }

  // Second face all possibilities
  if (face2 === 1) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/1roll.png")';
  } else if (face2 === 2) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/2roll.png")';
  } else if (face2 === 3) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/3roll.png")';
  } else if (face2 === 4) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/4roll.png")';
  } else if (face2 === 5) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/5roll.png")';
  } else if (face2 === 6) {
    document.querySelector(".two").style.backgroundImage =
      'url("diceFaces/6roll.png")';
  }
}

// Pressing 'roll' button generates randint between 1-6
document.querySelector(".roll").addEventListener("click", function () {
  let die1 = Math.trunc(Math.random() * 6 + 1);
  let die2 = Math.trunc(Math.random() * 6 + 1);
  console.log(die1, die2);
  document.querySelector(".heDoes").textContent = checkDice(die1, die2);
  diceRoll(die1, die2);
});
