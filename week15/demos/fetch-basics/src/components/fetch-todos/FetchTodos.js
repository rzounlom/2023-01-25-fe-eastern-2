import "./FetchTodos.css";

import { useEffect, useState } from "react";

import TodCardList from "../todo-card-list/TodCardList";
import { defaultTodos } from "../../data/todos";

const FetchTodos = () => {
  //create initial state for todos
  const [todos, setTodos] = useState(defaultTodos);

  //get Todos using Promise syntax
  const getTodosPromise = () =>
    fetch("https://64407795792fe886a88f6162.mockapi.io/api/todos")
      .then((response) => response.json())
      .then((todos) => setTodos(todos))
      .catch((err) => console.log(err));

  //get Todos using Ascync Await syntax
  const getTodosAscyncAwait = async () => {
    const response = await fetch(
      "https://64407795792fe886a88f6162.mockapi.io/api/todos"
    );

    const todos = await response.json();
    console.log("Asynct Await: ", todos);
    setTodos(todos); //update our todos to be the ones from the api
  };

  //add todo
  const addTodo = async (todo) => {
    const response = await fetch(
      `https://64407795792fe886a88f6162.mockapi.io/api/todos`,
      {
        method: "POST", //defaults to GET if not specified
        headers: {
          //can add tokens, security headers here as well
          "Content-Type": "application/json", //what type of data are you sending
        },
        body: JSON.stringify(todo), //need to stringify before sending over network
      }
    );

    const createdTodo = await response.json();
    console.log("CREATED TODO: ", createdTodo);
    await getTodosAscyncAwait(); //call get todos to rerender ui
  };

  //get Todo By ID
  const getTodo = async (id) => {
    const response = await fetch(
      `https://64407795792fe886a88f6162.mockapi.io/api/todos/${id}`
    );

    const todo = await response.json();
    // console.log("Asynct Await: ", todos);
    console.log("TODO BY ID", todo);
  };

  //update Todo with Id and data to be updated
  const updateTodo = async (id, todo) => {
    const response = await fetch(
      `https://64407795792fe886a88f6162.mockapi.io/api/todos/${id}`,
      {
        method: "PUT", //defaults to GET if not specified
        headers: {
          //can add tokens, security headers here as well
          "Content-Type": "application/json", //what type of data are you sending
        },
        body: JSON.stringify(todo), //need to stringify before sending over network
      }
    );

    const updatedTodo = await response.json();
    console.log("UPDATED TODO", updatedTodo);
    await getTodosAscyncAwait(); //call get todos to rerender ui
  };

  const deleteTodo = async (id) => {
    const response = await fetch(
      `https://64407795792fe886a88f6162.mockapi.io/api/todos/${id}`,
      {
        method: "Delete", //defaults to GET if not specified
      }
    );

    const deletedTodo = await response.json();
    // console.log("Asynct Await: ", todos);
    console.log("DELETED TODO", deletedTodo);
    await getTodosAscyncAwait(); //call get todos to rerender ui
  };

  useEffect(() => {
    // getTodosPromise();
    getTodosAscyncAwait();
    //  getTodo(2);
    // updateTodo("5", { completed: true });
    // addTodo({
    //   title: "Wash Car",
    //   completed: false,
    // });
    // deleteTodo("24");
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          addTodo({
            title: "Wash Car",
            completed: false,
          })
        }
      >
        Add Todo
      </button>
      <button onClick={() => getTodo(2)}>Add Todo</button>
      <button onClick={() => updateTodo("5", { completed: true })}>
        Update Todo
      </button>
      <button onClick={() => deleteTodo("5", { completed: true })}>
        Update Todo
      </button>
      <TodCardList todos={todos} />
    </div>
  );
};

export default FetchTodos;
