import React from "react";
import {
  Select,
  TextField,
  Button,
  ButtonGroup,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControl,
  Container,
  Input,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddFeatureModal from "./addFeatureModal";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChooseBackground = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  addFeature,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  console.log("character:", character);

  return (      
    <div>
      <h1>Choose Background:</h1>
      <Box sx={{ flexGrow: 2 }}>
        <FormControl margin="normal">
          <Item>
            <label>
              Title:
              <input
                type="text"
                id="title"
                placeholder="Noble, Orphan..."
                name="background.title"
                value={character.background.title}
                onChange={onCharacterChange}
                required
              />
            </label>
          </Item>
          <Item>
              <label>
                Proficient skills:
                <input
                  type="text"
                  id="proficient"
                  placeholder="Athletics, persuasion..."
                  name="skills.proficient"
                  value={character.skills.proficient}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
        </FormControl>
        <Item>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
        </Item>
      </Box>
    </div>
  );
};

export default ChooseBackground;
