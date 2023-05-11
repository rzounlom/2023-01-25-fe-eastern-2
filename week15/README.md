<!-- Week 15: REST, FETCH, Functional Components-->

# REST

## Basic REST Operations

- GET: Retreive a resource
- POST: Create new resource
- PUT: update existing resource
- DELETE: remove resource

# Fetch and Component lifecycle methods: allow us to choose what happens in our app, such as routing to another page or rerendering a component(s), based on an event such as our state being updated or an api call being completed

- Fetch: a built-in web API which allows us to make http requests in the browser. Fetch returns a Promise object that we can use to choose what happens after our request has been complete using the .then/.catch syntax.
- Async/Await: A different syntax than the Promise object, but achieves the same objective.
- useEffect Hook: Replaces all other old lifcycle methods. We can use this hook to choose what happens when the state of our component changes, when an API call is complete, or any other event.

# Demos

## Fetch basics

Quick look at https://mockapi.io/

we will use data from the https://64407795792fe886a88f6162.mockapi.io/api/todos website to show examples of making api requests. We will walk through each type of request in isolation using components.

## Todo app

we will use data from the https://64407795792fe886a88f6162.mockapi.io/api/todos website to create a CRUD Todo list. You can create your own apis for your prjects by signing up at: https://mockapi.io/.
