import React, { useState } from "react";

import ChooseBackground from "./chooseBackground";
import ChooseClass from "./chooseClass";
import ChooseRace from "./chooseRace";
import ConfirmCharacter from "./confirmCharacter";
import Success from "./success";

function CreatePage() {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    name: "Bilbo",
    level: 3,
    race: "Hobbit",
    size: "Small",
    alignment: "Good",
    background: {
      title: "Folk Hero",
      characteristic: "Refuge",
    },
    class: "Fighter",
    subclass: "Battlemaster",
    multiclasses: [
      {
        class_id: 1,
        class_level: 1,
        subclass: "",
      },
    ],
    hit_dice: {
      dice: "d10",
      max: 0,
      current: 0,
    },
    hp: {
      max: 25,
      current: 25,
      temp: 0,
      temp_max: 0,
    },
    defences: {
      resistances: "fire",
      immunities: "none",
      vulnerabilities: "cold",
    },
    death_saves: {
      pass: 0,
      fail: 0,
    },
    ac: 14,
    speed: 25,
    initiative: 2,
    proficiency_bonus: 2,
    inspiration: false,
    stats: {
      str: 13,
      temp_str: 0,
      dex: 16,
      temp_dex: 0,
      con: 16,
      temp_con: 0,
      int: 10,
      temp_int: 0,
      wis: 12,
      temp_wis: 0,
      cha: 8,
      temp_cha: 0,
    },
    saves: {
      save1: "str",
      save1_bonus: 0,
      save2: "con",
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
      all: [
        "Athletics[STR]", "Acrobatics[DEX]", "Sleight of Hand[DEX]", "Stealth[DEX]", "Arcana[INT]", "History[INT]", "Investigation[INT]", "Nature[INT]", "Religion[INT]", "Animal Handling[WIS]", "Insight[WIS]", "Medicine[WIS]", "Perception[WIS]", "Survival[WIS]", "Deception[CHA]", "Intimidation[CHA]", "Performance[CHA]", "Persuasion[CHA]",
      ],
      proficient: ["Athletics", "Acrobatics", "Perception"],
      expert: ["Stealth"],
    },
    passives: {
      senses: "Darkvision 60ft",
      perception: 14,
      investigation: 10,
      insight: 12,
    },
    features: [
      {
        feature_id: 1,
        level_acquired: 0,
        feature_name: "Lucky",
        source: "Race",
        description: "Reroll 1's",
        max_uses: 1,
        current_uses: 1,
        recharge: "Long rest",
      },
      {
        feature_id: 2,
        level_acquired: 0,
        feature_name: "Cook",
        source: "Race",
        description: "Prepared food gives temp HP equal to proficiency bonus",
        max_uses: 0,
        current_uses: 0,
        recharge: "Passive",
      },
    ],
    attacks: [
      {
        attack_id: 1,
        attack_name: "Bow",
        attack_bonus: 5,
        damage_bonus: 3,
        damage_dice: "d6",
        damage_dice_num: 2,
        damage_type: "Piercing",
        range: "60/180",
        tags: "two handed",
        ammo: 30,
      },
      {
        attack_id: 2,
        attack_name: "Sword",
        attack_bonus: 5,
        damage_bonus: 3,
        damage: "1d6/1d8",
        damage_type: "Slashing",
        range: "",
        tags: "versatile",
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
        item_name: "Shield",
        quantity: 1,
        value_each: 2,
        value_currency: "gp",
        value_total: 2,
      },
    ],
    currency: {
      copper: 4020,
      silver: 69,
      electrum: 34,
      gold: 9,
      platinum: 2,
    },
    proficiencies: {
      languages: "Common, Halfling, Elvish",
      weapons: "Simple, Martial",
      armour: "All, shields",
      other: "Land Vehicles",
    },
    equipment: [
      {
        equipment_id: 1,
        equipment_name: "Breastplate",
        equipment_type: "armour",
        attuned: false,
        desc: "Gives AC 14+DEX(max 2)",
        value: 50,
        value_currency: "gp",
      },
    ],
    personality: {
      trait1: "Cool",
      trait2: "Anxious",
      ideal: "Freedom",
      bond: "Sister",
      flaw: "Gambling",
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
    const newCharacter = {...character};
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setCharacter(newCharacter);
    console.log("new attack", newCharacter);
  }

  const saveCharacter = () => {
    localStorage.setItem(character.name, JSON.stringify(character));
  };

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
          addItem={addItem}
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
