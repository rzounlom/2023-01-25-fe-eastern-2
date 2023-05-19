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
- Basic setup/boilerplate (refacter demo app to use react-router)
  -- index.js --> add BrowserRouter component from react-router-dom and place around the App component as a parent. The App component is still the entry point for our react app
  -- App.jsx --> import Switch and Route components/use them to route to other components
- Refactor the App.jsx to use the Switch and Route components around all components except for the Navbar and Footer components. We want the Navbar and Footer present on all pages. In order to acheive this, we need to place the Navbar before the Switch component, and the Footer after the Switch component.
- Three ways to render components
  -- <Route exact path="/"><Home /></Route>
  -- <Route  path="/about" component={Home}/>
  -- <Route path="/home" render={() => <Home />}/>
  NOTE: We need to use the "exact" prop because the Route coponent will find the firs match. So only the first route that matches the "/" will be matched.
- Refactor the Navbar component
  -- We need to use the Link component from react-router-dom in order to route to the specific pages(Link components are similar to the anchor elements in html)
  -- We need to wrap the place the link tag around the text inside of our li elements and use the "to" prop to route to the pages we setup in the App.jsx file
- Refactor the index.css and Navbar.css files

## Routing within pages/path params using the useRouter hook

- Resources
  -- Basic router setup example. React Router 5 docs: https://v5.reactrouter.com/web/guides/quick-start
  -- React Router 5 w3 Schools reference: https://www.w3schools.com/react/react_router.asp
  -- Detailed guide to react router v5: https://www.sitepoint.com/react-router-complete-guide/

## React Component libraries --> pre-coded and styled components that help speed up the development process.

- similar to css libraries like bootstrap or semantic ui (there are react components libraries for both)
- we install them like any other third party library (make sure to refer to the docs for install and component usage)
- We will be using react-bootstrap for the demo app
- Resource
  -- React Bootstrap Component Library --> https://react-bootstrap.github.io/
  -- Semantic UI React Component Library --> https://react.semantic-ui.com/
  -- Material UI Component Library --> https://mui.com/
  -- AntD Component Library --> https://ant.design/docs/react/introduce

# App Demo --> a basic blog app using the react-bootstrap component library for styling
