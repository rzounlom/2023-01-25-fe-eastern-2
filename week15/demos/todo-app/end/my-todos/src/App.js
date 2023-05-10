import "./App.css";

import React, { useEffect, useState } from "react";

const API_URL = "https://64407795792fe886a88f6162.mockapi.io/api/todos";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTodos(data);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      const newTodoData = {
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
      setTodos([...todos, data]);
      setNewTodo("");
    }
  };

  const handleToggleCompletion = async (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodos.find((todo) => todo.id === id)),
    });
  };

  const handleDeleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

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
