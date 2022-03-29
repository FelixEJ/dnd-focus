import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: table;
  margin-left: auto;
  margin-right: auto;
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
const Text = styled.p`
  margin: 1% 1% 1% 1%;
`;

const SheetProficiencies = ({ character }) => {
  return (
    <div>
      <h4>Proficiencies & Languages</h4>
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
