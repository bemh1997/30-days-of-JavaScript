// this is your main.js script
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//## Exercises: Level 1
//1.-Get user input using prompt("Enter your age:"). If user is 18 or older, give feedback: You are old enough to drive. If below 18 give feedback to wait for the legal age. Output: You are old enough to drive. or You are left with x years to drive.

// let age = prompt('Enter your age');
// age = parseInt(age);
// if(age >= 18)
//   alert('You are old enough to drive');
// else
//   alert(`You are left with ${18 - age} years to drive`);

//2.-Compare the values of myAge and yourAge using if … else. Based on the comparison log the result to console stating who is older (me or you). Use prompt("Enter your age:") to get the age as input.

// let myAge = 28;
// let yourAge = prompt('Enter your age');
// yourAge = parseInt(yourAge);
// if(myAge > yourAge)
//   alert('I am older than you');
// else
//   alert('You are older than me');

//3.-If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;

if(a > b)
  console.log('a is greater than b whit if else');
else
  console.log('a is less than b whit if else');

a > b ? console.log('a is greater than b whit ternary operator') : console.log('a is less than b whit ternary operator');

//4.-Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let number = prompt('Enter a number');
// number = parseInt(number);
// if(number % 2 === 0)
//   alert('The number is even');
// else
//   alert('The number is odd');

//## Exercises: Level 2
//1.-Write a code which can give grades to students according to theirs scores:
// let score = prompt('Enter your score');
// score = parseInt(score);

// if (score >= 80) {
//   alert('You got an A');
// } else if (score >= 70) {
//   alert('You got a B');
// } else if (score >= 60) {
//   alert('You got a C');
// } else if (score >= 50) {
//   alert('You got a D');
// } else {
//   alert('You got an F');
// }

//2.-Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// let dictornary = {
//   'september': 'Autumn',
//   'october': 'Autumn',
//   'november': 'Autumn',
//   'december': 'Winter',
//   'january': 'Winter',
//   'february': 'Winter',
//   'march': 'Spring',
//   'april': 'Spring',
//   'may': 'Spring',
//   'june': 'Summer',
//   'july': 'Summer',
//   'august': 'Summer'
// }

// let month = prompt('Enter a month').toLowerCase();
// if(dictornary[month])
//   alert(dictornary[month]);
// else
//   alert('Invalid month');

//3.-Check if a day is weekend day or a working day. Your script will take day as an input.

// let dictornary = {
//   'monday': 'Working day',
//   'tuesday': 'Working day',
//   'wednesday': 'Working day',
//   'thursday': 'Working day',
//   'friday': 'Working day',
//   'saturday': 'Weekend day',
//   'sunday': 'Weekend day'
// }

// let day = prompt('Enter a day').toLowerCase();
// if(dictornary[day])
//   alert(dictornary[day]);
// else
//   alert('Invalid day');

//## Exercises: Level 3
//1.-Write a program which tells the number of days in a month.
// let dictornary = {
//   'january': 31,
//   'february': 28,
//   'march': 31,
//   'april': 30,
//   'may': 31,
//   'june': 30,
//   'july': 31,
//   'august': 31,
//   'september': 30,
//   'october': 31,
//   'november': 30,
//   'december': 31
// }

// let month = prompt('Enter a month').toLowerCase();
// if(dictornary[month])
//   alert(`${capitalizeFirstLetter(month)} has ${dictornary[month]} days`);
// else
//   alert('Invalid month');

//2.-Write a program which tells the number of days in a month, now consider leap year.

let dictornary = {
  'january': 31,
  'february': 28,
  'march': 31,
  'april': 30,
  'may': 31,
  'june': 30,
  'july': 31,
  'august': 31,
  'september': 30,
  'october': 31,
  'november': 30,
  'december': 31
}

let month = prompt('Enter a month').toLowerCase();

if (month === 'february') {
  let year = parseInt(prompt('Enter a year'));
  let days = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
  alert(`${capitalizeFirstLetter(month)} has ${days} days`);
} else if (dictionary[month]) {
  alert(`${capitalizeFirstLetter(month)} has ${dictionary[month]} days`);
} else {
  alert('Invalid month');
}