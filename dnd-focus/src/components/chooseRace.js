import React from "react";
import {
  Select,
  TextField,
  Button,
  MenuItem,
  InputLabel,
} from "@material-ui/core";



const ChooseRace = ({ nextStep, handleChange, character, handleAllChange, handleAddToArray }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  // const [features, setFeatures] = useState([]);
  // const [character, setCharacter] = useState([]);
  console.log("choose char:", character);
  // console.log("choose state", this.state.level);

  const tempFeatures = [];

  const handleAddFeature = () => {
    const charFeatures = character.features;
    
    //on button press, create blank feature form array input and add html to view.
    //on page submit, save the array of objects to state
  };

  return (
    <div>
      <h1>Choose Race</h1>
      <p>{character.senses}</p>
      <p>{character.resistances}</p>
      <form>
        <TextField
          placeholder="Name"
          label="Name"
          name="name"
          onChange={handleAllChange()}
          defaultValue={character.name}
          required
        />

        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          label="Level"
          onChange={handleChange("level")}
          defaultValue={character.level}
          required
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>

        <InputLabel id="race-text-label">Race</InputLabel>
        <TextField
          labelId="race-text-label"
          id="race-text"
          placeholder="Race"
          onChange={handleChange("race")}
          defaultValue={character.race}
          required
        />

        <InputLabel id="speed-text-label">Speed</InputLabel>
        <TextField
          labelId="speed-text-label"
          id="speed-text"
          placeholder="Speed"
          onChange={handleChange("speed")}
          defaultValue={character.speed}
          required
        />

        <InputLabel id="alignment-text-label">Alignment</InputLabel>
        <TextField
          labelId="alignment-text-label"
          id="alignment-text"
          placeholder="Alingment"
          onChange={handleChange("alignment")}
          defaultValue={character.alignment}
        />

        <InputLabel id="size-text-label">Size</InputLabel>
        <TextField
          labelId="size-text-label"
          id="size-text"
          placeholder="Size"
          onChange={handleChange("size")}
          defaultValue={character.size}
          required
        />

        {/* Maybe change to radio button , darkvision y/n, if yes, what range */}
        <InputLabel id="senses-text-label">Senses</InputLabel>
        <TextField
          labelId="senses-text-label"
          id="senses-text"
          placeholder="Darkvision"
          onChange={handleChange("character.senses")}
          defaultValue={character.senses}
        />

        <InputLabel id="resistances-text-label">Resistances</InputLabel>
        <TextField
          labelId="resistances-text-label"
          id="resistances-text"
          placeholder="Resistances"
          onChange={handleChange("defenses_resistances")}
          defaultValue={character.resistances}
        />

        <InputLabel id="immunities-text-label">Immunities</InputLabel>
        <TextField
          labelId="immunities-text-label"
          id="immunities-text"
          placeholder="Immunities"
          onChange={handleChange("immunities")}
          defaultValue={character.immunities}
        />

        <InputLabel id="vulnerabilities-text-label">Vulnerabilities</InputLabel>
        <TextField
          labelId="vulnerabilities-text-label"
          id="vulnerabilities-text"
          placeholder="Vulnerabilities"
          onChange={handleChange("vulnerabilities")}
          defaultValue={character.vulnerabilities}
        />

        {/* condition loop to add racial features, generates a new form section onclick for customer */}
        <div>
          <p>{tempFeatures}</p>
        </div>
        <div><button
          className="btn btn-link"
          type="button"
          onClick={() => handleAddFeature()}
        >
          +
        </button></div>

      </form>
      <div>
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChooseRace;

//     background: {
//       title: "",
//       characteristic: "",
//     },
//     class: [
//       {
//         main: true,
//         class_level: 1,
//         subclass: "",
//       },
//     ],
//     hp: {
//       max: 0,
//       current: 0,
//       temp: 0,
//     },
// defenses: {
//   resistances,
//   immunities,
//   vulnerabilities
//     death_saves: {
//       pass: 0,
//       fail: 0,
//     },
//     ac: 10,
//     initiative: 0,
//     proficiency_bonus: 2,
//     stats: {
//       str: 10,
//       temp_str: 10,
//       agi: 10,
//       temp_agi: 10,
//       con: 10,
//       temp_con: 10,
//       int: 10,
//       temp_int: 10,
//       wis: 10,
//       temp_wis: 10,
//       cha: 10,
//       temp_cha: 10,
//     },
//     saves: {
//       str_save: 10,
//       agi_save: 10,
//       con_save: 10,
//       int_save: 10,
//       wis_save: 10,
//       cha_save: 10,
//     },
//     skills: {
//       all: ["athletics"],
//       proficient: ["acrobatics"],
//       expert: ["stealth"],
//     },
//     passives: {
//       perception: 10,
//       investigation: 10,
//       insight: 10,
//     },
//     features: [
//       {
//         feature_name: "",
//         source: "",
//         description: "",
//         uses: "",
//         recharge: "",
//       },
//     ],
//     attacks: [
//       {
//         weapon: "",
//         attack_bonus: 0,
//         damage_bonus: 0,
//         damage: "1d6",
//         damage_type: "",
//         range: "",
//         tags: "",
//       },
//     ],
//     magic: {
//       save_dc: 10,
//       spell_attack_bonus: 0,
//       ability: "",
//     },
//     items: [
//       {
//         item_name: "",
//         quantity: 1,
//         value_each: 1,
//         value_total: 1,
//       },
//     ],
//     proficiencies: {
//       languages: "",
//       weapons: "",
//       armour: "",
//       other: "",
//     },
//     equipment: [
//       {
//         equipment_name: "",
//         desc: "",
//       },
//     ],
//     personality: {
//       trait1: "",
//       trait2: "",
//       ideal: "",
//       bond: "",
//       flaw: "",
//     },
