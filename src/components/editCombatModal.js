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

const EditCombatModal = ({ character, onCharacterChange }) => {
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
          Armour Class (AC):{" "}
          <input
            type="number"
            id="ac"
            name="ac"
            value={character.ac}
            onChange={onCharacterChange}
            style={{width: "20%"}}
          />
        </label>
      </Item>
      <Item>
        <label>
          Initiative:{" "}
          <input
            type="number"
            id="initiative"
            name="initiative"
            value={character.initiative}
            onChange={onCharacterChange}
            style={{width: "20%"}}
          />
        </label>
      </Item>
      <Item>
        <label>
          Speed:{" "}
          <input
            type="number"
            id="speed"
            name="speed"
            value={character.speed}
            onChange={onCharacterChange}
            style={{width: "20%"}}
          />
        </label>
      </Item>
      <Item>
        <label>Hit Points Max</label>{" "}
        <input
          type="number"
          id="hp.max"
          name="hp.max"
          value={character.hp.max}
          onChange={onCharacterChange}
          style={{width: "20%"}}
          required
        />
      </Item>
      <Item>
        <label>Temp Hit Points Max</label>{" "}
        <input
          type="number"
          min="0"
          id="hp.temp_max"
          name="hp.temp_max"
          value={character.hp.temp_max}
          onChange={onCharacterChange}
          style={{width: "20%"}}
          required
        />
      </Item>
      <Item>
        <label>Hit Dice Max:</label>{" "}
        <input
          type="number"
          id="hit_dice.max"
          name="hit_dice.max"
          value={character.hit_dice.max}
          onChange={onCharacterChange}
          style={{width: "20%"}}
          display="none"
        />
      </Item>
      <Item>
        <label>Multiclass Hit Dice:</label>{" "}
        <input
          type="number"
          id="hit_dice.mult1_max"
          name="hit_dice.mult1_max"
          value={character.hit_dice.mult1_max}
          onChange={onCharacterChange}
          style={{width: "20%"}}
          display="none"
        />
        <select
          id="hit_dice.mult1_dice"
          name="hit_dice.mult1_dice"
          value={character.hit_dice.mult1_dice}
          onChange={onCharacterChange}
        >
          <option value="">-</option>
          <option value={"d6"}>d6</option>
          <option value={"d8"}>d8</option>
          <option value={"d10"}>d10</option>
          <option value={"d12"}>d12</option>
        </select>
      </Item>
      <Item>
        <label>Multiclass 2 Hit Dice:</label>{" "}
        <input
          type="number"
          id="hit_dice.mult2_max"
          name="hit_dice.mult2_max"
          value={character.hit_dice.mult2_max}
          onChange={onCharacterChange}
          style={{width: "20%"}}
          display="none"
        />
        <select
          id="hit_dice.mult2_dice"
          name="hit_dice.mult2_dice"
          value={character.hit_dice.mult2_dice}
          onChange={onCharacterChange}
        >
          <option value="">-</option>
          <option value={"d6"}>d6</option>
          <option value={"d8"}>d8</option>
          <option value={"d10"}>d10</option>
          <option value={"d12"}>d12</option>
        </select>
      </Item>
      <Item>
        <label>
          Resistances:{" "}
          <input
            type="text"
            id="resistances"
            name="defences.resistances"
            value={character.defences.resistances}
            onChange={onCharacterChange}
          />
        </label>
      </Item>
      <Item>
        <label>
          Immunities:{" "}
          <input
            type="text"
            id="immunities"
            name="defences.immunities"
            value={character.defences.immunities}
            onChange={onCharacterChange}
          />
        </label>
      </Item>
      <Item>
        <label>
          Vulnerabilities:{" "}
          <input
            type="text"
            id="vulnerabilities"
            name="defences.vulnerabilities"
            value={character.defences.vulnerabilities}
            onChange={onCharacterChange}
          />
        </label>
      </Item>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </EditModalWindow>
  );
};

export default EditCombatModal;
