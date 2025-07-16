'use strict'

//Declaration
function getAgeOne(birthYear, yearNow){
   const age = yearNow - birthYear;
   return age
}

const myAge = getAgeOne(1996, 2025)
console.log(myAge)

//Expression

const getAgeTwo = function (birthYear, yearNow){
   const age = yearNow - birthYear;
   return age
}

const my_age = getAgeTwo(1996, 2025);
console.log(my_age);