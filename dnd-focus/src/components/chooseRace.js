import React from "react";
import {
  Select,
  TextField,
  Button,  
  MenuItem,
  InputLabel,
} from "@material-ui/core";

const ChooseRace = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h1>Choose Race</h1>
      <form>
          <TextField
            placeholder="Name"
            label="Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
            required
          />
          <InputLabel id="level-select-label">Age</InputLabel>
          <Select
            labelId="level-select-label"
            id="level-select"
            // value={age}
            label="Level"
            onChange={handleChange("level")}
            defaultValue={values.level}
            required
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
      </form>
      <div>
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChooseRace;

//https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968#7406
// step 7a
