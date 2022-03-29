import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import styled from "styled-components";
import LoadCharacterFromJSON from "../loadCharacterFromJSONModal";
import Basics from "../basics";
import Abilities from "../abilities";
import SheetAbilities from "../sheetAbilities";
import Skills from "../skills";
import Proficiencies from "../proficiencies";
import SheetProficiencies from "../sheetProficiencies";
import SheetAttacks from "../sheetAttacks";
import Combat from "../combat";
import SheetCombat from "../sheetCombat";
import Features from "../features";
import Health from "../health";
import Inventory from "../inventory";
import Magic from "../magic";
import Passives from "../passives";
import Personality from "../personality";

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: 100%;
//   margin: 1em 0px;
//   max-width: 98vw;
//   height: 95vh;

//   @media only screen and (min-width: 700px) {
//     grid-template-columns: 50% 50%;
//   }
//   @media only screen and (min-width: 1000px) {
//     grid-template-columns: 32% 32% 32%;
//   }
//   @media only screen and (min-width: 1600px) {
//     grid-template-columns: 25% 25% 25% 25%;
//   }
// `;
const CardContainer = styled.div`
  display: block;
  column-count: 1;
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-gap: 1em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  margin: 1em 0px;
  max-width: 98vw;
  

  @media only screen and (min-width: 700px) {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
  }
  @media only screen and (min-width: 1000px) {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    height: 98vh;
  }
  @media only screen and (min-width: 1600px) {
    column-count: 4;
    -webkit-column-count: 4;
    -moz-column-count: 4;
    height: 98vh;
  }
`;

const CardDiv = styled.div`
  text-align: center;
  max-width: 400px;
  min-width: 250px;  

  box-shadow: 0px 0px 8px 0px #c0c0c0;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  background-color: #fff;

  @media only screen and (min-width: 700px) {
    width: 49vw;
  }
  @media only screen and (min-width: 1000px) {
    width: 32vw;
    max-height: 98vh;
  }
  @media only screen and (min-width: 1600px) {
    width: 24vw;
    max-height: 98vh;
  }
`;

const Success = () => {
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
    skills: {
      Athletics: "",
      Athletics_bonus: 0,
      Acrobatics: "",
      Acrobatics_bonus: 0,
      SleightOfHand: "",
      SleightOfHand_bonus: 0,
      Stealth: "",
      Stealth_bonus: 0,
      Arcana: "",
      Arcana_bonus: 0,
      History: "",
      History_bonus: 0,
      Investigation: "",
      Investigation_bonus: 0,
      Nature: "",
      Nature_bonus: 0,
      Religion: "",
      Religion_bonus: 0,
      AnimalHandling: "",
      AnimalHandling_bonus: 0,
      Insight: "",
      Insight_bonus: 0,
      Medicine: "",
      Medicine_bonus: 0,
      Perception: "",
      Perception_bonus: 0,
      Survival: "",
      Survival_bonus: 0,
      Deception: "",
      Deception_bonus: 0,
      Intimidation: "",
      Intimidation_bonus: 0,
      Performance: "",
      Performance_bonus: 0,
      Persuasion: "",
      Persuasion_bonus: 0,
    },
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
    console.log(loadedChar);
  }

  function loadFromJson(character) {
    const newChar = character;
    // const newCharacter = { ...loadedChar };
    // const oldCharacter = newCharacter;
    setLoadedChar(newChar);
    console.log(newChar);
  }
  
  function onCharacterChange(e) {
    const path = e.target.name.split(".");
    const finalProp = path.pop();
    const newCharacter = { ...loadedChar };
    let pointer = newCharacter;
    path.forEach((el) => {
      pointer[el] = { ...pointer[el] };
      pointer = pointer[el];
    });
    pointer[finalProp] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setLoadedChar(newCharacter);
    saveCharacter(newCharacter);
    console.log("new char", loadedChar);
  }

  function saveCharacter(character) {
    localStorage.setItem(character.name, JSON.stringify(character));
  }

  return (
    <div>
      <h1>
        Character Sheet for {loadedChar.name}, lvl:{loadedChar.level}, insp:{loadedChar.inspiration ? "Yes" : "No"}
      </h1>
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
      {/* <CharSheet> */}
      <CardDiv>
        <Basics character={loadedChar} />
      </CardDiv>
      <CardContainer>
        <CardDiv>
          <SheetAbilities
            character={loadedChar}
            setLoadedChar={setLoadedChar}
            onCharacterChange={onCharacterChange}
          />
        </CardDiv>

        {/* <CardDiv>
          <Abilities character={loadedChar} />
        </CardDiv> */}

        {/* <CardDiv>
          <Skills character={loadedChar} />
        </CardDiv> */}
        <CardDiv>
          <SheetProficiencies character={loadedChar} />
        </CardDiv>
        {/* <CardDiv>
          <Proficiencies character={loadedChar} />
        </CardDiv> */}
        {/* <CardDiv>
          <Passives character={loadedChar} />
        </CardDiv> */}
        <CardDiv>
          <SheetCombat
            character={loadedChar}
            onCharacterChange={onCharacterChange}
          />
        </CardDiv>
        {/* <CardDiv>
          <Combat character={loadedChar} />
        </CardDiv> */}
        {/* <CardDiv>
          <Health character={loadedChar} />
        </CardDiv> */}
        <CardDiv>
          <SheetAttacks character={loadedChar} />
        </CardDiv>
        <CardDiv>
          <Magic character={loadedChar} />
        </CardDiv>
        <CardDiv>
          <Features character={loadedChar} />
        </CardDiv>
        <CardDiv>
          <Inventory character={loadedChar} />
        </CardDiv>
        <CardDiv>
          <Personality character={loadedChar} />
        </CardDiv>
      </CardContainer>
      {/* </CharSheet> */}
    </div>
  );
};

export default Success;
