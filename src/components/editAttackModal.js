import React, { useState, useEffect } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
// import { ButtonGroup } from "@material-ui/core";

import ConfirmDeleteAttackModal from "./confirmDeleteAttackModal";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

import { BotButton, TopRightButton } from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditAttackModal = ({ character, updateAttacks, index, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [attack, setAttack] = useState({});

  useEffect(() => {
    setAttack(
      ...character.attacks.filter((attack) => attack.attack_name === name)
    );
  }, [character]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAttack((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editAttack = () => {
    let attacks = [...character.attacks];
    attacks[index] = attack;
    updateAttacks(attacks);
    handleClose();
  };

  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  return (
    <>
      <BotButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </BotButton>
      <EditModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Edit Attack</h2>
          <label>Attack name</label>
          <input
            type="text"
            id="attack_name"
            name="attack_name"
            value={attack.attack_name}
            onChange={handleChange}
            required
          />
        </Item>
        <Item>
          <label>
            Modifier used: &emsp;
            <select
              id="mod_used"
              name="mod_used"
              value={attack.mod_used}
              onChange={handleChange}
            >
              <option value={""}>-</option>
              <option value={"str"}>Strength</option>
              <option value={"dex"}>Dexterity</option>
              <option value={"con"}>Constitution</option>
              <option value={"int"}>Intelligence</option>
              <option value={"wis"}>Wisdom</option>
              <option value={"cha"}>Charisma</option>
            </select>
          </label>
        </Item>
        <Item>
          <label>
            Attack modifier (
            {attack.mod_used === "str" ? (
              <label>{getModifier(character.stats.str)}</label>
            ) : null}{" "}
            {attack.mod_used === "dex" ? (
              <label>{getModifier(character.stats.dex)}</label>
            ) : null}{" "}
            {attack.mod_used === "con" ? (
              <label>{getModifier(character.stats.con)}</label>
            ) : null}{" "}
            {attack.mod_used === "int" ? (
              <label>{getModifier(character.stats.int)}</label>
            ) : null}{" "}
            {attack.mod_used === "wis" ? (
              <label>{getModifier(character.stats.wis)}</label>
            ) : null}{" "}
            {attack.mod_used === "cha" ? (
              <label>{getModifier(character.stats.cha)}</label>
            ) : null}{" "}
            + {character.proficiency_bonus})
            <input
              type="number"
              id="attack_bonus"
              name="attack_bonus"
              value={attack.attack_bonus}
              onChange={handleChange}
              style={{ width: "20%" }}
            />
          </label>
        </Item>
        <Item>
          <label>
            Damage: &emsp;
            <input
              type="number"
              id="damage_dice_num"
              name="damage_dice_num"
              value={attack.damage_dice_num}
              onChange={handleChange}
              style={{ width: "20%" }}
            />
            <select
              id="damage_dice"
              name="damage_dice"
              value={attack.damage_dice}
              onChange={handleChange}
            >
              <option value={"d4"}>d4</option>
              <option value={"d6"}>d6</option>
              <option value={"d8"}>d8</option>
              <option value={"d10"}>d10</option>
              <option value={"d12"}>d12</option>
            </select>
          </label>
        </Item>
        <Item>
          <label>
            Damage bonus (
            {attack.mod_used === "str" ? (
              <label>{getModifier(character.stats.str)}</label>
            ) : null}{" "}
            {attack.mod_used === "dex" ? (
              <label>{getModifier(character.stats.dex)}</label>
            ) : null}{" "}
            {attack.mod_used === "con" ? (
              <label>{getModifier(character.stats.con)}</label>
            ) : null}{" "}
            {attack.mod_used === "int" ? (
              <label>{getModifier(character.stats.int)}</label>
            ) : null}{" "}
            {attack.mod_used === "wis" ? (
              <label>{getModifier(character.stats.wis)}</label>
            ) : null}{" "}
            {attack.mod_used === "cha" ? (
              <label>{getModifier(character.stats.cha)}</label>
            ) : null}{" "}
            )
            <input
              type="number"
              id="damage_bonus"
              name="damage_bonus"
              value={attack.damage_bonus}
              onChange={handleChange}
              style={{ width: "20%" }}
            />
          </label>
        </Item>
        <Item>
          <label>Damage Type</label>
          <input
            type="text"
            id="damage_type"
            name="damage_type"
            placeholder="...Slashing..."
            value={attack.damage_type}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="..Two-Handed.."
            value={attack.tags}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Range</label>
          <input
            type="text"
            id="range"
            name="range"
            placeholder="..60/120.."
            value={attack.range}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Ammo</label>
          <input
            type="number"
            id="ammo"
            name="ammo"
            placeholder="..30.."
            value={attack.ammo}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
        </Item>
        <Item>
          <label>Magic?</label>
          <select
            id="magic"
            name="magic"
            value={attack.magic}
            onChange={handleChange}
          >
            <option value={""}>-</option>
            <option value={"yes"}>Yes</option>
          </select>
        </Item>
        {attack.magic === "yes" && (
          <>
            <Item>
              <label>Feature Description:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={attack.description}
                onChange={handleChange}
                cols="35"
                rows="5"
              />
            </Item>
            <Item>
              <label>Extra Damage:</label>
              <input
                type="number"
                id="bonus_damage_dice_num"
                name="bonus_damage_dice_num"
                value={attack.bonus_damage_dice_num}
                onChange={handleChange}
                style={{ width: "50px" }}
              />
              <select
                id="bonus_damage_dice"
                name="bonus_damage_dice"
                value={attack.bonus_damage_dice}
                onChange={handleChange}
              >
                <option value={"d4"}>d4</option>
                <option value={"d6"}>d6</option>
                <option value={"d8"}>d8</option>
                <option value={"d10"}>d10</option>
                <option value={"d12"}>d12</option>
              </select>
              <input
                type="text"
                id="bonus_damage_dice_type"
                name="bonus_damage_dice_type"
                value={attack.bonus_damage_dice_type}
                onChange={handleChange}
                style={{ width: "40%" }}
              />
            </Item>
          </>
        )}
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              editAttack();
            }}
            startIcon={<SaveIcon />}
            color="primary"
          >
            Save change
          </Button>
          <ConfirmDeleteAttackModal
            character={character}
            updateAttacks={updateAttacks}
            index={index}
            closePrev={handleClose}
          />
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </EditModalWindow>
    </>
  );
};

export default EditAttackModal;
