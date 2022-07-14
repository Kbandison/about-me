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
  alert(`You are right ${visitor} !! I'm actually a Navy Veteran!`);
} else{
  alert('Answer yes or no.');
}

let questionThree = prompt('Am I a college graduate?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are wrong!  I\'m still taking some courses in Computer Science, but decided to take a coding bootcamp to fast track my way to a career.');
}else if(questionThree === 'n' || questionThree ==='no'){
  alert('You are right!! I\'m still enrolled in a college, but took a break to take this amazing coding class!');
} else{
  alert('Answer yes or no.');
}

let questionFour = prompt('Do I currently live i the states?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct! I live in the Atlanta area. ');
}else if(questionFour === 'n' || questionFour ==='no'){
  alert('You are wrong!! I do live in the states, in the Atlanta area. ');
} else{
  alert('Answer yes or no.');
}

let questionFive = prompt('Do I currently work for a Tech company?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
}else if(questionFive === 'n' || questionFive ==='no'){
  alert('You are wrong!! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
} else{
  alert('Answer yes or no.');
}

let questionSix = prompt('How old am I?');

for(let i = 1; i < 4; i++){
  if (questionSix === 31){
    questionSix = alert('Correct! My birthday is in May 1991!');
  }else if (questionSix < 31){
    questionSix = prompt('Too Low!');
  }else if (questionSix > 31)
    questionSix = prompt('Too High!');
}

alert('Correct!! I was born in May of 1991. ');

// Adding a function to your seventh question. 
function seventhQuestion(){
let port = ['Greece', 'Bahrain', 'Dubai'];
let correctAnswer = port[0].toUpperCase();
let correctAnswer2 = port[1].toUpperCase();
let correctAnswer3 = port[2].toUpperCase();

let userGuess = prompt('Which were my favorite ports to visit while on deployment?\n Marseille\n Portugal\n  Greece\n  Bahrain\n  Dubai\n  Naples\n  Yokosuka\n').toUpperCase();

for(let i = 0; i < 5; i++){
  if (userGuess === correctAnswer){
    userGuess = alert(`Good Job.  I enjoyed going to ${port[1]} and ${port[2]} as well.`);break;
  }else if (userGuess === correctAnswer2){
    userGuess = alert(`Good Job.  I enjoyed going to ${port[0]} and ${port[2]} as well.`);break;
  }else if (userGuess === correctAnswer3){
    userGuess = alert(`Good Job.  I enjoyed going to ${port[0]} and ${port[1]} as well.`);break;
  }else if(userGuess !== correctAnswer){
    userGuess = prompt('Wrong.  Try again!\n Marseille\n Portugal\n  Greece\n  Bahrain\n  Dubai\n  Naples\n  Yokosuka\n').toUpperCase();
  }
}
}

seventhQuestion();
alert(`Thanks for playing my game ${visitor}!  Continue on to learn more about me!`);
