'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No secretNumber!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'To high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
