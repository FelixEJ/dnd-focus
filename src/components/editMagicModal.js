import React from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  getModifier,
  getSave,
  getSkill,
  getPassive,
  getSpellModifier,
} from "./utils";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditMagicModal = ({ character, onCharacterChange }) => {
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
        <select
          type="select"
          id="ability"
          name="magic.ability"
          value={character.magic.ability}
          onChange={onCharacterChange}
        >
          <option value={""}>NA</option>
          <option value={"int"}>Intelligence</option>
          <option value={"wis"}>Wisdom</option>
          <option value={"cha"}>Charisma</option>
        </select>
      </Item>
      <Item>
        <label>
          &emsp;{character.magic.ability} mod ={" "}
          {getSpellModifier(character, character.magic.ability)}
          {" || "}
          Proficiency Bonus: +{character.proficiency_bonus}
        </label>
        <br />
        <label>Spell save DC:</label>
        <input
          type="number"
          id="save_dc"
          name="magic.save_dc"
          value={character.magic.save_dc}
          onChange={onCharacterChange}
          size="3"
          required
        />
        <br />
        <label>Spell attack modifier:</label>
        <input
          type="number"
          id="spell_attack_mod"
          name="magic.spell_attack_mod"
          value={character.magic.spell_attack_mod}
          onChange={onCharacterChange}
          size="3"
          required
        />
        <br />
        <label>Cantrips known:</label>
        <input
          type="number"
          id="cantrips_known"
          name="magic.cantrips_known"
          value={character.magic.cantrips_known}
          onChange={onCharacterChange}
          size="2"
          required
        />
        <br />
        <label>Spells known/preparable:</label>
        <input
          type="number"
          id="spells_known"
          name="magic.spells_known"
          value={character.magic.spells_known}
          onChange={onCharacterChange}
          size="2"
          required
        />
        <br />
        <label>Spell slots:</label>
        <br />
        &emsp;<label>1st:</label>
        <input
          type="number"
          id="first"
          name="spellslots.first"
          value={character.spellslots.first}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>2nd:</label>
        <input
          type="number"
          id="second"
          name="spellslots.second"
          value={character.spellslots.second}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>3rd:</label>
        <input
          type="number"
          id="third"
          name="spellslots.third"
          value={character.spellslots.third}
          onChange={onCharacterChange}
          size="2"
          required
        />
        <br />
        &emsp;<label>4th:</label>
        <input
          type="number"
          id="fourth"
          name="spellslots.fourth"
          value={character.spellslots.fourth}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>5th:</label>
        <input
          type="number"
          id="fifth"
          name="spellslots.fifth"
          value={character.spellslots.fifth}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>6th:</label>
        <input
          type="number"
          id="sixth"
          name="spellslots.sixth"
          value={character.spellslots.sixth}
          onChange={onCharacterChange}
          size="2"
          required
        />
        <br />
        &emsp;<label>7th:</label>
        <input
          type="number"
          id="seventh"
          name="spellslots.seventh"
          value={character.spellslots.seventh}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>8th:</label>
        <input
          type="number"
          id="eighth"
          name="spellslots.eighth"
          value={character.spellslots.eighth}
          onChange={onCharacterChange}
          size="2"
          required
        />
        &emsp;<label>9th:</label>
        <input
          type="number"
          id="ninth"
          name="spellslots.ninth"
          value={character.spellslots.ninth}
          onChange={onCharacterChange}
          size="2"
          required
        />
      </Item>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </EditModalWindow>
  );
};

export default EditMagicModal;
