'use strict'

// function printText(){
//    console.log("hello world");
// }

// printText();

function colorizer(item, color){
   console.log(item, color);
   const colorizerItem = `the ${item} is ${color}`;
   console.log(colorizerItem);
   return colorizerItem
}

const x = colorizer('desk', 'red');
console.log(x);

y = 'hello'
console.log(typeof y);