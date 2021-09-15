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

  column-count: 3;
  column-gap: 1%;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.p`
  font-size: 2em;
  margin: 0;
  font-weight: bold;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.9em;
  text-decoration: underline;
`;

const Combat = ({ character }) => {
  return (
    <div>
      <h4>Combat</h4>
      <Container>        
        <Box>
          <Title>AC</Title>
          <Text>{character.ac}</Text>
        </Box>
        <Box>
          <Title>Initiative</Title>
          <Text>{character.initiative}</Text>
        </Box>
        <Box>
          <Title>Speed</Title>
          <Text>{character.speed}</Text>
        </Box>
      </Container>
    </div>
  );
};

export default Combat;
