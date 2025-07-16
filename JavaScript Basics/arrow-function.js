//Exp

const getAgeTwo = function (birthYear, yearNow){
   const age = yearNow - birthYear;
   return age
}

const my_age = getAgeTwo(1996, 2025);
console.log(my_age);

//arrow func

const myAge = (birthYear, yearNow) => yearNow - birthYear;
console.log(myAge(1996, 2025));

const canBuyAlcohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPersonOlderThan21 = age >= 21 ? true: false;
  return isPersonOlderThan21;
}

console.log(canBuyAlcohol(1996, 2025));