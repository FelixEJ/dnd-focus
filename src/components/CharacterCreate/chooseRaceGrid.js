// import React from "react";
import * as React from "react";
import { Button, FormControl } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";
import AddFeatureModal from "./addFeatureModal";
import AddSkillModal from "./addSkillModal";
import stylish from "styled-components";
import CardContainer from "../cardContainer";
import CardDiv from "../cardDiv";

import ConfirmDeleteFeatureModal from "../confirmDeleteFeatureModal";

const BotButtons = stylish.div`
  margin-bottom: 40px;
`;

const Proficient = stylish.div`
  width: 98%;
  background-color: none;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Skill = stylish.div`
  & {
    width: 98%;
    background-color: lightgreen;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    background-color: lightblue;
  }
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChooseRaceGrid = ({
  nextStep,
  onCharacterChange,
  character,
  addFeature,
  updateFeatures,
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
        <a
          href="https://chicken-dinner.com/5e/5e-point-buy.html"
          target="_blank"
        >
          5e point buy and racial info here
        </a>
      </p>
      <Box sx={{ flexGrow: 2 }}>
        <div>
          <Button variant="contained" onClick={Continue}>
            Next
          </Button>
        </div>
        <FormControl>
          <label>
            {character.name}, lvl:{character.level}
          </label>
          <CardContainer>
            <CardDiv>
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
            </CardDiv>
            <CardDiv>
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
            </CardDiv>
            <CardDiv>
              <Item>
                <h3>Ability Scores</h3>
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
              </Item>
            </CardDiv>
            <CardDiv>
              <Item>
                <h3>Features & abilities</h3>
                <AddFeatureModal
                  addFeature={addFeature}
                  updateFeatures={updateFeatures}
                />
                {character.features.map((feature, index) => (
                  <h4 key={feature.feature_id + feature.feature_name}>
                    {feature.feature_name}
                    <ConfirmDeleteFeatureModal
                      character={character}
                      updateFeatures={updateFeatures}
                      index={index}
                    />
                  </h4>
                ))}
              </Item>
            </CardDiv>
            <CardDiv>
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
            </CardDiv>
            <CardDiv>
              <Item>
                <h3>Skills</h3>
                <Item>
                  <AddSkillModal
                    character={character}
                    onCharacterChange={onCharacterChange}
                  />
                  <h3>Proficient Skills</h3>
                  <Proficient>
                    {character.skills.Athletics !== "" ? (
                      <Skill>Athletics</Skill>
                    ) : null}
                    {character.skills.Acrobatics !== "" ? (
                      <Skill>Acrobatics</Skill>
                    ) : null}
                    {character.skills.SleightOfHand !== "" ? (
                      <Skill>SleightOfHand</Skill>
                    ) : null}
                    {character.skills.Stealth !== "" ? (
                      <Skill>Stealth</Skill>
                    ) : null}
                    {character.skills.Arcana !== "" ? (
                      <Skill>Arcana</Skill>
                    ) : null}
                    {character.skills.History !== "" ? (
                      <Skill>History</Skill>
                    ) : null}
                    {character.skills.Investigation !== "" ? (
                      <Skill>Investigation</Skill>
                    ) : null}
                    {character.skills.Nature !== "" ? (
                      <Skill>Nature</Skill>
                    ) : null}
                    {character.skills.Religion !== "" ? (
                      <Skill>Religion</Skill>
                    ) : null}
                    {character.skills.AnimalHandling !== "" ? (
                      <Skill>Animal Handling</Skill>
                    ) : null}
                    {character.skills.Insight !== "" ? (
                      <Skill>Insight</Skill>
                    ) : null}
                    {character.skills.Medicine !== "" ? (
                      <Skill>Medicine</Skill>
                    ) : null}
                    {character.skills.Perception !== "" ? (
                      <Skill>Perception</Skill>
                    ) : null}
                    {character.skills.Survival !== "" ? (
                      <Skill>Survival</Skill>
                    ) : null}
                    {character.skills.Deception !== "" ? (
                      <Skill>Deception</Skill>
                    ) : null}
                    {character.skills.Intimidation !== "" ? (
                      <Skill>Intimidation</Skill>
                    ) : null}
                    {character.skills.Performance !== "" ? (
                      <Skill>Performance</Skill>
                    ) : null}
                    {character.skills.Persuasion !== "" ? (
                      <Skill>Persuasion</Skill>
                    ) : null}
                  </Proficient>
                </Item>
              </Item>
            </CardDiv>
            <CardDiv>
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
                      cols="30"
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
                      cols="30"
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
                      cols="30"
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
                      cols="30"
                      rows="1"
                    />
                  </label>
                </Item>
              </Item>
            </CardDiv>
          </CardContainer>
        </FormControl>
        </Box>
        <BotButtons>
          <Button variant="contained" onClick={Continue}>
            Next
          </Button>
        </BotButtons>
      
    </div>
  );
};

export default ChooseRaceGrid;
