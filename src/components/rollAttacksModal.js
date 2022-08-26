import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import stylish from "styled-components";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import {
  BotButton,
  TopLeftButton,
  Label,
} from "./StyledPageComponents/pageStyling";

import { getAttackModifier, getDamageModifier } from "./utils";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RollAttacksModal = ({ character }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [attack, setAttack] = useState({
    result: 0,
    damage: 0,
    roll1: "",
    roll2: "",
    damages: [],
  });

  const [attackRoll, setAttackRoll] = useState({
    adv: "",
    mod: "0",
    result: "",
    attackNum: 1,
  });

  const [damageRoll, setDamageRoll] = useState({
    dNum1: "1",
    dSize1: "",
    dNum2: "1",
    dSize2: "",
    dNum3: "1",
    dSize3: "",
    dNum4: "1",
    dSize4: "",
    dNum5: "1",
    dSize5: "",
    dNum6: "1",
    dSize6: "",
    bonus1: "0",
    result: "",
  });

  const handleAttack = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAttackRoll((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const handleDamage = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setDamageRoll((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function RollDice() {
    // console.log("RollDice");
    let attackRoll1 = 0;
    let attackRoll2 = 0;
    let attackMod = parseInt(attackRoll.mod);
    let result = 0;
    // roll d20
    attackRoll1 = Math.ceil(Math.random() * 20);
    // console.log("roll1", attackRoll1);
    result = attackRoll1 + attackMod;
    // if adv/dis, roll 2d20 take high/low
    if (attackRoll.adv !== "") {
      attackRoll2 = Math.ceil(Math.random() * 20);
      // console.log("roll2", attackRoll2);
      if (attackRoll.adv === "adv") {
        result = Math.max(attackRoll1, attackRoll2) + attackMod;
      } else {
        result = Math.min(attackRoll1, attackRoll2) + attackMod;
      }
      // console.log("rolls", attackRoll1, ",", attackRoll2);
    }
    // console.log("result", result);

    // roll damage
    let damRoll1 = 0;
    let numRoll1 = parseInt(damageRoll.dNum1);
    let damRoll2 = 0;
    let numRoll2 = parseInt(damageRoll.dNum2);
    let damRoll3 = 0;
    let numRoll3 = parseInt(damageRoll.dNum3);
    let damRoll4 = 0;
    let numRoll4 = parseInt(damageRoll.dNum4);
    let damRoll5 = 0;
    let numRoll5 = parseInt(damageRoll.dNum5);
    let damRoll6 = 0;
    let numRoll6 = parseInt(damageRoll.dNum6);
    let damBonus1 = parseInt(damageRoll.bonus1);
    let totalDamage = 0;

    let damRolls = [];

    function RollDamage(size) {
      let roll1 = 0;
      let roll2 = 0;
      roll1 = Math.ceil(Math.random() * size);
      damRolls.push(roll1);
      if (attackRoll1 === 20 || attackRoll2 === 20) {
        roll2 += Math.ceil(Math.random() * size);
        damRolls.push(roll2);
      }

      return roll1 + roll2;
    }

    while (numRoll1 > 0) {
      damRoll1 += RollDamage(damageRoll.dSize1);
      numRoll1--;
    }
    if (damageRoll.dSize2 > 0) {
      while (numRoll2 > 0) {
        damRoll2 += RollDamage(damageRoll.dSize2);
        numRoll2--;
      }
    }
    if (damageRoll.dSize3 > 0) {
      while (numRoll3 > 0) {
        damRoll3 += RollDamage(damageRoll.dSize3);
        numRoll3--;
      }
    }
    if (damageRoll.dSize4 > 0) {
      while (numRoll4 > 0) {
        damRoll4 += RollDamage(damageRoll.dSize4);
        numRoll4--;
      }
    }
    if (damageRoll.dSize5 > 0) {
      while (numRoll5 > 0) {
        damRoll5 += RollDamage(damageRoll.dSize5);
        numRoll5--;
      }
    }
    if (damageRoll.dSize6 > 0) {
      while (numRoll6 > 0) {
        damRoll6 += RollDamage(damageRoll.dSize6);
        numRoll6--;
      }
    }

    totalDamage =
      damRoll1 +
      damRoll2 +
      damRoll3 +
      damRoll4 +
      damRoll5 +
      damRoll6 +
      damBonus1;
    // console.log("totDam", totalDamage);
    // console.log("+++++++++++++++++++++++");

    setAttack({
      result: result,
      damage: totalDamage,
      roll1: attackRoll1,
      roll2: attackRoll2,
      damages: damRolls,
    });
  }

  function Reset() {
    setAttack({
      result: 0,
      damage: 0,
      roll1: "",
      roll2: "",
      damages: [],
    });

    setAttackRoll({
      adv: "",
      mod: "0",
      result: "",
      attackNum: 1,
    });

    setDamageRoll({
      dNum1: "1",
      dSize1: "",
      dNum2: "1",
      dSize2: "",
      dNum3: "1",
      dSize3: "",
      dNum4: "1",
      dSize4: "",
      dNum5: "1",
      dSize5: "",
      dNum6: "1",
      dSize6: "",
      bonus1: "0",
      result: "",
    });
  }

  function selectAttack(e) {
    let attackName = e.target.value;
    const roll = { ...attackRoll };
    const dam = { ...damageRoll };

    character.attacks.forEach((att) => {
      if (att.attack_name === attackName) {
        // console.log(att);
        roll.mod = att.attack_bonus;
        dam.dNum1 = att.damage_dice_num;
        dam.dSize1 = att.damage_dice.substring(1);
        dam.bonus1 = att.damage_bonus;

        if (att.bonus_damage_dice_num) {
          dam.dNum2 = att.bonus_damage_dice_num;
          dam.dSize2 = att.bonus_damage_dice.substring(1);
        }
        else{
          dam.dNum2 = "1";
          dam.dSize2 = "";
        }
      }
    });
    setAttackRoll(roll);
    setDamageRoll(dam);
  }

  return (
    <>
      <TopLeftButton>
        <Button
          variant="contained"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Roll Attacks
        </Button>
      </TopLeftButton>
      <AddModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Dice Simulator</h2>
          <Label>Select attack:</Label>
          <select id="attack" name="attack" onChange={selectAttack}>
            <option key={0}>-</option>
            {character.attacks.map((att, index) => (
              <option key={index}>{att.attack_name}</option>
            ))}
          </select>
          <br />
          <label>Attack modifier: +</label>
          <input
            type="number"
            id="mod"
            name="mod"
            value={attackRoll.mod}
            onChange={handleAttack}
            style={{ width: "50px" }}
          />
          <br />
          <label>Attack with Adv?</label>
          <select
            id="adv"
            name="adv"
            value={attackRoll.adv}
            onChange={handleAttack}
          >
            <option value={""}>-</option>
            <option value={"adv"}>Advantage</option>
            <option value={"dis"}>Disadvantage</option>
          </select>
        </Item>
        <Item>
          <Label>Damage:</Label>
          <input
            type="number"
            id="dNum1"
            name="dNum1"
            value={damageRoll.dNum1}
            onChange={handleDamage}
            style={{ width: "50px" }}
          />
          <select
            id="dSize1"
            name="dSize1"
            value={damageRoll.dSize1}
            onChange={handleDamage}
          >
            <option value={""}>-</option>
            <option value={"4"}>d4</option>
            <option value={"6"}>d6</option>
            <option value={"8"}>d8</option>
            <option value={"10"}>d10</option>
            <option value={"12"}>d12</option>
          </select>

          {damageRoll.dSize1 !== "" && (
            <>
              <label>+</label>
              <input
                type="number"
                id="dNum2"
                name="dNum2"
                value={damageRoll.dNum2}
                onChange={handleDamage}
                style={{ width: "50px" }}
              />
              <select
                id="dSize2"
                name="dSize2"
                value={damageRoll.dSize2}
                onChange={handleDamage}
              >
                <option value={""}>-</option>
                <option value={"4"}>d4</option>
                <option value={"6"}>d6</option>
                <option value={"8"}>d8</option>
                <option value={"10"}>d10</option>
                <option value={"12"}>d12</option>
              </select>
            </>
          )}
          {damageRoll.dSize2 !== "" && (
            <>
              <label>+</label>
              <input
                type="number"
                id="dNum3"
                name="dNum3"
                value={damageRoll.dNum3}
                onChange={handleDamage}
                style={{ width: "50px" }}
              />
              <select
                id="dSize3"
                name="dSize3"
                value={damageRoll.dSize3}
                onChange={handleDamage}
              >
                <option value={""}>-</option>
                <option value={"4"}>d4</option>
                <option value={"6"}>d6</option>
                <option value={"8"}>d8</option>
                <option value={"10"}>d10</option>
                <option value={"12"}>d12</option>
              </select>
            </>
          )}
          {damageRoll.dSize3 !== "" && (
            <>
              <label>+</label>
              <input
                type="number"
                id="dNum4"
                name="dNum4"
                value={damageRoll.dNum4}
                onChange={handleDamage}
                style={{ width: "50px" }}
              />
              <select
                id="dSize4"
                name="dSize4"
                value={damageRoll.dSize4}
                onChange={handleDamage}
              >
                <option value={""}>-</option>
                <option value={"4"}>d4</option>
                <option value={"6"}>d6</option>
                <option value={"8"}>d8</option>
                <option value={"10"}>d10</option>
                <option value={"12"}>d12</option>
              </select>
            </>
          )}
          {damageRoll.dSize4 !== "" && (
            <>
              <label>+</label>
              <input
                type="number"
                id="dNum5"
                name="dNum5"
                value={damageRoll.dNum5}
                onChange={handleDamage}
                style={{ width: "50px" }}
              />
              <select
                id="dSize5"
                name="dSize5"
                value={damageRoll.dSize5}
                onChange={handleDamage}
              >
                <option value={""}>-</option>
                <option value={"4"}>d4</option>
                <option value={"6"}>d6</option>
                <option value={"8"}>d8</option>
                <option value={"10"}>d10</option>
                <option value={"12"}>d12</option>
              </select>
            </>
          )}
          {damageRoll.dSize5 !== "" && (
            <>
              <label>+</label>
              <input
                type="number"
                id="dNum6"
                name="dNum6"
                value={damageRoll.dNum6}
                onChange={handleDamage}
                style={{ width: "50px" }}
              />
              <select
                id="dSize6"
                name="dSize6"
                value={damageRoll.dSize6}
                onChange={handleDamage}
              >
                <option value={""}>-</option>
                <option value={"4"}>d4</option>
                <option value={"6"}>d6</option>
                <option value={"8"}>d8</option>
                <option value={"10"}>d10</option>
                <option value={"12"}>d12</option>
              </select>
            </>
          )}
        </Item>
        <Item>
          <Label>Damage bonus:</Label>
          <input
            type="number"
            id="bonus1"
            name="bonus1"
            value={damageRoll.bonus1}
            onChange={handleDamage}
            style={{ width: "50px" }}
          />
        </Item>
        <Item>
          <Label>Result</Label>
          <h2>
            Attack({attack.roll1}
            {attack.roll2 > 0 && <>,{attack.roll2}</>}): {attack.result} <br />{" "}
            Damage(
            {attack.damages.map((roll, i) => (
              <span key={i}>{roll},</span>
            ))}
            ): {attack.damage}
          </h2>
        </Item>
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              RollDice();
            }}
            color="primary"
          >
            Roll!
          </Button>
        </Item>
        <Item>
          <Button variant="contained" onClick={Reset} color="primary">
            Reset
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default RollAttacksModal;
