import React, { useState } from "react";
import { Button, FormControl } from "@material-ui/core";
import styled, { css } from "styled-components";
import LoadCharacterFromJSON from "../loadCharacterFromJSONModal";
import Basics from "../basics";
import Abilities from "../abilities";
import Skills from "../skills";
import Proficiencies from "../proficiencies";
import Attacks from "../attacks";
import Combat from "../combat";
import Features from "../features";
import Health from "../health";
import Inventory from "../inventory";
import Magic from "../magic";
import Passives from "../passives";
import Personality from "../personality";

const CharSheet = styled.div`
  & {
    text-align: center;
    z-index: 1;
    background-color: pink;

    display: block;
    margin-left: auto;
    margin-right: auto;

    column-count: 1;
    column-gap: 1%;
  }
  &{@media only screen and (min-width: 700px) {
    & {
      background-color: orange;
      column-count: 2;
      column-gap: 1%;
    }
  }
  &{@media only screen and (min-width: 1200px) {
    & {
      background-color: yellow;
      column-count: 3;
      column-gap: 1%;
    }
  }}
`;
const CharComponent = styled.div`
  & {
    width: 100%;
    max-width: 400px;
    background-color: lightgreen;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
`;

const Success = ({}) => {
  const [loadedChar, setLoadedChar] = useState({
    name: "",
    level: 0,
    race: "",
    size: "",
    alignment: "",
    xp: 0,
    background: {
      title: "",
      characteristic: "",
    },
    class: "",
    subclass: "",
    multiclasses: [
      {
        class_id: 0,
        class_level: 1,
        subclass: "",
      },
    ],
    hit_dice: {
      dice: "",
      max: 0,
      current: 0,
    },
    hp: {
      max: 0,
      current: 0,
      temp: 0,
      temp_max: 0,
    },
    defences: {
      resistances: "",
      immunities: "",
      vulnerabilities: "",
    },
    death_saves: {
      pass: 0,
      fail: 0,
    },
    exhaustion: 0,
    ac: 0,
    speed: 0,
    initiative: 0,
    proficiency_bonus: 2,
    inspiration: false,
    stats: {
      str: 0,
      temp_str: 0,
      dex: 0,
      temp_dex: 0,
      con: 0,
      temp_con: 0,
      int: 0,
      temp_int: 0,
      wis: 0,
      temp_wis: 0,
      cha: 0,
      temp_cha: 0,
    },
    saves: {
      save1: "",
      save1_bonus: 0,
      save2: "",
      save2_bonus: 0,
      save3: "",
      save3_bonus: 0,
      save4: "",
      save4_bonus: 0,
      save5: "",
      save5_bonus: 0,
      save6: "",
      save6_bonus: 0,
    },
    skills: [
      { name: "Athletics", ability:"STR", bonus: "" },
      { name: "Acrobatics", ability:"DEX", bonus: "" },
      { name: "Sleight of Hand", ability:"DEX", bonus: "" },
      { name: "Stealth", ability:"DEX", bonus: "" },
      { name: "Arcana", ability:"INT", bonus: "" },
      { name: "History", ability:"INT", bonus: "" },
      { name: "Investigation", ability:"INT", bonus: "" },
      { name: "Nature", ability:"INT", bonus: "" },
      { name: "Religion", ability:"INT", bonus: "" },
      { name: "Animal Handling", ability:"WIS", bonus: "" },
      { name: "Insight", ability:"WIS", bonus: "" },
      { name: "Medicine", ability:"WIS", bonus: "" },
      { name: "Perception", ability:"WIS", bonus: "" },
      { name: "Survival", ability:"WIS", bonus: "" },
      { name: "Deception", ability:"CHA", bonus: "" },
      { name: "Intimidation", ability:"CHA", bonus: "" },
      { name: "Performance", ability:"CHA", bonus: "" },
      { name: "Persuasion", ability:"CHA", bonus: "" },
    ],
    passives: {
      senses: "",
      perception: 0,
      investigation: 0,
      insight: 0,
    },
    features: [
      {
        feature_id: 0,
        level_acquired: 0,
        feature_name: "",
        source: "",
        description: "",
        max_uses: 0,
        current_uses: 0,
        recharge: "",
      },
    ],
    attacks: [
      {
        attack_id: 0,
        attack_name: "",
        attack_bonus: 0,
        damage_bonus: 0,
        damage_dice: "",
        damage_dice_num: 0,
        damage_type: "",
        range: "",
        tags: "",
        ammo: 0,
      },
    ],
    magic: {
      magic_user: false,
      save_dc: 0,
      save_dc_bonus: 0,
      spell_attack_mod: 0,
      spell_attack_bonus: 0,
      ability: "",
      cantrips_known: 0,
      spells_known: 0,
      concentrating: false,
    },
    spellslots: {
      first: 0,
      first_remaining: 0,
      second: 0,
      second_remaining: 0,
      third: 0,
      third_remaining: 0,
      fourth: 0,
      fourth_remaining: 0,
      fifth: 0,
      fifth_remaining: 0,
      sixth: 0,
      sixth_remaining: 0,
      seventh: 0,
      seventh_remaining: 0,
      eighth: 0,
      eighth_remaining: 0,
      ninth: 0,
      ninth_remaining: 0,
    },
    inventory: [
      {
        item_id: 0,
        item_name: "",
        quantity: 0,
        value_each: 0,
        value_currency: "",
        value_total: 0,
      },
    ],
    currency: {
      copper: 0,
      silver: 0,
      electrum: 0,
      gold: 0,
      platinum: 0,
    },
    proficiencies: {
      languages: "",
      weapons: "",
      armour: "",
      other: "",
    },
    equipment: [
      {
        equipment_id: 0,
        equipment_name: "",
        equipment_type: "",
        attuned: false,
        desc: "",
        value: 0,
        value_currency: "",
      },
    ],
    personality: {
      trait1: "",
      trait2: "",
      ideal: "",
      bond: "",
      flaw: "",
    },
  });

  function getAllCharacters() {
    var arrayOfChars = [];
    var archive = {},
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      archive[keys[i]] = localStorage.getItem(keys[i]);
      arrayOfChars[i] = JSON.parse(archive[keys[i]]);
    }
    return arrayOfChars;
  }
  let allChars = getAllCharacters();

  function handleChange(e) {
    let charNum = e.target.value;
    setLoadedChar(allChars[charNum]);
  }

  function loadFromJson(character) {
    const newChar = character;
    const newCharacter = { ...loadedChar };
    const oldCharacter = newCharacter;
    setLoadedChar(newChar);
    console.log(newChar);
  }

  return (
    <div>
      <h1>Character Sheet for {loadedChar.name}</h1>
      <LoadCharacterFromJSON
        loadFromJson={loadFromJson}
        character={loadedChar}
      />
      <FormControl>
        <label>Select Character&emsp;</label>
        <select
          id="char_select"
          name="char_select"
          // value={loadedChar.char_select}
          value={loadedChar.name}
          onChange={handleChange}
        >
          <option value={loadedChar}>Select character</option>
          {allChars.map((char, index) => (
            <option key={index} value={index}>
              {char.name} lvl{char.level}
            </option>
          ))}
        </select>
      </FormControl>
      <CharSheet>
        <CharComponent>
          <Basics character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Abilities character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Skills character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Proficiencies character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Passives character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Combat character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Health character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Attacks character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Magic character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Features character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Inventory character={loadedChar} />
        </CharComponent>
        <CharComponent>
          <Personality character={loadedChar} />
        </CharComponent>
      </CharSheet>
    </div>
  );
};

export default Success;
