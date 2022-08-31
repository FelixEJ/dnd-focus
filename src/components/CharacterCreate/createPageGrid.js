import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, FormControl } from "@material-ui/core";
import ChooseBackgroundGrid from "./chooseBackgroundGrid";
import ChooseClassGrid from "./chooseClassGrid";
import ChooseRaceGrid from "./chooseRaceGrid";
import ConfirmCharacter from "./confirmCharacter";
import Success from "./success";

import parchment from "../../images/parchmentFade.png";
import grid from "../../images/grid.png";
import lined from "../../images/lined.png";
import scroll from "../../images/scroll.png";

import {
  Window,
  Page,
  Layout,
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

import { blankCharacter } from "../../data/character";
import { testCharacter } from "../../data/testCharacter";

function CreatePageGrid() {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState(blankCharacter);
  const [cardBG, setCardBG] = useState(parchment);

  function setCardBGImage(e){
    let bg = e.target.value;
    setCardBG(bg);
  }

  function onCharacterChange(e) {
    // if (e === null) {
    //   console.log("null event");
    // }
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
    setCharacter(newCharacter);
    console.log("new char", character);
  }

  function prevStep() {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
    console.log("scroll");
    setStep(step - 1);
  }

  function nextStep() {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
    console.log("scroll");
    setStep(step + 1);
  }

  // duplicated function
  function updateFeatures(newFeats) {
    const tempFeatures = newFeats;
    const updatedCharacter = { ...character };
    updatedCharacter.features = tempFeatures;
    setCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }
  // duplicated function
  function updateInventory(newInv) {
    const tempInv = newInv;
    const updatedCharacter = { ...character };
    updatedCharacter.inventory = tempInv;
    setCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }
  // duplicated function
  function updateEquipment(newEquip) {
    const tempEquip = newEquip;
    const updatedCharacter = { ...character };
    updatedCharacter.equipment = tempEquip;
    setCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateAttacks(newAttack) {
    const tempAttack = newAttack;
    const updatedCharacter = { ...character };
    updatedCharacter.attacks = tempAttack;
    setCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
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
    setCharacter(newCharacter);
    console.log("new Feature", character);
  }

  // duplicated
  function addEquipment(newEquip) {
    const newEquipment = newEquip;
    newEquip.equipment_id = character.equipment.length + 1;
    const ogCharacter = { ...character };
    const freshEquipment = ogCharacter.equipment;
    freshEquipment.push(newEquipment);
    setCharacter(ogCharacter);
    console.log("new Equipment", character);
  }

  // duplicated
  function addItem(newItem) {
    const newInventoryItem = newItem;
    newItem.item_id = character.inventory.length + 1;
    const ogCharacter = { ...character };
    const freshInventory = ogCharacter.inventory;
    freshInventory.push(newInventoryItem);
    setCharacter(ogCharacter);
    console.log("new Invetory", character);
  }

  function addAttack(newattack) {
    const newAttack = newattack;
    newattack.attack_id = character.attacks.length + 1;
    const newCharacter = { ...character };
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setCharacter(newCharacter);
    console.log("new attack", character);
  }

  function setMagicUser(e) {
    onCharacterChange(e);
    const newCharacter = { ...character };
    newCharacter.magic.magic_user = true;
    newCharacter.magic.ability = e.target.value;
    setCharacter(newCharacter);
    console.log("magic user", character.magic);
  }

  function saveCharacter(character) {
    let tempChar = { ...character };
    tempChar.features.map((feature) => {
      feature.current_uses = feature.max_uses;
    });
    tempChar.hp.current = tempChar.hp.max;
    tempChar.hit_dice.current = tempChar.hit_dice.max;
    tempChar.spellslots.first_remaining = tempChar.spellslots.first;
    tempChar.spellslots.second_remaining = tempChar.spellslots.second;
    tempChar.spellslots.third_remaining = tempChar.spellslots.third;
    tempChar.spellslots.fourth_remaining = tempChar.spellslots.fourth;
    tempChar.spellslots.fifth_remaining = tempChar.spellslots.fifth;
    tempChar.spellslots.sixth_remaining = tempChar.spellslots.sixth;
    tempChar.spellslots.seventh_remaining = tempChar.spellslots.seventh;
    tempChar.spellslots.eighth_remaining = tempChar.spellslots.eighth;
    tempChar.spellslots.ninth_remaining = tempChar.spellslots.ninth;

    // localStorage.setItem(character.name, JSON.stringify(character));
    localStorage.setItem(character.name, JSON.stringify(tempChar));
  }

  function saveLocalCharacter(character) {
    localStorage.setItem(character.name, JSON.stringify(character));
  }

  switch (step) {
    case 1:
      return (
        <Page>
          <FormControl>
          <select
            id="bg_select"
            name="bg_select"
            value={cardBG}
            onChange={setCardBGImage}
          >
            <option value={parchment}>Parchment</option>
            <option value={grid}>Grid</option>
            <option value={scroll}>Scroll</option>
            <option value={lined}>Lined</option>
            
          </select>
        </FormControl>
          <Helmet>
            <meta charSet="utf-8" />
            <title>DnD FOCUS Free Online Character Upkeep Sheet</title>
          </Helmet>
          <ChooseRaceGrid
            nextStep={nextStep}
            onCharacterChange={onCharacterChange}
            character={character}
            addFeature={addFeature}
            updateFeatures={updateFeatures}
            cardBG={cardBG}
          />
        </Page>
      );
    case 2:
      return (
        <ChooseBackgroundGrid
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
          updateFeatures={updateFeatures}
          addEquipment={addEquipment}
          updateEquipment={updateEquipment}
          addItem={addItem}
          updateInventory={updateInventory}
          cardBG={cardBG}
        />
      );
    case 3:
      return (
        <ChooseClassGrid
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          setMagicUser={setMagicUser}
          addFeature={addFeature}
          updateFeatures={updateFeatures}
          addEquipment={addEquipment}
          updateEquipment={updateEquipment}
          addItem={addItem}
          updateInventory={updateInventory}
          addAttack={addAttack}
          updateAttacks={updateAttacks}
          saveLocalCharacter={saveLocalCharacter}
          saveCharacter={saveCharacter}
          cardBG={cardBG}
        />
      );
    case 4:
      return <Success prevStep={prevStep} />;
    default:
    //nothing
  }
}

export default CreatePageGrid;
