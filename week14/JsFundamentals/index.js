//Array destrucuring
//Example 1: basic array destructuring
let [person1, person2, person3] = ["James", "Sarah", "Michael"];

//The values in the array, "James", "Sarah", and "Michael", are now stored in the variables person1, person2, person3 respectively.
//NOTE: The values are stored based on their order.

// console.log(person1, person2, person3); //James Sarah Michael

//Example: 2 using the rest/spread operators
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [one, two, three, ...rest] = myNums;

// console.log('Not spreading for the "rest" variable: ', one, two, three, rest);
// console.log('Spreading the "rest" variable: ', one, two, three, ...rest);

//Object destructuring
let myDog = {
  name: "Fido",
  color: "brown",
  breed: "Poodle",
  bark: "loud",
  numLegs: 4,
  bark: () => console.log("WOOF!!!"),
};

let employee = {
  firstName: "Jane",
  lastName: "Doe",
  title: "Software Engineer",
  address: {
    street: "777 Miracle Lane",
    city: "Los Vegas",
    state: "NV",
    zip: "77777",
  },
};

//Example 1: basic object destructuring
let { name, breed, bark } = myDog;
// console.log(name, breed, bark);
// bark();

//Example 2: using rest/spread operators
let { firstName, lastName, ...employeeProps } = employee;

// console.log(firstName, lastName, employeeProps);

let employee2 = { firstName: "Jim", lastName: "Doe", ...employeeProps };
// console.log(employee2);
