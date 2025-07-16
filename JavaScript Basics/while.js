// let i = 1;
// while(i <= 10){
//    console.log(`Push ups repetition ${i}`);
//    i++;
// }

let diceNumber = Math.trunc(Math.random() * 6 + 1);
while (diceNumber !== 6){
   console.log(diceNumber);
   diceNumber = Math.trunc(Math.random() * 6 + 1);
}
console.log(diceNumber);