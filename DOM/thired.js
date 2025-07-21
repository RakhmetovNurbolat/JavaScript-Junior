// 'use strict';

// //DOM variables
// const diceElement = document.querySelector('.dice');
// const player0Element = document.querySelector('.player--0');
// const player1Element = document.querySelector('.player--1');

// //only attribute id
// const score0Element = document.getElementById('score--0');
// const score1Element = document.getElementById('score--1');
// const current0Element = document.getElementById('current--0');
// const current1Element = document.getElementById('current--1');

// //btns
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //variables
// let player = true;
// let CurrentSum = 0;

// //zero

// const reset = () => {
//   score0Element.textContent = 0;
//   score1Element.textContent = 0;
//   current0Element.textContent = 0;
//   current1Element.textContent = 0;
//   diceElement.classList.add('hidden');

//   player = true;
//   CurrentSum = 0;
// };

// reset();

// const scorePlay = (element, randomNumber) => {
//   if (randomNumber !== 1) {
//     CurrentSum += randomNumber;
//     element.textContent = CurrentSum;
//   } else {
//     CurrentSum = 0;
//     element.textContent = CurrentSum;
//     player = !player;
//     if (player) {
//       player1Element.classList.remove('player--active');
//       player0Element.classList.add('player--active');
//     } else {
//       player1Element.classList.add('player--active');
//       player0Element.classList.remove('player--active');
//     }
//   }
// };

// // roll cube
// const rollCube = () => {
//   const randomNumber = Math.trunc(Math.random() * 6) + 1;
//   diceElement.classList.remove('hidden');
//   diceElement.src = `DOM/img/dice${randomNumber}.png`;
//   if (player) {
//     scorePlay(current0Element, randomNumber);
//   } else {
//     scorePlay(current1Element, randomNumber);
//   }
// };

// // stay Score
// const stayScore = () => {
//   if (player) {
//     score0Element.textContent = Number(score0Element.textContent) + CurrentSum;
//     current0Element.textContent = 0;
//     player1Element.classList.remove('player--active');
//     player0Element.classList.add('player--active');
//   } else {
//     score1Element.textContent = Number(score1Element.textContent) + CurrentSum;
//     current1Element.textContent = 0;
//     player1Element.classList.add('player--active');
//     player0Element.classList.remove('player--active');
//   }
//   player = !player;
//   CurrentSum = 0;
// };

// btnRoll.addEventListener('click', rollCube);
// btnHold.addEventListener('click', stayScore);
// btnNew.addEventListener('click', reset);

'use strict';

//DOM variables
const diceElement = document.querySelector('.dice');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//only attribute id
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

//btns
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//variables
let player = 0;
let currentSum = 0;
let totalSum = [0, 0];
const MAX_VALUE = 10;
let isPlaying = true;
//zero

const reset = () => {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.remove('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.add('player--active');

  player = 0;
  currentSum = 0;
  totalSum = [0, 0];
  isPlaying = true;
};

reset();

const activePlayer = () => {
  currentSum = 0;
  document.getElementById(`current--${player}`).textContent = currentSum;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
  player = player === 0 ? 1 : 0;
};

// roll cube
const rollCube = () => {
  if (!isPlaying) return;
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `DOM/img/dice${randomNumber}.png`;
  if (randomNumber !== 1) {
    currentSum += randomNumber;
    document.getElementById(`current--${player}`).textContent = currentSum;
  } else {
    activePlayer();
  }
};

// stay Score
const stayScore = () => {
  if (!isPlaying) return;
  totalSum[player] += currentSum;
  document.getElementById(`score--${player}`).textContent = totalSum[player];
  if (totalSum[player] >= MAX_VALUE) {
    isPlaying = false;
    document.querySelector(`.player--${player}`).classList.add('player--winner');
    document.querySelector(`.player--${player}`).classList.remove('player--active');
    diceElement.classList.add('hidden');
  } else {
    activePlayer();
  }
};

btnRoll.addEventListener('click', rollCube);
btnHold.addEventListener('click', stayScore);
btnNew.addEventListener('click', reset);
