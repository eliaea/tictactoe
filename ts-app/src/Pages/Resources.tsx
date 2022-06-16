import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../Components/Posts";

const Resources = () => {
  return (
    <>
      <div>My Posts List</div>
      <Posts />
    </>
  );
};

export default Resources;
