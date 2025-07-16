// loop

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)

// for(let i = 0; i < 7; i++){
//    console.log(i + 1);
// }

// lop and array

const user = ['Jack', 'Black', 1995, 'developer', ['Iri', 'Mike']];
const types = [];

// for(let i = 0; i < user.length; i++){
//    console.log(user[i], typeof user[i]);
//    types[i] = typeof user[i];
// }
// console.log(types);


// continue and break
for(let i = 0; i < user.length; i++){
   if(typeof user[i] !== 'string') continue;
   types.push(user[i]);
}
console.log(types);


