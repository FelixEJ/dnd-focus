import React from "react";
import styled, { css } from "styled-components";
import ConfirmCharacter from "./CharacterCreate/confirmCharacter";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: green;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.p`
  margin: 1% 1% 1% 1%;
`;

const Proficiencies = ({ character }) => {
  return (
    <Container>
      <h3>Proficiencies</h3>
      <Box>
        <h4>Languages</h4>
        <Text>{character.proficiencies.languages}</Text>
      </Box>
      <Box>
        <h4>Weapons</h4>
        <Text>{character.proficiencies.weapons}</Text>
      </Box>
      <Box>
        <h4>Armour</h4>
        <Text>{character.proficiencies.armour}</Text>
      </Box>
      <Box>
        <h4>Other</h4>
        <Text>{character.proficiencies.other}</Text>
      </Box>
    </Container>
  );
};

export default Proficiencies;
