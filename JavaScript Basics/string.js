let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' '
const age = 25;
const greeting = 'Hey there!';

// concatenation
result = 'Jack';
result = firstName + space + lastName;

result = greeting + space + 'My name is' + space + firstName + ' ' + lastName + ". I'm " + age + " year old.";

//Escaping

result = 'I\'m 34 years old';
result = "i like \"Star wars\" movie";

// Properties and methods
result = 'Hello!'.length;
result = firstName.length;

// toUpperCase

result = firstName.concat(' ', lastName, space, age)
result = result.toUpperCase();
result = result.toLowerCase();

//index
result = firstName[0];

result = 'Hello'.indexOf('l');
result = 'Hello'.lastIndexOf('l');
result = 'Hello'.lastIndexOf('t');

result = 'Hello lol'.lastIndexOf('lo');

//charAt
result = firstName.charAt(0);
const longString = "hi i'm a long sting";

result = longString.charAt(longString.length -1);

//substring()
result = greeting.substring(4, 9);
result = greeting.slice(-5);

//split
result = longString.split(' ');

const colors = 'red, orange, blue';
result = colors.split(',');

//replace
result = colors.replace('blue', 'yellow');

//includes()
result = colors.includes('red');

console.log(result);