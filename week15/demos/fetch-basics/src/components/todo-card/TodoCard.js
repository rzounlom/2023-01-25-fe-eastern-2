import "./TodoCard.css";

const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <div className="card-data">
        <label>Id: </label>
        <div>{todo.id}</div>
      </div>
      <div className="card-data">
        <label>Title:</label>
        <div>{todo.title}</div>
      </div>
      <div className="card-data">
        <label>Completed: </label>
        <div>{todo.completed ? "completed" : "not completed"}</div>
      </div>
    </div>
  );
};

export default TodoCard;
