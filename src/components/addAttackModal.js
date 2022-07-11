import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import { BotButton, TopRightButton } from "./StyledPageComponents/pageStyling";

import { getAttackModifier, getDamageModifier } from "./utils";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddAttackModal = ({ addAttack, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [attack, setAttack] = useState({
    attack_id: 0,
    attack_type: "wep",
    attack_name: "",
    mod_used: "",
    attack_bonus: 0,
    bonus_attack_bonus: "0",
    damage_bonus: 0,
    bonus_damage_bonus: 0,
    damage_dice: "",
    damage_dice_num: 1,
    damage_type: "",
    range: "",
    tags: "",
    ammo: 0,
    magic: "",
    description: "",
    bonus_damage_dice: "",
    bonus_damage_dice_num: "",
    bonus_damage_dice_type: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAttack((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function clearAttack() {
    setAttack({
      attack_id: 0,
      attack_type: attack.attack_type,
      attack_name: "",
      mod_used: "",
      attack_bonus: 0,
      bonus_attack_bonus: "0",
      damage_bonus: 0,
      bonus_damage_bonus: 0,
      damage_dice: "",
      damage_dice_num: 1,
      damage_type: "",
      range: "",
      tags: "",
      ammo: 0,
      magic: "",
      description: "",
      bonus_damage_dice: "",
      bonus_damage_dice_num: "",
      bonus_damage_dice_type: "",
    });
  }

  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const showModifier = () => {
    switch (attack.mod_used) {
      case "str":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "dex":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "con":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "int":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "wis":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "cha":
        return <div>{getModifier(character.stats.cha)}</div>;
      default:
        return <div>yup</div>;
    }
  };

  function setAttackMods() {
    let attackBonus = 0;
    let damageBonus = 0;
    if (attack.mod_used === "str") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.str),
        attack.bonus_attack_bonus
      );
      damageBonus = getDamageModifier(
        getModifier(character.stats.str),
        attack.bonus_damage_bonus
      );
    } else if (attack.mod_used === "dex") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.dex),
        attack.bonus_attack_bonus
      );
      damageBonus = getDamageModifier(
        getModifier(character.stats.dex),
        attack.bonus_damage_bonus
      );
    } else if (attack.mod_used === "con") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.con),
        attack.bonus_attack_bonus
      );
    } else if (attack.mod_used === "int") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.int),
        attack.bonus_attack_bonus
      );
    } else if (attack.mod_used === "wis") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.wis),
        attack.bonus_attack_bonus
      );
    } else if (attack.mod_used === "cha") {
      attackBonus = getAttackModifier(
        character,
        getModifier(character.stats.cha),
        attack.bonus_attack_bonus
      );
    }
    setAttack((prev) => ({
      ...prev,
      attack_bonus: attackBonus,
      damage_bonus: damageBonus,
    }));
  }

  return (
    <>
      <TopRightButton>
        <Button
          variant="contained"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </TopRightButton>
      <AddModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Add Attack/Spell</h2>
        </Item>
        <Item>
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
        {/* <Item>
          <label>Weapon or Spell?</label>
          <select
            id="magic"
            name="magic"
            value={attack.magic}
            onChange={handleChange}
          >
            <option value={"wep"}>Weapon</option>
            <option value={"spell"}>Spell</option>
          </select>
        </Item> */}
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
            Attack modifier = +
            {attack.mod_used === "str" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.str),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "dex" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.dex),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "con" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.con),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "int" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.int),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "wis" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.wis),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "cha" ? (
              <label>
                {getAttackModifier(
                  character,
                  getModifier(character.stats.cha),
                  attack.bonus_attack_bonus
                )}
              </label>
            ) : null}{" "}
          </label>
          <br />
          <label>Attack bonus </label>
          <input
            type="number"
            id="bonus_attack_bonus"
            name="bonus_attack_bonus"
            value={attack.bonus_attack_bonus}
            onChange={handleChange}
            style={{ width: "50px" }}
          />
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
              <option value={""}>-</option>
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
            Damage modifier =
            {attack.mod_used === "str" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.str),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "dex" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.dex),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "con" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.con),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "int" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.int),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "wis" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.wis),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
            {attack.mod_used === "cha" ? (
              <label>
                {getDamageModifier(
                  getModifier(character.stats.cha),
                  attack.bonus_damage_bonus
                )}
              </label>
            ) : null}{" "}
          </label>
          <br />
          <label>
            Damage bonus
            <input
              type="number"
              id="bonus_damage_bonus"
              name="bonus_damage_bonus"
              value={attack.bonus_damage_bonus}
              onChange={handleChange}
              style={{ width: "50px" }}
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
          <label>Magic Effect?</label>
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
              <label>Description:</label>
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
                <option value={""}>-</option>
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
              setAttackMods();
              addAttack(attack);
              clearAttack();
              handleClose();
            }}
          >
            Confirm Attack
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default AddAttackModal;
