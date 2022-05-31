import React from "react";
import styled from "styled-components";

import EditProficienciesModal from "./editProficienciesModal";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: table;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-radius: 5px;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;
const Text = styled.div`
  margin: 1% 1% 1% 1%;
`;

const SheetProficiencies = ({ character, onCharacterChange }) => {
  return (
    <div>
      <h4>Profs & Languages</h4>
      <EditProficienciesModal
        character={character}
        onCharacterChange={onCharacterChange}
      />
      <Container>
        <Box>
          <Text>
            <b>WEAPONS: </b>
            {character.proficiencies.weapons}
          </Text>
        </Box>
        <Box>
          <Text>
            <b>ARMOUR: </b>
            {character.proficiencies.armour}
          </Text>
        </Box>
        <Box>
          <Text>
            <b>LANGUAGES: </b>
            {character.proficiencies.languages}
          </Text>
        </Box>
        <Box>
          <Text>
            <b>OTHER: </b>
            {character.proficiencies.other}
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default SheetProficiencies;
