'use strict';

let visitor = prompt('Hello! What is your name?');

alert(`Welcome to my site ${visitor}!  Guess these facts about me!`);

let questionOne = prompt('Do I have any pets?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!  I have 3 German Shepherd babies!');
} else if(questionOne === 'n' || questionOne ==='no'){
  alert('You are wrong!! I have 3 German Shepherds.  Maybe you\'ll get the next question right!');
} else{
  alert('Answer yes or no.');
}

let questionTwo = prompt('Am I an Army Veteran?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are wrong!  I am a Navy Veteran.');
} else if(questionTwo === 'n' || questionTwo ==='no'){
  alert('You are right!! I\'m actually a Navy Veteran!');
} else{
  alert('Answer yes or no.');
}

let questionThree = prompt('Am I a college graduate?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are wrong!  I\'m still taking some courses in Computer Science, but decided to take a coding bootcamp to fast track my way to a career.');
} else if(questionThree === 'n' || questionThree ==='no'){
  alert('You are right!! I\'m still enrolled in a college, but took a break to take this amazing coding class!');
} else{
  alert('Answer yes or no.');
}

let questionFour = prompt('Do I currently live i the states?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct! I live in the Atlanta area. ');
} else if(questionFour === 'n' || questionFour ==='no'){
  alert('You are wrong!! I do live in the states, in the Atlanta area. ');
} else{
  alert('Answer yes or no.');
}

let questionFive = prompt('Do I currently work for a Tech company?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
} else if(questionFive === 'n' || questionFive ==='no'){
  alert('You are wrong!! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
} else{
  alert('Answer yes or no.');
}

alert(`Thanks for playing my game ${visitor}!  Continue on to learn more about me!`);