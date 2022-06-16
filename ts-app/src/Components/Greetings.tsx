import React from "react";

/**
 * Here we are declaring the types before using them
 *
 * the "?" makes it optional
 *
 */
type GreetingsParams = {
  firstname?: String;
  age?: number;
};

/**
 * This is how we pass props in typescript
 *
 * We gave a value to age because it can be undefined, so to prevent it from failing
 */

const Greetings = ({ firstname, age = 5 }: GreetingsParams) => {
  return (
    <div>
      Hello {firstname} {age - 30}
    </div>
  );
};

export default Greetings;
