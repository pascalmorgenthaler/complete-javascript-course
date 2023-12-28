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


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));