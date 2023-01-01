import React, { useState } from "react";
import Warning from "./Warning";

export default function InputArea({
  onAdd,
  warning,
  editWarningObject,
  listOfItemsInToDo,
}) {
  const [typeTheText, setTypeTheText] = useState("");

  const handleChange = (e) => {
    setTypeTheText(e.target.value);
  };
  return (
    <div className="form">
      {warning.show && (
        <Warning
          {...warning}
          removeWarning={editWarningObject}
          listOfItemsInToDo={listOfItemsInToDo}
        ></Warning>
      )}
      <input type="text" value={typeTheText} onChange={handleChange} />
      <button
        onClick={() => {
          onAdd(typeTheText);
          setTypeTheText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
