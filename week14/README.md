<!-- Week 14 React Fundamentals: Props, State, Lifecycle Methods -->

# JavaScript concepts to help with React basics

React is a JavaScript library, so the better we understand JavaScript, the easier creating React apps will be.

## Destructuring: Makes it possible to retrieve values from arrays, or properties from objects and store them into variables. MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

### Array Destructuring

Enable us to retreive values from an array and store them into varables. The values are assigned based on the way they are orderd in the array.

### Object Destructuring

Enable us to retreive properties from an object and store them as values. Remember that objects contain key:value pairs. When we us Object destructuring, the key becomes the varable name and the the value is stored in the variable. NOTE: Destructuring is used for named imports. Example: const {Car} = '../car.js'

# Props: Allows us to pass variables, functions, objects, etc. from parent components down to children

# State: Allows us to keep track of data within our components. We can have local state(scoped to the component), and global state(accessible to all components regardless of where they are in our application). React docs for state: https://react.dev/reference/react/useState

We will be focusing on functional components(as opposed to Class based components) and react hooks for state, but we will walk through an example of state using each type of component.

# Putting it all together with a demo app

## Introduction to SASS: sass docs: https://sass-lang.com/

SASS is a css preprocessor that allows us to write css in a bit of a different way, then compliles it down to normall css so the browser can read it.
NOTE: the use of SASS is totally option(but I highly recommend it over regular css). One if it's best features is allowing us to nest our css selectors instead of needing to select them one at a time.

### Setup sass in react app

- install command: npm - sass
- update the file extension of you .css files to .scss (App.css and index.css)
- update the import statements using your css files to import the .scss files (App.js and index.js)
- start using sass

### Setup our folder structure

- clean up our App.js and App.scss
- create data folder and data file to hold our default users
- create components folder to hold our components
- create folders for the components we need: user-card, user-card-list, and user-form
- create default components for our app and get them on the screen to make sure we are rendering everything correctly

### Our components and data

- data --> will hold a list of defualt users for us populate our app main
- App Component --> will hold the state for our app, as well as our handlers for updating state
- UserForm Component --> responsible for creating a new user object. We will use this form to add users to our state
- UserCardList --> receives a list of users(passed down as prop from our App component) and renders our list of cards/sends user data down as a props to a UserCard Component to be rendered.
- UserCard --> receives props from our UserCardList component for a user and renders user data
