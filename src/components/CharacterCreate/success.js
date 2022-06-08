import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import styled from "styled-components";
import LoadCharacterFromJSON from "../loadCharacterFromJSONModal";
import Basics from "../basics";
import SheetAbilities from "../sheetAbilities";
import SheetProficiencies from "../sheetProficiencies";
import SheetAttacks from "../sheetAttacks";
import SheetCombat from "../sheetCombat";
import Features from "../features";
import Inventory from "../inventory";
import SheetMagic from "../sheetMagic";
import Personality from "../personality";

import RollDiceModal from "../rollDiceModal";
import RestModal from "../restModal";

import blankCharacter from "../../data/character";

const CardContainer = styled.div`
  display: block;
  column-count: 1;
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-gap: 1em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  margin: 1em 0px;
  width: 98vw;
  max-height: 100vh;

  @media only screen and (min-width: 700px) {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
  }
  @media only screen and (min-width: 1000px) {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
  }
  @media only screen and (min-width: 1600px) {
    column-count: 4;
    -webkit-column-count: 4;
    -moz-column-count: 4;
  }
`;

const CardDiv = styled.div`
  text-align: center;
  width: 99vw;
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
  const [loadedChar, setLoadedChar] = useState(blankCharacter);

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
    // console.log(loadedChar);
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
    saveLocalCharacter(newCharacter);
    // console.log("new char", newCharacter);
  }

  function updateCharacter(newChar) {
    const tempCharacter = newChar;
    // const updatedCharacter = { ...loadedChar };
    // updatedCharacter = tempCharacter;
    const updatedCharacter = tempCharacter;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  // function updateCharacter(newChar) {
  //   // const tempChar = newChar;
  //   // const updatedCharacter = { ...loadedChar };
  //   // updatedCharacter = tempChar;
  //   setLoadedChar(newChar);
  //   saveLocalCharacter(newChar);
  //   // console.log("updated char:", newChar);
  // }

  function updateFeatures(newFeats) {
    const tempFeatures = newFeats;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.features = tempFeatures;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateInventory(newInv) {
    const tempInv = newInv;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.inventory = tempInv;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateEquipment(newEquip) {
    const tempEquip = newEquip;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.equipment = tempEquip;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateAttacks(newAttack) {
    const tempAttack = newAttack;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.attacks = tempAttack;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateHealth(newHealth) {
    const tempHealth = newHealth;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.hp = tempHealth;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
  }

  function updateMoney(newMoney) {
    const tempMoney = newMoney;
    const updatedCharacter = { ...loadedChar };
    updatedCharacter.currency = tempMoney;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
  }

  // duplicate
  function addFeature(newFeat) {
    const newFeature = newFeat;
    newFeat.feature_id = loadedChar.features.length + 1;
    const newCharacter = { ...loadedChar };
    // console.log("char copy:", newCharacter);
    const oldFeatures = newCharacter.features;
    oldFeatures.push(newFeature);
    // setCharacter({ features: [...character.features, oldFeatures]});
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Feature", newCharacter);
  }

  // duplicated
  function addEquipment(newEquip) {
    const newEquipment = newEquip;
    newEquip.equipment_id = loadedChar.equipment.length + 1;
    const newCharacter = { ...loadedChar };
    const freshEquipment = newCharacter.equipment;
    freshEquipment.push(newEquipment);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Equipment", newCharacter);
  }

  // duplicated
  function addItem(newItem) {
    const newInventoryItem = newItem;
    newItem.item_id = loadedChar.inventory.length + 1;
    const newCharacter = { ...loadedChar };
    const freshInventory = newCharacter.inventory;
    freshInventory.push(newInventoryItem);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Invetory", ogCharacter);
  }

  function addAttack(newattack) {
    const newAttack = newattack;
    newattack.attack_id = loadedChar.attacks.length + 1;
    const newCharacter = { ...loadedChar };
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    console.log("new attack", loadedChar);
  }

  function saveLocalCharacter(character) {
    localStorage.setItem(character.name, JSON.stringify(character));
  }

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(loadedChar));

  return (
    <div>
      <h1>
        Character Sheet for {loadedChar.name}, lvl:{loadedChar.level}
      </h1>
      <RollDiceModal />
      <RestModal character={loadedChar} updateCharacter={updateCharacter} />
      <LoadCharacterFromJSON
        loadFromJson={loadFromJson}
        character={loadedChar}
      />
      <button>
        <a
          href={"data:" + data}
          download={loadedChar.name + "_lvl" + loadedChar.level + ".json"}
        >
          Download Character
        </a>
      </button>
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
      {loadedChar.name != "" && (
        <>
          <CardDiv>
            <Basics
              character={loadedChar}
              onCharacterChange={onCharacterChange}
            />
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
              <SheetProficiencies
                character={loadedChar}
                onCharacterChange={onCharacterChange}
              />
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
                updateHealth={updateHealth}
              />
            </CardDiv>
            {/* <CardDiv>
          <Combat character={loadedChar} />
        </CardDiv> */}
            {/* <CardDiv>
          <Health character={loadedChar} />
        </CardDiv> */}
            <CardDiv>
              <SheetAttacks
                character={loadedChar}
                updateAttacks={updateAttacks}
                addAttack={addAttack}
              />
            </CardDiv>
            <CardDiv>
              <SheetMagic
                character={loadedChar}
                onCharacterChange={onCharacterChange}
              />
            </CardDiv>
            <CardDiv>
              <Features
                character={loadedChar}
                updateFeatures={updateFeatures}
                onCharacterChange={onCharacterChange}
                addFeature={addFeature}
              />
            </CardDiv>
            <CardDiv>
              <Inventory
                character={loadedChar}
                onCharacterChange={onCharacterChange}
                updateInventory={updateInventory}
                updateEquipment={updateEquipment}
                addItem={addItem}
                addFeature={addFeature}
                addEquipment={addEquipment}
                updateMoney={updateMoney}
              />
            </CardDiv>
            <CardDiv>
              <Personality
                character={loadedChar}
                onCharacterChange={onCharacterChange}
              />
            </CardDiv>
          </CardContainer>
          {/* </CharSheet> */}
        </>
      )}
    </div>
  );
};

export default Success;
