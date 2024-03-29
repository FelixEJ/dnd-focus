import React from "react";
import styled from "styled-components";

import {
  Window,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "./StyledPageComponents/pageStyling";

import DamageHealingModal from "./healthChangeModal";

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
  width: 99%;
  background-color: none;

  border: 3px outset black;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
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

const SheetCombat = ({ character, onCharacterChange, updateHealth }) => {
  return (
    <CardColumn>
      <Row>
        <BoxTrio>
          <Title>AC</Title>
          {character.hp.temp_ac > 0 ? (
            <Numbers>{character.hp.temp_ac}</Numbers>
          ) : (
            <Numbers>{character.ac}</Numbers>
          )}
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
          {character.hp.temp_speed > 0 ? (
            <Numbers>{character.hp.temp_speed}</Numbers>
          ) : (
            <Numbers>{character.speed}</Numbers>
          )}
        </BoxTrio>
        {character.hp.other_speeds !== "" && <>{character.hp.other_speeds}</>}
      </Row>
      <Row>
        <BoxSolo>
          <Title>hit points</Title>
          <Text>Base + Temp / Max</Text>
          <Numbers>
          {character.hp.temp_max > 0 ? (
              <input
              type="number"
              min="0"
              max={character.hp.temp_max}
              id="hp.current"
              name="hp.current"
              value={character.hp.current}
              onChange={onCharacterChange}
              style={{ width: "80px", backgroundColor: "rgb(255,255,255, .3)", border: "none" }}
              display="none"
            />
            ) : (
              <input
              type="number"
              min="0"
              max={character.hp.max}
              id="hp.current"
              name="hp.current"
              value={character.hp.current}
              onChange={onCharacterChange}
              style={{ width: "80px", backgroundColor: "rgb(255,255,255, .1)", border: "none" }}
              display="none"
            />
            )}            
            +
            <input
              type="number"
              min="0"
              id="hp.temp"
              name="hp.temp"
              value={character.hp.temp}
              onChange={onCharacterChange}
              style={{ width: "80px", backgroundColor: "rgb(255,255,255, .1)", border: "none" }}
              display="none"
            />
            /
            {character.hp.temp_max > 0 ? (
              <NumbersBold>{character.hp.temp_max}</NumbersBold>
            ) : (
              <NumbersBold>{character.hp.max}</NumbersBold>
            )}
          </Numbers>
          <DamageHealingModal
            character={character}
            onChange={onCharacterChange}
            updateHealth={updateHealth}
          />
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
          {character.hp.status !== "" && (
            <Row><Title>Status Effects:</Title>{character.hp.status}</Row>
          )}
        </BoxSolo>
      </Row>
      <Row>
        <BoxDuo>
          <Title>Hit Dice</Title>
          <Numbers>
            <input
              type="number"
              max={character.hit_dice.max}
              min="0"
              id="hit_dice.current"
              name="hit_dice.current"
              value={character.hit_dice.current}
              onChange={onCharacterChange}
              style={{ width: "60px", backgroundColor: "rgb(255,255,255, .1)"}}
              display="none"
            />
            {character.hit_dice.dice}/{character.hit_dice.max}
          </Numbers>
          {character.hit_dice.mult1_dice != "" && (
            <Numbers>
              <input
                type="number"
                max={character.hit_dice.mult1_max}
                min="0"
                id="hit_dice.mult1_current"
                name="hit_dice.mult1_current"
                value={character.hit_dice.mult1_current}
                onChange={onCharacterChange}
                style={{ width: "60px", backgroundColor: "rgb(255,255,255, .1)"}}
                display="none"
              />
              {character.hit_dice.mult1_dice}/{character.hit_dice.mult1_max}
            </Numbers>
          )}
          {character.hit_dice.mult2_dice != "" && (
            <Numbers>
              <input
                type="number"
                max={character.hit_dice.mult2_max}
                min="0"
                id="hit_dice.mult2_current"
                name="hit_dice.mult2_current"
                value={character.hit_dice.mult2_current}
                onChange={onCharacterChange}
                style={{ width: "60px", backgroundColor: "rgb(255,255,255, .1)"}}
                display="none"
              />
              {character.hit_dice.mult2_dice}/{character.hit_dice.mult2_max}
            </Numbers>
          )}
        </BoxDuo>
        <BoxDuo>
          <Title>Death Saves</Title>
          <Text>
            Passes:{" "}
            <input
              type="number"
              max="3"
              min="0"
              id="death_saves.pass"
              name="death_saves.pass"
              value={character.death_saves.pass}
              onChange={onCharacterChange}
              style={{ width: "40px", backgroundColor: "rgb(255,255,255, .1)" }}
              display="none"
            />
          </Text>
          <Text>
            Failures:{" "}
            <input
              type="number"
              max="3"
              min="0"
              id="death_saves.fail"
              name="death_saves.fail"
              value={character.death_saves.fail}
              onChange={onCharacterChange}
              style={{ width: "40px", backgroundColor: "rgb(255,255,255, .1)" }}
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
          style={{ width: "40px" }}
        >
          <option value={0}>-</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <>
          {character.exhaustion === "1" && (
            <Text>- Disadvantage on ability checks</Text>
          )}
          {character.exhaustion === "2" && (
            <Text>
              - Disadvantage on ability checks
              <br />- Speed Halved
            </Text>
          )}
          {character.exhaustion === "3" && (
            <Text>
              - Disadvantage on ability checks
              <br />
              - Speed Halved
              <br />- Disadvantage on attack rolls & saving throws
            </Text>
          )}
          {character.exhaustion === "4" && (
            <Text>
              - Disadvantage on ability checks
              <br />
              - Speed Halved
              <br />
              - Disadvantage on attack rolls & saving throws
              <br />- HP maximum halved
            </Text>
          )}
          {character.exhaustion === "5" && (
            <Text>
              - Disadvantage on ability checks
              <br />
              - Speed Halved
              <br />
              - Disadvantage on attack rolls & saving throws
              <br />
              - HP maximum halved
              <br />- Speeed reduced to 0
            </Text>
          )}
          {character.exhaustion === "6" && (
            <Text>
              - Disadvantage on ability checks
              <br />
              - Speed Halved
              <br />
              - Disadvantage on attack rolls & saving throws
              <br />
              - HP maximum halved
              <br />
              - Speeed reduced to 0
              <br />- Death
            </Text>
          )}
        </>
      </Row>
    </CardColumn>
  );
};

export default SheetCombat;
