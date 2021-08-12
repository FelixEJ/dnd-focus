import React, { Component } from "react";
import CharacterConfirm from "./characterConfirm";
import ChooseBackground from "./chooseBackground";
import ChooseClass from "./chooseClass";
import ChooseRace from "./chooseRace";
import Success from "./success";

export default class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: "",
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
      defenses: {
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
        save_str: 10,
        save_agi: 10,
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
          feature_name: "1",
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
    };
    this.handleChange = this.handleChange.bind(this)
    console.log("set state:", this.state);
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

  //   console.log("handle target: ", e.target.value);
  //   console.log("handle input: ", input);
  //   // console.log(this.state.character);
  //   // console.log(this.character);
  //   console.log("handle state:", this.state);
  //   // console.log("state: " + this.state);
  //   console.log("handle step: " + this.state.step);
  // };

  // handleAddToArray = (input) => (e) => {
  //   this.setState({
  //     ...this.state,
  //     [input]: e.target.value,
  //   });
  // };

  // handleAllChange(e) {
  //   setCharacter({
  //     ...character,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  render() {
    console.log("render state", this.state);
    // const [character, setCharacter] = useState({});
    

    const { step } = this.state;
    const {
      name,
      level,
      race,
      size,
      alignment,
      background: { background_title, background_characteristic },
      class: [{ main, class_level, subclass }],
      hp: { hp_max, 
        hp_current, 
        hp_temp, },
      defenses: { defenses_resistances,
        defenses_immunities,
        defenses_vulnerabilities, },
      death_saves: { death_saves_pass, 
        death_saves_fail, },
      ac,
      speed,
      initiative,
      proficiency_bonus,
      stats: {
        stats_str,
        temp_str,
        stats_agi,
        temp_agi,
        stats_con,
        temp_con,
        stats_int,
        temp_int,
        stats_wis,
        temp_wis,
        stats_cha,
        temp_cha,
      },
      saves: { saves_str, 
        saves_agi, 
        saves_con, 
        saves_int, 
        saves_wis, 
        saves_cha, },
      skills: {
        all: [],
        proficient: [],
        expert: [],
      },
      passives: { perception, investigation, insight, senses },
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

    const character = {
      name,
      level,
      race,
      size,
      alignment,
      background: { background_title, background_characteristic },
      class: [{ main, class_level, subclass }],
      hp: { hp_max, 
        hp_current, 
        hp_temp, },
      defenses: { defenses_resistances,
        defenses_immunities,
        defenses_vulnerabilities, },
      death_saves: { death_saves_pass, 
        death_saves_fail, },
      ac,
      speed,
      initiative,
      proficiency_bonus,
      stats: {
        stats_str,
        temp_str,
        stats_agi,
        temp_agi,
        stats_con,
        temp_con,
        stats_int,
        temp_int,
        stats_wis,
        temp_wis,
        stats_cha,
        temp_cha,
      },
      saves: { saves_str, 
        saves_agi, 
        saves_con, 
        saves_int, 
        saves_wis, 
        saves_cha, },
      skills: {
        all: [],
        proficient: [],
        expert: [],
      },
      passives: { perception, investigation, insight, senses },
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

    console.log("render character", character);

    switch (step) {
      case 1:
        return (
          <ChooseRace
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleAllChange={this.handleAllChange}
            handleAddToArray={this.handleAddToArray}
            character={character}
          />
        );
      case 2:
        return (
          <ChooseBackground
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleAllChange={this.handleAllChange}
            handleAddToArray={this.handleAddToArray}
            character={character}
          />
        );
      case 3:
        return (
          <ChooseClass
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            character={character}
          />
        );
      case 4:
        return (
          <CharacterConfirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            character={character}
          />
        );
      case 5:
        return <Success />;
      default:
      //do nothing
    }
  }
}
