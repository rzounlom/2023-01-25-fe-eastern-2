<!-- Week 14 React Fundamentals: Props, State, Lifecycle Methods -->

# JavaScript concepts to help with React basics

React is a JavaScript library, so the better we understand JavaScript, the easier creating React apps will be.

## Destructuring: Makes it possible to retrieve values from arrays, or properties from objects and store them into variables. MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

### Array Destructuring

Enable us to retreive values from an array and store them into varables. The values are assigned based on the way they are orderd in the array.

### Object Destructuring

Enable us to retreive properties from an object and store them as values. Remember that objects contain key:value pairs. When we us Object destructuring, the key becomes the varable name and the the value is stored in the variable. NOTE: Destructuring is used for named imports. Example: const {Car} = '../car.js'

# Props: Allows us to pass variables, functions, objects, etc. from parent components down to children

# State: Allows us to keep track of data within our components. We can have local state(scoped to the component), and global state(accessible to all components regardless of where they are in our application)

# Putting it all together with a demo app

## Introduction to SASS: sass docs: https://sass-lang.com/

SASS is a css preprocessor that allows us to write css in a bit of a different way, then compliles it down to normall css so the browser can read it.
NOTE: the use of SASS is totally option(but I highly recommend it over regular css). One if it's best features is allowing us to nest our css selectors instead of needing to select them one at a time.

### Setup sass in react app

- install command: npm - sass
- update the file extension of you .css files to .scss
- update the import statements using your css files to import the .scss files
- start using sass
