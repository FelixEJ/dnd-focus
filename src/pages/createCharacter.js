import React from "react";
import NavBar from "../components/navBar";
import "../App.css";
import CreatePageGrid from '../components/CharacterCreate/createPageGrid'

const CreateCharacter = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <CreatePageGrid />
    </div>
  );
};

export default CreateCharacter;