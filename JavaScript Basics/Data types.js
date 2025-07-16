// Primitive data types 
// String 
// Number 
// Boolean 
// Null 
// Undefiend 
// Symbols[ES6]

// Reference data types 
// Array 
// Object Literal 
// Function 
// Date 
// Anything else

// let x = 'something';
// console.log(x);
// x = 3;
// console.log(x);

//String
const someText = 'Some text';
console.log(typeof someText);

//Number
const someNumber = 10;
console.log(typeof someNumber);

//Boolean
const someBoolean = true;
console.log(typeof someBoolean);

//Null
const someNull = null;
console.log(typeof someNull);

//Undefined
let someUndefined;
console.log(typeof someUndefined);

//Sybomls
const someSymbol = Symbol();
console.log(typeof someSymbol);


//Reference
//array
const someArray = [10, 1];
console.log(typeof someArray);

// Object Literal
const someObjectLiteral = {
   first: 12,
   second: 14
}
console.log(typeof someObjectLiteral);

// Function
const someFunction = new Function();
console.log(typeof someFunction);

//Date
const someDate = new Date();
console.log(typeof someDate);