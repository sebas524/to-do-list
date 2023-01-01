import React, { useEffect } from "react";

function Warning({ type, message, removeWarning, listOfItemsInToDo }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeWarning();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [listOfItemsInToDo]);

  return <p className={`warning warning-${type}`}>{message}</p>;
}

export default Warning;
