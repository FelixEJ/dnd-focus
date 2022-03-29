import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: grid;
  grid-template-columns: 32% 32% 32%;
  margin-left: auto;
  margin-right: auto;
`;
const Row = styled.div`
  text-align: center;
  z-index: 1;
  max-width: 400px;
  background-color: none;
  border-style: inset;
  border-radius: 5px;

  margin-top: 2px;
  margin-bottom: 2px;

  grid-column: 1 / span 3;
`;
const BoxTrio = styled.div`
  width: 33%;
  background-color: none;
  display: inline-block;
`;
const BoxDuo = styled.div`
  width: 50%;
  background-color: none;
  display: inline-block;
`;
const BoxSolo = styled.div`
  width: 100%;
  background-color: none;
  display: inline-block;
`;
const Text = styled.p`
  font-size: 1em;
  margin: 0;
`;
const Title = styled.p`
  margin: 0 0 0 0;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;
const Numbers = styled.div`
  font-size: 2.2em;
  margin: 0;
`;
const NumbersBold = styled.div`
  font-size: 1.2em;
  margin: 0;
  font-weight: bold;
  display: inline;
`;

const SheetCombat = ({ character, onCharacterChange }) => {
  return (
    <div>
      <h4>Combat</h4>
      <Container>
        <Row>
          <BoxTrio>
            <Title>AC</Title>
            <Numbers>{character.ac}</Numbers>
          </BoxTrio>
          <BoxTrio>
            <Title>Initiative</Title>
            <Numbers>
              {character.initiative > 0 ? (
                <span>+{character.initiative}</span>
              ) : (
                "0"
              )}
            </Numbers>
          </BoxTrio>
          <BoxTrio>
            <Title>Speed</Title>
            <Numbers>{character.speed}</Numbers>
          </BoxTrio>
        </Row>
        <Row>
          <BoxSolo>
            <Title>hit points</Title>
            <Text>Base + Temp / Total</Text>
            <Numbers>
              <input
                type="number"
                id="hp.current"
                name="hp.current"
                value={character.hp.current}
                onChange={onCharacterChange}
                size="3"
                display="none"
              />
              <input
                type="number"
                id="hp.temp"
                name="hp.temp"
                value={character.hp.temp}
                onChange={onCharacterChange}
                size="2"
                display="none"
              />
              /<NumbersBold>{character.hp.max}</NumbersBold>
            </Numbers>
          </BoxSolo>
        </Row>
        <Row>
          <BoxDuo>
            <Title>Hit Dice</Title>
            <Numbers>
              <input
                type="number"
                id="hit_dice.current"
                name="hit_dice.current"
                value={character.hit_dice.current}
                onChange={onCharacterChange}
                size="2"
                display="none"
              />
              {character.hit_dice.dice}/{character.hit_dice.max}
            </Numbers>
          </BoxDuo>
          <BoxDuo>
            <Title>Death Saves</Title>
            <Text>
              Passes:{" "}
              <input
                type="number"
                id="death_saves.pass"
                name="death_saves.pass"
                value={character.death_saves.pass}
                onChange={onCharacterChange}
                size="2"
                display="none"
              />
            </Text>
            <Text>
              Failures:{" "}
              <input
                type="number"
                id="death_saves.fail"
                name="death_saves.fail"
                value={character.death_saves.fail}
                onChange={onCharacterChange}
                size="2"
                display="none"
              />
            </Text>
          </BoxDuo>
        </Row>
        <Row>
          <Title>Exhaustion</Title>
          <select
                  id="exhaustion"
                  name="exhaustion"
                  value={character.exhaustion}
                  onChange={onCharacterChange}
                  size="1"
                >
                  <option value={0}>-</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
          <Text>
            {character.exhaustion === "1" && (
              <Text>
                - Disadvantage on ability checks
              </Text>
            )}
            {character.exhaustion === "2" && (
              <Text>
                - Disadvantage on ability checks
                <br/>
                - Speed Halved
              </Text>
            )}
            {character.exhaustion === "3" && (
              <Text>
                - Disadvantage on ability checks
                <br/>
                - Speed Halved
                <br/>
                - Disadvantage on attack rolls & saving throws
              </Text>
            )}
            {character.exhaustion === "4" && (
              <Text>
                - Disadvantage on ability checks
                - Speed Halved
                <br/>
                - Disadvantage on attack rolls & saving throws
                <br/>
                - HP maximum halved
              </Text>
            )}
            {character.exhaustion === "5" && (
              <Text>
                - Disadvantage on ability checks
                - Speed Halved
                <br/>
                - Disadvantage on attack rolls & saving throws
                <br/>
                - HP maximum halved
                <br/>
                - Speeed reduced to 0
              </Text>
            )}
            {character.exhaustion === "6" && (
              <Text>
                - Disadvantage on ability checks
                <br/>
                - Speed Halved
                <br/>
                - Disadvantage on attack rolls & saving throws
                <br/>
                - HP maximum halved
                <br/>
                - Speeed reduced to 0
                <br/>
                - Death
              </Text>
            )}
          </Text>
        </Row>

        <Row>
          {character.defences.resistances.length > 0 ? (
            <BoxTrio>
              <Title>Resistances</Title>
              <Text>{character.defences.resistances}</Text>
            </BoxTrio>
          ) : null}
          {character.defences.immunities.length > 0 ? (
            <BoxTrio>
              <Title>Immunities</Title>
              <Text>{character.defences.immunities}</Text>
            </BoxTrio>
          ) : null}
          {character.defences.vulnerabilities.length > 0 ? (
            <BoxTrio>
              <Title>Vulnerabilities</Title>
              <Text>{character.defences.vulnerabilities}</Text>
            </BoxTrio>
          ) : null}
        </Row>
      </Container>
    </div>
  );
};

export default SheetCombat;
