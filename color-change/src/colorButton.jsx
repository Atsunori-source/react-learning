import { useState } from "react";

function ColorButton({ label , color, onChange}) {
  return (
    <button onClick={() => onChange(color)}>
      {label}
    </button>
  );
};

export default ColorButton;