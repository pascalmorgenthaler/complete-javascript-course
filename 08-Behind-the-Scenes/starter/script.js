'use strict';

/* // calc age defined in global scope
function calcAge(birthYear) {
    // function scope
    const age = 2024 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // Creating new variable with same name as outer scopes variable
            const firstName = 'Steven';
            const str = `Oh, and you're a Millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT!' // we redefined the variable from the parent scope
            // const output = 'NEW VARIABLE'; // will create a new separate variable with the same name, which is no porblem but its not the same variable anymore
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(1, 3)); does not work since function is inside block and is block scoped
        console.log(output); // it will lot NEW OUTPUT!
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);   gets error
// printAge();          gets error */

/* 
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;



// Functions
console.log(addDecl(2, 3));
console.log(addArrow);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));


function addDecl(a, b) {
    return a + b;
};

const addExpr = function(a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example

// !numPrducts means basicalla, if there are no products, so if products = 0 and 0 is a falsy value
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

console.log(numProducts);

function deleteShoppingCart() {
    console.log('All products deleted!');
};


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
    
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();


