import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  background-color: red;

  column-count: 3;
  column-gap: 1%;
`;

const Box = styled.div`
    width: 98%;
    background-color: lightblue;
    display: inline-block;
    margin: 1% 1% 1% 1%;

`;

const Title = styled.p`
    margin: 0;
    font-size: 1em;
`;

const Ability = styled.p`
font-size: .75em;
margin: 0;
`;

const Modifier = styled.p`
font-size: 2em;
margin: 0;
`;

const Save = styled.p`
font-size: 1.5em;
margin: 0;
`;

const Abilities = ({ character }) => {
  function getModifier(stat) {
    let mod = (stat - 10) / 2;
    return mod;
  }
  return (
    <Container>
      <Box>
        <Title>{character.stats.str}</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
      <Box>
        <Title>Dexterity</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
      <Box>
        <Title>Constitution</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
      <Box>
        <Title>Intelligence</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
      <Box>
        <Title>Wisdom</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
      <Box>
        <Title>Strength</Title>
        <Ability>Score</Ability>
        <Modifier>Mod</Modifier>
        <Save>Save</Save>
      </Box>
    </Container>
  );
};

export default Abilities;
