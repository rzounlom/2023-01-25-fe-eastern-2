/**Exercise: Create two callback functions, one for adding two numbers, and one for subtracting two values.
Using a callback function, return the final calculation of an array of numbers.*/
//setup arrays
const myNums = [5, 4, 3, 2, 1];
const myNums2 = [510, 1, 1, 2, 1];

//step 1: create a function called addNumbers that takes in two parameters, a and b, and returns the sum of a plus b
function addNumberReg(a, b) {
  //regular function declaration
  return a + b;
}

const addNumberArrow = (a, b) => {
  //regular function declaration
  return a + b;
};

const addNumbers = (a, b) => a + b;

//step 2: create a function called subtractNumbers that takes in two parameters, a and b, and returns the sum of a minus b
const subtractNumbers = (a, b) => a - b;

/*create a function called calculateNums that takes in an array, arr (default arr to an empty array),  and a callback function, func.
Within the function, use the callback function(func) on each value in the array, and returns the total value.
HINT: declare a variable called sum and use it to store the calucation of each iteration
HINT: use a loop
*/

const calculateNums = (arr = [], callback) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i]);
  }

  return sum;
};

console.log(calculateNums(myNums, addNumbers));
console.log(calculateNums(myNums2, subtractNumbers));
