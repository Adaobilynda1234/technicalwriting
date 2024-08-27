import React, { useState } from "react";

const useCounter = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    setValue((prev) => prev - 1);
  };
  const reset = () => {
    setValue(0);
  };

  return { value, increment, decrement, reset };
};

export default useCounter;
