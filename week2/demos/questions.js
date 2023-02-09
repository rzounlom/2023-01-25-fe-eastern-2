//Nested If Statement: Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
//The first if statement will check to see if num1 is greater than or equal to num2 . If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.

//If both conditions are true, print: “Both statements are true.” If the first condition is true but the second is false, print: “The first statement is true, but the second is not.” In all cases, after the outer if statement, print “Program ended.”
var num1 = 5;
var num2 = 3;
var num3 = 7;
var num4 = 9;

// if (num1 >= num2) {
//   console.log("num1 >= num2");

//   if (num3 >= num4) {
//     console.log("Both statements are true.");
//   } else {
//     console.log("The first statement is true, but the second is not.");
//   }
// }

// console.log("Program ended.");

if (num1 >= num2 && num3 >= num4) {
  console.log("both are true");
} else {
  console.log("both are false");
}

console.log("Program ended.");
