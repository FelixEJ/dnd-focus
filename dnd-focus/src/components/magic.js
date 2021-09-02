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
const List = styled.div`
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
  max-width: 400px;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Slot = styled.div`
  & {
    width: 98%;
    max-width: 400px;
    background-color: lightblue;
    display: inline-block;
    margin: 1% 1% 1% 1%;
    float: left;
  }
  & {
    :nth-child(3n + 1) {
      clear: left;
    }
  }
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
`;

const Magic = ({ character }) => {
  return (
    <div>
      {character.magic.magic_user === true && (
        <div>
          <h4>Magic</h4>
          <Container>
            <Box>
              <Title>Spellcasting Ability</Title>
              <Numbers>{character.magic.ability}</Numbers>
            </Box>
            <Box>
              <Title>Cantrips Known</Title>
              <Numbers>{character.magic.cantrips_known}</Numbers>
            </Box>
            <Box>
              <Title>Spell Save DC</Title>
              <Numbers>
                {character.magic.save_dc + character.magic.save_dc_bonus}
              </Numbers>
            </Box>
            <Box>
              <Title>Prepared/known Spells</Title>
              <Numbers>{character.magic.spells_known}</Numbers>
            </Box>
            <Box>
              <Title>Spell Attack Bonus</Title>
              <Numbers>
                +
                {character.magic.spell_attack_mod +
                  character.magic.spell_attack_bonus}
              </Numbers>
            </Box>
            <Box>
              <Title>Concentrating</Title>
              {character.magic.concentrating === true ? (
                <Numbers>Yes</Numbers>
              ) : (
                <Numbers>No</Numbers>
              )}
            </Box>
          </Container>
          <h4>Spell Slots</h4>
          <List>
            <Slot>
              {character.spellslots.first > 0 ? (
                <Numbers>
                  1st: {character.spellslots.first_remaining}/
                  {character.spellslots.first}
                </Numbers>
              ) : null}
            </Slot>
            <Slot>
              {character.spellslots.third > 0 ? (
                <Numbers>
                  3rd: {character.spellslots.third_remaining}/
                  {character.spellslots.third}
                </Numbers>
              ) : null}
            </Slot>
            <Slot>
              {character.spellslots.second > 0 ? (
                <Numbers>
                  2nd: {character.spellslots.second_remaining}/
                  {character.spellslots.second}
                </Numbers>
              ) : (
                <br></br>
              )}
            </Slot>
            <Slot>
              {character.spellslots.fourth > 0 && (
                <Numbers>
                  4th: {character.spellslots.fourth_remaining}/
                  {character.spellslots.fourth}
                </Numbers>
              )}
            </Slot>
            <Slot>
              {character.spellslots.fifth > 0 && (
                <Numbers>
                  5th: {character.spellslots.fifth_remaining}/
                  {character.spellslots.fifth}
                </Numbers>
              )}
            </Slot>
            <Slot>
              {character.spellslots.sixth > 0 && (
                <Numbers>
                  6th: {character.spellslots.sixth_remaining}/
                  {character.spellslots.sixth}
                </Numbers>
              )}
            </Slot>
            <Slot>
              {character.spellslots.seventh > 0 && (
                <Numbers>
                  7th: {character.spellslots.seventh_remaining}/
                  {character.spellslots.seventh}
                </Numbers>
              )}
            </Slot>
            <Slot>
              {character.spellslots.eighth > 0 && (
                <Numbers>
                  8th: {character.spellslots.eighth_remaining}/
                  {character.spellslots.eighth}
                </Numbers>
              )}
            </Slot>
            <Slot>
              {character.spellslots.ninth > 0 && (
                <Numbers>
                  9th: {character.spellslots.ninth_remaining}/
                  {character.spellslots.ninth}
                </Numbers>
              )}
            </Slot>
          </List>
        </div>
      )}
    </div>
  );
};

export default Magic;
