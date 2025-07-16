'use strict'
// const MyData = ['Youre', 'Alan', 1974, 'programming instructor', ['Irina', 'Micheal']]

// console.log(MyData[4]);

// const person = {
//    name: 'Nurbolat',
//    lastname: 'Rakhmetov',
//    birthday: 1996,
//    job: 'teacher',
//    family: ['Mother', 'Father']
// };

// console.log(person);
// console.log(person.name);
// console.log(person['name']);

// const baseName = 'name';
// console.log(person['last' + baseName]);
// // console.log(person.'last' + baseName) not 


// // const userInput = prompt('What do you want to know about Nurbolat? choose between name, lastname, birthday, job, family');
// // console.log(userInput);

// // if(person[userInput]){
// //    alert(person[userInput]);
// // }else{
// //    alert("Don't be stupid");

// // }

// // Create new porperties

// person.location = "Kazakstan";
// person['telegram'] = '@nurbolat';
// console.log(person);

// console.log(`${person.name} has ${person.family.length} family members and the first one is ${person.family[0]}`);

const person = {
   name: 'Nurbolat',
   lastname: 'Rakhmetov',
   birthYear: 1996,
   job: 'teacher',
   family: ['Mother', 'Father'],
   hasDriver: false,
   // calcAge: function(birthYear){
   //    return 2025 - birthYear;
   // }
   // calcAge: function(){
   //    console.log(this);
   //    return 2025 - this.birthYear;
   // }
   calcAge: function(){
      this.age = 2025 - this.birthYear;
      return this.age;
   },
   getSummay: function(){
      this.text = `${this.name} is a ${this.calcAge()}-years old has ${this.hasDriver ? 'a': 'not'} drive`;
   }
};


// console.log(person.calcAge());
// console.log(person['calcAge']());
person.calcAge();
console.log(person.age);

person.getSummay();
console.log(person.text);