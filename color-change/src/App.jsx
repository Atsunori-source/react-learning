import { useState } from "react";
import ColorButton from "./colorButton";

function App() {
  const initialColor = "gray";
  const [color, setColor] = useState(initialColor);

  const colors = [
    { label: "赤", color: "red" },
    { label: "青", color: "blue" },
    { label: "緑", color: "green" },
    { label: "リセット", color: initialColor },
  ];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        padding: "20px",
      }}
    >
      <h1>色変更アプリ</h1>
      <p>現在の色：{color}</p>
      {colors.map((c) => (
        <ColorButton
          key={c.color}
          label={c.label}
          color={c.color}
          onChange={setColor}
        />
      ))}
    </div>
  );
}

export default App;
