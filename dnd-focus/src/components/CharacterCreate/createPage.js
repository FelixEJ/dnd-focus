import React, { useState } from "react";

import ChooseBackground from "./chooseBackground";
import ChooseClass from "./chooseClass";
import ChooseRace from "./chooseRace";
import ConfirmCharacter from "./confirmCharacter";
import Success from "./success";

function CreatePage() {
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
    console.log("new char", newCharacter);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function nextStep() {
    setStep(step + 1);
  }

  function addFeature(newFeat) {
    const newFeature = newFeat;
    newFeat.feature_id = character.features.length + 1;
    const newCharacter = { ...character };
    // console.log("char copy:", newCharacter);
    const oldFeatures = newCharacter.features;
    oldFeatures.push(newFeature);
    // setCharacter({ features: [...character.features, oldFeatures]});
    setCharacter(newCharacter);
    console.log("new Feature", newCharacter);
  }

  function addEquipment(newEquip) {
    const newEquipment = newEquip;
    newEquip.equipment_id = character.equipment.length + 1;
    const newCharacter = { ...character };
    const oldEquipment = newCharacter.equipment;
    oldEquipment.push(newEquipment);
    setCharacter(newCharacter);
    console.log("new Equipment", newCharacter);
  }

  function addItem(newItem) {
    const newInventory = newItem;
    newItem.item_id = character.inventory.length + 1;
    const newCharacter = { ...character };
    const oldInventory = newCharacter.inventory;
    oldInventory.push(newInventory);
    setCharacter(newCharacter);
    console.log("new Invetory", newCharacter);
  }

  function addAttack(newattack) {
    const newAttack = newattack;
    newattack.item_id = character.attacks.length + 1;
    const newCharacter = { ...character };
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setCharacter(newCharacter);
    console.log("new attack", newCharacter);
  }

  function addSkill(newSkill) {
    const newSkills = newSkill;
    const newCharacter = { ...character };
    const oldSkills = newCharacter.skills;
    oldSkills.push(newSkills);
    setCharacter(newCharacter);
    console.log("new Invetory", newCharacter);
  }

  function saveCharacter(character) {
    localStorage.setItem(character.name, JSON.stringify(character));
  }

  switch (step) {
    case 1:
      return (
        <ChooseRace
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
          addSkill={addSkill}
        />
      );
    case 2:
      return (
        <ChooseBackground
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
          addEquipment={addEquipment}
          addItem={addItem}
          addSkill={addSkill}
        />
      );
    case 3:
      return (
        <ChooseClass
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
          addEquipment={addEquipment}
          addItem={addItem}
          addAttack={addAttack}
          addSkill={addSkill}
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

export default CreatePage;
