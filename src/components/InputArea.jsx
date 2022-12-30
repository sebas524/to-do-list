import React, { useState } from "react";

export default function InputArea(props) {
  const [typeTheText, setTypeTheText] = useState("");
  const handleChange = (e) => {
    setTypeTheText(e.target.value);
  };
  return (
    <div className="form">
      <input type="text" value={typeTheText} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(typeTheText);
          setTypeTheText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
