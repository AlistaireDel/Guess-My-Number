'use strict';

//Selecting and Manipulating Elements:

/*
// To manipulate/set the text content of an element.
document.querySelector('.message').textContent = 'Correct Number!';

// To manipulate/set the text content of an element.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// To set the value of an element for an input field element.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling CLick Events/ Implementing the game logic:

// Secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    console.log('Not a number!');
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }

    // When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? 'Too Low!' : 'Too high!';
      displayMessage(guess < secretNumber ? 'Too Low!' : 'Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When Guess is too low:
  /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

//Adding Again button to reset the game:

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing ...');
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //   document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
});
