// const sayMyName = (first, last) => {
//     return (`${first} ${last}`);
// }

// console.log(sayMyName('Mike', 'Baumer'));

// //Nugget TIME

// const nuggetizer = (animal) => {
//     return `nugget ${animal}`;
// }

// const HumaneNuggetizer = (animal) => {
//     return animal;
// }
// const spamFactory = (literallyAnything) => {
//     return 'spam (lunch)';
// }

// console.log(nuggetizer('chicken'));
// console.log(nuggetizer('octopus'));
// console.log(nuggetizer('john wark'));

// console.log(HumaneNuggetizer('chicken'));
// console.log(HumaneNuggetizer('octopus'));
// console.log(HumaneNuggetizer('john wark'));

// console.log(spamFactory('chicken'));
// console.log(spamFactory('octopus'));
// console.log(spamFactory('john wark'));

//Take a number challenge

let bandNumber = 1

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

const takeNumber =  (bandName) => {
    
  printToDOM(`<h3>${bandNumber}. ${bandName}</h3>`);
  bandNumber++;

};

takeNumber('The Doors'); // This should display "1. Galactic Scum" in the DOM
takeNumber('The Beatles'); // This should display "2. Underdogs" in the DOM


