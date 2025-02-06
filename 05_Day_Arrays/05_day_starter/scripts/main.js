// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')
import { countries } from "../data/countries.js";
import { webTechs } from "../data/webTechs.js";
// ##Exercise 1
// 1. Declare an empty array;
let emptyArray = []

// 2. Declare an array with more than 5 number of elements
let numbers = [1, 2, 3, 4, 5, 6]
let lastNumber = numbers.length - 1

// 3. Find the length of your array
console.log(numbers.length)

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0],numbers[Math.floor(numbers.length/2)], numbers[lastNumber]);

// 5. Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5
let mixedDataTypes = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten']
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  'Facebook',
  'Google', 
  'Microsoft', 
  'Apple', 
  'IBM', 
  'Oracle', 
  'Amazon'];
let lasCompany = itCompanies.length - 1

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[lasCompany]);

// 10. Print out each company
itCompanies.forEach(company => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let popped = itCompanies.pop();
console.log(itCompanies.join(', ') +' and ' +popped + ' are big IT companies.');
itCompanies.push(popped);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'NEXT';
if(itCompanies.includes(company)){
  console.log(company);
}
else{
  console.log('Company is not found');
}

// 14. Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = [];
for(let i = 0; i < itCompanies.length; i++){
  if(itCompanies[i].split('o').length - 1 > 1){
    companiesWithMoreThanOneO.push(itCompanies[i]);
  }
}
console.log(companiesWithMoreThanOneO);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0,3);
console.log(firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array 

let middleCompany = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2) + 1);

console.log(middleCompany);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length/2), 1);
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.splice(0);
console.log(itCompanies);

//## Exercise 2
//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA');
}else{
  countries.push('Ethiopia');
  console.log("Ethiopia has been added to the countries list");
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log('Sass has been added to the webTechs array');
}

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack)

//## EXERCISE 3

//1.- The following is an array of 10 students age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//°Sort the array and find the min and max age.
ages.sort((a,b) => a-b); 
console.log(Math.max(...ages));
console.log(Math.min(...ages));
console.log(ages);
//°Find the median ages(one middle item or two middle items divided by two)
function findMedian(arr) {
  const mid = Math.floor(arr.length - 1);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2
  } else {
    return arr[mid];
  }
}

const medianAge = findMedian(ages);
console.log(`La mediana de las edades es: ${medianAge}`);

//°Find the average age(all items divided by number of items)
function findAverage(arr) {
  const sum = arr.reduce((acc, curr)=> acc + curr,0);
  return sum / arr.length
};

const averageAge = findAverage(ages)
console.log(averageAge)

//°Find the range of the ages(max minus min)
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

const range = maxAge - minAge;

console.log(`The range is: ${range}`);

//°Compare the value of (min - average) and (max - average), use abs() method
console.log(`minDiff: ${Math.abs(minAge - averageAge)}`);
console.log(`maxDiff: ${Math.abs(maxAge - averageAge)}`);

//1. Slice the first ten countries from the countries array
console.log(countries.slice(0,10));
//2. Find the middle country(ies) in the countries array
let middleIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0 ) {
  console.log(countries.slice(middleIndex -1, middleIndex +1));
  
} else {
  console.log(countries[middleIndex]);
}
//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstPart, secondPart;
if(countries.length % 2 === 0){
  firstPart = countries.slice(0, middleIndex);
  secondPart = countries.slice(middleIndex);
  
}else{
  firstPart = countries.slice(0, middleIndex + 1);
  secondPart = countries.slice(middleIndex + 1);
  
}

console.log(firstPart,secondPart);
