'use strict';
// const greeting = 'hello!';

// const foo = () => {
//   let x = 3;
//   const y = bar(1, 2);
//   x += y;
//   return x;
// };

// function bar(a1, a2) {
//   var z = 5;
//   return z;
// }

// const n = foo();

// // Call stack

// // 1. Global context 3 finish
// // greeting = 'hello'
// // foo = <function>
// // bar = <function>
// // n = <unknown>

// // 2. foo() context 2 finish
// // x = 3
// // y = <unknown>

// // 3. bar() context  1 finish
// // z = 5
// // arguments = [1, 2]

// //declartion function prisovenie
// // staiment 2 + 3

// ------------------------------------(Scope & Scoping)--------------------------------
//Scoping
//Lexical scoping
//Scope
//Scope of a variable

//1. Global scope
//2. function scope
//3. Block scope(es6) if, for ..

//
// const firstName = 'Nurbolat'; // global

// function outer() {
//   // global
//   const age = 47; // function
//   if (age > 40) {
//     var isAdult = true; // function
//     const decade = 4; // block
//   }
//   function inner(params) {
//     // function
//     const job = 'look for a good job'; // function
//     console.log(`${firstName} is a ${age}years old ${job}. + ${isAdult}`);
//   }
//   inner();
// }

// outer();
//scope chain ^

// practice one scope

// function getAge(birthYear) {
//   const age = 2025 - birthYear;
//   function printAge() {
//     let info = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(info);

//     if (age >= 18) {
//       var isAdult = true;
//       const firstName = 'Alex';
//       const adult = `${firstName} is adult`;
//       console.log(adult);

//       function sum(a, b) {
//         return a + b;
//       }
//       // console.log(sum(1, 3));
//       // let info = 'New info';
//     }
//     console.log(info);
//     //console.log(isAdult);
//     //sum(1, 2);
//   }
//   printAge();
//   //console.log(isAdult);
//   //sum(1, 2);
// }
// const firstName = 'Nurbolat';
// getAge(1996);

// -------------------------------------(variable Environment. Hosting & TDZ)------------------------------------
//                               hoisted     |       init value      |      scope
//function declaration              YES      |     fact function     |      block
//var                               YES      |    undefined          |      function
//let and const                     NO       |    <uninitialized>TDZ |      block
//expression & arrow                NO       |   <uninitialized>TDZ  |      block

// ---------------------------- |practice two hosting|------------------------------

//console.log(firstName); //undef
// console.log(job); // TDZ
// console.log(birthYear); // TDZ

// console.log(declSum(2, 3)); // 5
// console.log(addSum(2, 3)); // TDZ
// console.log(twoSum(2, 3)); // TDZ

// var firstName = 'Nurbolat';
// let job = 'teacher';
// const birthYear = 1996;

// //functions

// function declSum(a, b) {
//   return a + b;
// }

// const addSum = function (a, b) {
//   return a + b;
// };

// const twoSum = (a, b) => {
//   return a + b;
// };

// //example hosting

// console.log(isUserValid);

// if (!isUserValid) {
//   deleteUser();
// }

// var isUserValid = true;

// function deleteUser() {
//   console.log('User is deleted');
// }

// //example two
// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);

// --------------------------------------------------------(this)-------------------------------
// practice
// console.log(this);

// const getAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// getAge(2020);

// const getAgeArr = (birthYear) => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// getAgeArr(2023);

// // const userAdd = {
// //   birthYear: 1997,
// //   getAge: function () {
// //     console.log(this);
// //   },
// // };

// const userAdd = {
//   birthYear: 1997,
//   getAge: function () {
//     console.log(this);
//     console.log(2025 - this.birthYear);
//   },
// };

// userAdd.getAge();

// const userNow = {
//   birthYear: 2020,
// };

// userNow.getAge = userAdd.getAge;
// userNow.getAge();

// const f = userNow.getAge;

// ------------------------------------------------ (Regular vs Arrow Functions) ---------------------------------

// var firstName = 'Jack';

// const userAdd = {
//   firstName: 'Nurbolat',
//   birthYear: 1997,
//   getAge: function () {
//     console.log(this);
//     console.log(2025 - this.birthYear);
//   },
//   sayGreeting: () => {
//     console.log(this);
//     console.log(`Hello, I'm ${this.firstName}`);
//   },
// };

// const userAdd = {
//   firstName: 'Nurbolat',
//   birthYear: 1997,
//   getAge: function () {
//     //  console.log(this);
//     //  console.log(2025 - this.birthYear);
//     //old approach before ES6
//     //  const self = this; // self or that
//     //  const isAdult = function () {
//     //    console.log(self);
//     //    console.log(2025 - self.birthYear >= 18);
//     //    // console.log(2025 - this.birthYear >= 18);
//     //  };
//     //new approach after ES6
//     const isAdult = () => {
//       console.log(this);
//       console.log(2025 - this.birthYear >= 18);
//       // console.log(2025 - this.birthYear >= 18);
//     };
//     isAdult();
//   },
//   sayGreeting: function () {
//     //  console.log(this);
//     console.log(`Hello, I'm ${this.firstName}`);
//   },
// };

// // userAdd.sayGreeting();
// userAdd.getAge();
// // console.log(this.firstName);

// ------------------- (arguments arrow functions)

// const exprSum = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// exprSum(1, 3);
// exprSum(1, 3, 4, 5, 7);

// const arrSum = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// arrSum(2, 11, 22, 33);

// ------------------------------- (Types Primitives vs Reference) ------------------------------

// Primitives Type Number, String, Boolean, Undefined, NULL, Symbol, Bigint
// Reference type  Object array function ...

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//   foo: 'bar',
//   a: 1,
// };

// const y = x;
// y.a = 2;

// console.log('Object x: ', x);
// console.log('Object y: ', y);

const jane = {
  firstName: 'Jane',
  lastName: 'Brown',
  age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('marriedJane: ', marriedJane);

// Copy object

const sara = {
  firstName: 'Sara',
  lastName: 'Brown',
  age: 25,
  familyMembers: ['Jack', 'Bob', 'Greta'],
};

const saraCopy = Object.assign({}, sara); // first level only without function in
saraCopy.lastName = 'White';

saraCopy.familyMembers.push('Bill', 'Marta');

console.log('sara: ', sara);
console.log('saraCopy: ', saraCopy);
