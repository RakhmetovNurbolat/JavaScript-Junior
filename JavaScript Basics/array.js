// const color1 = 'red';
// const color2 = 'orange';
// const color3 = 'yellow';
// const color4 = 'green';
// const color5 = 'blue';
// const color6 = 'indigo';
// const color7 = 'violet';

// // console.log(color2);

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// console.log(rainbowColors[1]);

// const stringNumbers = new Array('one', 'two', 'tree');
// console.log(stringNumbers);

// const anyItems = [4, true, 'one', new Date()];
// console.log(anyItems);

const numbers = [1,3,4,5]

let result;

result = numbers.length;

result = Array.isArray(numbers);

result = numbers.indexOf(4);

// push() pop()

result = numbers.push(10);

result = numbers.pop();

//unshift shift deletes element

result = numbers.unshift(3);
result = numbers.shift();

result = numbers.push(1,22,33);
result = numbers.unshift(12,22);

result = numbers.splice(1, 1);

// result = numbers.splice(1, 3);

// result = numbers.reverse();

result = numbers.slice(0, 3);

// result = numbers.concat(result);


console.log(result);
console.log(numbers);