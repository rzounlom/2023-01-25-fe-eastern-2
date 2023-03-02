//**Arrow Functions */

//basic regular function
function calculateArea(l = 0, h = 0, w = 0) {
  return `The area is ${l * w * h}`;
}

console.log("calculateArea no params", calculateArea());

console.log("calculateArea with params", calculateArea(5, 7, 5));

//assign function to a variable
let calculateAreaVar = function (l = 0, h = 0, w = 0) {
  return `The area is ${l * w * h}`;
};

console.log("calculateAreaVar: ", calculateAreaVar());

//basic arrow function
const calculateAreaArrow = (l = 0, h = 0, w = 0) => `The area is ${l * w * h}`;

const calculateAreaArrow3 = (l = 0, h = 0, w = 0) => {
  return `The area is ${l * w * h}`;
};

// console.log(calculateAreaArrow(5, 7, 10));

//basic arrow function with curly braces
const calculateAreaArrow2 = (l = 0, h = 0, w = 0) => {
  let message = `The area is ${l * w * h}`;
  return message;
};

// console.log(calculateAreaArrow2(1, 7, 9));

//**Functions and scope */

//**example scope chain**

//lexical scope is where the code sits:
//when a variable is reference, the JS engine will look for that variable up the scope chain all the way up to the global scope
let findMe = "You Found ME!!";
function a() {
  //**functions returning functions**
  let aVar = `hello from the a Scope!`; //aVar is available inside this function and to the scopes below it
  return function b() {
    let bVar = `hello from the b Scope!`; //bVar is available inside this function and to the scopes below it
    console.log("aVar from the b Scope: ", aVar);
    return function c() {
      // let aVar = "avar in C";
      let cVar = `hello from the c Scope!`; //cVar is available inside this function and to the scopes below it
      console.log("bVar: ", bVar);
      console.log("cVar: ", cVar);
      console.log("aVar in c: ", aVar);
      console.log(findMe);
      return "Hello from function c";
    };
  };
}

//**call mutliple functions within a functionchain**
console.log(a()()());

const myNestedFunctions = () => () => () => () => "You Finally found ME!!!!!";
console.log("myNestedFunctions: ", myNestedFunctions()()()());

//**EXERCISE: Turn the above regular function example into an arrow function */

//**Functions in objects */

const myPerson = {
  firstName: function () {
    //anonomys functions have no names
    return "James";
  },
  lastName: function () {
    return "Henderson";
  },
  occupation: function () {
    return "Software Engineer";
  },
};

//create a bisic arrow function
let myarrow = () => console.log("myArrow");

const myPerson2 = {
  firstName: () => {
    //anonomys functions have no names
    return "Carl";
  },
  lastName: () => {
    return "Johnson";
  },
  occupation: () => {
    return "Software Engineer";
  },
};

const myPerson3 = {
  firstName: () => "Sam",
  lastName: () => "Carter",
  occupation: () => "Software Engineer",
};

console.log(
  `My name is ${myPerson.firstName()}  ${myPerson.lastName()} and I am a ${myPerson.occupation()}`
);

console.log(
  `My name is ${myPerson2.firstName()}  ${myPerson2.lastName()} and I am a ${myPerson2.occupation()}`
);

console.log(
  `My name is ${myPerson3.firstName()}  ${myPerson3.lastName()} and I am a ${myPerson3.occupation()}`
);
//**EXERCISE: Write the myPerson object functions as arrow functions
