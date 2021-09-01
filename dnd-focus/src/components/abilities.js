import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: red;

  display: block;
  margin-left: auto;
  margin-right: auto;

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
  font-size: 1.1em;
`;

const Ability = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const Modifier = styled.p`
  font-size: 2em;
  margin: 0;
  font-weight: bold;
`;

const Save = styled.p`
  font-size: 1.5em;
  margin: 0;
`;

// duplicate, move to utilities
const Abilities = ({ character }) => {

  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const getSave = (name, stat) => {
    let saveTotal = Math.floor((stat - 10) / 2);
    var savesArray = [];
    Object.keys(character.saves).forEach(function (key) {
      savesArray.push(character.saves[key]);
    });
    savesArray.map((save, index) => {
      if (name === save) {
        saveTotal += character.proficiency_bonus + savesArray[index + 1];
      }
    });

    if (saveTotal > 0) {
      return "+" + saveTotal;
    } else {
      return saveTotal;
    }
  };

  return (
    <Container>
      <Box>
        <Title><b>STR</b>ength</Title>
        <Ability>{character.stats.str}</Ability>
        <Modifier>{getModifier(character.stats.str)}</Modifier>
        <Save>Save {getSave("str", character.stats.str)}</Save>
        {/* <Save>{character.stats.str.toString()}</Save> */}
      </Box>
      <Box>
        <Title><b>INT</b>elligence</Title>
        <Ability>{character.stats.int}</Ability>
        <Modifier>{getModifier(character.stats.int)}</Modifier>
        <Save>Save {getSave("int", character.stats.int)}</Save>
      </Box>
      <Box>
        <Title><b>DEX</b>terity</Title>
        <Ability>{character.stats.dex}</Ability>
        <Modifier>{getModifier(character.stats.dex)}</Modifier>
        <Save>Save {getSave("dex", character.stats.dex)}</Save>
      </Box>
      <Box>
        <Title><b>WIS</b>dom</Title>
        <Ability>{character.stats.wis}</Ability>
        <Modifier>{getModifier(character.stats.wis)}</Modifier>
        <Save>Save {getSave("wis", character.stats.wis)}</Save>
      </Box>
      <Box>
        <Title><b>CON</b>stitution</Title>
        <Ability>{character.stats.con}</Ability>
        <Modifier>{getModifier(character.stats.con)}</Modifier>
        <Save>Save {getSave("con", character.stats.con)}</Save>
      </Box>
      <Box>
        <Title><b>CHA</b>risma</Title>
        <Ability>{character.stats.cha}</Ability>
        <Modifier>{getModifier(character.stats.cha)}</Modifier>
        <Save>Save {getSave("cha", character.stats.cha)}</Save>
      </Box>
    </Container>
  );
};

export default Abilities;
