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

/* ------------------------------------------------ (project ATM) ---------------------------------------------- */
