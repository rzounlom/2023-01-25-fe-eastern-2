/*1. Using a for loop print all even numbers up to and including n. Don’t include 0. 
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line*/

/*2. /*2. Using a for loop or for of loop, reverse a string. 
// Example output: 
// hello --> olleh*/
//SETUP: str is the string you*/
//SETUP: str is the string you
let str = "hello";
//HINT: use the reversed variable to add string values
//HINT: reassign the variable reversed during each loop iteration
let reversed = "";
//your answer below this line

//for loop example
// for (i = 0; i < str.length; i++) {
//   reversed = str[i] + reversed;
// }

//for of loop example
for (let char of str) {
  reversed = char + reversed;
}
//PRINT reversed to the console
console.log(reversed);

/*3.Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
*/
let lowerString = "jzvzszrzpz";
//HINT: use the everyOther variable to add string values
//HINT: use char.toUpperCase() or str[i].toUpperCase()
let everyOther = "";

/*4. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let str2 = "don’t know why";
// Example output: 
// “yes”   */

/*5. Given a number n Calculate the factorial of the number
// Example output:
// 24
 */
