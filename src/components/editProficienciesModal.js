import React from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

import {
  Label,
  BotButton,
  TopRightButton,
} from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditProficienciesModal = ({ character, onCharacterChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TopRightButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </TopRightButton>
      <EditModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <Label>Weapons:</Label>
          <textarea
            type="text"
            id="weapons"
            placeholder="Simple and...?"
            name="proficiencies.weapons"
            value={character.proficiencies.weapons}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </Item>
        <Item>
          <Label>Armour:</Label>
          <textarea
            type="text"
            id="armour"
            placeholder="Light and...?"
            name="proficiencies.armour"
            value={character.proficiencies.armour}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </Item>
        <Item>
          <Label>Languages:</Label>
          <textarea
            type="text"
            id="languages"
            placeholder="Common and...?"
            name="proficiencies.languages"
            value={character.proficiencies.languages}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </Item>
        <Item>
          <Label>Other:</Label>
          <textarea
            type="text"
            id="other"
            placeholder="Instruments, games, vehicles...?"
            name="proficiencies.other"
            value={character.proficiencies.other}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </EditModalWindow>
    </>
  );
};

export default EditProficienciesModal;
