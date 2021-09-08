import React from "react";
import NavBar from "../components/navBar";
import "../App.css";
import CreatePage from '../components/CharacterCreate/createPage'

const CreateCharacter = () => {
  return (
    <div>
        <NavBar />
        <CreatePage />
    </div>
  );
};

export default CreateCharacter;