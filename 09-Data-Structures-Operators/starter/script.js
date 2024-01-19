'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //before
  // openingHours: openingHours,
  // ES6 enhanced object literals
  openingHours,
  // before
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 enhanced way of writing method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) { // we immediatly destructure, the names have to be equal to the names in the object that we pass into, cool is that the order does not matter
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },
  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
  },
};


const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto')
// ordersSet.clear();
console.log(ordersSet);

// Looping is possible like in any other iterable
for (const order of ordersSet) console.log(order);

/*

// Property Names / Keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`
};

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// destructure immediatly in the variable definition
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}!`);
}




// This can get messy really fast when we have deeply nested properties to check for
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.com',
  }
];

console.log(users[0]?.name ?? 'users array empty');
console.log(users[1]?.name ?? 'users array empty');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; 

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);




const rest1 = {
  name: 'Capir',
  numGuests: 0,
};

const rest2 = {
  name: 'Capir',
  owner: 'Giovanni Rossi',
};

rest2.numGuests = rest2.numGuests ?? 10;
rest1.numGuests = rest1.numGuests ?? 10;

// OR Assignemnt operator
// rest1.numGuests ||= 10; 
// rest2.numGuests ||= 10; 

// Nullish Assignment Operator
rest1.numGuests ??= 10; 
rest2.numGuests ??= 10; 


rest2.owner = rest2.owner && '<Anonymous>'; // rest2.owner is truthy and therefores it returns the last one
rest1.owner = rest1.owner && '<Anonymous>';

// And Assignment operator
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';


console.log(rest1, rest2);


restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

//
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// Use ANY data type, return ANY data type, short-circuiting / short circuit evaluation 
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'Jonas');
console.log(6 && 'Jonas');
console.log('Hello' && '23' && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 const arr = [7, 8, 9];
// old way of doing it
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread Operator
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);

// building new array from scratch
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// same thing with strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // does not work since this is not a place that expects values separated by commas

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'), 
//   prompt('Ingredient 2?'), 
//   prompt('Ingredient 3?'),
// ];

// // old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // new way
// restaurant.orderPasta(...ingredients);


// Objects
// make a new object with using another object
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

// make a copy
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name); 


 console.log(restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 0
}));

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 0
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//default value
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables with objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, c: b} = obj);
console.log(a, b);

// Nested Objects
const {fri: {open: openHour, close: closeHour}} = openingHours;
console.log(openHour, closeHour); 





// before destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// array destrucutring
const [x, y, z] = arr;

console.log(x, y ,z);
console.log(arr);

// skipping a element -> first and third
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables inside array before destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// switching variables with destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);



console.log(restaurant.order(3, 1));
// receive 2 return values from a function instead of an array, it immediatly created 2 variables from a function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [e, ,[f, g]] = nested;
console.log(e, f, g);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
 


// 1) Destructuring
  // SPREAD, because on right side of assignement operator =
  const arr = [1,2, ...[3,4]];

  //REST, becauseits on the left side of assignemtn operator =
  const [a, b, ...others] = [1, 2, 3, 4, 5]
  console.log(a, b, others); // others is now a array

  // it does not include skipped elements, it has to be the left statment in destructuring
 const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

 console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Functions -> ...numberes is Rest Parameter
const add = function(...numbers) {
  console.log(numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
};

add(2, 3);
add(5, 3, 7, 2);
add(8,2,3,4,5,45,6,5);

const x = [23, 5, 7];
add(...x); // Spread Operator takes out values of array

restaurant.orderPizza ('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza ('mushrooms');

*/



// Coding Challenge 1 ----------------------------------------------------

/* Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK😀 

const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
  [
  'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
  ],
  [
  'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
  ], 
],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  }, 
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
// 3
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);
// 6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
};

printGoals(...game.scored);

// 7
console.log(team1 < team2 && `Team 1 is more likely to win`);
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/


// Coding Challenge #2 -----------------------------------------------------------
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK😀
/*

const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
  [
  'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
  ],
  [
  'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
  ], 
],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  }, 
};

// 1)
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
};

// 2)
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds ) average += odd
  average /= odds.length
  console.log(average);

// const odds = Object.entries(game.odds);
// let totalOdd = 0;
// console.log(odds);

// for (const [name, odd] of odds) {
//    console.log(odd);
//    totalOdd += odd;
// };

// console.log(`The average odd ist ${totalOdd / odds.length}.`);

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}.` // [team] team is already from the loop team1 or team2
  console.log(`Odd of ${teamStr} ${odd}`);
}


// 4)
const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);  */