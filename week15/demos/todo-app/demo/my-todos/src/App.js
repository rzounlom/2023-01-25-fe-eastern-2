import "./App.css";

import React, { useEffect, useState } from "react";

import { staticTodos } from "./data/todos";

const API_URL = "https://64407795792fe886a88f6162.mockapi.io/api/todos";

const TodoApp = () => {
  const [todos, setTodos] = useState(staticTodos);
  const [newTodo, setNewTodo] = useState("");

  //get all todos
  const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTodos(data); //set state to retrieved todos
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  //add Todo
  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      //make sure the input is not blank
      const newTodoData = {
        //crate a todo object with the title of the todo and the completed status defaulted to false
        title: newTodo,
        completed: false,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoData),
      });

      const data = await response.json();
      //update the state of our todos
      setTodos([...todos, data]);
      //set our input to blank
      setNewTodo("");
    }
  };

  //set todo status to complete
  const handleToggleCompletion = async (id) => {
    const updatedTodos = todos.map((todo) => {
      //find the todo in sate and return its contents with the status updated
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed, //create object
        };
      }
      return todo;
    });

    //update state
    setTodos(updatedTodos);

    //make update request to change status to complete based on the todo id
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodos.find((todo) => todo.id === id)),
    });
  };

  //delete todo using id
  const handleDeleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    //another way to set state; allows us to get access to current state without being behind the UI
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); //set state to todos minus the one deleted
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form__input"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="form__button" type="button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "list__item--completed" : "list__item"}
            onClick={() => handleToggleCompletion(todo.id)}
          >
            {todo.title}
            <button
              className="list__delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
