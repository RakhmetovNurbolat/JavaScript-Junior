'use strict';

/* ---------------------------------------- ( P check number ) ------------------------------- */

// console.log(10 === 10.0);

// // 10 - 0-9
// // 2 - 1, 2

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// console.log(Number('11'));
// console.log(+'11');

// // Parsing number from string

// console.log(Number.parseInt('20%', 10));
// console.log(Number.parseInt('a20%', 10));
// console.log(Number.parseInt('0111011%', 2));
// console.log(Number.parseFloat('9.7kg'));
// console.log(Number.parseInt('9.7kg'));
// console.log(parseInt('9.7kg'));

// // Other methods form Number namespace

// console.log(Number.isNaN(111));
// console.log(Number.isNaN('111'));
// console.log(Number.isNaN(+'a25'));
// console.log(+'20a');
// console.log(Number.isNaN(+'20a'));
// console.log(11 / 0);
// console.log(Number.isNaN(11 / 0));
// console.log('-----------------------------');
// console.log(Number.isFinite(111));
// console.log(Number.isFinite('111'));
// console.log(Number.isFinite('111%'));
// console.log(Number.isFinite(11 / 0));

/* ----------------------------------------- (Math) ------------------------------------------ */

// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(2, 1, 4));
// console.log(Math.max(2, '1', '4', -5));
// console.log(Math.max(2, '1', '4%', -5));
// console.log(Math.min(2, '1', '4', -5));
// console.log(Math.PI);
// console.log(Math.PI * Number.parseInt('20px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(1.99));
// console.log(Math.round(1.66));
// console.log(Math.round(1.36));

// console.log(Math.ceil(1.66));
// console.log(Math.ceil(1.36));

// console.log(Math.floor(1.66));
// console.log(Math.floor(1.36));

// console.log(Math.trunc(-1.66));
// console.log(Math.floor(-1.66));

// console.log(Math.PI);
// console.log(Math.PI.toFixed(3));

/* ----------------------------------------- (Operator div) ---------------------------------- */

// I know

/* ----------------------------------------- (big int) 2020 --------------------------------------- */

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 4);

// console.log(12465460734650346570324650n);
// console.log(BigInt('12465460734650346570324650'));

// console.log(12465460734650346570324650n + 2345235342523453452345n);
// console.log(12465460734650346570324650n * 2345235342523453452345n);
// console.log(12465460734650346570324650n - 2345235342523453452345n);
// console.log(12465460734650346570324650n / 2345235342523453452345n);

/* ---------------------------------------- (Data and time) ---------------------------------- */

// const now = new Date();
// console.log(now);

// const someDateString = 'Tue Jul 29 2025 21:23:55';
// const someDate = new Date(someDateString);
// console.log(someDate);
// console.log(new Date('Dec 31 2021'));
// const accountOne = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
//   transactionsDates: [
//     '2020-10-02T14:43:31.074Z',
//     '2020-10-29T11:24:19.761Z',
//     '2020-11-15T10:45:23.907Z',
//     '2021-01-22T12:17:46.255Z',
//     '2021-02-12T15:14:06.486Z',
//     '2021-03-09T11:42:26.371Z',
//     '2021-05-21T07:43:59.331Z',
//     '2021-06-22T15:21:20.814Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// console.log(new Date(accountOne.transactionsDates[0]));
// console.log(new Date(2222, 0, 32));

// //Unix time started jan 1 1970

// console.log(new Date(0));
// console.log(new Date(7 * 24 * 60 * 60 * 1000));

// Work with date method

// const futureDate = new Date(2222, 1, 13, 11, 28, 59);
// console.log(futureDate);
// console.log(futureDate.getFullYear());
// console.log(futureDate.getMonth());
// console.log(futureDate.getDate());
// console.log(futureDate.getDay());
// console.log(futureDate.getHours());
// console.log(futureDate.getMinutes());
// console.log(futureDate.getSeconds());
// console.log(futureDate.toISOString());
// console.log(futureDate.getTime());
// console.log(Date.now());

// futureDate.setFullYear(2223);
// console.log(futureDate);

/* ----------------------------------------- (Operator Date) ---------------------------------- */
// const futureDate = new Date(2222, 1, 13, 11, 28, 59);

// const getPassedDays = (startDate, endDate) => endDate - startDate;

// const days = getPassedDays(new Date(2021, 9, 1), new Date(2021, 9, 12)) / (1000 * 60 * 60 * 24);
// console.log(days);

/* -----------------------------------------(inter date) -------------------------------------- */

// const a = 3254.21;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
// };

// console.log('US', new Intl.NumberFormat('en-Us', options).format(a));
// console.log('UK', new Intl.NumberFormat('uk-UA', options).format(a));
// console.log('RU', new Intl.NumberFormat('ru-RU', options).format(a));

/* ----------------------------------------- (Timer) ------------------------------------------- */

//setTimeout()
// const ings = ['Tunes', 'Lassos'];

// const sushiTime = setTimeout((ing1, ing2) => console.log(`Your sushi get: ${ing1}, ${ing2}`), 3000, ...ings);
// console.log('Wait for it');

// if (ings.includes('Tuness')) {
//   clearTimeout(sushiTime);
// }

// setInterval

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 3000);

/* ----------------------------------------- (project ) --------------------------------------- */

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2025-07-29T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'CAD',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatTransactionDate = (date, locale) => {
  const getPassedDays = (startDate, endDate) => Math.trunc(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));

  const daysPassed = getPassedDays(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 5) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';

  const transacs = sort ? account.transactions.slice().sort((a, b) => a - b) : account.transactions;

  transacs.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.transactionsDates[index]);
    const transDate = formatTransactionDate(date, account.locale);

    const formattedTrans = formatCurrency(trans, account.locale, account.currency);

    const transactionRow = `
      <div class="transactions__row">
        <div class="transactions__type transactions__type--${transType}">
          ${index + 1} ${transType}
        </div>
        <div class="transactions__date">${transDate}</div>
        <div class="transactions__value">${formattedTrans}</div>
      </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

// displayTransactions(account1.transactions);

const createNickNames = function (accounts) {
  accounts.forEach(function (account) {
    account.nickName = account.userName
      .toLowerCase()
      .split(' ')
      .map((user) => user[0])
      .join('');
  });
};

createNickNames(accounts);

const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
  labelBalance.textContent = formatCurrency(balance, account.locale, account.currency);
  account.balance = balance;
};

// displayBalance(account1.transactions);

const displayTotal = function (account) {
  const depositTotal = account.transactions.filter((trans) => trans > 0).reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = formatCurrency(depositTotal, account.locale, account.currency);

  const withdrawalsTotal = account.transactions.filter((trans) => trans < 0).reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = formatCurrency(withdrawalsTotal, account.locale, account.currency);

  const interestTotal = account.transactions
    .filter((trans) => trans > 0)
    .map((depos) => (depos * account.interest) / 100)
    .filter((interest) => interest >= 5)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formatCurrency(interestTotal, account.locale, account.currency);
};

const updateUi = function (account) {
  // Display Transactions
  displayTransactions(account);
  // Display Balance
  displayBalance(account);
  // Display total
  displayTotal(account);
};

// login input
let currentAccount;
let currentLogOutTimer;
// Always logged in;

// currentAccount = account1;
// updateUi(account1);
// containerApp.style.opacity = 100;

const startLogoutTimer = function () {
  const logOut = function () {
    const minute = String(Math.trunc(time / 60)).padStart(2, '0');
    const second = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${minute}:${second}`;

    if (time === 0) {
      clearInterval(logoutTimer);
      labelWelcome.textContent = `Войдите в свой аккаунт`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // setup timer
  let time = 300;
  // timer
  logOut();
  const logoutTimer = setInterval(logOut, 1000);
  return logoutTimer;
  // show time

  // end time
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find((account) => account.nickName === inputLoginUsername.value);
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI
    labelWelcome.textContent = `Welcome ${currentAccount.userName.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // labelDate.textContent = new Intl.DateTimeFormat(currentAccount.currency).format(now);

    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      weekday: 'long',
    };

    // const locale = navigator.language;

    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    //clear inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // inputLoginPin.blur();
    // Check if the timer exits
    if (currentLogOutTimer) clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find((account) => account.nickName === recipientNickname);
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  if (
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance &&
    recipientAccount &&
    recipientAccount.nickName !== currentAccount.nickName
  ) {
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(transferAmount);
    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());

    updateUi(currentAccount);
    //reset timer
    clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeAccount = inputCloseUsername.value;
  const closePin = +inputClosePin.value;
  if (closeAccount === currentAccount.nickName && closePin === currentAccount.pin) {
    const currentAccountIndex = accounts.findIndex((account) => account.nickName === currentAccount.nickName);
    accounts.splice(currentAccountIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = '';
  inputCloseUsername.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.transactions.some((trans) => trans >= (loanAmount * 10) / 100)) {
    setTimeout(function () {
      currentAccount.transactions.push(loanAmount);
      currentAccount.transactionsDates.push(new Date().toISOString());
      updateUi(currentAccount);
    }, 5000);
  }
  inputLoanAmount.value = '';
  clearInterval(currentLogOutTimer);
  currentLogOutTimer = startLogoutTimer();
});

let areTranSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  areTranSorted = !areTranSorted;
  displayTransactions(currentAccount, areTranSorted);
});

// Array.form() example

const logoImage = document.querySelector('.logo');

logoImage.addEventListener('click', function () {
  const transactionsUi = document.querySelectorAll('.transactions__value');
  const transactionsUiArray = Array.from(transactionsUi, (elem) => +elem.textContent.replace('$', ''));
  console.log(transactionsUiArray);
  [...document.querySelectorAll('.transactions__row')].forEach((elem, key) => {
    key % 2 == 0 ? (elem.style.backgroundColor = '#5fed85') : (elem.style.backgroundColor = '#ed7472');
  });
});
