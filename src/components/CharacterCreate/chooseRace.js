import React from "react";
import {
  Button,
  FormControl,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddFeatureModal from "./addFeatureModal";
import AddSkillModal from "./addSkillModal";
import stylish from "styled-components";

const BotButtons = stylish.div`
  margin-bottom: 40px;
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChooseRace = ({
  nextStep,
  onCharacterChange,
  character,
  addFeature,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  // duplicate, move to utilities
  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  return (
    <div>
      {/* <AddFeatureModal /> */}
      <h1>Choose Race</h1>
      {/* <p>name:{character.name}</p>
      <p>level:{character.level}</p>
      <p>race:{character.race}</p> */}
      {/* <p>str:{character.stats.str}</p>
      <p>dex:{character.stats.dex}</p>
      <p>cha:{character.stats.cha}</p> */}
      <p>
        <a href="https://chicken-dinner.com/5e/5e-point-buy.html">
          5e point buy and racial info here
        </a>
      </p>
      <Box sx={{ flexGrow: 2 }}>
        <div>
          <Button variant="contained" onClick={Continue}>
            Next
          </Button>
        </div>
        {/* <Grid container spacing={2}> */}
        <FormControl margin="normal">
        <label>{character.name}, lvl:{character.level}</label>
          <Grid>
            <Item>
              <label>
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={character.name}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <label>
                Level:
                <select
                  id="level"
                  name="level"
                  value={character.level}
                  onChange={onCharacterChange}
                >
                  <option value={0}>-</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                </select>
              </label>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <label>
                Proficiency Bonus:
                <input
                  type="number"
                  id="proficiency_bonus"
                  name="proficiency_bonus"
                  value={character.proficiency_bonus}
                  onChange={onCharacterChange}
                  size="3"
                />
              </label>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <label>
                Race:
                <input
                  type="text"
                  id="race"
                  name="race"
                  value={character.race}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
          </Grid>

          <Item>
            <h3>Ability Scores</h3>
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label>Strength:</label>
              <input
                type="number"
                id="str"
                name="stats.str"
                value={character.stats.str}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.str)}</span>
            </Item>
            {/* </Grid> */}
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label>Dexterity:</label>
              <input
                type="number"
                id="dex"
                name="stats.dex"
                value={character.stats.dex}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.dex)}</span>
            </Item>
            {/* </Grid> */}
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label htmlFor="con">Constitution:</label>
              <input
                type="number"
                id="con"
                name="stats.con"
                value={character.stats.con}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.con)}</span>
            </Item>
            {/* </Grid> */}
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label htmlFor="int">Intelligence:</label>
              <input
                type="number"
                id="int"
                name="stats.int"
                value={character.stats.int}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.int)}</span>
            </Item>
            {/* </Grid> */}
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label htmlFor="wis">Wisdom:</label>
              <input
                type="number"
                id="wis"
                name="stats.wis"
                value={character.stats.wis}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.wis)}</span>
            </Item>
            {/* </Grid> */}
            {/* <Grid item xs={4} md={2}> */}
            <Item>
              <label htmlFor="cha">Charisma:</label>
              <input
                type="number"
                id="cha"
                name="stats.cha"
                value={character.stats.cha}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.cha)}</span>
            </Item>
            {/* </Grid> */}
          </Item>

          {/* <Grid item xs={12} md={6}> */}
          <Item>
            <label>
              Alignment:
              <input
                type="text"
                id="alignment"
                name="alignment"
                value={character.alignment}
                onChange={onCharacterChange}
              />
            </label>
          </Item>
          {/* </Grid> */}

          <Grid>
            <Item>
              <label>
                Size:
                <select
                  id="size"
                  name="size"
                  value={character.size}
                  onChange={onCharacterChange}
                >
                  <option value="medium">medium</option>
                  <option value="small">small</option>
                </select>
              </label>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <label>
                Speed:
                <input
                  type="number"
                  id="speed"
                  name="speed"
                  value={character.speed}
                  onChange={onCharacterChange}
                  size="4"
                />
              </label>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <AddFeatureModal addFeature={addFeature} />
              <h3>Features & abilities</h3>
              {character.features.map((feature) => (
                <h4 key={feature.feature_id + feature.feature_name}>
                  {feature.feature_name}
                </h4>
              ))}
            </Item>
          </Grid>
          <Item>
            <h3>Defences</h3>
            <Item>
              <label>
                Resistances:
                <input
                  type="text"
                  id="resistances"
                  name="defences.resistances"
                  value={character.defences.resistances}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
            <Item>
              <label>
                Immunities:
                <input
                  type="text"
                  id="immunities"
                  name="defences.immunities"
                  value={character.defences.immunities}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
            <Item>
              <label>
                Vulnerabilities:
                <input
                  type="text"
                  id="vulnerabilities"
                  name="defences.vulnerabilities"
                  value={character.defences.vulnerabilities}
                  onChange={onCharacterChange}
                />
              </label>
            </Item>
          </Item>

          <Item>
            <label>
              Senses:
              <input
                type="text"
                id="senses"
                placeholder="Darkvision?"
                name="passives.senses"
                value={character.passives.senses}
                onChange={onCharacterChange}
              />
            </label>
          </Item>

          <Item>
            <h3>Proficiencies</h3>
            <Item>
              <label>
                Languages:
                <textarea
                  type="text"
                  id="languages"
                  placeholder="Common and...?"
                  name="proficiencies.languages"
                  value={character.proficiencies.languages}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Weapons:
                <textarea
                  type="text"
                  id="weapons"
                  placeholder="Simple and...?"
                  name="proficiencies.weapons"
                  value={character.proficiencies.weapons}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Armour:
                <textarea
                  type="text"
                  id="armour"
                  placeholder="Light and...?"
                  name="proficiencies.armour"
                  value={character.proficiencies.armour}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Other:
                <textarea
                  type="text"
                  id="other"
                  placeholder="Instruments, games, vehicles...?"
                  name="proficiencies.other"
                  value={character.proficiencies.other}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
          </Item>

          <Grid>
            <Item>
              <AddSkillModal
                character={character}
                onCharacterChange={onCharacterChange}
              />
              {/* <h3>Proficient Skills</h3>              
              {Object.entries(character.skills).forEach((skill) => {
                const [key, value] = skill;
                console.log(key, value);
                return <p>hello</p>;
              })}
              <p>hello</p> */}
            </Item>
          </Grid>
        </FormControl>
        {/* </Grid> */}
        <BotButtons>
          <Button variant="contained" onClick={Continue}>
            Next
          </Button>
        </BotButtons>
      </Box>
    </div>
  );
};

export default ChooseRace;
