# Scope Homework: Who Dunnit

### Learning Objectives

- Understand function scope
- Know the difference in between the let and const keywords

## Brief

Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

### MVP



// #### Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// 'Miss Scarlet'


// #### Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// const murderer is set as Professor Plum at beginning of code. Therefore 'changeMurderer' will have no effect on the const murderer. .log will create error message.



// #### Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//let murderer with the const 'declaremurder', will modify the initial let and return 'Mrs Peacock' Therefore the console.log first verdict output will be 'The murderer is Mrs Peacock'
//Since the let murderer has not be modified in the secondVerdict the chage.log will output 'Second verdict: Professor Plum'



// #### Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// 1st console.log => The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Because the declareAllSuspects has change the initial let suspectThree.

// 2ns console.log => Suspect three is Mrs Peacock. Becuase suspect three has not been change by the function.



// #### Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// console.log output => The weapon is the revolver.



// #### Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }
  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


//initial const changeMurderer sets the murderer to 'Mr Green' as global scope, the second attempt to change the murderer will create an error. ERROR. *** not understood why global varable changes the murderer to Mrs White and overwrites Mr green.



// #### Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//unexpectedOutcome changes murderer to Miss Scarlet
// plotTwist then changes murderer to Colonel Mustard
//however muderer is set as a global scope and therefore sets murderer to mr green
// verdict output => The murderer is Mr Green



// #### Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room'; //sets .room to dining room

  const plotTwist = function(room) {
    if (scenario.room === room) { //true becuase previous method change room
      scenario.murderer = 'Colonel Mustard'; //murderer becomes colonel mustard
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) { //true
        scenario.weapon = 'Candle Stick'; //changes weapon to candle stick
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon(); //The weapon is ${scenario.weapon}
console.log(verdict);

//murderer => colonel Mustard
//room => dining room
//weapon => candle stick
//output The weapon is candle stick



// #### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock'; //murderer changed to mrs peacock, but let lives within curly brackets only
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//output The murderer is Professor Plum
