import React from "react";
import Button from "../Components/Button";
import Greetings from "../Components/Greetings";

const Home = () => {
  return (
    <>
      <Greetings firstname="temp" age={10} />
      <Button />
    </>
  );
};

export default Home;
