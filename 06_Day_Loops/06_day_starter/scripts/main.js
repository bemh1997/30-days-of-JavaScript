// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
import {countries} from "../data/countries.js";
import {webTechs} from "../data/webTechs.js";
import {mernStack} from "../data/mernStack.js";

// console.log(countries);

// ## Exercises: Level 1
// 1.- Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
i = 0;

do {
    console.log(i);
    i++;
} while (i <= 10);

// 2.- Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let index = 10; index >= 0; index--) {
  console.log(index);
}

while (i >= 0) {
  console.log(i);
  i--;
}
i = 10;
do {
  console.log(i);
  i--;
} while (i>=0);

// 3.- Iterate 0 to n using for loop
let nVariable = 10;
for (let i = 0; i <= nVariable; i++) {
    console.log(i);
}
// 4.- Write a loop that makes the following pattern using console.log():
for (let index = 1; index < 8; index++) {
  console.log('#'.repeat(index));
}

// 5.- Use loop to print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(i + ' x '+ i + ' = ' + i * i);
}

// 6.- Using loop print the following pattern
console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
  console.log(
    `${i.toString().padEnd(5)}${(i ** 2).toString().padEnd(5)}${(i ** 3).toString().padEnd(5)}`
  );
}

// 7.- Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8.- Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 9.- Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
  if (i === 0 || i === 1) {
    continue;
  }
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
  
}

// 10.- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log('The sum of all numbers from 0 to 100 is '+sum);
let sumForm = (100*101)/2
console.log('The sum of all numbers from 0 to 100 with form is: '+sumForm);
// 11.- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEvens =0;
let sumOdds =0;
for (let i = 0; i <=100; i++) {
  if(i %2 === 0){
    sumEvens += i;
  } else{
    sumOdds += i;
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);


// 12.- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arraySums= [sumEvens, sumOdds];
console.log(arraySums);


// 13.- Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() *10));
}
console.log(randomNumbers);


// 14.- Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueNumbers= new Set();
while (uniqueNumbers.size< 5) {
  uniqueNumbers.add(Math.floor(Math.random()*10));
} 
console.log(Array.from(uniqueNumbers));

// 15.- Develop a small script which generate a six characters random id:
let randomId = '';
for (let i = 0; i < 6; i++) {
  // Generar un número aleatorio entre 48 y 122 (rango de caracteres alfanuméricos en ASCII)
  const randomAscii = Math.floor(Math.random() * (122 - 48 + 1)) + 48;
  
  // Asegurarse de que el carácter esté en el rango alfanumérico
  if ((randomAscii >= 48 && randomAscii <= 57) || // 0-9
      (randomAscii >= 65 && randomAscii <= 90) || // A-Z
      (randomAscii >= 97 && randomAscii <= 122)) { // a-z
    randomId += String.fromCharCode(randomAscii);
  } else {
    i--; // Si no es un carácter alfanumérico, repetir la iteración
  }
}
console.log(randomId);


// ## Exercises: Level 2
// 1.- Develop a small script which generate any number of characters random id:

function generateRandomId() {
  const length = Math.floor(Math.random() * 25) + 5;
  let randomId = '';
  for (let i = 0; i < length; i++) { 
    // Generar un número aleatorio entre 48 y 122 (rango de caracteres alfanuméricos en ASCII)
    const randomAscii = Math.floor(Math.random() * (122 - 48 + 1)) + 48;
    
    // Asegurarse de que el carácter esté en el rango alfanumérico
    if ((randomAscii >= 48 && randomAscii <= 57) || // 0-9
        (randomAscii >= 65 && randomAscii <= 90) || // A-Z
        (randomAscii >= 97 && randomAscii <= 122)) { // a-z
      randomId += String.fromCharCode(randomAscii);
    } else {
      i--; // Si no es un carácter alfanumérico, repetir la iteración
    }
  }
  return randomId;
}

console.log(generateRandomId());

// 2.- Write a script which generates a random hexadecimal number:

function randomHex(){
  let hex = '#';
  const characters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    hex += characters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

console.log(randomHex());

// 3.- Write a script which generates a random rgb color number:  
function randomRgb(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(randomRgb());

// 4.- Using the above countries array create new array.
const countriesNew = [...countries];

// 5.- Using the above countries array create an array for countries length.
const countriesLength = []
for (let i = 0; i < countries.length; i++){
  countriesLength.push(countries[i].length)
}
console.log(countriesLength);


// 6.- Use the countries array to create the following array of arrays:
const countriesArrayLenght = []
for (let i = 0; i < countries.length; i++) {
  let array = [countries[i], countries[i].substring(0,3), countries[i].length]
  countriesArrayLenght.push(array);
}
console.log(countriesArrayLenght);

// 7.- In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const countriesWithLand = []
for (let i = 0; i < countries.length; i++) {
  if(countries[i].toLocaleLowerCase().includes('land'))
    countriesWithLand.push(countries[i])
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}

// 8.- In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countriesWithIA = []
for (let i = 0; i < countries.length; i++) {
  if(countries[i].toLocaleLowerCase().includes('ia'))
    countriesWithIA.push(countries[i])
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithIA);
} else {
  console.log('All these countries are without land');
}

// 9.- Using the above countries array, find the country containing the biggest number of characters.

const longestCountry = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestCountry);

// 10.- Using the above countries array, find the country containing only 5 characters. 
const fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
  if(countries[i].length === 5)
    fiveCharCountries.push(countries[i])
}
console.log(fiveCharCountries)

// 11.- Find the longest word in the webTechs array
const longestWebTechs = webTechs.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestWebTechs);

// 12.- Use the webTechs array to create the following array of arrays:
const webTechsArrayLenght = []
for (let i = 0; i < webTechs.length; i++) {
  let array = [webTechs[i], webTechs[i].length]
  webTechsArrayLenght.push(array);
}
console.log(webTechsArrayLenght);

// 13.- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernAcronym = '';
for (let i = 0; i < mernStack.length; i++) {
  mernAcronym += mernStack[i][0];
}
console.log(mernAcronym); // Output: MERN

// 14.- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let i = 0; i < webTechs.length; i++){
  console.log(webTechs[i]);
}

// 15.- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// 16.- Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (const stack of fullStack) {
  for (const tec of stack) {
    console.log(tec);
  }
}


// ## Exercises: Level 3
// 1.- Copy countries array(Avoid mutation)
const countriesCopy = [];
for (const country of countries) {
  countriesCopy.push(country)
}
console.log(countriesCopy);


// 2.- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
countriesCopy.sort().reverse();
console.log(countries,countriesCopy);

// 3.- Sort the webTechs array and mernStack array
webTechs.sort();
mernStack.sort();
console.log(webTechs, mernStack);

// 4.- Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesLand = [];
for (const country of countries) {
  if(country.toLowerCase().includes('land'))
    countriesLand.push(country);
}
console.log(countriesLand);

// 5.- Find the country containing the hightest number of characters in the countries array
const hightestNumChar = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(hightestNumChar);

// 6.- Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesLand2 = [];
for (const country of countries) {
  if(country.toLowerCase().includes('land'))
    countriesLand2.push(country);
}
console.log(countriesLand2);

// 7.- Extract all the countries containing only four characters from the countries array and print it as array
const countries4Char = [];
for (const country of countries) {
  if(country.length === 4)
    countries4Char.push(country);
}
console.log(countries4Char);

// 8.- Extract all the countries containing two or more words from the countries array and print it as array
// 8.- Extract all the countries containing two or more words from the countries array and print it as array
const twoWordsCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes(' ')) {
    twoWordsCountries.push(countries[i]);
  }
}

console.log(twoWordsCountries);
// 9.- Reverse the countries array and capitalize each country and stored it as an array
const reversedCapitalizedCountries = [];

for (let i = countries.length - 1; i >= 0; i--) {
  const capitalizedCountry = countries[i].toUpperCase();
  reversedCapitalizedCountries.push(capitalizedCountry);
}

console.log(reversedCapitalizedCountries);
