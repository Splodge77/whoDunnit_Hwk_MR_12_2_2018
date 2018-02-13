var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

'My name is Keith'

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// 3 - score overwritten

//------------------------

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions']; // declaired as a global
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// 0: Ducks
// 1: Dogs
// 2: Lions

//------------------------

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};
// suspect three is Harvey

allSuspects();
console.log( 'Suspect three is:' + suspectThree ); // Keith

//-------------------------

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo()); // Poirot

//--------------------------

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer); // rick
// murderer is the only thing called in console.log() and is not overwritten beforehand
