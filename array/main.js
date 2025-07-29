'use strict';

/* ------------------------------------------------- (Simple method array) ---------------------------------------- */

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// let letters2 = ['g', 'h', 'i'];
//slice
// console.log(letters.slice(1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-1, -3));
// console.log(letters.slice(-1, -3));

// splice
// console.log(letters.splice(1));
// console.log(letters.splice(-1));
// console.log(letters.splice(1, 3));

//reverse
// console.log(letters.reverse());

//concat
// console.log(letters1.concat(letters2));
// console.log([...letters1, ...letters2]);

//join
// console.log(letters.join(', '));

// console.log(letters);

/* ------------------------------------------------ (forEach) --------------------------------------------------- */

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// // for (const transaction of transactions) {
// //   if (transaction > 0) {
// //     console.log(`${transaction} was deposited`);
// //   } else {
// //     console.log(`${-transaction} was withdrew`);
// //   }
// // }

// // transactions.forEach(function (transaction) {
// //   if (transaction > 0) {
// //     console.log(`${transaction} was deposited`);
// //   } else {
// //     console.log(`${-transaction} was withdrew`);
// //   }
// // });
// //index
// for (const [i, transaction] of transactions.entries()) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${-transaction} was withdrew`);
//   }
//   console.log(i);
// }
// console.log('---------------------------------------------------');

// transactions.forEach(function (transaction, index, array) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${-transaction} was withdrew`);
//   }
//   console.log(index);
// });

/* ------------------------------------------------ (forEach Map Set) ------------------------------------------ */

//map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// const uniqueCurrencies = new Set(['usd', 'eur', 'usd']);

// uniqueCurrencies.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

/* ----------------------------------------------- (map, filter, reduce)---------------------------------------- */

/* ----------------------------------------------- (method map)------------------------------------------------- */
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const usdToEuro = 0.86;
// const transactionsEuro = transactions.map((trans) => trans * usdToEuro);

// console.log(transactions);
// console.log(transactionsEuro);

// // const transactionsEuroOne = [];
// // for (const trans of transactions) {
// //   transactionsEuroOne.push(trans * usdToEuro);
// // }
// // console.log(transactionsEuroOne);
// const transactionsDescriptions = transactions.map((trans, index) => {
//   return `Transaction ${index + 1}: ${Math.abs(trans)} was ${trans > 0 ? 'deposited' : 'withdrew'}`;
// });
// console.log(transactionsDescription);

/* ---------------------------------------------- (method filter) --------------------------------------------- */
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const withdrawals = transactions.filter((trans) => trans < 0);

// console.log(transactions);
// console.log(withdrawals);

/* ---------------------------------------------- (method reduce) --------------------------------------------- */
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const balance = transactions.reduce((acc, item) => acc + item, 0);
// const minValue = transactions.reduce((acc, item) => (acc < item ? acc : item), transactions[0]);

// console.log(balance);
// console.log(minValue);

/* --------------------------------------------- (all method) ---------------------------------------------- */

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const usdToEuro = 0.86;
// const totalWithdrawalsEure = transactions
//   .filter((trans) => trans < 0)
//   .map((trans) => trans * usdToEuro)
//   .reduce((acc, trans) => acc + trans, 0);
// console.log(totalWithdrawalsEure);

/* --------------------------------------------- (method find) -------------------------------------------- */

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const firstDeposit = transactions.find((trans) => trans > 0);
// const firstWithdrawal = transactions.find((trans) => trans < 0);
// console.log(firstDeposit);
// console.log(firstWithdrawal);

/* ---------------------------------------------- (method some and every) ---------------------------------------------- */

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// // console.log(transactions.includes(50));
// // console.log(transactions.includes(150));

// // const hasWithdrawals = transactions.some((trans) => trans < 0);
// // console.log(hasWithdrawals);
// // const hasWithdrawalsOver5000 = transactions.some((trans) => trans < -5000);
// // console.log(hasWithdrawalsOver5000);
// // console.log(transactions.some((trans) => trans === 50));

// console.log(transactions.every((trans) => trans < 0));
// console.log(transactions.every((trans) => Math.abs(trans) > 40));

/* ----------------------------------------------- (method flat and flatMap) -------------------------------------*/

// const someArray = [[1, 3, 5], [2, 5, 5], 7, 8, 9];

// console.log(someArray.flat());

// const someDeeperArray = [
//   1,
//   [2, [3, 5]],
//   [
//     [2, 3],
//     [2, [3, 4]],
//   ],
// ];

// console.log(someDeeperArray.flat(10));

/* ---------------------------------------------- (sort arr) -------------------------------------------------- */

// const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
// console.log(names.sort());
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120, -120];
// transactions.sort((x, y) => x - y);
// console.log(transactions);

/* --------------------------------------------- (Wort to array) ---------------------------------------------- */
// console.log(new Array(1, 2, 3));

// const arr = new Array(3);
// console.log(arr);

// // arr.fill(7);
// // arr.fill(7, 1);
// arr.fill(7, 1, 2);
// console.log(arr);

// const arr1 = [1, 1, 1, 1, 1];
// arr1.fill(3, 2, 4);
// console.log(arr1);

// Array from

// const arr = Array.from({ length: 5 }, () => 1);
// console.log(arr);

// const arr1 = Array.from({ length: 5 }, (_, index) => index + 1);
// console.log(arr1);

/* ------------------------------------------------ (project ATM) ---------------------------------------------- */

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
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

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';

  const transacs = sort ? account.transactions.slice().sort((a, b) => a - b) : account.transactions;

  transacs.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const transactionRow = `
      <div class="transactions__row">
        <div class="transactions__type transactions__type--${transType}">
          ${index + 1} ${transType}
        </div>
        <div class="transactions__value">${trans}$</div>
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
// console.log(accounts);
// const userName = 'Oliver Avila'; // nickname = 'oa'

// const nickname = userName
//   .toLowerCase()
//   .split(' ')
//   .map((user) => user[0])
//   .join('');
// console.log(nickname);

const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
  labelBalance.textContent = `${balance}$`;
  account.balance = balance;
};

// displayBalance(account1.transactions);

const displayTotal = function (account) {
  const depositTotal = account.transactions.filter((trans) => trans > 0).reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = `${depositTotal}$`;

  const withdrawalsTotal = account.transactions.filter((trans) => trans < 0).reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = `${withdrawalsTotal}$`;

  const interestTotal = account.transactions
    .filter((trans) => trans > 0)
    .map((depos) => (depos * account.interest) / 100)
    .filter((interest) => interest >= 5)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interestTotal}$`;
};

const updateUi = function (account) {
  // Display Transactions
  displayTransactions(account);
  // Display Balance
  displayBalance(account);
  // Display total
  displayTotal(account);
};

// displayTotal(account1.transactions);

// const coreyMartinezAccount = accounts.find((account) => account.userName === 'Corey Martinez');
// console.log(coreyMartinezAccount);

// login input
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find((account) => account.nickName === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI
    labelWelcome.textContent = `Welcome ${currentAccount.userName.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
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
    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeAccount = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);
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
  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.transactions.some((trans) => trans >= (loanAmount * 10) / 100)) {
    currentAccount.transactions.push(loanAmount);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
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
  // const transactionsUiArray = Array.from(transactionsUi);
  // // console.log(transactionsUiArray.map((elem) => Number(elem.textContent.replace('$', ''))));
  const transactionsUiArray = Array.from(transactionsUi, (elem) => Number(elem.textContent.replace('$', '')));
  console.log(transactionsUiArray);
});

/* -------------------------------------------- (practice array)----------------------------------------------- */
// // Ex. 1
// // const bankDepositTotal = accounts.map((acc) => acc.transactions).flat();
// const bankDepositTotal = accounts
//   .flatMap((acc) => acc.transactions)
//   .filter((trans) => trans > 0)
//   .reduce((acc, dep) => acc + dep, 0);

// console.log(bankDepositTotal);

// // Ex. 2
// // const withdrawalsOver300 = accounts.flatMap((acc) => acc.transactions).filter((trans) => trans <= -300).length;
// const withdrawalsOver300 = accounts
//   .flatMap((acc) => acc.transactions)
//   .reduce((acc, trans) => (trans <= -300 ? acc + 1 : acc), 0);

// // Ex. 3
// const { depTotal, withTotal } = accounts
//   .flatMap((acc) => acc.transactions)
//   .reduce(
//     (acc, trans) => {
//       // trans > 0 ? (acc.depTotal += trans) : (acc.withTotal += trans);
//       acc[trans > 0 ? 'depTotal' : 'withTotal'] += trans;
//       return acc;
//     },
//     {
//       depTotal: 0,
//       withTotal: 0,
//     }
//   );
// console.log(depTotal, withTotal);

// //Ex. 4
// // work to javascript a string

// const text1 = 'the work to javascript a string';

// const textToTitleCase = function (text) {
//   const exertions = ['to', 'in', 'a', 'the'];

//   const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

//   const titleCase = text
//     .toLowerCase()
//     .split(' ')
//     .map((word) => (exertions.includes(word) ? word : capitalizeWord(word)))
//     .join(' ');

//   return capitalizeWord(titleCase);
// };

// console.log(textToTitleCase(text1));
