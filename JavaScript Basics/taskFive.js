// Let's go back to the BMI index! This time, we'll use objects to do the calculations! 
// BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)
// Your task:
// We have two friends - Jack and Mike
// 1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black).
// 2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method.
// 3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"
// Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.
// Happy coding!


const personOne = {
   name: 'Jack',
   lastname: 'White',
   height: 1.70,
   weight: 79,
   getBMI: function(){
      this.BMI = this.weight / (this.height * this.height);
      return this.BMI;
   }
}

const personTwo = {
   name: 'Mike',
   lastname: 'Black',
   height: 1.93,
   weight: 91,
   getBMI: function(){
      this.BMI = this.weight / (this.height * this.height);
      return this.BMI;
   }
}

if(personOne.getBMI() > personTwo.getBMI()){
   console.log(`${personOne.name} ${personOne.lastname} BMI (${personOne.BMI}) is higher than ${personTwo.name} ${personTwo.lastname} (${personTwo.BMI})!`);
}else if(personOne.BMI < personTwo.BMI){
   console.log(`${personTwo.name} ${personTwo.lastname} BMI (${personTwo.BMI}) is higher than ${personOne.name} ${personOne.lastname} (${personOne.BMI})!`);
}else{
   console.log('equal');
}
