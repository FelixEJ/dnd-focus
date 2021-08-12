import React from "react";
import { ButtonGroup, TextField, Button, FormControl } from "@material-ui/core";

const ChooseBackground = ({ prevStep, nextStep, handleChange, character }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <h1>Choose Background</h1>
      <FormControl>
        <TextField
          placeholder="Name"
          label="Name"
          onChange={handleChange("name")}
          defaultValue={character.name}
        />
      </FormControl>
      <ButtonGroup variant="contained">
        <Button onClick={Continue}>Next</Button>
        <Button onClick={Previous}>Back</Button>
      </ButtonGroup>
    </div>
  );
};

export default ChooseBackground;
