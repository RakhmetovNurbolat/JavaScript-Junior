// Перепишите функцию getAverageHumanAge из Задания 2, но на этот раз как стрелочную функцию и с использованием method chaining.

const getAverageHumanAge = function (catAges) {
  //   const convert = catAges.map((catAge) => (catAge <= 2 ? catAge * 10 : catAge * 7));
  //   const young = convert.filter((catAge) => catAge >= 18);
  //   const s = young.reduce((acc, item) => acc + item);
  const allFilter = catAges
    .map((catAge) => (catAge <= 2 ? catAge * 10 : catAge * 7))
    .filter((catAge) => catAge >= 18)
    .reduce((acc, item, _, arr) => acc + item / arr.length, 0);
  return allFilter;
};

taskOne = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
taskTwo = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

console.log(getAverageHumanAge(taskOne));
console.log('-------------------------------------------------------');
getAverageHumanAge(taskTwo);
