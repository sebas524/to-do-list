import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [listOfItemsInToDo, setListOfItemsInToDo] = useState([]);

  const addItem = (text) => {
    setListOfItemsInToDo((prevItems) => {
      return [...prevItems, text];
    });
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
      <InputArea onAdd={addItem}></InputArea>
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
