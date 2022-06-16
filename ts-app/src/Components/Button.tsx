import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickHandler}>Add</button>
    </>
  );
};

export default Button;
