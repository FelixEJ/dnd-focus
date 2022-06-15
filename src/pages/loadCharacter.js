import React from "react";
import NavBar from "../components/navBar";
import "../App.css";
import Success from "../components/CharacterCreate/success";

const LoadCharacter = () => {
  return (
    <div>
      <NavBar />
      <Success />
    </div>
  );
};

export default LoadCharacter;
