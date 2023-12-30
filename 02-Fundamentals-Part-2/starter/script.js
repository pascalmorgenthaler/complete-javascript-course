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

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName); // lastName is an operator that gets the lastName from the object jonas
// console.log(jonas['lastName']); // identical

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request. Choose between firstName, lastName, age, job, friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // } // pretty similar to normal functions but syntax a little different with syntax in the beginning

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license.`;
//     }
// };

// console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// Coding Challenge 6 ----------------------------------------------------------------

// const john = {
//     fullName: 'John Smith',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// console.log(
//     `${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.calcBMI() > mark.calcBMI() ? john.bmi : mark.bmi}) is higher than ${john.calcBMI() < mark.calcBMI() ? 'John' : 'Mark'}'s (${john.calcBMI() < mark.calcBMI() ? john.bmi : mark.bmi}). So ${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName} wins.`
// );


// console.log('Lifting weights repetition 1 🏋🏻‍♀️');
// console.log('Lifting weights repetition 2 🏋🏻‍♀️');
// console.log('Lifting weights repetition 3 🏋🏻‍♀️');
// console.log('Lifting weights repetition 4 🏋🏻‍♀️');
// console.log('Lifting weights repetition 5 🏋🏻‍♀️');
// console.log('Lifting weights repetition 6 🏋🏻‍♀️');
// console.log('Lifting weights repetition 7 🏋🏻‍♀️');
// console.log('Lifting weights repetition 8 🏋🏻‍♀️');
// console.log('Lifting weights repetition 9 🏋🏻‍♀️');
// console.log('Lifting weights repetition 10 🏋🏻‍♀️');

// this up there is bad

// // rep <= 10 -> this is the condition, the loop keeps running while this condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }



// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = []; // empty array

// // we want the loop to run as long as there are items in the array, so we can compute the logic in the for loop that if we add new items, it will also loop through them. we do that with jonas.length 
// for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas Array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types Array
//     // types[i] = typeof jonas[i]; // first way
//     types.push(typeof jonas[i]); // second way, cleaner
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break statements
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue; // only strings will be printed

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- Break with Number ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break; // only strings will be printed

//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// // 0, 1, ..., 4
// // 4, 3, 2, 1, 0

// // looping backwards, just start with the length of the array - 1
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// // loop inside of a loop // <= 3 is the same as < 4 
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------------ Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`)
//     }
// }

// normal loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }

// // while loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
//     rep++;
// }

// lets roll a dice until it gets 6, so we don't have a counter, we just want it to be running until it reaches 6 and then stop

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// Coding Challenge 8 ----------------------------------------------------------------

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);



const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));