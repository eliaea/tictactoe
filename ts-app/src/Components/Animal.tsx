import React from "react";

const Animal = () => {
  let animals: string[] = ["Lion", "Tiger"];

  return (
    <>
      <div>My Animals List</div>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Animal;
