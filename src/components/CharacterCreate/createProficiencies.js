import React from "react";
import styled from "styled-components";

import AddSkillModal from "../addSkillModal";

import {
  Window,
  Page,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButtons,
} from "../StyledPageComponents/pageStyling";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 1300px) {
    max-height: 90vh;
  }
`;

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
    <Container>
      <Label>Skills:</Label>
      <CardColumn>
        <Proficient>
          {character.skills.Athletics !== "" ? <Skill>Athletics</Skill> : null}
          {character.skills.Acrobatics !== "" ? (
            <Skill>Acrobatics</Skill>
          ) : null}
          {character.skills.SleightOfHand !== "" ? (
            <Skill>Sleight Of Hand</Skill>
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
          {character.skills.Deception !== "" ? <Skill>Deception</Skill> : null}
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
          rows="2"
        />
      </CardColumn>
    </Container>
  );
};

export default CreateProficiencies;
