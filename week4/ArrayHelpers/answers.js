//bring in data from the data folder
const { employees, myDog } = require("../data");

//solve the folowwing exercises using the imported employees array

/*1. Array.find() exercise
using the employees data, find the employee with the name "James" */
const employeeJim = employees.find((employee) => employee.name === "James");
console.log("employeeJim: ", employeeJim);

/*1b. Array.find() exercise
using the employees data and myDog object, find the employee who owns the dog */
const myDogOwner = employees.find((employee) => employee.name === myDog.owner);
console.log("myDogOwner: ", myDogOwner);

/*2. Array.filter() exercise
using the employees data, return an array of all employees with "Software Engineer" in their title title  */
const softwareEngineers = employees.filter((employee) =>
  employee.title.includes("Software Engineer")
);

console.log("softwareEngineers: ", softwareEngineers);

/*2b. Array.filter() exercise
using the employees data, return an array of all employees that do not have "Software Engineer" in their title title  */
const notSoftwareEngineers = employees.filter(
  (employee) => !employee.title.includes("Software Engineer")
);

console.log("notSoftwareEngineers: ", notSoftwareEngineers);

/*3. Array.forEach() exercise
using the employees data, log the string "Employee: <employe name> is a: <employee title>" using template literals*/
employees.forEach((employee) =>
  console.log(`Employee: ${employee.name} is a: ${employee.title}`)
);

/*4. Array.map() exercise
using the employees data, return an array of each employees experience*/
const yearsOfService = employees.map((employee) => employee.exp);
console.log("yearsOfService: ", yearsOfService);

/*5. Array.reduce() exercise
using the yearsOfService array above, use reduce to get the total experience for all employees */
const totalYearsOfService = yearsOfService.reduce(
  (totalYears, val) => totalYears + val
);

console.log("totalYearsOfService: ", totalYearsOfService);

/*6. Array.every() exercise
using the employees data, use every array helper to check if all employees are active */
const allActive = employees.every((employee) => employee.active);
console.log("allActive: ", allActive);

/*7. Array.some() exercise
using the employees data, use some array helper to check if there is at least one employee with "Manager" in their title*/
const hasManager = employees.some((employee) =>
  employee.title.includes("Manager")
);
console.log("hasManager: ", hasManager);
