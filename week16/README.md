<!-- Week 16: React Router, React-Bootstrap-->

# React v17

We will be using react 17 and react router 5v per the curriculum.

## Setting up React v17

- create a new react app --> npx create-react-app <appName>
- in your package.json file
  -- change the "react version" to "17.0.2"
  -- change the "react-dom" version to "17.0.2"
  -- change the @testing-library/react version to "12.1.2"
- delete both your package-lock.json file and your node_modules folder
- in your src/index.js file
  -- change the import of reac-dom from 'react-dom/client' to 'react-dom'
  -- adjust the root varabile to be document.getElementById(‘root’)
  -- replace the root.render with ReactDOM.render
  -- re-install your dependencies --> npm install

- Resources
  -- link to downgrade to react 17(for more details): https://dev.to/lowla/create-react-app-with-a-previous-version-of-react-4g03

# React Router --> gives us the ability to configure and control routing within react apps

## React Router Basics

- Install React Router v5: npm i react-router-dom@5.3.0
- Basic setup/boilerplate
- Three ways to render components
  -- <Route path="/category"><Category /></Route>
  -- <Route path="/category" component={Category}/>
  -- <Route path="/category" render={() => <Category />}/>

## Protecting private routes usig the useRouter hook

## Routing within pages/path params using the useRouter hook

- Resources
  -- Basic router setup example. React Router 5 docs: https://v5.reactrouter.com/web/guides/quick-start
  -- React Router 5 w3 Schools reference: https://www.w3schools.com/react/react_router.asp
  -- Detailed guide to react router v5: https://www.sitepoint.com/react-router-complete-guide/

# App Demo

## React Component libraries --> pre-coded and styled components that help speed up the development process.

- similar to css libraries like bootstrap or semantic ui (there are react components libraries for both)
- we install them like any other third party library (make sure to refer to the docs for install and component usage)
- We will be using react-bootstrap for the demo app
