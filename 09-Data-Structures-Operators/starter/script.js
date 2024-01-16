'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) { // we immediatly destructure, the names have to be equal to the names in the object that we pass into, cool is that the order does not matter
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },
  orderPasta: function({ing1, ing2, ing3}) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


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

const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
console.log(ingredients);

/* console.log(restaurant.orderDelivery({
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
console.log(openHour, closeHour); */





/* // before destructuring
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

 */