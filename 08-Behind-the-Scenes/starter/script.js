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

/* console.log(this);

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


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // we borrowed the function now from jonas

matilda.calcAge(); // the this keyword inside the method which is written inside the jonas object now point to the matilda object


const f = jonas.calcAge; // a function is just a value, thats why that is possible
f(); // this ia now a regular function call, there is no owner of the function, therefore this keyword is undefined */

/* var firstName = 'Matilda'


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // here this is still the jonas object self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();
    },

    greet: () => {
    console.log(this); // window
    console.log(`Hey ${this.firstName}`) // gets undefined since firstName is not defined in the window object BUT, var creates properties on the window object, therefore now jonas.greet(); calls Hey Matilda
    },
};

jonas.greet(); 
jonas.calcAge();

// Arguments Keyword
function addDecl(a, b) {
    console.log(arguments);
    return a + b;
};
addDecl(2, 5);

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    a + b;
};
addArrow(2, 5); */

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me); */


// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference Types
const jessica = {
    fistName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {} does not work, since it is a const

// Copying Objects
const jessica2 = {
    fistName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);