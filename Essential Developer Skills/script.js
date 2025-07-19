'use strict';

// const myVar = 25;

// while (false) {}

// const calcAge = (birthYear) => 2025 - birthYear;

// console.log();

// console.log('');

// console.log(myVar);

// Problem
/*
We work on whether forecast app, specifically on humidity feature for now. The most recent task is: "calculate the humidity amplitude for given array of humidities for one day. Note, that sometimes there can be an error in data, caused by sensor error."
*/

//1. Understand the problem
// - What is the humidity amplitude? this is the difference between min and max values of humidity.
// - How to calculate min and max values in array
// - How sensor error looks like in in data array? What to do with this error?

//2. Divide into sub-problems

// - How to ignore data errors
// - How to find min value in array
// - How to find max value in array
// - Subtract min from max and return the result
// - how to merge two arrays

// const calculateHumiditiesAmplitude = function (h1, h2) {
//   const humidities = h1.concat(h2);
//   let max = humidities[0];
//   let min = humidities[1];
//   for (let i = 1; i < humidities.length; i++) {
//     if (typeof humidities[i] !== 'number') continue;
//     if (max < humidities[i]) max = humidities[i];
//     if (min > humidities[i]) min = humidities[i];
//   }
//   console.log(min, max);
//   return max - min;
// };

// const h1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// const h2 = [1, 100];

// console.log(calculateHumiditiesAmplitude(h1, h2));

// const celsiusToKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Temperature in Celsius')),
//   };

//   // console.log(measurement);
//   console.table(measurement);
//   console.log(measurement.value);

//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// console.log(celsiusToKelvin());

// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

const printHumiditiesForecast = (humidities) => {
  // debugger;
  let str = '';
  for (let i = 0; i < humidities.length; i++) {
    const target = humidities[i];
    str += `${target}% humidity in ${i + 1} days \n`;
  }
  return str;
};

const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

console.log(printHumiditiesForecast(data1));
console.log('-------------------------------');
console.log(printHumiditiesForecast(data2));

// 1 < 3 || console.log(1);
// 1 > 3 || console.log(2);
// console.log(Boolean(console.log(2)));
