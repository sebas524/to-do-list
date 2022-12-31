import React, { useEffect } from "react";

function Warning({ type, message, removeWarning }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeWarning();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return <p>{message}</p>;
}

export default Warning;