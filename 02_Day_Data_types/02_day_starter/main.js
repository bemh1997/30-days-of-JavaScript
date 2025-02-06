// this is your main.js script
// 1.- Declare a variable named challenge and assign it to an initial value 30 Days Of JavaScript
let challenge = '30 Days of JavaScript';
// 2.- Print the string on the console using console.log()
console.log(`Welcome to ${challenge}!`);
// 3.- Print the length of the string on the console using console.log
console.log(challenge.length);

// 4.- Change all the string characters to capital letters using the toUpperCase() mehtod.
let capital_Letters = challenge.toUpperCase();
console.log(capital_Letters);

// 5.- Change all the string characters to lowercase letters using toLowerCase() method.
let lower_Letters = challenge.toLowerCase();
console.log(lower_Letters);

// 6 and 7.- Use substring() method to extract and print the substring from index 3 to the end of the string.
let substr_Letters = challenge.substring(3);
console.log(substr_Letters)

// 8.- Check if the string contains a word Script using includes() method.
console.log(challenge.includes('Script'));

//9.- Split the string into an array using split() method
let splitted = challenge.split('');
console.log(splitted);

// 10.- Split the string 30 days of javascript at the space using split() method
let splitted_spaced = challenge.split(' ');
console.log(splitted_spaced);

// 11.- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
let companies_array = companies.split(', ');
console.log(companies_array);

// 12.- Change 30 days of JavaScript to 30 days of Python using replaced() method.
let Python = challenge.replace('JavaScript', 'Python');
console.log(Python);

// 13.- Use charAt() to find the character at index 15.
let character = challenge.charAt(15);
console.log(character);

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let char_code = challenge.charCodeAt(11);
console.log(char_code);
//15. Use indexOf() to determine the position of the first occurrence of a in 30 Days Of JavaScript
let position = challenge.indexOf('a');
console.log(position);
//16. Use lastIndexOf() to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
let last_Position = challenge.lastIndexOf('a');
console.log(last_Position);
//17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let conjunction = 'You cannot end a sentence with because because because because is a conjunction'
console.log(conjunction.indexOf('because'));
// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(conjunction.lastIndexOf('because'));

// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(conjunction.search('because'));
// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimmed = ' 30 Days Of JavaScript ';
console.log(trimmed.trim());
// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.startsWith('30'));
// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.endsWith('JavaScript'));
// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let merged = '30 Days Of '.concat('JavaScript');
console.log(merged);
// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));



// ##EXERCISE> LEVEL 2:
// 1.- Print the statement.
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// 2.- Print out the following quote bu Mother Teresa.
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3.- Check if typeof'10' is exactly equal to 10. If not make it exactly equal.
let str_int = '10'; 
console.log(str_int === 10); 
let num = parseInt(str_int);
console.log(typeof num);
console.log(num === 10);
// 4.- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let str_float = '9.8';
let float_num = parseInt(str_float) +1;
console.log(float_num === 10 );

// 5.- Check if 'on' is found in both python and jargon
let python = 'Python';
let jargon = 'Jargon';
console.log(python.includes('on') && jargon.includes('on'));

// 6.- I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence_2 = 'I hope this course is not full of jargon';
console.log(sentence_2.includes('jargon'));

// 7.- Generate a random number between 0 and 100 inclusively.
let random_number = Math.floor(Math.random() * 101);
console.log(random_number);
// 8.- Generate a random number between 50 and 100 inclusively.
let randomNumber = Math.floor(Math.random() * (101 - 50 + 1)) + 50;
console.log(randomNumber);

// 9.- Generate a random number between 0 and 255 inclusively.
randomNumber = Math.floor(Math.random() * 256);
console.log(randomNumber) ;

// 10.- Access the 'JavaScript' string characters using a random number.
let javaNumber = Math.floor(Math.random() * 'JavaScript'.length);
console.log('JavaScript'.length);
console.log('JavaScript'[javaNumber]);
// 11.- Use console.log() and escape characters to print the following pattern.

function stringPow() {
  let result = ""; 

  for (let i = 0; i < 5; i++) {
    let row = ""; 
    for (let j = 0; j < 5; j++) {
      if (j === 0) {
        row += (i + 1); 
      } else if (j === 1) {
        row += "\t1"; 
      } else {
        row += `\t${Math.pow(i + 1, j - 1)}`; 
      }
    }
    result += row; 
    if (i < 4) result += "\n"; 
  }

  return result;
}

console.log(stringPow());

//Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let becauseString = 'You cannot end a sentence with because because because is a conjunction'

console.log(becauseString.substr(31,23));

// ##EXERCISE> LEVEL 3:
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(string.match(pattern).length)

// 2. Use __match__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

becauseString = 'You cannot end a sentence with because because because is a conjunction'
pattern = /because/gi
console.log(becauseString.match(pattern).length)

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleaned = sentence.replace(/[%$@#&;]/g, '');
let words = cleaned.split(' ');
let frequency = {};
let max = 0;
let mostFrequent = '';

for (let word of words) {

  if (frequency[word]) {
    
    frequency[word]++;
  } else {
    frequency[word] = 1;
  }

  if (frequency[word] > max) {
    max = frequency[word];
    mostFrequent = word;
  }
}

console.log(mostFrequent);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let numbers = incomeText.match(/\d+/g);
console.log(numbers);

let annualIncome = 0;
for (let number of numbers) {
  if(number !== '10000' )
    annualIncome += parseInt(number) * 12;
  else
    annualIncome += parseInt(number);
} 

console.log(annualIncome);
