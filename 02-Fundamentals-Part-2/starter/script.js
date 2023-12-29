'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'; // reserved keyword for feature in the future which strict mode shows
// const private = 3434; // also the same

// function logger() {
//     console.log('My name is Jonas')
// }

// // invoking/running/calling the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0); // input data inside the brackets which will get assigned to the parameters in the function -> the acutal numbers are called arguments
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// // function declaration
// function calcAge1(birthYear) { // birthYear is parameter
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1999); // specify the value of the parameter which is called argument, argument is acutal value

// // function expression
// const calcAge2 = function (birthYear) { // anonymous function
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1999);

// console.log(age1, age2);


// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1999, 'Pascal'));
// console.log(yearsUntilRetirement(2001, 'Juliana'))


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1999, 'Pascal'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// Coding Challenge 5 ----------------------------------------------------------------

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Data 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);



// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No one wins.`)
//     }
// }

// checkWinner(avgDolphins, avgKoalas);
// checkWinner(45, 98);

// // Data 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);

// Arrays

// const friends = ['Michael', 'Steven', 'Peter']; // literal syntax, much more common
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); // Array() -> function and 'new' keyword
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // find out how many elements are in array -> not 0 based
// console.log(friends[friends.length - 1]) // gets the last element, length is not 0 based therfore - 1

// // mutate the array
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Pascal';
// const pascal = [firstName, 'Morgenthaler', 2023 - 1999, 'guitarist', friends];
// console.log(pascal);
// console.log(pascal.length);

// // exersice
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// const years2 = [1991, 1984, 2008, 2020, 2018];

// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years.length - 1]);
// console.log(age1, age2, age3)

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop(); // removes last element of the array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// friends.push('Peter');

// if (friends.includes('Peter')) {
//     console.log(`You have a friend called Peter.`)
// }


// Coding Challenge 5 ----------------------------------------------------------------

// const calcTip = function (billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.2;
//     }
// }

// with ternaray operator
// const calcTip = function (billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals);

// End Coding Challenge 5 ----------------------------------------------------------------


// Arraaayyys
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);