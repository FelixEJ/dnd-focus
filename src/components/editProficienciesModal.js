import React from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

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
    <EditModalWindow
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Item>
        <label>
          Weapons:
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
        </label>
      </Item>
      <Item>
        <label>
          Armour:
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
        </label>
      </Item>
      <Item>
        <label>
          Languages:
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
        </label>
      </Item>
      <Item>
        <label>
          Other:
          <br />
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
        </label>
      </Item>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </EditModalWindow>
  );
};

export default EditProficienciesModal;
