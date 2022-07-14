import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";

const swashbuckler = require("../data/premade/Swashbuckler_lvl5.json");

function saveLocalCharacter(character) {
  localStorage.setItem(character.name, JSON.stringify(character));
}

const Premade = () => {
  return (
    <div>
      <h1>Premade Character Sheets</h1>
      <h2>{swashbuckler.class}</h2>

      <Button variant="contained" onClick={saveLocalCharacter(swashbuckler)}>
        Save Swashbuckler to local storage
      </Button>
    </div>
  );
};

export default Premade;
