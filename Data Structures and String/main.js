'use strict';

const workingHours = {
  wed: {
    open: 10,
    close: 23,
  },
  fri: {
    open: 10,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
  sun: {
    open: 10,
    close: 20,
  },
};

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  //old approach
  // workingHours: workingHours,
  //new approach
  workingHours,
  //old approach
  // orderFood: function (appetizersIndex, mainMenuIndex) {
  //   return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  // },
  //new approach
  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
  foodDelivery({ mainMenuIndex = 0, appetizersIndex = 0, deliveryTime = '18:00', address }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${address} at ${deliveryTime}`
    );
  },
  orderSushi(ing1, ing2, ing3) {
    console.log(`You have ordered sushi with ${ing1} ${ing2} ${ing3}`);
  },
  orderRamen(noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};

// japaneseRestaurant.foodDelivery({
//   deliveryTime: '12:30',
//   address: '108 Markham Woods Rd, Longwood, USA',
//   mainMenuIndex: 1,
//   appetizers: 0,
// });

// ------------------------------------------------------( Destructuring array )---------------------------------------------

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[3];

// const [a, b, c] = arr;
// // console.log(a, b, c);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// swap
// example one
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// swap example two
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

//Returning 2 values from function
// const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizer, mainFood);
// Nested destructing
// const nestedArr = [1, 2, [7, 9]];

// const [a, , [b, c]] = nestedArr;
// console.log(a, b, c);

//Default values

// const unknownArr = [3, 5];
// const [a = 0, b = 0, c = 0] = unknownArr;
// console.log(a, b, c);

// ---------------------------------------------( Destructuring object )------------------------------------------

// const { workingHours, name, categories } = japaneseRestaurant;
// console.log(workingHours, name, categories);

// const { workingHours: hours, name: restName, categories } = japaneseRestaurant;
// console.log(hours, restName, categories);

// // default values
// const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant;
// console.log(menu, starterMenu);

// //Mutating variables
// // let x = 5;
// // let y = 7;
// // const obj = { x: 11, y: 22, z: 33 };
// // ({ x, y } = obj);
// // console.log(x, y);

// // Nested object
// const {
//   sun: { open: openHours, close: closeHours },
// } = hours;
// console.log(openHours, closeHours);

// -------------------------------------------------- (Spread) --------------------------------------------
// const arr = [1, 2, 3];

// //Old bad approach
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);

// //New approach with spread operator
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread);

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
// console.log(newMenu);

// // Array coping

// const categoriesCopy = [...japaneseRestaurant.categories];

// //Merge arrays

// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);
// // Iterable - array, string , map, set
// // Objects aren't Iterable

// const greeting = 'hi';
// const greetingLetters = [...greeting, ' ', '!'];
// console.log(greetingLetters);
// console.log(...greeting);
// // console.log(`${...greeting}`);

// const ingridients = [
//   prompt(`Ingredient 1 for your sushi`),
//   prompt(`Ingredient 2 for your sushi`),
//   prompt(`Ingredient 3 for your sushi`),
// ];

// console.log(ingridients);

// japaneseRestaurant.orderSushi(...ingridients);

// // objects

// const newJapaneseRestaurant = {
//   ...japaneseRestaurant,
//   owner: 'Suzuki',
// };
// console.log(newJapaneseRestaurant);

// const japaneseRestaurantCopy = { ...japaneseRestaurant };
// japaneseRestaurantCopy.name = 'Suzuki Sushi';
// console.log(japaneseRestaurantCopy.name);
// console.log(japaneseRestaurant.name);

//---------------------------------------------------- (Pattren Rest and Parametrs Rest) ---------------------------------------

// Pattren Rest of array
//This is spread operator, because ... are on the right side of  =
// const arr = [1, 2, ...[3, 4]];

// //This is rest pattern operator, because ... are on the left side of  =
// const [a1, a2, ...items] = [1, 2, 4, 5];

// console.log(a1, a2, items);

// const [seaweed, , edamame, ...otherFood] = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(seaweed, edamame, otherFood);

// // Pattern rest of object

// const { sat, sun, ...weekdays } = japaneseRestaurant.workingHours;

// console.log(sat, sun, weekdays);

// rest pattern with function
// const sum = function (...numbers) {
//   let s = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     s += numbers[i];
//   }
//   console.log(s);
// };

// sum(2, 5);
// sum(1, 4, 7, 3);
// const number = [2, 44, 13];
// sum(...number);

// japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');
// japaneseRestaurant.orderRamen('Ordinary Noodle');

/* ---------------------------------------------- (Short Circuit Evaluation)--------------------------------------  */

// OR (||) operator  Use any data types, return any data types, short-circuit-evaluation
// console.log(5 || 'Hello!');
// console.log('' || 'Hello!');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || '' || 0 || 'hey!' || 23 || null);

// japaneseRestaurant.guestsNumber = 10;
// // const guests = japaneseRestaurant.guestsNumber ? japaneseRestaurant.guestsNumber : 5;
// // console.log(guests);

// const guests1 = japaneseRestaurant.guestsNumber || 5;
// console.log(guests1);

// AND (&&) operator  Use any data types, return any data types, short-circuit-evaluation
// console.log(0 && 'hello');
// console.log(1 && 'hello');
// console.log('hey' && 34 && 0 && 44 && null);

// japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');

/* ---------------------------------------------- (Nullish Coalescing) -------------------------------------------- */

// japaneseRestaurant.guestsNumber = 0;
// const guests = japaneseRestaurant.guestsNumber || 5;
// console.log(guests);

// // Nullish values: null and undefined  (NOT 0 or '')
// const guests1 = japaneseRestaurant.guestsNumber ?? 5;
// console.log(guests1);

/* ------------------------------------------------ task one -------------------------------------------------------- */

// We are creating a soccer betting app ⚽💰!
// Let's say we are getting data about a specific game from a web service (the game variable below). In this task, we will work with this data.
// const game = {
//  team1: 'REAL MADRID',
//  team2: 'BARCELONA',
//  players: [
//    [
//      'Courtois',
//      'Vazquez',
//      'Militao',
//      'Nacho',
//      'Mendy',
//      'Casemiro',
//      'Valverde',
//      'Modrich',
//      'Kroos',
//      'Vinicius',
//      'Benzema',
//    ],
//    [
//      'Stegen',
//      'Mingueza',
//      'Araujo',
//      'Lenglet',
//      'Dest',
//      'Busquets',
//      'Jong',
//      'Alba',
//      'Messi',
//      'Pedri',
//      'Dembele',
//    ],
//  ],
//  score: '2:1',
//  scored: ['Kroos', 'Benzema', 'Mingueza'],
//  date: 'Apr 10th, 2021',
//  odds: {
//    team1: 1.48,
//    draw: 2.53,
//    team2: 4.25,
//  },
// };

// 1. Create separate arrays with players for each team (variables players1 and players2).
// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
// 3. Create an array allPlayers containing all players from both teams (22 players).
// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

// const game = {
//   team1: 'REAL MADRID',
//   team2: 'BARCELONA',
//   players: [
//     [
//       'Courtois',
//       'Vazquez',
//       'Militao',
//       'Nacho',
//       'Mendy',
//       'Casemiro',
//       'Valverde',
//       'Modrich',
//       'Kroos',
//       'Vinicius',
//       'Benzema',
//     ],
//     ['Stegen', 'Mingueza', 'Araujo', 'Lenglet', 'Dest', 'Busquets', 'Jong', 'Alba', 'Messi', 'Pedri', 'Dembele'],
//   ],
//   score: '2:1',
//   scored: ['Kroos', 'Benzema', 'Mingueza'],
//   date: 'Apr 10th, 2021',
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };
// //1
// // My bad decision
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// // Answer
// const [players1, players2] = game.players;
// //2
// //My decision
// const [goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper, fieldPlayers);
// //3
// const allPlayers = [...players1, ...players2];
// //4
// const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
// //5
// //my bad decision
// // const { team1, draw, team2 } = game.odds;
// //answer
// const {
//   odds: { team1, draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...gamePlayers) {
//   console.log(...gamePlayers, 'count = ', gamePlayers.length);
// };
// printGoals(...game.scored);
// printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
// // 7
// // My best decision
// team1 > team2 && console.log('Barca');
// team1 < team2 && console.log('Real');
// team1 == team2 && console.log('Draw');

/* ------------------------------------------------- (For of) ---------------------------------------------------- */
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const food of menu.entries()) {
//   console.log(`${food[0] + 1}. ${food[1]}`);
// }
// for (const [index, food] of menu.entries()) {
//   console.log(`${index + 1}. ${food}`);
// }

/* ------------------------------------------------ (Object liters) ------------------------------------------ */
// console.log(japaneseRestaurant);
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const workingHoursCopy = {
//   [weekdays[2]]: {
//     open: 10,
//     close: 23,
//   },
//   [weekdays[4]]: {
//     open: 10,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
//   [weekdays[6]]: {
//     open: 10,
//     close: 20,
//   },
// };
// console.log(workingHoursCopy);

/* ----------------------------------------------- (Optional Chaining) ------------------------------------------ */
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const workingHoursCopy = {
//   [weekdays[2]]: {
//     open: 10,
//     close: 23,
//   },
//   [weekdays[4]]: {
//     open: 10,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
//   [weekdays[6]]: {
//     open: 10,
//     close: 20,
//   },
// };
// // old approach
// // japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu && console.log(japaneseRestaurant.workingHours.thu.open);
// // japaneseRestaurant.workingHours.fri && console.log(japaneseRestaurant.workingHours.fri.open);
// // New approach using optional chaining
// console.log(japaneseRestaurant.workingHours?.thu?.open);
// for (const day of weekdays) {
//   const open = japaneseRestaurant.workingHours[day]?.open ?? 'never';
//   console.log(`On ${day} restaurant opens at ${open}`);
// }

// //Methods

// console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'method does not exit');
// console.log(japaneseRestaurant.Food?.(1, 2) ?? 'method does not exit');

// // Arrays

// const posts = [
//   {
//     name: 'JS is cool',
//     username: 'Ted',
//   },
//   {
//     name: 'JS is shit',
//     username: 'Dick',
//   },
// ];
// console.log(posts[0]?.name ?? 'This post does not exist');
// console.log(posts[2]?.name ?? 'This post does not exist');

// // Check if array is empty
// const arr = [];
// console.log(posts[0]?.name ?? 'This array is empty');
// console.log(arr[0]?.name ?? 'This array is empty');

/* ----------------------------------------------- ( For and objects ) --------------------------------------------*/

// // const props = Object.keys(workingHours);
// // console.log(props);

// // console.log(`"Banzai" opens ${props.length} days in a week`);

// // for (const day of Object.keys(workingHours)) {
// //   console.log(day);
// // }

// // //Property values
// // const values = Object.values(workingHours);
// // console.log(values);

// // // Property names and values

// const entries = Object.entries(workingHours);
// // console.log(entries);

// for (const entry of entries) {
//   console.log(entry);
// }
// for (const [day, { open, close }] of entries) {
//   console.log(`Restaurant "Banzai" on ${day} opens at ${open} and closes at ${close}`);
// }

/* ----------------------------------------------- (Task Two) -------------------------------------------------- */
// Let's get on with our soccer betting app ⚽💰!
// Continue using the previously used game variable.
// 1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
// 2. Use a loop to calculate the average odd and print it to the console
// 3. Print 3 odds to the console, but formatted, exactly like this:
// Rate for REAL MADRID victory: 1.48
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25
// Get team names directly from the game object, don't hardcode them
// 4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//       {
//         Kroos: 1,
//         Benzema: 1,
//         Mingueza: 1
// }
// const game = {
//   team1: 'REAL MADRID',
//   team2: 'BARCELONA',
//   players: [
//     [
//       'Courtois',
//       'Vazquez',
//       'Militao',
//       'Nacho',
//       'Mendy',
//       'Casemiro',
//       'Valverde',
//       'Modrich',
//       'Kroos',
//       'Vinicius',
//       'Benzema',
//     ],
//     ['Stegen', 'Mingueza', 'Araujo', 'Lenglet', 'Dest', 'Busquets', 'Jong', 'Alba', 'Messi', 'Pedri', 'Dembele'],
//   ],
//   score: '2:1',
//   scored: ['Kroos', 'Benzema', 'Mingueza', 'Mingueza'],
//   date: 'Apr 10th, 2021',
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

// //1 my decision
// for (const [item, name] of game.scored.entries()) {
//   console.log(`Goal ${item + 1} - ${name}`);
// }
// //1 teacher's decision the same :)

// //2 my decision
// //console.log((game.odds.team1 + game.odds.team2 + game.odds.draw) / 3);
// //2 teacher's decision
// const oddsValues = Object.values(game.odds);
// let s = 0;
// for (const item of oddsValues) {
//   s += item;
// }
// console.log(s / oddsValues.length);
// //3 My decision
// // console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
// // console.log(`Rate for Draw: ${game.odds.draw}`);
// // console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);
// // teacher decision
// for (const [teamName, odd] of Object.entries(game.odds)) {
//   console.log(`Rate for ${game?.teamName ?? teamName} victory: ${odd}`);
// }
// //4
// const goalScorers = {};
// for (const player of game.scored) {
//   goalScorers[player] = (goalScorers[player] ?? 0) + 1;
// }
// console.log(goalScorers);

/* ----------------------------------------------- ( Set ) ---------------------------------------------------- */
// Remove duplicates

// const orders = new Set(['Sushi', 'Ramen', 'Sushi', 'Tempura', 'Ramen', 'Sushi']);
// console.log(orders);

// console.log(new Set('Hello'));
// console.log(new Set());
// console.log(orders.size);
// console.log(orders.has('Sushi'));
// console.log(orders.has('Pizza'));

// orders.add('Edamame');
// orders.add('Edamame');

// orders.delete('Tempura');

// // orders.clear();
// console.log(orders);

// for (const order of orders) {
//   console.log(order);
// }

// const mealIngredients = ['Rice', 'Pepper', 'Garlic', 'Pepper', 'Garlic', 'Meat', 'Meat', 'Garlic'];
// console.log(new Set(mealIngredients).size);
// const mealIngredientsSet = new Set(mealIngredients);
// console.log(mealIngredientsSet);

// const mealIngredientsUnique = [...mealIngredientsSet];
// console.log(mealIngredientsUnique);

/* ----------------------------------------------- ( Map ) ---------------------------------------------------- */

// const restaurant = new Map();
// restaurant.set('name', "McDonald's");
// restaurant.set(1, 'London, England');
// restaurant.set(2, 'Paris, France');
// restaurant.set(3, 'Kiev, Ukraine');

// restaurant
//   .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
//   .set('open', 10)
//   .set('close', 23)
//   .set(true, 'Bench is open :)')
//   .set(false, 'Bench is closed :(');

// // console.log(restaurant.get('name'));
// // console.log(restaurant.get(true));
// // console.log(restaurant.get(3));

// // const currentTime = 22;

// // console.log(restaurant.get(restaurant.get('open') <= currentTime && currentTime < restaurant.get('close')));
// console.log(restaurant.has('categories'));
// console.log(restaurant.delete(1));
// // restaurant.clear();
// const arr = [1, 2, 3];
// restaurant.set(arr, 'hello');
// console.log(restaurant);
// console.log(restaurant.size);
// console.log(restaurant.get(arr));

/* ---------------------------------------------- (Map iter) ---------------------------------------------- */

// const question = new Map([
//   ['question', 'What is your favorite programming language'],
//   [1, 'JavaScript'],
//   [2, 'Java'],
//   [3, 'Python'],
//   ['correctAnswer', 1],
//   [true, 'Correct answer :D'],
//   [false, 'This is incorrect :( Try again'],
// ]);

// // console.log(question);

// // //Converting objects to maps
// // const workingHoursMap = new Map(Object.entries(workingHours));
// // // console.log(workingHoursMap);

// // console.log(question.get('question'));

// // for (const [key, value] of question) {
// //   if (typeof key === 'number') {
// //     console.log(`${key}: ${value}`);
// //   }
// // }

// // const answer = Number(prompt('Choose the option number'));

// // console.log(question.get(answer === question.get('correctAnswer')));

// // converting maps to arrays
// console.log([...question]);
// console.log(question.keys());
// console.log(question.values());
// console.log(question.entries());

/* ---------------------------------------------- (Which structure data use )----------------------------------- */
// array or set
// object or Map
/* -----------------------------------------------(Task Three)------------------------------------------------*/
// Let's get on with our soccer betting app ⚽💰!
// This time we have a map called events (see below) with a log of events that occurred during the game. The values ​​are the events themselves, and the keys are the minutes at which each event happened (the match had 90 minutes plus extra time).
// Your tasks:
// 1. Create an array of gameEvents with different game events that can happen (no duplicates).
// 2. After the end of the game, it turned out that the yellow card from minute 75 was unfair. So remove this event from the game events log.
// 3. Calculate and log the following in the console: “On average, an event happened every 11 minutes” (keep in mind that there are 90 minutes in the game).
// 4. Loop over the events map and log each item to the console, with mark whether it is in the first or second half (after 45 minutes) of the game, for example:
// [FIRST HALF] 19:  Goal

// const events = new Map([
//   [19, 'Goal'],
//   [21, 'Substitution'],
//   [43, 'Goal'],
//   [56, 'Substitution'],
//   [69, 'Yellow card'],
//   [73, 'Substitution'],
//   [75, 'Yellow card'],
//   [79, 'Substitution'],
//   [81, 'Red card'],
//   [93, 'Goal'],
// ]);

// const game = {
//   team1: 'REAL MADRID',
//   team2: 'BARCELONA',
//   players: [
//     [
//       'Courtois',
//       'Vazquez',
//       'Militao',
//       'Nacho',
//       'Mendy',
//       'Casemiro',
//       'Valverde',
//       'Modrich',
//       'Kroos',
//       'Vinicius',
//       'Benzema',
//     ],
//     ['Stegen', 'Mingueza', 'Araujo', 'Lenglet', 'Dest', 'Busquets', 'Jong', 'Alba', 'Messi', 'Pedri', 'Dembele'],
//   ],
//   score: '2:1',
//   scored: ['Kroos', 'Benzema', 'Mingueza'],
//   date: 'Apr 10th, 2021',
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

// //My decision
// //1
// const gameEvents = new Set(events.values());
// console.log(gameEvents);
// //2
// events.delete(75);
// console.log(events);
// //3
// console.log(`On average, an event happened every ${90 / events.size} minutes`);
// //4
// for (const [time, event] of events) {
//   const half = time <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${time}: ${event}`);
// }

/* -----------------------------------------------(Method String one) -------------------------------------- */
// const airline = 'SkyUp Airline';
// const airplane = 'Boeing 737';

// // console.log(airplane[0]);
// // console.log(airplane[1]);
// // console.log(airplane[2]);
// // console.log('SkyUp'[0]);

// // console.log(airline.length);
// // console.log('Boeing 737'.length);

// // console.log(airline.indexOf('U'));
// // console.log(airplane.indexOf('7'));
// // console.log(airplane.lastIndexOf('7'));
// // console.log(airline.indexOf('Up'));
// // console.log(airline.indexOf('up'));

// // console.log(airplane.slice(4)); // ng 737
// // console.log(airplane.slice(7)); // 737
// // console.log(airplane.slice(0, 6)); // Boeing
// // console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // console.log(airline.slice(-1));
// // console.log(airline.slice(2, -2));

// const checkMidleSeat = function (seat) {
//   //B and E are middle seat
//   const seatLetter = seat.slice(-1);
//   if (seatLetter === 'B' || seatLetter === 'E') {
//     console.log('This is a middle seat.');
//   } else {
//     console.log('This is not a middle seat.');
//   }
// };

// checkMidleSeat('21A');
// checkMidleSeat('7B');
// checkMidleSeat('14E');

/* -----------------------------------------------(Method String two) -------------------------------------- */
// const airline = 'SkyUp Airline';
// const airplane = 'Boeing 737';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix the passenger name
// const passengerName = 'LiNDa';
// const passengerNameLower = passengerName.toLowerCase();
// console.log(passengerNameLower);
// const passengerNameFixed = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
// console.log(passengerNameFixed);

// //Email validation
// const email = 'someemail@gmail.com';
// const loginEmail = '  SomeEmail@Gmail.com \n';

// const emailLower = loginEmail.toLowerCase();
// const emailTrimmed = emailLower.trim();
// console.log(emailTrimmed);

// const emailNormalized = loginEmail.toLowerCase().trim();
// console.log(emailNormalized);
// console.log(email === emailNormalized);

// // Replacing
// const ticketPriceEU = '197,23$';
// const ticketPriceUS = ticketPriceEU.replace(',', '.').replaceAll('$', '&');
// console.log(ticketPriceUS);

//Methods return boolean

// console.log(airplane);
// console.log(airplane.includes('737'));
// console.log(airplane.includes('747'));

// console.log(airplane.startsWith('Bo'));
// console.log(airplane.startsWith('Ba'));

// console.log(airplane.endsWith('37'));
// console.log(airplane.endsWith(' 737'));
// console.log(airplane.endsWith('  737'));

/* -----------------------------------------------(Method String three) -------------------------------------- */
//split join
// const [firstName, lastName] = 'Rakhmetov Nurbolat'.split(' ');
// console.log('My+name+Nurbolat.'.split('+'));
// console.log(firstName, lastName);

// console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesCapitalize = [];
//   for (const n of names) {
//     // namesCapitalize.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
//     namesCapitalize.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   return namesCapitalize.join(' ');
// };

// console.log(capitalizeName('rakmetov nurbolat zarkumuly'));

// // padding
// const message = 'Hi there!';
// console.log(message.padStart(20, '-').padEnd(37, '-'));

// const maskCreditCard = function (cardNumber) {
//   // const strCardNumber = String(cardNumber);
//   const strCardNumber = cardNumber + '';
//   const lastNumber = strCardNumber.slice(-4);
//   return lastNumber.padStart(strCardNumber.length, '*');
// };

// console.log(maskCreditCard(12334535646546));
// console.log(maskCreditCard('124321341234'));

// //repeat
// const greeting = 'Hi!';

// console.log(greeting.repeat(20));

/* -----------------------------------------------(Task Four)------------------------------------------------*/
// Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
// Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

// Test data (for inserting into the textarea including spaces):

// underscore_case
//   first_name
// next_Variable
//    Calculate_AGE
// arrived_flight

// This output should appear (5 separate console.log outputs):
// underscoreCase
// firstName
// nextVariable
// calculateAge
// arrivedFlight

// Hints:
// Remember which character defines a newline in a textbox
// The solution should only work for a two-word variable like first_second
// This is a tricky task, so start watching the solution in case you get stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
const textarea = document.querySelector('textarea');

btn.style.width = '80px';
btn.style.height = '40px';
btn.textContent = 'button';

textarea.style.width = '150px';
textarea.style.height = '500px';

const camelCase = (underscore_case) => {
  const [text1, text2] = underscore_case.trim().toLowerCase().split('_');
  return text1 + text2.replace(text2[0], text2[0].toUpperCase());
};

btn.addEventListener('click', function () {
  const text = textarea.value.split('\n');
  for (const item of text) {
    console.log(camelCase(item));
  }
});
