// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
import {countries} from "../data/countries.js";
import {webTechs} from "../data/webTechs.js";
import {mernStack} from "../data/mernStack.js";

console.log(countries);


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
