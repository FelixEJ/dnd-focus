import React from "react";
import styled from "styled-components";

import AddFeatureModal from "./addFeatureModal";
import AddEquipmentModal from "./addEquipmentModal";
import AddItemModal from "./addItemModal";
import AddSkillModal from "./addSkillModal";

import {
  WindowContent,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButtons,
} from "../StyledPageComponents/pageStyling";

const Proficient = styled.div`
  width: 98%;
  background-color: none;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Skill = styled.div`
  & {
    width: 98%;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    background-color: rgba(203, 203, 203, 0.4);
  }
`;

export const CreateProficiencies = ({ onCharacterChange, character }) => {
  return (
    <SectionColumn>
      <h3>Proficient Skills</h3>
      <CardColumn>
        <AddSkillModal
          character={character}
          onCharacterChange={onCharacterChange}
        />
        <CardColumn>
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
            {character.skills.Religion !== "" ? <Skill>Religion</Skill> : null}
            {character.skills.AnimalHandling !== "" ? (
              <Skill>Animal Handling</Skill>
            ) : null}
            {character.skills.Insight !== "" ? <Skill>Insight</Skill> : null}
            {character.skills.Medicine !== "" ? <Skill>Medicine</Skill> : null}
            {character.skills.Perception !== "" ? (
              <Skill>Perception</Skill>
            ) : null}
            {character.skills.Survival !== "" ? <Skill>Survival</Skill> : null}
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
      </CardColumn>
      <CardColumn>
        <Label>Languages:</Label>
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
        <Label>Weapons:</Label>
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
        <Label>Armour:</Label>
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
        <Label>Other:</Label>
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
  );
};

export default CreateProficiencies;
