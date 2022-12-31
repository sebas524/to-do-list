import React, { useState } from "react";
import Warning from "./Warning";

export default function InputArea(props) {
  const [typeTheText, setTypeTheText] = useState("");

  const handleChange = (e) => {
    setTypeTheText(e.target.value);
  };
  return (
    <div className="form">
      {props.warning.show && <Warning {...props.warning}></Warning>}
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
