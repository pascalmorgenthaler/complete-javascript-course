/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable Name Conventions
let jonas_matilda = "JM";
let $funtion = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName); */

/* // Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which is equal to 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 4; // x = x / 4 = 25
x++; // x = x + 1 = 26
x--; // x = x - 1 = 25
x--; // x = x - 1 = 24
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018); */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 since y is 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

// Coding Challenge 1 ------------------------------------------------------------
/* const massMark = 65;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI); */

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Template Literals, new ES6 Feature
const jonasNew = `Ì'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`)

//old way
console.log('String with \n\
multiple \n\
line');

//new and easier way, just use returen
console.log(`String
with
mulitple
lines`); */

/* const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🤓')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :(`)
}

const birthYear = 1999;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); */


// Coding Challenge 2 ------------------------------------------------------------

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's!`)
} */

// Type conversion
/* const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old') // + operator converts the number to a string -> automatic type coercion
console.log('23' - '10' - 3); // is 10 in the console -> - operator converts a string to a number
console.log('23' + '10' + 3); // is 23103 in the console -> + operator converts a number to a string
console.log('23' * '2'); // is 46 in the console -> * and / also change strings to numbers

let n = '1' + 1; // string 11
n = n - 1; // string 11 is convertet to the number 11 and 1 is subtracted
console.log(n); */

// 5 falsy values: 0, '', undefined, nulll, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all. ;)");
} else {
    console.log('You should get a job!'); // this one is executed -> why? money is set to number 0
}

let height = 0; // this creates a bug, since 0 is also a falsy value and it will get us height is undefined -> we can fix this using logical operators
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} */
/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);
 */
/* if (favouriteNumber == 8) { // '23' == 23
    console.log('Cool! 8 is an amazing number!');
}

/* if (favouriteNumber === 8) { // does not work without the number function in the prompt funtion
    console.log('Cool! 8 is an amazing number!');
} else if (favouriteNumber === 7) {
    console.log('7 is also a cool number');
} else if (favouriteNumber === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 8 or 7 or 9')
}

if(favouriteNumber !== 8) console.log('Why not 8?'); */

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // and operatoer
console.log(hasDriversLicense || hasGoodVision); // or operator
console.log(!hasDriversLicense); // not operator

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
} */

// Coding Challenge 3 ------------------------------------------------------------

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// const averageDolphins = (80 + 112 + 101) / 3;
// const averageKoalas = (92 + 95 + 106) / 3;

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log('YAY, Dolphins win!')
// } else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
//     console.log('Nooo, Koalas win.')
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
//     console.log('Draw.')
// } else {
//     console.log('No one wins.')
// }

// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend.');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples')
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     cconsole.log('Enjoy the weekend.')
// } else {
//     console.log('Not a valid day!')
// }

// 3 + 4 // expression, it does produce a value
// 1991 // expression, it is a value in JavaScript
// true && false && !false // expression, it produces a value

// // this is a statement, it does not produce a value, it simply declares something and performs some actions
// if (23 > 10) {
//     const str = '23 is bigger'; // the string itself is an expression, the whole line of code is a statement
// }

// // the conditional operator -> basically like writing an if else statement in one line
// const age = 19;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = ' wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)


// Coding Challenge 4 ------------------------------------------------------------

// const bill = 40

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)