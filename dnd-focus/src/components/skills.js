import React from "react";
import styled, { css } from "styled-components";

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
        <h4>All Skills - Roll with [ability] modifier</h4>
        <All>
          {character.skills.map((skill, index) => (
            <Skill key={index}>{skill.name} : {skill.bonus}</Skill>
          ))}
        </All>
        {/* <h4>
          Proficient Skills - Roll [ability] mod +{character.proficiency_bonus}
        </h4>
        <Proficient>
          {character.skills.proficient.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Proficient>
        <h4>
          Proficient Skills - Roll [ability] mod +
          {character.proficiency_bonus * 2}
        </h4>
        <Expert>
          {character.skills.expert.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Expert> */}
      </Container>
    </div>
  );
};

export default Skills;
