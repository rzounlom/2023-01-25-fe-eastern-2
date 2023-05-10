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
- try/catch block: a safe way to make requests which avoids crashing our application in case of an error. We can decide what happens when our requests fail or succeed
- Public API you can use for testgin/playing around with REST: https://jsonplaceholder.typicode.com/

# Demos

## Todo app
