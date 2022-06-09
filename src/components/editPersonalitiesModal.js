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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Container = stylish.div`
  max-height: 90vh;
  overflow: auto;
`;

const ButtonContainer = stylish.div`
  float: right;
  margin-top: -30px;
  margin-right: 5px;
`;

const EditPersonalitiesModal = ({ character, onCharacterChange }) => {
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
          Personality:
          <textarea
            type="text"
            id="trait1"
            placeholder="The first thing I ...?"
            name="personality.trait1"
            value={character.personality.trait1}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
          <textarea
            type="text"
            id="trait2"
            placeholder="I always ...?"
            name="personality.trait2"
            value={character.personality.trait2}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </label>
      </Item>
      <Item>
        <label>
          Ideal:
          <br />
          <textarea
            type="text"
            id="ideal"
            placeholder="Honour, freedom, charity...?"
            name="personality.ideal"
            value={character.personality.ideal}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </label>
      </Item>
      <Item>
        <label>
          Bond:
          <br />
          <textarea
            type="text"
            id="bond"
            placeholder="Debt, family, home..."
            name="personality.bond"
            value={character.personality.bond}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </label>
      </Item>
      <Item>
        <label>
          Flaw:
          <br />
          <textarea
            type="text"
            id="flaw"
            placeholder="Greed, pleasure, fame..."
            name="personality.flaw"
            value={character.personality.flaw}
            onChange={onCharacterChange}
            cols="30"
            rows="2"
          />
        </label>
      </Item>
    </EditModalWindow>
  );
};

export default EditPersonalitiesModal;
