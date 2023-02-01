//JS Strings

//comment out code in JS
/**Multi-line comment in JS
 * You can
 * Add as much text
 * as you want
 */

//Declare a JS string
var firstName = "John";

var middleName = "A.";

var lastName = "Doe";

var fullName = firstName + middleName + lastName;
console.log("fullName1: ", fullName);

//adding spaces
var fullName2 = firstName + " " + middleName + " " + lastName;
console.log("fullName2: ", fullName2);

//with string interpoliation: backticks
var fullName3 = `${firstName} ${middleName} ${lastName}`;
console.log("fullName3: ", fullName3);
