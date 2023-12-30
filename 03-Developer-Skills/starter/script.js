// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(34));

// BUG FIXME 

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures? 
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (=amplitude) and return it

const calcTempAmplitude = function(temps) {

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    };

    console.log(max, min);
    return max - min;

}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge 2 arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?



const calcTempAmplitudeNew = function(t1, t2) {

    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    };

    console.log(max, min);
    return max - min;

}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // C) Fix
//         // value: Number(prompt('Degrees celsius: ')) // B) prompt always returns string
//         value: 10
//     };

//     console.table(measurement);

//     console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // A) Identify the bug
// console.log(measureKelvin());


// // Using a Debugger
// const calcTempAmplitudeBug = function(t1, t2) {

//     const temps = t1.concat(t2);

//     let max = 0;
//     let min = 0;
//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     };

//     console.log(max, min);
//     return max - min;

// }

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify Bug
// console.log(amplitudeBug); 









// Understand the problem
// - Array transformed to string, separated with dots
// - What is the x days? Answer: Current index of array + 1 (i + 1)

// Subproblems
// - Transform Array to string
// - Transform each element to string with °C
// - string needs to contain day (index + 1)
// - add ... between start and end of element
// - we have to connect the temperature to the amount of days 
// - we have to loop through these new variables in a string that we log to the console -> we can put the new value inside a array and than just log that array

const data1 = [17, 21, 23];
const data2 = [12,5,-5,0,4];

const printForecast = function(arr) {

    let string = ''; 
    for (let i = 0; i < arr.length; i++) {
        const block = `${arr[i]}°C in ${i + 1} days ... `;
        string += block;
    }

    console.log('... ' + string);

}

printForecast(data2);






