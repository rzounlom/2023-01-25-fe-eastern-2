import "./App.css";

import React, { useState } from "react";

import { staticTodos } from "./data/todos";

const TodoApp = () => {
  const [todos, setTodos] = useState(staticTodos);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoData = {
        createdAt: new Date(),
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      };

      setTodos([...todos, newTodoData]);
      setNewTodo("");
    }
  };

  const handleToggleCompletion = (id) => {
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
  };

  const handleDeleteTodo = (id) => {
    console.log(`deleting todo ${id}`);
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
