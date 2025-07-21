'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');

console.log(btnsShowModalWindow);

const removeHiddenClass = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHiddenClass = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

// btn open show modal
for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', removeHiddenClass);
}

// btn close modal
btnCloseModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

//keybdown
// check class with help contains
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) addHiddenClass();
});
