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

// const guessMessage = document.querySelector('.guess-message');
// const score = document.querySelector('.score');
// const question = document.querySelector('.question');
// const body = document.querySelector('body');

// let randomNumber = Math.trunc(Math.random() * 20) + 1;
// let count = 20;
// let bestResult = 0;
// const eventHandler = function () {
//   if (count == 1) {
//     question.style.width = '400px';
//     question.textContent = 'Game over';
//     body.style.backgroundColor = 'red';
//     return;
//   }
//   const guessInputNumber = Number(document.querySelector('.number-input').value);
//   if (!guessInputNumber) {
//     guessMessage.textContent = 'Input some number!';
//   } else {
//     if (guessInputNumber == randomNumber) {
//       guessMessage.textContent = 'WIN';
//       if (bestResult < count) {
//         bestResult = count;
//         document.querySelector('.highscore').textContent = bestResult;
//       }
//       question.textContent = randomNumber;
//       body.style.backgroundColor = 'green';
//       return;
//     }
//     guessMessage.textContent = guessInputNumber > randomNumber ? 'More' : 'Less';
//     count--;
//     score.textContent = count;
//   }

//   console.log(guessInputNumber, randomNumber);
// };

// const eventUpdate = () => {
//   randomNumber = Math.trunc(Math.random() * 20) + 1;
//   count = 20;
//   guessMessage.textContent = 'Начни угадыват';
//   score.textContent = count;
//   question.textContent = '???';
//   body.style.backgroundColor = 'rgb(0, 0, 0)';
// };

// document.querySelector('.check').addEventListener('click', eventHandler);
// document.querySelector('.again').addEventListener('click', eventUpdate);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let count = 20;
let bestResult = 0;
let finish = false;

// data
const question = document.querySelector('.question');
const guessMessage = document.querySelector('.guess-message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

// btn
const check = document.querySelector('.check');
const again = document.querySelector('.again');

// input
const numberInput = document.querySelector('.number-input');

// check answer
const eventHandler = () => {
  if (finish) return;

  if (count == 1) {
    question.style.width = '300px';
    question.textContent = 'Game Over';
    body.style.backgroundColor = 'red';
    finish = true;
    return;
  }

  const answerInput = Number(numberInput.value);

  if (!answerInput || answerInput < 1 || answerInput > 20) {
    guessMessage.textContent = 'Enter number from 1 to 20';
    return;
  }

  if (answerInput === randomNumber) {
    guessMessage.textContent = 'WIN';
    question.textContent = randomNumber;
    body.style.backgroundColor = 'green';
    if (bestResult < count) {
      bestResult = count;
      highScore.textContent = bestResult;
    }
    finish = true;
  } else {
    guessMessage.textContent = answerInput > randomNumber ? 'Need less' : 'Need more';
  }

  count--;
  score.textContent = count;
};

const eventUpData = () => {
  finish = false;
  count = 20;
  score.textContent = count;
  guessMessage.textContent = 'Начни угадывать';
  question.textContent = '???';
  body.style.backgroundColor = 'black';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  numberInput.value = '';
};

check.addEventListener('click', eventHandler);
again.addEventListener('click', eventUpData);
