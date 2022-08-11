// import React from "react";
import * as React from "react";
import { Button, ButtonGroup, Select } from "@material-ui/core";

import CreateProficiencies from "./createProficiencies";

import FeatureAccordion from "../featuresAccordion";
import AddFeatureModal from "../addFeatureModal";
import AddSkillModal from "../addSkillModal";

import { getModifier } from "../utils";

import {
  Window,
  Page,
  Section,
  Card,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../StyledPageComponents/pageStyling";

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
    <Page>
      <h1>Choose Race</h1>
      <p>
        <a
          href="https://chicken-dinner.com/5e/5e-point-buy.html"
          target="_blank"
        >
          5e point buy and racial info here
        </a>
      </p>
      <ButtonGroup variant="contained">
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </ButtonGroup>
      <Label>
        {character.name}, lvl:{character.level}
      </Label>
      <Section>
        <Card>
          <CardColumn>
            <Label>Name</Label>
            <input
              type="text"
              id="name"
              name="name"
              fullWidth={true}
              value={character.name}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <Label>Race:</Label>
            <input
              type="text"
              id="race"
              name="race"
              value={character.race}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <Label>Level</Label>
            <Select
              id="level"
              name="level"
              value={character.level}
              onChange={onCharacterChange}
              // variant="outlined"
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
          </CardColumn>
          <CardColumn>
            <Label>Age:</Label>
            <input
              type="text"
              id="age"
              name="age"
              value={character.age}
              onChange={onCharacterChange}
              style={{ width: "20%" }}
            />
          </CardColumn>
          <CardColumn>
            <Label>Alignment:</Label>
            <input
              type="text"
              id="alignment"
              name="alignment"
              value={character.alignment}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <Label>Size:</Label>
            <Select
              id="size"
              name="size"
              value={character.size}
              onChange={onCharacterChange}
            >
              <option value="medium">medium</option>
              <option value="small">small</option>
            </Select>
          </CardColumn>
          <CardColumn>
            <Label>Speed:</Label>
            <input
              type="number"
              id="speed"
              name="speed"
              value={character.speed}
              onChange={onCharacterChange}
              style={{ width: "20%" }}
            />
            <Label>Other Speeds:</Label>
            <input
              type="text"
              id="hp.other_speeds"
              name="hp.other_speeds"
              value={character.hp.other_speeds}
              onChange={onCharacterChange}
              style={{ width: "80%" }}
            />
          </CardColumn>
          <CardColumn>
            <Label>Senses:</Label>
            <input
              type="text"
              id="senses"
              placeholder="Darkvision?"
              name="passives.senses"
              value={character.passives.senses}
              onChange={onCharacterChange}
            />
          </CardColumn>
        </Card>
      </Section>
      <Section>
        <h3>Ability Scores</h3>
        <Card>
          <CardRow>
            <CardColumn>
              <Label>Strength:</Label>
              <CardItem>
                <input
                  type="number"
                  id="str"
                  name="stats.str"
                  value={character.stats.str}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.str)}</span>
              </CardItem>
            </CardColumn>
            <CardColumn>
              <Label>Dexterity:</Label>
              <CardItem>
                <input
                  type="number"
                  id="dex"
                  name="stats.dex"
                  value={character.stats.dex}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.dex)}</span>
              </CardItem>
            </CardColumn>
          </CardRow>
          <CardRow>
            <CardColumn>
              <Label htmlFor="con">Constitution:</Label>
              <CardItem>
                <input
                  type="number"
                  id="con"
                  name="stats.con"
                  value={character.stats.con}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.con)}</span>
              </CardItem>
            </CardColumn>
            <CardColumn>
              <Label htmlFor="int">Intelligence:</Label>
              <CardItem>
                <input
                  type="number"
                  id="int"
                  name="stats.int"
                  value={character.stats.int}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.int)}</span>
              </CardItem>
            </CardColumn>
          </CardRow>
          <CardRow>
            <CardColumn>
              <Label htmlFor="wis">Wisdom:</Label>
              <CardItem>
                <input
                  type="number"
                  id="wis"
                  name="stats.wis"
                  value={character.stats.wis}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.wis)}</span>
              </CardItem>
            </CardColumn>
            <CardColumn>
              <Label htmlFor="cha">Charisma:</Label>
              <CardItem>
                <input
                  type="number"
                  id="cha"
                  name="stats.cha"
                  value={character.stats.cha}
                  onChange={onCharacterChange}
                  style={{ width: "30%" }}
                />
                <span>&emsp; {getModifier(character.stats.cha)}</span>
              </CardItem>
            </CardColumn>
          </CardRow>
        </Card>
      </Section>
      <Section>
        <h4>Features & Abilities</h4>
        <AddFeatureModal addFeature={addFeature} />
        <Card>
          <FeatureAccordion
            character={character}
            updateFeatures={updateFeatures}
          />
        </Card>
      </Section>
      <Section>
        <h3>Defences</h3>
        <Card>
          <CardColumn>
            <Label>Resistances:</Label>
            <input
              type="text"
              id="resistances"
              name="defences.resistances"
              value={character.defences.resistances}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <Label>Immunities:</Label>
            <input
              type="text"
              id="immunities"
              name="defences.immunities"
              value={character.defences.immunities}
              onChange={onCharacterChange}
            />
          </CardColumn>
          <CardColumn>
            <Label>Vulnerabilities:</Label>
            <input
              type="text"
              id="vulnerabilities"
              name="defences.vulnerabilities"
              value={character.defences.vulnerabilities}
              onChange={onCharacterChange}
            />
          </CardColumn>
        </Card>
      </Section>
      <Section>
        <h3>Proficiencies</h3>
        <AddSkillModal
          character={character}
          onCharacterChange={onCharacterChange}
        />
        <Card>
          <CreateProficiencies
            character={character}
            onCharacterChange={onCharacterChange}
          />
        </Card>
      </Section>

      <BotButton>
        <Button variant="contained" onClick={Continue}>
          Next
        </Button>
      </BotButton>
    </Page>
  );
};

export default ChooseRaceGrid;
