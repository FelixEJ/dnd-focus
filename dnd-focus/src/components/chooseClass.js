import React from "react";
import { ButtonGroup, TextField, Button, FormControl } from "@material-ui/core";

const ChooseClass = ({ prevStep, nextStep, handleChange, values }) => {
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
      <h1>Choose Class</h1>
      <FormControl>
        <TextField
          placeholder="Name"
          label="Name"
          onChange={handleChange("name")}
          defaultValue={values.name}
        />
      </FormControl>
      <ButtonGroup variant="contained">
        <Button onClick={Continue}>Next</Button>
        <Button onClick={Previous}>Back</Button>
      </ButtonGroup>
    </div>
  );
};

export default ChooseClass;
