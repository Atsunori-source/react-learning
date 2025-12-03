function CounterButtons({ onIncrement, onDecrement, onReset }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>リセット</button>
    </div>
  );
}

export default CounterButtons;
