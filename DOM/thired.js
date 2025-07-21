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
let player = true;
let CurrentSum = 0;

//zero

const reset = () => {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');

  player = true;
  CurrentSum = 0;
};

reset();

const scorePlay = (element, randomNumber) => {
  if (randomNumber !== 1) {
    CurrentSum += randomNumber;
    element.textContent = CurrentSum;
  } else {
    CurrentSum = 0;
    element.textContent = CurrentSum;
    player = !player;
    if (player) {
      player1Element.classList.remove('player--active');
      player0Element.classList.add('player--active');
    } else {
      player1Element.classList.add('player--active');
      player0Element.classList.remove('player--active');
    }
  }
};

// roll cube
const rollCube = () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `DOM/img/dice${randomNumber}.png`;
  if (player) {
    scorePlay(current0Element, randomNumber);
  } else {
    scorePlay(current1Element, randomNumber);
  }
};

// stay Score
const stayScore = () => {
  if (player) {
    score0Element.textContent = Number(score0Element.textContent) + CurrentSum;
    current0Element.textContent = 0;
    player1Element.classList.remove('player--active');
    player0Element.classList.add('player--active');
  } else {
    score1Element.textContent = Number(score1Element.textContent) + CurrentSum;
    current1Element.textContent = 0;
    player1Element.classList.add('player--active');
    player0Element.classList.remove('player--active');
  }
  player = !player;
  CurrentSum = 0;
};

btnRoll.addEventListener('click', rollCube);
btnHold.addEventListener('click', stayScore);
btnNew.addEventListener('click', reset);
