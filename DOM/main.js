'use strict';
// DOM - Document object model
// const text = document.querySelector('.guess-message').textContent;
// console.log(text);

// document.querySelector('.guess-message').textContent = 'WIN';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 10;
// console.log(document.querySelector('.number-input').value);

// example one
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.number-input').value);
// });

//example two
// const eventHandler = function () {
//   const guessInputNumber = Number(
//     document.querySelector('.number-input').value
//   );
//   console.log(guessInputNumber);
// };

// document.querySelector('.check').addEventListener('click', eventHandler);

const guessMessage = document.querySelector('.guess-message');
const score = document.querySelector('.score');
const question = document.querySelector('.question');
const body = document.querySelector('body');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let count = 20;
let bestResult = 0;
const eventHandler = function () {
  if (count == 1) {
    question.style.width = '400px';
    question.textContent = 'Game over';
    body.style.backgroundColor = 'red';
    return;
  }
  const guessInputNumber = Number(document.querySelector('.number-input').value);
  if (!guessInputNumber) {
    guessMessage.textContent = 'Input some number!';
  } else {
    if (guessInputNumber == randomNumber) {
      guessMessage.textContent = 'WIN';
      if (bestResult < count) {
        bestResult = count;
        document.querySelector('.highscore').textContent = bestResult;
      }
      question.textContent = randomNumber;
      body.style.backgroundColor = 'green';
      return;
    }
    guessMessage.textContent = guessInputNumber > randomNumber ? 'More' : 'Less';
    count--;
    score.textContent = count;
  }

  console.log(guessInputNumber, randomNumber);
};

const eventUpdate = () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  count = 20;
  guessMessage.textContent = 'Начни угадыват';
  score.textContent = count;
  question.textContent = '???';
  body.style.backgroundColor = 'rgb(0, 0, 0)';
};

document.querySelector('.check').addEventListener('click', eventHandler);
document.querySelector('.again').addEventListener('click', eventUpdate);
