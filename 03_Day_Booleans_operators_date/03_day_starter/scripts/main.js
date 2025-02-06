// this is your main.js script
//## Exercises: Level 1

//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Humberto';
let lastName = 'Bernal';
let country = 'Mexico';
let city = 'Mexico City';
let age = 27;
let isMarried = false;
let year = 2025;

console.log(typeof isMarried);

//2. Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//4. Boolean value is either true or false.
//Write three JavaScript statements that provide truthy value.
console.log(10 > 5);
console.log(10 === 10);
console.log(10 < 15);

//Write three JavaScript statements that provide falsy value.
console.log(10 < 5);
console.log(10 !== 10);
console.log(10 > 15);

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 && 10 < 12 //true
console.log(4 > 3 && 10 < 12);

4 > 3 && 10 > 12  //false
console.log(4 > 3 && 10 > 12);

4 > 3 || 10 < 12//true
console.log(4 > 3 || 10 < 12); 

4 > 3 || 10 > 12 //true
console.log(4 > 3 || 10 > 12);

!(4 > 3) //false
console.log(!(4 > 3));

!(4 < 3) //true
console.log(!(4 < 3));

!(false) //true
console.log(!(false));

!(4 > 3 && 10 < 12) // false
console.log(!(4 > 3 && 10 < 12));

!(4 > 3 && 10 > 12) //true
console.log(!(4 > 3 && 10 > 12));

!(4 === '4')  //true
console.log(!(4 === '4'));

let string = `There is no 'on' in both dragon and python`;//true
console.log('python'.includes('on')&&'dragon'.includes('on'));

//7. Use the Date object to do the following activities
//What is the year today?
let date = new Date();
console.log(date.getFullYear());

//What is the month today as a number?
console.log(date.getMonth() + 1);

//What is the date today?
console.log(date.getDate());

//What is the day today?
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[date.getDay()]);

//What is the hours now?
console.log(date.getHours());

//What is the minutes now?
console.log(date.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());

//## Exercises: Level 2

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// alert('Please enter the base and height of the triangle');
// let base = prompt('Enter the base of the triangle');
// let height = prompt('Enter the height of the triangle');
// let area = 0.5 * base * height;

// alert(`The area of the triangle is ${area}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle. Calculate the perimeter of the triangle (perimeter = a + b + c).
// alert('Please enter the sides of the triangle');
// let sideA = prompt('Enter the side A of the triangle');
// let sideB = prompt('Enter the side B of the triangle');
// let sideC = prompt('Enter the side C of the triangle');
// let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
// alert(`The perimeter of the triangle is ${perimeter}`);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// alert('Please enter the length and width of the rectangle');
// let length_ = prompt('Enter the length of the rectangle');
// let width = prompt('Enter the width of the rectangle');
// let areaRectangle = length_ * width;
// let perimeterRectangle = 2 * (parseInt(length_) + parseInt(width));
// alert(`The area of the rectangle is ${areaRectangle} and the perimeter is ${perimeterRectangle}`);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// alert('Please enter the radius of the circle');
// let radius = prompt('Enter the radius of the circle');
// let PI = 3.14;
// let areaCircle = PI * Math.pow(radius, 2);
// let circumference = 2 * PI * radius;

// alert(`The area of the circle is ${areaCircle} and the circumference is ${circumference}`);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
function calculate(equation){
  const match = equation.match(/y\s*=\s*([+-]?\d*)x\s*([+-]\s*\d+)/);
  if (!match) {
    throw new Error('La ecuación no está en el formato correcto');
  }

  const slope = parseFloat(match[1]);
  const yIntercept = parseFloat(match[2].replace(/\s+/g, ''));
  const xIntercept = -yIntercept / slope;

  return { slope, yIntercept, xIntercept };
}

const equation = 'y = 2x - 2';
const { slope, yIntercept, xIntercept } = calculate(equation);
console.log(`slope: ${slope}, y-intercept: ${yIntercept}, x-intercept: ${xIntercept}`);

//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point (6, 10)

function calculateSlope(x1, y1, x2, y2){
  return (y2 - y1) / (x2 - x1);
}

console.log(calculateSlope(2, 2, 6, 10));

//7. Compare the slope of above two questions.
console.log(calculateSlope(2, 2, 6, 10) === slope);

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function calculateY(x){
  return Math.pow(x, 2) + 6 * x + 9;
}

console.log(calculateY(-3));

// //9. Writ a script that prompt the user to enter hours and rate per hour. Calculate pay of the person?
// alert('Please enter the hours worked and the rate per hour');
// let hours = prompt('Enter the hours worked');
// let rate = prompt('Enter the rate per hour');
// let pay = hours * rate;
// alert(`The pay of the person is $${pay}`);

// //10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name7 = prompt('Enter your name');
// if(name7.length > 7)
//   alert('Your name is long');
// else
//   alert('Your name is short');

//11. Compare your first name length and your family name length and you should get this output.

// let firstNameLength = prompt('Enter your first name');
// let lastNameLength = prompt('Enter your last name');

// if(firstNameLength.length > lastNameLength.length)
//   alert(`Your first name, ${firstNameLength} is longer than your family name, ${lastNameLength}`);
// else
//   alert(`Your first name, ${firstNameLength} is shorter than your family name, ${lastNameLength}`);

//12.- Declare two variables myAge and yourAge and addign them initial values and myAge and yourAge
let myAge = 250;
let yourAge= 25;
if(myAge > yourAge)
  console.log(`I am ${myAge - yourAge} years older than you`);
else
  console.log(`You are ${yourAge - myAge} years older than me`);

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let yearBorn = prompt('Enter the year you were born');
// let ageUser = date.getFullYear() - yearBorn;

// if(ageUser >= 18)
//   alert(`You must to be ${ageUser}. You are old enough to drive`);
// else
//   alert(`You are ${ageUser}.You will be allowed to drive in ${18 - ageUser} years`);

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let number = prompt('Enter a number of years you live');
// let seconds = number * 365 * 24 * 60 * 60;
// alert(`You have lived ${seconds} seconds`);

//15. Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
let year_ = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
console.log(`${year_}-${month}-${day} ${hours}:${minutes}`);
// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year_} ${hours}:${minutes}`);
// DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year_} ${hours}:${minutes}`);

//## Exercises: Level 3
//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
let hours_ = date.getHours();
let minutes_ = date.getMinutes();
if(hours_ < 10)
  hours_ = `0${hours_}`;
if(minutes_ < 10)
  minutes_ = `0${minutes_}`;
if(month < 10)
  month = `0${month}`;
if(day < 10)
  day = `0${day}`;
console.log(`${year_}-${month}-${day} ${hours_}:${minutes_}`);


