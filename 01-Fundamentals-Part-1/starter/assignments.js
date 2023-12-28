const country = 'Switzerland';
const continent = 'Europe';
let populationSwitzerland = 8; // Millions

console.log(country);
console.log(continent);
console.log(populationSwitzerland);

const isIsland = false;
const language = 'Schwiizerdütsch';

console.log(typeof isIsland);
console.log(typeof populationSwitzerland);
console.log(typeof country);
console.log(typeof language);

let halfPopulation = populationSwitzerland / 2;
halfPopulation++;
console.log(halfPopulation);

const populationFinland = 6;
console.log(populationSwitzerland > populationFinland);

let populationAverage = 33;
console.log(populationSwitzerland > populationAverage);

const description1 = country + ' is in ' + continent + ', and its ' + populationSwitzerland + ' Million people speak ' + language + '.';
console.log(description1);

const description2 = `${country} is in ${continent}, and its ${populationSwitzerland} Million people speak ${language}.`;
console.log(description2);

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!');
// } else {
//     console.log('No borders.')
// }

if (language === 'english' && populationSwitzerland < 50 && !isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great Language too :D');
}

const greaterThan33 = populationSwitzerland >= 33 ? "Switzerland's population is above average." : "Switzerland's population is below average."

console.log(greaterThan33);

console.log(
    `${country}'s population is ${populationSwitzerland > 33 ? 'above' : 'below'} average.`
)