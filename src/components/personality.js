import React from "react";
import styled from "styled-components";

import EditPersonalitiesModal from "./editPersonalitiesModal";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;

  column-count: 2;
  column-gap: 1%;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  border-style: inset;
  border-radius: 5px;
  
  margin: 1% 1% 1% 1%;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.9em;
  text-decoration: underline;
`;
const Text = styled.p`
  font-size: 1em;
  margin: 0;
`;

const Personality = ({ character, onCharacterChange }) => {
  return (
    <div>
      <h4>Personality</h4>
      <EditPersonalitiesModal
        character={character}
        onCharacterChange={onCharacterChange}
      />
    <Container>
      <Box>
        <Title>Traits</Title>
        <Text>{character.personality.trait1}</Text>
        <Text>{character.personality.trait2}</Text>
      </Box>
      <Box>
        <Title>Ideal</Title>
        <Text>{character.personality.ideal}</Text>
      </Box>
      <Box>
        <Title>Bond</Title>
        <Text>{character.personality.bond}</Text>
      </Box>
      <Box>
        <Title>Flaw</Title>
        <Text>{character.personality.flaw}</Text>
      </Box>
      
    </Container>
    </div>
  );
};

export default Personality;