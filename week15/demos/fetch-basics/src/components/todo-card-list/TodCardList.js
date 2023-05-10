import "./TodoCardList.css";

import TodoCard from "../todo-card/TodoCard";

const TodCardList = ({ todos }) => {
  if (todos.length > 0) {
    return (
      <div className="todo-card-list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }

  return <div className="todo-card-list">No Todos</div>;
};

export default TodCardList;
