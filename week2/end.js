//**JavaScript Loops/Conditionals Extended */

//Boolean Logic

//Example 1:
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.
// 2 == "2";
// 2 === 2;
// 10 % 3;
// 10 % 3 === 1;
// true && false;
// false || true;
// true || false;

//Example 2:
let isSunny = true,
  isRainy = false;

// isSunny = true;
// isRainy = false;

// isSunny = true;
// isRainy = true;

// isSunny = false;
// isRainy = true;

// isSunny = false;
// isRainy = true;

isSunny = false;
isRainy = false;

//If we have two variables isSunny and isRainy, and this expression:
// console.log("boolean Answer:: ", (isSunny && isRainy) || !isSunny);

//if statements
//Difference between value and !value

let isLearning = true;
// if (isLearning) {
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// What should the above code console.log?
// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

// if (!isLearning) {
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// What should the above code console.log?

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

// if (firstvariable) {
//   console.log("first");
// } else if (firstvariable || secondvariable) {
//   console.log("second");
// } else if (firstvariable || thirdvariable) {
//   console.log("third");
// } else {
//   console.log("fourth");
// }

// What should the above code console.log? Why?
// What is the value of firstvariable when it is initialized?
// Is the value of firstvariable a "truthy" value? Why?
// Is the value of secondvariable a "truthy" value? Why?
// Is the value of thirdvariable a "truthy" value? Why?

//**Comparison operators */
//>, <, <=,>=,===,!==

//** Switch statements */

let num2 = 5;

let num1 = 5;

// Make sure to set the Break statement whenever your case doese not return anything
let num4 = 100;

//** Loops */

//for loop: most common

for (let counter = 0; counter < 4; counter++) {
  // console.log(counter);
}

//Exercise: use a for loop to print numbers from 1 to 10

//Exercise: use a for loop to print numbers from 1 to 10 that are divisible by 2. HINT use the modulus

//Exercise: use a for loop to print numbers from 1 to 10 that are divisible by 3. HINT use the modulus

//Exercise: FizzBuzz: if the number is divisible by 3 print Fizz, if the number is divisible by 5 print Buzz, if the number is divisible by 5 and 3,print FizzBuzz, else print the number

//while loop:
// A while loop that prints 1, 2, and 3
let counterTwo = 5;

//do while loop: note the do while will always run at least once
let countString = "";
let i = 1;
