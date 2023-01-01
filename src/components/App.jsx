import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [listOfItemsInToDo, setListOfItemsInToDo] = useState([]);
  //! for any type of warning;
  const [warning, setWarning] = useState({
    show: false,
    message: "",
    type: "",
  });

  const editWarningObject = (show = false, type = "", message = "") => {
    setWarning({ show: show, type: type, message: message });
  };

  const addItem = (text) => {
    if (!text) {
      editWarningObject(true, "danger", "No value has been entered...");
    } else {
      setListOfItemsInToDo((prevItems) => {
        editWarningObject(true, "success", "Value has been succesfully added!");

        return [...prevItems, text];
      });
    }
  };

  const removeItem = (id) => {
    setListOfItemsInToDo((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
        warning={warning}
        editWarningObject={editWarningObject}
        listOfItemsInToDo={listOfItemsInToDo}
      ></InputArea>
      <div>
        <ul>
          {listOfItemsInToDo.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                item={toDoItem}
                onChecked={removeItem}
              ></ToDoItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
