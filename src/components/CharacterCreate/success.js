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

import { blankCharacter } from "../../data/character";

import RollDiceModal from "../rollDiceModal";
import RestModal from "../restModal";
import EditAbilitiesModal from "../editAbilitiesModal";

import {
  Window,
  Page,
  Section,
  Card,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../StyledPageComponents/pageStyling";

const Success = () => {
  const [character, setLoadedChar] = useState(blankCharacter);

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
    const newCharacter = { ...character };
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
    // const tempChar = newChar;
    // const updatedCharacter = { ...loadedChar };
    // updatedCharacter = tempChar;
    setLoadedChar(newChar);
    saveLocalCharacter(newChar);
    // console.log("updated char:", newChar);
  }

  function updateFeatures(newFeats) {
    const tempFeatures = newFeats;
    const updatedCharacter = { ...character };
    updatedCharacter.features = tempFeatures;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateInventory(newInv) {
    const tempInv = newInv;
    const updatedCharacter = { ...character };
    updatedCharacter.inventory = tempInv;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateEquipment(newEquip) {
    const tempEquip = newEquip;
    const updatedCharacter = { ...character };
    updatedCharacter.equipment = tempEquip;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateAttacks(newAttack) {
    const tempAttack = newAttack;
    const updatedCharacter = { ...character };
    updatedCharacter.attacks = tempAttack;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateHealth(newHealth) {
    const tempHealth = newHealth;
    const updatedCharacter = { ...character };
    updatedCharacter.hp = tempHealth;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
  }

  // duplicate
  function addFeature(newFeat) {
    const newFeature = newFeat;
    newFeat.feature_id = character.features.length + 1;
    const newCharacter = { ...character };
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
    newEquip.equipment_id = character.equipment.length + 1;
    const newCharacter = { ...character };
    const freshEquipment = newCharacter.equipment;
    freshEquipment.push(newEquipment);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Equipment", newCharacter);
  }

  // duplicated
  function addItem(newItem) {
    const newInventoryItem = newItem;
    newItem.item_id = character.inventory.length + 1;
    const newCharacter = { ...character };
    const freshInventory = newCharacter.inventory;
    freshInventory.push(newInventoryItem);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Invetory", ogCharacter);
  }

  function addAttack(newattack) {
    const newAttack = newattack;
    newattack.attack_id = character.attacks.length + 1;
    const newCharacter = { ...character };
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new attack", loadedChar);
  }

  function saveLocalCharacter(character) {
    localStorage.setItem(character.name, JSON.stringify(character));
  }

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));

  return (
    <Page>
      <h1>
        Character Sheet for {character.name}, lvl:{character.level}
      </h1>

      <RollDiceModal />
      <RestModal character={character} updateCharacter={updateCharacter} />
      <LoadCharacterFromJSON
        loadFromJson={loadFromJson}
        character={character}
      />
      <button>
        <a
          href={"data:" + data}
          download={character.name + "_lvl" + character.level + ".json"}
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
          value={character.name}
          onChange={handleChange}
        >
          <option value={character}>Select character</option>
          {allChars.map((char, index) => (
            <option key={index} value={index}>
              {char.name} lvl{char.level}
            </option>
          ))}
        </select>
      </FormControl>
      {character.name != "" && (
        <>
          <Section>
            <Card>
              <Basics
                character={character}
                onCharacterChange={onCharacterChange}
              />
            </Card>
          </Section>
          <Section>
            <h4>Ability Scores</h4>
            <EditAbilitiesModal
              character={character}
              onCharacterChange={onCharacterChange}
            />
            <Card>
              <SheetAbilities
                character={character}
                setLoadedChar={setLoadedChar}
                onCharacterChange={onCharacterChange}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <SheetProficiencies
                character={character}
                onCharacterChange={onCharacterChange}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <SheetCombat
                character={character}
                onCharacterChange={onCharacterChange}
                updateHealth={updateHealth}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <SheetAttacks
                character={character}
                updateAttacks={updateAttacks}
                addAttack={addAttack}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <SheetMagic
                character={character}
                onCharacterChange={onCharacterChange}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <Features
                character={character}
                updateFeatures={updateFeatures}
                onCharacterChange={onCharacterChange}
                addFeature={addFeature}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <Inventory
                character={character}
                onCharacterChange={onCharacterChange}
                updateInventory={updateInventory}
                updateEquipment={updateEquipment}
                addItem={addItem}
                addFeature={addFeature}
                addEquipment={addEquipment}
              />
            </Card>
          </Section>
          <Section>
            <Card>
              <Personality
                character={character}
                onCharacterChange={onCharacterChange}
              />
            </Card>
          </Section>
        </>
      )}
    </Page>
  );
};

export default Success;
