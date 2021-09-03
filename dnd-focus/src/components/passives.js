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

  column-count: 3;
  column-gap: 1%;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Numbers = styled.p`
  font-size: 2em;
  margin: 0;
  font-weight: bold;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.9em;
  text-decoration: underline;
`;
const Text = styled.p`
  font-size: 1em;
  margin: 0;
  font-weight: bold;
`;

const Passives = ({ character }) => {
  return (
    <div>
      <h4>Passive Senses</h4>
      {character.passives.senses.length > 0 ? (
          <Box>
            <Title>Vision</Title>
            <Text>{character.passives.senses}</Text>
          </Box>
        ) : null}
      <Container>
        <Box>
          <Title>Perception</Title>
          <Numbers>{character.passives.perception}</Numbers>
        </Box>
        <Box>
          <Title>Investigation</Title>
          <Numbers>{character.passives.investigation}</Numbers>
        </Box>
        <Box>
          <Title>Insight</Title>
          <Numbers>{character.passives.insight}</Numbers>
        </Box>
      </Container>
    </div>
  );
};

export default Passives;
