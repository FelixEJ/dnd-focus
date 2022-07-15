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

import {
  BotButton,
  TopRightButton,
  Label,
} from "./StyledPageComponents/pageStyling";

import { getModifier, getAttackModifier, getDamageModifier } from "./utils";

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
    attack.attack_bonus = attackBonus;
    attack.damage_bonus = damageBonus;
  }

  return (
    <>
      <BotButton>
        <Button
          variant="contained"
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
          <h2>Edit Attack/Spell</h2>
        </Item>
        <Item>
          <label>Title:</label>
          <input
            type="text"
            id="attack_name"
            name="attack_name"
            value={attack.attack_name}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Weapon or Spell?&emsp;</label>
          <select
            id="attack_type"
            name="attack_type"
            value={attack.attack_type}
            onChange={handleChange}
          >
            <option value={"weapon"}>Weapon</option>
            <option value={"spell"}>Spell</option>
          </select>
        </Item>
        {attack.attack_type === "spell" && (
          <>
            <Item>
              <label>
                Magic School: &emsp;
                <select
                  id="school"
                  name="school"
                  value={attack.school}
                  onChange={handleChange}
                >
                  <option value={""}>-</option>
                  <option value={"Abjuration"}>Abjuration</option>
                  <option value={"Conjuration"}>Conjuration</option>
                  <option value={"Divination"}>Divination</option>
                  <option value={"Enchantment"}>Enchantment</option>
                  <option value={"Evocation"}>Evocation</option>
                  <option value={"Illusion"}>Illusion</option>
                  <option value={"Necromancy"}>Necromancy</option>
                  <option value={"Transmutation"}>Transmutation</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Spell level: &emsp;
                <select
                  id="spell_level"
                  name="spell_level"
                  value={attack.spell_level}
                  onChange={handleChange}
                >
                  <option value={""}>-</option>
                  <option value={"cantrip"}>Cantrip</option>
                  <option value={"1"}>1st</option>
                  <option value={"2"}>2nd</option>
                  <option value={"3"}>3rd</option>
                  <option value={"4"}>4th</option>
                  <option value={"5"}>5th</option>
                  <option value={"6"}>6th</option>
                  <option value={"7"}>7th</option>
                  <option value={"8"}>8th</option>
                  <option value={"9"}>9th</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Casting time: &emsp;
                <select
                  id="casting_time"
                  name="casting_time"
                  value={attack.casting_time}
                  onChange={handleChange}
                >
                  <option value={""}>-</option>
                  <option value={"1 Action"}>1 Action</option>
                  <option value={"1 Bonus Action"}>1 Bonus Action</option>
                  <option value={"1 Reaction"}>1 Reaction</option>
                  <option value={"1 Minute"}>1 Minute</option>
                  <option value={"10 Minutes"}>10 Minutes</option>
                  <option value={"1 Hour"}>1 Hour</option>
                  <option value={"8 Hours"}>8 Hours</option>
                  <option value={"12 Hours"}>12 Hours</option>
                </select>
              </label>
            </Item>
            {attack.attack_type === "spell" && (
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
            )}
            <Item>
              <label>Components:</label>
              <input
                type="text"
                id="components"
                name="components"
                value={attack.components}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={attack.duration}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>Concentration?&emsp;</label>
              <select
                id="concentration"
                name="concentration"
                value={attack.concentration}
                onChange={handleChange}
              >
                <option value={""}>No</option>
                <option value={"yes"}>Yes</option>
              </select>
            </Item>
            <Item>
              <label>Ritual?&emsp;</label>
              <select
                id="ritual"
                name="ritual"
                value={attack.ritual}
                onChange={handleChange}
              >
                <option value={""}>No</option>
                <option value={"yes"}>Yes</option>
              </select>
            </Item>
          </>
        )}
        {attack.attack_type !== "spell" && (
          <>
            <Item>
              <label>
                Modifier used: &emsp;
                <select
                  id="mod_used"
                  name="mod_used"
                  value={attack.mod_used}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setAttackMods();
                  //   handleChange(e);
                  // }}
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
                {attack.mod_used === "str" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.str),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
                {attack.mod_used === "dex" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.dex),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
                {attack.mod_used === "con" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.con),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
                {attack.mod_used === "int" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.int),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
                {attack.mod_used === "wis" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.wis),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
                {attack.mod_used === "cha" && (
                  <span>
                    {getAttackModifier(
                      character,
                      getModifier(character.stats.cha),
                      attack.bonus_attack_bonus
                    )}
                  </span>
                )}
              </label>
            </Item>
          </>
        )}
        <Item>
          <label>
            Damage:
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
          <br />
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
        {attack.attack_type !== "spell" && (
          <Item>
            <label>
              Damage modifier =
              {attack.mod_used === "str" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.str),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
              {attack.mod_used === "dex" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.dex),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
              {attack.mod_used === "con" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.con),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
              {attack.mod_used === "int" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.int),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
              {attack.mod_used === "wis" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.wis),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
              {attack.mod_used === "cha" && (
                <span>
                  {" "}
                  {getDamageModifier(
                    getModifier(character.stats.cha),
                    attack.bonus_damage_bonus
                  )}
                </span>
              )}
            </label>
          </Item>
        )}
        {attack.attack_type === "spell" && (
          <Item>
            <label>Save required?&emsp;</label>
            <select
              id="save_required"
              name="save_required"
              value={attack.save_required}
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
            <br />
            <label>Half damage on save?&emsp;</label>
            <select
              id="half_damage_save"
              name="half_damage_save"
              value={attack.half_damage_save}
              onChange={handleChange}
            >
              <option value={""}>No</option>
              <option value={"yes"}>Yes</option>
            </select>
          </Item>
        )}
        <Item>
          {attack.attack_type !== "spell" && (
            <>
              <label>Attack bonus </label>
              <input
                type="number"
                id="bonus_attack_bonus"
                name="bonus_attack_bonus"
                value={attack.bonus_attack_bonus}
                onChange={handleChange}
                style={{ width: "50px" }}
              />
              <br />
            </>
          )}
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
        {attack.attack_type !== "spell" && (
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
        )}
        {attack.attack_type !== "spell" && (
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
        )}
        {attack.attack_type !== "spell" && (
          <>
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
              <label>Magic/Effect?&emsp;</label>
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
          </>
        )}
        {(attack.magic === "yes" || attack.attack_type === "spell") && (
          <>
            <Item>
              <Label>Description:</Label>
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
            {attack.attack_type === "spell" && (
              <Item>
                <Label>At higher levels: </Label>
                <textarea
                  type="text"
                  id="upcasting"
                  name="upcasting"
                  value={attack.upcasting}
                  onChange={handleChange}
                  cols="35"
                  rows="2"
                />
              </Item>
            )}
            {attack.attack_type === "spell" && (
              <Item>
                <Label>Effect summary:</Label>
                <textarea
                  type="text"
                  id="effect_summary"
                  name="effect_summary"
                  value={attack.effect_summary}
                  onChange={handleChange}
                  cols="35"
                  rows="2"
                />
              </Item>
            )}
            {attack.attack_type !== "spell" && (
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
            )}
          </>
        )}
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              setAttackMods();
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
