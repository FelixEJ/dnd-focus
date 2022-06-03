// import React from "react";
import * as React from "react";
import stylish from "styled-components";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  FormHelperText,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";

import AddFeatureModal from "./addFeatureModal";
import AddSkillModal from "./addSkillModal";

import ConfirmDeleteFeatureModal from "../confirmDeleteFeatureModal";

import { getModifier } from "../utils";

import {
  WindowContent,
  PageContent,
  SectionColumn,
  CardColumn,
  BotButtons,
} from "../StyledPageComponents/pageStyling";

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

  return (
    <WindowContent>
      <h1>Choose Race</h1>
      <p>
        <a
          href="https://chicken-dinner.com/5e/5e-point-buy.html"
          target="_blank"
        >
          5e point buy and racial info here
        </a>
      </p>
      <div>
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </div>
      <InputLabel>
        {character.name}, lvl:{character.level}
      </InputLabel>
      <PageContent>
        <SectionColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                id="name"
                name="name"
                fullWidth={true}
                value={character.name}
                onChange={onCharacterChange}
              />
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Level</InputLabel>
              <Select
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
              </Select>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Proficiency Bonus:</InputLabel>
              <Select
                type="number"
                id="proficiency_bonus"
                name="proficiency_bonus"
                value={character.proficiency_bonus}
                onChange={onCharacterChange}
              >
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </Select>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Alignment:</InputLabel>
              <Input
                type="text"
                id="alignment"
                name="alignment"
                value={character.alignment}
                onChange={onCharacterChange}
              />
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Race:</InputLabel>
              <Input
                type="text"
                id="race"
                name="race"
                value={character.race}
                onChange={onCharacterChange}
              />
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Size:</InputLabel>
              <Select
                id="size"
                name="size"
                value={character.size}
                onChange={onCharacterChange}
              >
                <option value="medium">medium</option>
                <option value="small">small</option>
              </Select>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Speed:</InputLabel>
              <Input
                type="number"
                id="speed"
                name="speed"
                value={character.speed}
                onChange={onCharacterChange}
                fullWidth={false}
              />
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Senses:</InputLabel>
              <Input
                type="text"
                id="senses"
                placeholder="Darkvision?"
                name="passives.senses"
                value={character.passives.senses}
                onChange={onCharacterChange}
              />
            </FormControl>
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <h3>Ability Scores</h3>
          <CardColumn>
            <FormControl>
              <InputLabel>Strength:</InputLabel>
              <Input
                type="number"
                id="str"
                name="stats.str"
                value={character.stats.str}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.str)}</span>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel>Dexterity:</InputLabel>
              <Input
                type="number"
                id="dex"
                name="stats.dex"
                value={character.stats.dex}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.dex)}</span>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel htmlFor="con">Constitution:</InputLabel>
              <Input
                type="number"
                id="con"
                name="stats.con"
                value={character.stats.con}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.con)}</span>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel htmlFor="int">Intelligence:</InputLabel>
              <Input
                type="number"
                id="int"
                name="stats.int"
                value={character.stats.int}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.int)}</span>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel htmlFor="wis">Wisdom:</InputLabel>
              <Input
                type="number"
                id="wis"
                name="stats.wis"
                value={character.stats.wis}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.wis)}</span>
            </FormControl>
          </CardColumn>
          <CardColumn>
            <FormControl>
              <InputLabel htmlFor="cha">Charisma:</InputLabel>
              <Input
                type="number"
                id="cha"
                name="stats.cha"
                value={character.stats.cha}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <span>&emsp; {getModifier(character.stats.cha)}</span>
            </FormControl>
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <h3>Features & abilities</h3>
          <FormControl>
            <CardColumn>
              <AddFeatureModal
                addFeature={addFeature}
                updateFeatures={updateFeatures}
              />
            </CardColumn>
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
          </FormControl>
        </SectionColumn>
        <SectionColumn>
          <h3>Defences</h3>
          <CardColumn>
            <InputLabel>Resistances:</InputLabel>
            <Input
              type="text"
              id="resistances"
              name="defences.resistances"
              value={character.defences.resistances}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <InputLabel>Immunities:</InputLabel>
            <Input
              type="text"
              id="immunities"
              name="defences.immunities"
              value={character.defences.immunities}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <InputLabel>Vulnerabilities:</InputLabel>
            <Input
              type="text"
              id="vulnerabilities"
              name="defences.vulnerabilities"
              value={character.defences.vulnerabilities}
              onChange={onCharacterChange}
            />
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <h3>Skills</h3>
          <CardColumn>
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
              {character.skills.Stealth !== "" ? <Skill>Stealth</Skill> : null}
              {character.skills.Arcana !== "" ? <Skill>Arcana</Skill> : null}
              {character.skills.History !== "" ? <Skill>History</Skill> : null}
              {character.skills.Investigation !== "" ? (
                <Skill>Investigation</Skill>
              ) : null}
              {character.skills.Nature !== "" ? <Skill>Nature</Skill> : null}
              {character.skills.Religion !== "" ? (
                <Skill>Religion</Skill>
              ) : null}
              {character.skills.AnimalHandling !== "" ? (
                <Skill>Animal Handling</Skill>
              ) : null}
              {character.skills.Insight !== "" ? <Skill>Insight</Skill> : null}
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
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <h3>Proficiencies</h3>
          <CardColumn>
            <InputLabel>Languages:</InputLabel>
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
          </CardColumn>
          <CardColumn>
            <InputLabel>Weapons:</InputLabel>
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
          </CardColumn>
          <CardColumn>
            <InputLabel>Armour:</InputLabel>
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
          </CardColumn>
          <CardColumn>
            <InputLabel>Other:</InputLabel>
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
          </CardColumn>
        </SectionColumn>
      </PageContent>

      <BotButtons>
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </BotButtons>
    </WindowContent>
  );
};

export default ChooseRaceGrid;
