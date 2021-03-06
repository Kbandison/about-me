'use strict';

let score = 0;

let visitor = prompt('Hello! What is your name?');

alert(`Welcome to my site ${visitor}!  Guess these facts about me!`);

let questionOne = prompt('Do I have any pets?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!  I have 3 German Shepherd babies!');
  score++;
} else if(questionOne === 'n' || questionOne ==='no'){
  alert('You are wrong!! I have 3 German Shepherds.  Maybe you\'ll get the next question right!');
} else{
  alert('Answer yes or no.');
}

let questionTwo = prompt('Am I an Army Veteran?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are wrong!  I am a Navy Veteran.');
} else if(questionTwo === 'n' || questionTwo ==='no'){
  alert(`You are right ${visitor}!! I'm actually a Navy Veteran!`);
  score++;
} else{
  alert('Answer yes or no.');
}

let questionThree = prompt('Am I a college graduate?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are wrong!  I\'m still taking some courses in Computer Science, but decided to take a coding bootcamp to fast track my way to a career.');
}else if(questionThree === 'n' || questionThree ==='no'){
  alert('You are right!! I\'m still enrolled in a college, but took a break to take this amazing coding class!');
  score++;
} else{
  alert('Answer yes or no.');
}

let questionFour = prompt('Do I currently live in the states?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct! I live in the Atlanta area. ');
  score++;
}else if(questionFour === 'n' || questionFour ==='no'){
  alert('You are wrong!! I do live in the states, in the Atlanta area. ');
} else{
  alert('Answer yes or no.');
}

let questionFive = prompt('Do I currently work for a Tech company?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
  score++;
}else if(questionFive === 'n' || questionFive ==='no'){
  alert('You are wrong!! Kinda, as I technically work in the warehouse section of Best Buy.  If I become a web developer, that\'s the first place I would look for employment.');
} else{
  alert('Answer yes or no.');
}

let age = 31;
let questionSix = +prompt('How old am I?');

for(let i = 1; i < 5; i++){
  if(questionSix === age){
    questionSix = alert('Correct! My birthday is in May 1991!');
    score++;
    break;
  }else if(questionSix < age){
    questionSix = prompt('Too Low!');
  }else if(questionSix > age){
    questionSix = prompt('Too High!');
  }

  if(i === 4){
    alert('The answer is 31!');
  }
}

function questionSeven(){
  let port = ['greece', 'bahrain', 'dubai'];

  for(let i = 0; i < 6; i++){
    let questionSeven = prompt('What is of my favorite country to visit on deployment?').toLowerCase();

    for(let j = 0; j < port.length; j++){
      if(questionSeven === port[j]){
        alert('Yes!  That is my favorite port!');
        score++;
        i = 6;
        break;
      }
    }
  }
}
questionSeven();

alert("All possible answers could be: Greece, Bahrain, or Dubai.  They were amazing places.");

alert(`Your score is ${score} out of 7.`);

alert(`Thanks for playing my game ${visitor}! Continue on to learn more about me!`);