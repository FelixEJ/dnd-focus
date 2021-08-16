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
    level: 1,
    race: "",
    size: "",
    alignment: "",
    background: {
      title: "",
      characteristic: "",
    },
    class: "",
    subclass: "",
    classes: [
      {
        class_id: 1,
        main: true,
        class_level: 1,
        subclass: "",
      },
    ],
    hit_dice: "",
    hp: {
      max: 0,
      current: 0,
      temp: 0,
      temp_max: 0,
    },
    defences: {
      resistances: "none",
      immunities: "none",
      vulnerabilities: "none",
    },
    death_saves: {
      pass: 0,
      fail: 0,
    },
    ac: 10,
    speed: 30,
    initiative: 0,
    proficiency_bonus: 2,
    stats: {
      str: 10,
      temp_str: 0,
      dex: 10,
      temp_dex: 0,
      con: 10,
      temp_con: 0,
      int: 10,
      temp_int: 0,
      wis: 10,
      temp_wis: 0,
      cha: 10,
      temp_cha: 0,
    },
    saves: {
      save_str: false,
      save_str_bonus: 0,
      save_dex: false,
      save_dex_bonus: 0,
      save_con: false,
      save_con_bonus: 0,
      save_int: false,
      save_int_bonus: 0,
      save_wis: false,
      save_wis_bonus: 0,
      save_cha: false,
      save_cha_bonus: 0,
    },
    skills: {
      all: ["athletics"],
      proficient: ["acrobatics"],
      expert: ["stealth"],
    },
    passives: {
      senses: "Darkvision 60ft",
      perception: 0,
      investigation: 0,
      insight: 0,
    },
    features: [
      {
        feature_id: 1,
        level_acquired: 0,
        feature_name: "breath",
        source: "race",
        description: "racial",
        max_uses: 1,
        current_uses: 1,
        recharge: "rest",
      },      
    ],
    attacks: [
      {
        attack_id: 1,
        weapon: "",
        attack_bonus: 0,
        damage_bonus: 0,
        damage: "1d6",
        damage_type: "",
        range: "",
        tags: "",
      },
    ],
    magic: {
      save_dc: 0,
      save_dc_bonus: 0,
      spell_attack_mod: 0,
      spell_attack_bonus: 0,
      ability: "",
      cantrips_known: 0,
      spells_known: 0,
    },
    spellslots: {
      first: 0,
      first_used: 0,
      second: 0,
      second_used: 0,
      third: 0,
      third_used: 0,
      fourth: 0,
      fourth_used: 0,
      fifth: 0,
      fifth_used: 0,
      sixth: 0,
      sixth_used: 0,
      seventh: 0,
      seventh_used: 0,
      eighth: 0,
      eighth_used: 0,
      ninth: 0,
      ninth_used: 0,
    },
    inventory: [
      {
        item_id: 1,
        item_name: "",
        quantity: 0,
        value_each: 0,
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
        equipment_id: 1,
        equipment_name: "",
        equipment_type: "",
        desc: "",
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
    setStep(step - 1 );
  }

  function nextStep() {
    setStep(step + 1 );
  }

  function addFeature(newFeat) {
    const newFeature = newFeat;
    newFeat.feature_id = character.features.length + 1;
    const newCharacter = {...character}
    // console.log("char copy:", newCharacter);
    const oldFeatures = newCharacter.features;
    oldFeatures.push(newFeature);
    // setCharacter({ features: [...character.features, oldFeatures]});
    setCharacter(newCharacter);
    console.log("new char", newCharacter);
  }

  function addEquipment(newEquip) {
    const newEquipment = newEquip;
    newEquip.equipment_id = character.equipment.length + 1;
    const newCharacter = {...character};
    const oldEquipment = newCharacter.equipment;
    oldEquipment.push(newEquipment);
    setCharacter(newCharacter);
    console.log("new char", newCharacter);
  }

  switch (step) {
    case 1:
      return (
        <ChooseRace
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
          addFeature={addFeature}
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
        />
      );
    case 4:
      return (
        <ConfirmCharacter
          prevStep={prevStep}
          nextStep={nextStep}
          onCharacterChange={onCharacterChange}
          character={character}
        />
      );
    case 5:
      return <Success />;
    default:
    //nothing
  }
}

export default CreatePage;
