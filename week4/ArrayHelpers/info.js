//Array.forEach(): method executes a provided function once for each array element.

arrayMethodsArr.forEach(function (element, idx) {
  console.log(`The element ${element} is at index ${idx}`);
});

//Array.map(): method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arrayMethodsArrMap = arrayMethodsArr.map(function (element, idx) {
  return element;
});

console.log("arrayMethodsArrMap: ", arrayMethodsArrMap);

const multiplyArrValsBy2 = forwardNumbers.map(function (value) {
  return value * 2;
});
console.log("multiplyArrValsBy2: ", multiplyArrValsBy2);

//Array.find(): method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const myArrFind = arrayMethodsArr.find(function (element) {
  return element === "cool beans";
});

const myArrFind2 = arrayMethodsArr.find(function (element) {
  return element.length > 10 && typeof element === "nuumber";
});

console.log("myArrFind: ", myArrFind);
console.log("myArrFind2: ", myArrFind2);
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("myArrFind: ", myArrFind);
// console.log("arrayMethodsArr: ", arrayMethodsArr);

if (myArrFind) {
  // console.log("space found");
}

//Array.filter(): creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const myArrObjFilter = arrayMethodsArr.filter(
  (element) => typeof element === "object"
);

// console.log("arrayMethodsArr: ", arrayMethodsArr);
console.log("myArrObjFilter: ", myArrObjFilter);

//Array.reduce(): iterates over an array and runs a function on each element in order to return on value
const myNumbersArr = [25, 10, 20, 5, 15, 25];
//find the sum of the array above using reduce
const myReducedSum = myNumbersArr.reduce((sum, value) => sum + value);
console.log("myReducedSum: ", myReducedSum);

//Array.every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// console.log("arrayMethodsArr: ", arrayMethodsArr);
const allNumbers = arrayMethodsArr.every(
  (element) => typeof element === "number"
);
console.log("allNumbers: ", allNumbers);

//Array.some(): tests whether at least one elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// console.log("arrayMethodsArr: ", arrayMethodsArr);
const someNumbers = arrayMethodsArr.some(
  (element) => typeof element === "number"
);
console.log("someNumbers: ", someNumbers);
