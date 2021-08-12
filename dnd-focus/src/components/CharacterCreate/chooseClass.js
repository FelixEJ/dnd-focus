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

const ChooseClass = ({
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

  return (
    <div>
      <h1>Choose Class:</h1>
      <Box sx={{ flexGrow: 2 }}>
        <FormControl margin="normal">

        </FormControl>
        <ButtonGroup variant="contained">        
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
      </Box>
    </div>
  );
};

export default ChooseClass;