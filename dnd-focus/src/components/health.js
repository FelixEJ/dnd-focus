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

  column-count: 2;
  column-gap: 1%;
`;
const Row = styled.div`
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

const Health = ({ character }) => {
  return (
    <div>
      <h4>Health</h4>
      <Container>
        <Box>
          <Title>HP</Title>
          <Numbers>
            {character.hp.current}
            {character.hp.temp > 0 && <span>+{character.hp.temp}</span>}/
            {character.hp.max}
          </Numbers>
        </Box>
        <Box>
          <Title>Exhaustion</Title>
          <Text>
            {character.exhaustion === 1 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
              </Text>
            )}
            {character.exhaustion === 2 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
                <p>- Speed Halved</p>
              </Text>
            )}
            {character.exhaustion === 3 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
                <p>- Speed Halved</p>
                <p>- Disadvantage on attack rolls & saving throws</p>
              </Text>
            )}
            {character.exhaustion === 4 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
                <p>- Speed Halved</p>
                <p>- Disadvantage on attack rolls & saving throws</p>
                <p>- HP maximum halved</p>
              </Text>
            )}
            {character.exhaustion === 5 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
                <p>- Speed Halved</p>
                <p>- Disadvantage on attack rolls & saving throws</p>
                <p>- HP maximum halved</p>
                <p>- Speeed reduced to 0</p>
              </Text>
            )}
            {character.exhaustion === 6 && (
              <Text>
                <b>{character.exhaustion}</b> - Disadvantage on ability checks
                <p>- Speed Halved</p>
                <p>- Speed Halved</p>
                <p>- Disadvantage on attack rolls & saving throws</p>
                <p>- HP maximum halved</p>
                <p>- Speeed reduced to 0</p>
                <p>- Death</p>
              </Text>
            )}
          </Text>
        </Box>
        <Box>
          <Title>Hit Dice</Title>
          <Numbers>
            {character.hit_dice.current}
            {character.hit_dice.dice}/{character.hit_dice.max}
          </Numbers>
        </Box>        
        <Box>
          <Title>Death Saves</Title>
          <Text>
            Passes: {character.death_saves.pass}
          </Text>
          <Text>
            Failures: {character.death_saves.pass}
          </Text>
        </Box>
      </Container>
      <Row>
        {character.defences.resistances.length > 0 ? (
          <Box>
            <Title>Resistances</Title>
            <Text>{character.defences.resistances}</Text>
          </Box>
        ) : null}
        {character.defences.immunities.length > 0 ? (
          <Box>
            <Title>Immunities</Title>
            <Text>{character.defences.immunities}</Text>
          </Box>
        ) : null}
        {character.defences.vulnerabilities.length > 0 ? (
          <Box>
            <Title>Vulnerabilities</Title>
            <Text>{character.defences.vulnerabilities}</Text>
          </Box>
        ) : null}
      </Row>
    </div>
  );
};

export default Health;
