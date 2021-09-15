import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const All = styled.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Proficient = styled.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Expert = styled.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Skill = styled.div`
  & {
    width: 98%;
    background-color: lightblue;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    font-weight: bold;
  }
`;

const Skills = ({ character }) => {
  return (
    <div>
      <h4>Skills</h4>
      <Container>
        <h4>All Skills - Roll with Roll (ability mod)</h4>
        <All>
          <Skill>Althletics(STR)</Skill>
          <Skill>Acrobatics(DEX)</Skill>
          <Skill>Sleight Of Hand(DEX)</Skill>
          <Skill>Stealth(DEX)</Skill>
          <Skill>Arcana(INT)</Skill>
          <Skill>History(INT)</Skill>
          <Skill>Investigation(INT)</Skill>
          <Skill>Nature(INT)</Skill>
          <Skill>Religion(INT)</Skill>
          <Skill>Animal Handling(WIS)</Skill>
          <Skill>Insight(WIS)</Skill>
          <Skill>Medicine(WIS)</Skill>
          <Skill>Perception(WIS)</Skill>
          <Skill>Survival(WIS)</Skill>
          <Skill>Deception(CHA)</Skill>
          <Skill>Intimidation(CHA)</Skill>
          <Skill>Performance(CHA)</Skill>
          <Skill>Persuasion(CHA)</Skill>
        </All>
        <h4>
          Proficient Skills - Roll Roll (ability mod) +{character.proficiency_bonus}
        </h4>
        <Proficient>
          {character.skills.Athletics === "Proficient" ? (
            <Skill>Athletics</Skill>
          ) : null}
          {character.skills.Acrobatics === "Proficient" ? (
            <Skill>Acrobatics</Skill>
          ) : null}
          {character.skills.SleightOfHand === "Proficient" ? (
            <Skill>SleightOfHand</Skill>
          ) : null}
          {character.skills.Stealth === "Proficient" ? (
            <Skill>Stealth</Skill>
          ) : null}
          {character.skills.Arcana === "Proficient" ? (
            <Skill>Arcana</Skill>
          ) : null}
          {character.skills.History === "Proficient" ? (
            <Skill>History</Skill>
          ) : null}
          {character.skills.Investigation === "Proficient" ? (
            <Skill>Investigation</Skill>
          ) : null}
          {character.skills.Nature === "Proficient" ? (
            <Skill>Nature</Skill>
          ) : null}
          {character.skills.Religion === "Proficient" ? (
            <Skill>Religion</Skill>
          ) : null}
          {character.skills.AnimalHandling === "Proficient" ? (
            <Skill>Animal Handling</Skill>
          ) : null}
          {character.skills.Insight === "Proficient" ? (
            <Skill>Insight</Skill>
          ) : null}
          {character.skills.Medicine === "Proficient" ? (
            <Skill>Medicine</Skill>
          ) : null}
          {character.skills.Perception === "Proficient" ? (
            <Skill>Perception</Skill>
          ) : null}
          {character.skills.Survival === "Proficient" ? (
            <Skill>Survival</Skill>
          ) : null}
          {character.skills.Deception === "Proficient" ? (
            <Skill>Deception</Skill>
          ) : null}
          {character.skills.Intimidation === "Proficient" ? (
            <Skill>Intimidation</Skill>
          ) : null}
          {character.skills.Performance === "Proficient" ? (
            <Skill>Performance</Skill>
          ) : null}
          {character.skills.Persuasion === "Proficient" ? (
            <Skill>Persuasion</Skill>
          ) : null}
        </Proficient>
        <h4>
          Expert Skills - Roll (ability mod) +
          {character.proficiency_bonus * 2}
        </h4>
        <Expert>
        {character.skills.Athletics === "Expert" ? (
            <Skill>Athletics</Skill>
          ) : null}
          {character.skills.Acrobatics === "Expert" ? (
            <Skill>Acrobatics</Skill>
          ) : null}
          {character.skills.SleightOfHand === "Expert" ? (
            <Skill>SleightOfHand</Skill>
          ) : null}
          {character.skills.Stealth === "Expert" ? (
            <Skill>Stealth</Skill>
          ) : null}
          {character.skills.Arcana === "Expert" ? (
            <Skill>Arcana</Skill>
          ) : null}
          {character.skills.History === "Expert" ? (
            <Skill>History</Skill>
          ) : null}
          {character.skills.Investigation === "Expert" ? (
            <Skill>Investigation</Skill>
          ) : null}
          {character.skills.Nature === "Expert" ? (
            <Skill>Nature</Skill>
          ) : null}
          {character.skills.Religion === "Expert" ? (
            <Skill>Religion</Skill>
          ) : null}
          {character.skills.AnimalHandling === "Expert" ? (
            <Skill>Animal Handling</Skill>
          ) : null}
          {character.skills.Insight === "Expert" ? (
            <Skill>Insight</Skill>
          ) : null}
          {character.skills.Medicine === "Expert" ? (
            <Skill>Medicine</Skill>
          ) : null}
          {character.skills.Perception === "Expert" ? (
            <Skill>Perception</Skill>
          ) : null}
          {character.skills.Survival === "Expert" ? (
            <Skill>Survival</Skill>
          ) : null}
          {character.skills.Deception === "Expert" ? (
            <Skill>Deception</Skill>
          ) : null}
          {character.skills.Intimidation === "Expert" ? (
            <Skill>Intimidation</Skill>
          ) : null}
          {character.skills.Performance === "Expert" ? (
            <Skill>Performance</Skill>
          ) : null}
          {character.skills.Persuasion === "Expert" ? (
            <Skill>Persuasion</Skill>
          ) : null}
        </Expert>
      </Container>
    </div>
  );
};

export default Skills;
