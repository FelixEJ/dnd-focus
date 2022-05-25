import React, { useState } from "react";

import ChooseBackgroundGrid from "./chooseBackgroundGrid";
import ChooseClassGrid from "./chooseClassGrid";
import ChooseRaceGrid from "./chooseRaceGrid";
import ConfirmCharacter from "./confirmCharacter";
import Success from "./success";

function CreatePageGrid() {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
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
    speed: 30,
    initiative: 0,
    proficiency_bonus: 2,
    inspiration: false,
    stats: {
      str: 8,
      temp_str: 0,
      dex: 8,
      temp_dex: 0,
      con: 8,
      temp_con: 0,
      int: 8,
      temp_int: 0,
      wis: 8,
      temp_wis: 0,
      cha: 8,
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
      perception_bonus: 0,
      investigation: 0,
      investigation_bonus: 0,
      insight: 0,
      insight_bonus: 0,
    },
    features: [
      // {
      //   feature_id: 0,
      //   level_acquired: 0,
      //   feature_name: "",
      //   source: "",
      //   description: "",
      //   max_uses: 0,
      //   current_uses: 0,
      //   recharge: "",
      // },
    ],
    attacks: [
      // {
      //   attack_id: 0,
      //   attack_name: "",
      //   attack_bonus: 0,
      //   damage_bonus: 0,
      //   damage_dice: "",
      //   damage_dice_num: 0,
      //   damage_type: "",
      //   range: "",
      //   tags: "",
      //   ammo: 0,
      // },
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
      // {
      //   item_id: 0,
      //   item_name: "",
      //   quantity: 0,
      //   value_each: 0,
      //   value_currency: "",
      //   value_total: 0,
      // },
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
      // {
      //   equipment_id: 0,
      //   equipment_name: "",
      //   equipment_type: "",
      //   attuned: false,
      //   desc: "",
      //   value: 0,
      //   value_currency: "",
      // },
    ],
    personality: {
      trait1: "",
      trait2: "",
      ideal: "",
      bond: "",
      flaw: "",
    },
  });

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

  switch (step) {
    case 1:
      return (
        <ChooseRaceGrid
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
          updateFeatures={updateFeatures}
        />
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
        />
      );
    case 4:
      return (
        <ConfirmCharacter
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          saveCharacter={saveCharacter}
        />
      );
    case 5:
      return <Success prevStep={prevStep} />;
    default:
    //nothing
  }
}

export default CreatePageGrid;
