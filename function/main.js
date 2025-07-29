'use strict';
/* ------------------------------------ ( Parameters ) -------------------------------------------- */

// const bookings = [];

// const makeBooking = function (flightNum, passengersNum = 1, price = 99 * passengersNum) {
//   //  Before ES6
//   //   passengersNum = passengersNum || 1;
//   //   price = price || 99;
//   const booking = {
//     flightNum,
//     passengersNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// makeBooking('QE123');
// makeBooking('TU235', 3, 390);
// makeBooking('TU235', 1);
// makeBooking('TU235', 4);
// makeBooking('TU235', undefined, 400);

/* ----------------------------------------- (Passing arguments. Values vs Reference) -------------------------------------- */

// const flightNumber = 'BV328';
// const passenger1145 = {
//   firstName: 'Jack',
//   lastName: 'Brown',
//   passport: 'HF128490',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'bv38';
//   passenger.firstName = passenger.firstName.toLowerCase();
//   passenger.lastName = passenger.lastName.toLowerCase();

//   if (passenger.passport === 'HF128490') {
//     alert('Welcome to the board!');
//   } else {
//     alert('Incorrect passport');
//   }
// };

// checkIn(flightNumber, passenger1145);
// console.log(flightNumber);
// console.log(passenger1145);

/* ----------------------------------------- ( callback function ) ----------------------------------------- */

// const removeSpaces = function (text) {
//   return text.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (text) {
//   const [first, ...others] = text.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order Function
// const converter = function (str, func) {
//   console.log(`This original text: ${str}`);
//   console.log(`The converted text: ${func(str)}`);
//   console.log(`Converted by: ${func.name}`);
// };
// converter('Hello to everyone', upperFirstWord);
// converter('Hello to everyone', removeSpaces);

// const twice = (num) => console.log(num * 2);
// // Callback function are very common in JS
// [1, 2, 3].forEach(twice);

/* ----------------------------------------- (return function ) -------------------------------------------- */

// const greet = function (greetingText) {
//   return function (name) {
//     console.log(`${greetingText} ${name}!`);
//   };
// };

// const greet = (greetingText) => {
//   return (firstName) => {
//     console.log(`${greetingText} ${firstName}!`);
//   };
// };

// const hi = greet('Hi');

// hi('Jack');
// hi('Diana');
// hi('Mick');

// greet('Hey')('Lilu');

/* ----------------------------------------- ( call() and apply() ) --------------------------------------- */

// const book = function (flightNumber, passengerName) {
//   console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
//   this.bookings.push({
//     flight: `${this.iataCode}${flightNumber}`,
//     passengerName,
//   });
// };

// const airline1 = {
//   airlineName: 'SkyUp',
//   iataCode: 'Su',
//   bookings: [],
//   //   book(flightNumber, passengerName) {
//   //     console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
//   //     this.bookings.push({
//   //       flight: `${this.iataCode}${flightNumber}`,
//   //       passengerName,
//   //     });
//   //   },
// };
// const airline2 = {
//   airlineName: 'EuroFlight',
//   iataCode: 'Su',
//   bookings: [],
// };

// // airline1.book(246, 'Jim Green');
// // airline1.book(635, 'Micheal Jordan');
// // console.log(airline1.bookings);

// // const book = airline1.book;
// //this doesn't work
// // book(345, 'Adam John');

// // call()
// book.call(airline2, 345, 'Adam John');
// console.log(airline2);
// book.call(airline1, 111, 'Bob mob');
// console.log(airline1);

// // apply()
// const flightData = [111, 'Nick Wong'];
// book.apply(airline2, flightData);
// console.log(airline2);

// book.call(airline2, ...flightData);
// console.log(airline2);

/* ----------------------------------------------- (bind) -------------------------------------------------- */

//  book(flightNumber, passengerName) {
//    console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
//    this.bookings.push({
//      flight: `${this.iataCode}${flightNumber}`,
//      passengerName,
//    });
//  },

// const airline1 = {
//   airlineName: 'SkyUp',
//   iataCode: 'Su',
//   bookings: [],
//   book(flightNumber, passengerName) {
//     console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNumber}`,
//       passengerName,
//     });
//   },
// };
// const airline2 = {
//   airlineName: 'EuroFlight',
//   iataCode: 'Su',
//   bookings: [],
// };
// const airline3 = {
//   airlineName: 'Turkyes fly',
//   iataCode: 'Tu',
//   bookings: [],
// };

// const book = airline1.book;
// const bookAirline2 = book.bind(airline2);

// bookAirline2(45, 'John Doe');
// console.log(airline2);

// const bookAirline3 = book.bind(airline3);
// bookAirline3(233, 'Adam Smit');

// const bookAirline3Light21 = book.bind(airline3, 21);
// bookAirline3Light21('Jack Smith');
// bookAirline3Light21('Lana Rou');

// bind() with lisnerr

// airline1.airplanes = 200;
// airline1.purchaseAirplane = function () {
//   console.log(this);
//   this.airplanes++;
//   console.log(this.airplanes);
// };

// // airline1.purchaseAirplane();
// document.querySelector('#pro').addEventListener('click', airline1.purchaseAirplane.bind(airline1));

// // Partial application
// const getPerecentage = (totalValue, value) => (value / totalValue) * 100;
// console.log(getPerecentage(20, 140));

// const getPerecentage23789 = getPerecentage.bind(null, 23789);
// console.log(getPerecentage23789(100));

/* ----------------------------------------------- (Task one) --------------------------------------------- */
// Let's create a simple survey application!
// A survey has a question, a set of options that users can choose from, and an array with the number of responses for each option. This data is stored in the survey object, which you can see below.

// 1. Create a method called logNewAnswer for the survey object. The method should perform 2 functions:
// Display a prompt window so that the user can enter the number of the selected option. The text in the prompt should look like this:
// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

// Update the answers property based on the number entered. For example, if option 2 is selected, increase the value in the second element of the array answers by 1. Make sure that you entered a number and that it makes sense (for example, the answer 23 does not make sense, right?)
// 2. Call this method when users click the Take Survey button. Create this button in the index.html file as we created the Purchase Airplane button earlier.
// 3. Create a printResults method that prints the survey results to the console. The method takes as input a string (the type parameter), which can be either “string” or “array”. If the type is “array”, just display the answers array as it is using console.log(). This should be the default. If the type is “string”, display a string like this: “Survey results: 7, 5, 3, 2, 6.”
// 4. Метод printResults должен запускаться для каждого вызова метода logNewAnswer
// 5. Use the printResults method to display 2 arrays from test data. Use both "string" and "array" options. Don't put arrays in the survey object! So what should this keyword look like in this situation?

// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

// const btn = document.querySelector('#pro');

// const printResult = function (type = 'array') {
//   if (type == 'array') {
//     console.log(this.answers);
//   } else {
//     console.log(`Survey results: ${this.answers.join(', ')}.`);
//   }
// };

// const logNewAnswer = function () {
//   const input = prompt(`
//     ${this.question}\n${this.options.join('\n')}
//   `);

//   const choice = Number(input);

//   if (typeof choice === 'number' && choice >= 0 && choice < this.answers.length) {
//     this.answers[choice]++;
//   } else {
//     alert(`for example, the answer ${choice} does not make sense, right?`);
//   }
//   printResult.call(this);
// };

// const survey = {
//   question: 'What programming language would you like to learn?',
//   options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
//   answers: new Array(5).fill(0),
//   // printResult(type = 'array') {
//   //   if (type == 'array') {
//   //     console.log(this.answers);
//   //   } else {
//   //     console.log(`Survey results: ${this.answers.join(', ')}.`);
//   //   }
//   // },
// };

// btn.addEventListener('click', logNewAnswer.bind(survey));
// printResult.call({ answers: [2, 4, 5] }, 'string');

/* ---------------------------- (Immediately Invoked Function Expression (IIFE)) ------------------------- */

// const runOneTime = function () {
//   console.log('You will never see this function call again.');
// };

// // runOneTime();
// // runOneTime();

// (function () {
//   console.log('You will never see this function call again.');
// })();

// (() => console.log('Arrow one time'))();

/* ------------------------------------------------- (Closures) ------------------------------------------ */

// const safeBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };

// const booker = safeBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

/* ------------------------------------------------- (Closures examples) ------------------------------------------ */
// Example one
// let f1;

// const f2 = function () {
//   const x = 11;
//   f1 = function () {
//     console.log(x ** 2);
//   };
// };

// const f3 = function () {
//   const y = 12;
//   f1 = function () {
//     console.log(y ** 2);
//   };
// };

// f2();
// f1();
// f3();
// f1();

// const boardPassengers = function (passengerNumber, secondBeforeBoarding) {
//   const passengerInGroup = passengerNumber / 2;
//   setTimeout(function () {
//     console.log(`All ${passengerNumber} passengers are noq boarding`);
//     console.log(`Each group contains ${passengerInGroup} passengers`);
//   }, secondBeforeBoarding * 1000);
//   console.log(`The boarding will start in ${secondBeforeBoarding}`);
// };

// const passengerInGroup = 1500;
// boardPassengers(150, 5);

/* ------------------------------------------------- (Task two) --------------------------------------------------- */
// 1. В конце функции IIFE ниже прикрепите обработчик события, который меняет цвет выбранного элемента h2 на зелёный при каждом клике на элементе body. Не выбирайте элемент h2 снова!
// 2. А теперь объясните себе (или кому-нибудь поблизости), почему это сработало? Не торопитесь. Подумайте, когда именно выполняется callback функция и что это означает для переменных, задействованных в этом примере.
// (function () {
//   const h2 = document.querySelector('h2');
//   h2.style.color = 'orange';
//   document.querySelector('body').addEventListener('click', () => {
//     h2.style.color = 'red';
//   });
// })();

// console.log('hello world');
