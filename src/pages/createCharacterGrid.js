import React from "react";
import NavBar from "../components/navBar";
import "../App.css";
import CreatePageGrid from '../components/CharacterCreate/createPageGrid'

const CreateCharacterGrid = () => {
  return (
    <div>
        <NavBar />
        <CreatePageGrid />
        {/* <h1>Hello</h1> */}
    </div>
  );
};

export default CreateCharacterGrid;