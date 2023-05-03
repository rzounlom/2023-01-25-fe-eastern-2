import "./Counter.css";

const Counter = ({ count, decrement, increment }) => {
  return (
    <div className="counter">
      <div className="counter-count">{count}</div>
      <div className="counter-actions">
        <button className="counter-btn" onClick={decrement}>
          -
        </button>
        <button className="counter-btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
