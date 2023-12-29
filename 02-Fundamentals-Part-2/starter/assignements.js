// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} Million people and its capital city is ${capitalCity}.`
//     return description
// }

// const descSwitzerland = describeCountry('Switzerland', 8, 'Bern');
// console.log(descSwitzerland);

// const descItaly = describeCountry('Italy', 60, 'Rome');
// console.log(descItaly);

// const descPortugal = describeCountry('Portugal', 10, 'Lissabon');
// console.log(descPortugal);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// // const popSwitzerland = percentageOfWorld1(8);
// // const popItaly = percentageOfWorld1(60);
// // const popPortugal = percentageOfWorld1(10);
// // const popChina = percentageOfWorld1(1441);

// // console.log(popSwitzerland, popItaly, popPortugal, popChina);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const popSwitzerland = percentageOfWorld2(8);
// const popItaly = percentageOfWorld2(60);
// const popPortugal = percentageOfWorld2(10);
// const popChina = percentageOfWorld2(1441);

// console.log(popSwitzerland, popItaly, popPortugal, popChina);

// const percentageOfWorld3 = population => (population / 7900) * 100;
// console.log(percentageOfWorld3(5000));


// // Assignemnet Functions calling Function Jonas Solution
// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.}`;
//     console.log(description);
// }

// describePopulation('Switzerland', '8');
// describePopulation('Italy', '60');
// describePopulation('China', '1441');


// Assignemnet Functions calling Function Pascal Solution
// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.}`;
// }

// console.log(describePopulation('Switzerland', '8'));
// console.log(describePopulation('Italy', '60'));
// console.log(describePopulation('China', '1441'));

// const populations = [8, 60, 10, 1441];
// console.log(populations.lenght === 4);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
// console.log(percentages);

// const neighbours = ['Italy', 'France', 'Germany', 'Austria', 'Lichtenstein'];

// neighbours.push('Utopia');
// neighbours.pop('Utopia');

// if (!neighbours.includes('Germany')) {
//     console.log(`Your country is not in Central Europe.`)
// }

// neighbours[neighbours.indexOf('Germany')] = 'Republic of Germany';
// console.log(neighbours);
