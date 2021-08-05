import React, { Component } from "react";
import CharacterConfirm from "./characterConfirm";
import ChooseBackground from "./chooseBackground";
import ChooseClass from "./chooseClass";
import ChooseRace from "./chooseRace";
import Success from "./success";

export default class CreateCharacter extends Component {
  state = {
    step: 1,
    name: "",
    level: 1,
    race: "",
    background: {
      title: "",
      characteristic: "",
    },
    class: [
      {
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
      agi: 10,
      temp_agi: 10,
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
      str_save: 10,
      agi_save: 10,
      con_save: 10,
      int_save: 10,
      wis_save: 10,
      cha_save: 10,
    },
    skills: {
      all: ["athletics"],
      proficient: ["acrobatics"],
      expert: ["stealth"],
    },
    passives: {
      perception: 10,
      investigation: 10,
      insight: 10,
    },
    features: [
      {
        feature_name: "",
        source: "",
        description: "",
        uses: "",
        recharge: "",
      },
    ],
    attacks: [
      {
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
  }

  // go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      level,
      race,
      background: { title, characteristic },
      class: [{ main, class_level, subclass }],
      hp: { max, current, temp },
      death_saves: { pass, fail },
      ac,
      speed,
      initiative,
      proficiency_bonus,
      stats: {
        str,
        temp_str,
        agi,
        temp_agi,
        con,
        temp_con,
        int,
        temp_int,
        wis,
        temp_wis,
        cha,
        temp_cha,
      },
      saves: { str_save, agi_save, con_save, int_save, wis_save, cha_save },
      skills: {
        all: [],
        proficient: [],
        expert: [],
      },
      passives: { perception, investigation, insight },
      features: [{ feature_name, source, description, uses, recharge }],
      attacks: [
        {
          weapon,
          attack_bonus,
          damage_bonus,
          damage,
          damage_type,
          range,
          tags,
        },
      ],
      magic: { save_dc, spell_attack_bonus, ability },
      items: [{ item_name, quantity, value_each, value_total }],
      proficiencies: { languages, weapons, armour, other },
      equipment: [{ equipment_name, desc }],
      personality: { trait1, trait2, ideal, bond, flaw },
    } = this.state;

    const values = {
      name,
      level,
      race,
      background: { title, characteristic },
      class: [
        {
          main,
          class_level,
          subclass,
        },
      ],
      hp: { max, current, temp },
      death_saves: { pass, fail },
      ac,
      speed,
      initiative,
      proficiency_bonus,
      stats: {
        str,
        temp_str,
        agi,
        temp_agi,
        con,
        temp_con,
        int,
        temp_int,
        wis,
        temp_wis,
        cha,
        temp_cha,
      },
      saves: { str_save, agi_save, con_save, int_save, wis_save, cha_save },
      skills: {
        all: [],
        proficient: [],
        expert: [],
      },
      passives: { perception, investigation, insight },
      features: [{ feature_name, source, description, uses, recharge }],
      attacks: [
        {
          weapon,
          attack_bonus,
          damage_bonus,
          damage,
          damage_type,
          range,
          tags,
        },
      ],
      magic: { save_dc, spell_attack_bonus, ability },
      items: [{ item_name, quantity, value_each, value_total }],
      proficiencies: { languages, weapons, armour, other },
      equipment: [{ equipment_name, desc }],
      personality: { trait1, trait2, ideal, bond, flaw },
    };

    switch (step) {
      case 1:
        return (
          <ChooseRace
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ChooseBackground
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ChooseClass
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <CharacterConfirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
      //do nothing
    }
  }
}
