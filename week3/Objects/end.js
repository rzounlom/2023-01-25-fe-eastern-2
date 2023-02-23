//importing test data
const { employees, nflTeams, myDog } = require("../data");

//**Objects: allow us to store data as key/value pairs for easy access when needed*/

//define an object
const myObjectWrapper = new Object(); //using the new keyword to create a new Object based off the Object class;
const myObj = {
  id: 1,
  name: "Romaric",
  myFunc: function myFunc() {
    console.log("My name is Romaric");
  },
  isCool: true,
}; //array literal syntax: ;

//** Accessing data in objects*/

//dot notation
console.log("Dot notation", myObj.id);
console.log("Dot notation", myObj.myFunc());

// console.log("myDog.bark dot: ", myDog.bark); // log the bark of the dog using dot notation

//bracket notation
// console.log("myDog.bark bracket: ", myDog["bark"]); // log the bark of the dog using bracket notation

//dot notation
console.log("Bracket notation", myObj["id"]);
console.log("Bracket notation", myObj["myFunc"]);

//**Adding/updating data in objects*/
//updating values using dot notation
console.log("MyObj: ", myObj);
myObj.name = "John";
console.log("MyObj: ", myObj);
myObj["name"] = "Jane";
console.log("MyObj: ", myObj);

let toy;
let favoriteSnack = "favoriteSnack";
myDog.bark = "soft"; //update the bark from loud to soft
myDog["bark"] = "medium";
myDog[favoriteSnack] = favoriteSnack;
// console.log(myDog);

//updating values using bracket notation
myDog["name"] = "Mufasa"; //update the bark from loud to soft
// console.log(myDog);

//adding values using dot notation
myDog.owner = "John"; //update the bark from loud to soft
// console.log(myDog);
myDog.toy = toy;
// console.log(myDog);

//adding values using bracket notation
myDog["color"] = "brown"; //update the bark from loud to soft
// console.log(myDog);

//Object.keys: stores keys of an object in an array
console.log(Object.keys(myObj));

//Object.hasOwnProperty: searches an object for a key... returns a boolean
console.log(myDog.hasOwnProperty("eye color"));
console.log(myObj.hasOwnProperty("id"));
