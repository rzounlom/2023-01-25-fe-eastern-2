//**Functions allow us to store reusable programs */
function myFunc(num = 0) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

myFunc(8);

const myFuncVar = function (num = 0) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

myFuncVar(10);

const myArrowFunc = (num = 0) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

myArrowFunc(10);

const hiFunc = () => console.log("hi");
const add = (val = 0) => val + 10;

hiFunc();

console.log(add(10));
