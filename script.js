'use strict';

let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      displayMessage('No Number ! 🧐 ');
      // document.querySelector('.message').textContent = 'No Number ! 🧐 ';
    } else if (guess === secNumber) {
      displayMessage(' 🥳 Correct Number !!');

      document.querySelector('.number').textContent = secNumber;

      // HIGHSCORE LOGIC
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.fontSize = '8rem';

      document.querySelector('.score').textContent = score;
    } else if (guess !== secNumber) {
      displayMessage(
        guess > secNumber ? ' 🙀 Too High !! ' : ' 👎 Too Low !! '
      );

      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage(' 😿 You lost the game !');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = ' rgb(237, 19, 19)';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
});

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number ! 🥳 ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
