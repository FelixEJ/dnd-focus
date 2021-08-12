import React, { useState } from "react";

import ChooseBackground from "./chooseBackground";
import ChooseClass from "./chooseClass";
import ChooseRace from "./chooseRace";
import ConfirmCharacter from "./confirmCharacter";
import Success from "./success";

function CreatePage() {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    name: "Bill",
    level: 1,
    race: "",
    size: "",
    alignment: "",
    background: {
      title: "",
      characteristic: "",
    },
    classes: [
      {
        class_id: 1,
        main: true,
        class_level: 1,
        subclass: "",
      },
    ],
    hp: {
      max: 0,
      current: 0,
      temp: 0,
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
      temp_str: 10,
      dex: 10,
      temp_dex: 10,
      con: 10,
      temp_con: 10,
      int: 10,
      temp_int: 10,
      wis: 10,
      temp_wis: 10,
      cha: 10,
      temp_cha: 10,
    },
    saves: {
      save_str: 10,
      save_dex: 10,
      save_con: 10,
      save_int: 10,
      save_wis: 10,
      save_cha: 10,
    },
    skills: {
      all: ["athletics"],
      proficient: ["acrobatics"],
      expert: ["stealth"],
    },
    passives: {
      senses: "Darkvision 60ft",
      perception: 10,
      investigation: 10,
      insight: 10,
    },
    features: [
      {
        feature_id: 1,
        level_acquired: 0,
        feature_name: "breath",
        source: "race",
        description: "racial",
        max_uses: 1,
        current_uses: 0,
        recharge: "rest",
      },
      {
        feature_id: 2,
        feature_name: "glare",
        source: "race",
        description: "racial",
        uses: "1",
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
      save_dc: 10,
      spell_attack_bonus: 0,
      ability: "",
    },
    items: [
      {
        item_id: 1,
        item_name: "",
        quantity: 1,
        value_each: 1,
        value_total: 1,
      },
    ],
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
  }

  function prevStep() {
    setStep(step - 1 );
  }

  function nextStep() {
    setStep(step + 1 );
  }

  function addFeature(newFeat) {
    const newFeature = newFeat;
    const newCharacter = {...character}
    // console.log("char copy:", newCharacter);
    const oldFeatures = newCharacter.features;
    oldFeatures.push(newFeature);
    // setCharacter({ features: [...character.features, oldFeatures]});
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
