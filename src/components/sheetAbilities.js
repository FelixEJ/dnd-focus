import React, { useState } from "react";
import styled from "styled-components";
import ToggleInspirationModal from "./toggleInspirationModal";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  max-width: 400px;
  background-color: none;
  max-height: 98vh;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  border-style: inset;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50% 5% 45%;
  margin: 1% 1% 1% 1%;
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 20% 30% 5% 45%;
  }
`;

const Bar = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 30% 70%;
  border-style: inset;
  border-radius: 5px;
  margin: 1% 1% 1% 1%;
`;

const TextBottomLeft = styled.div`
  margin: 0;
  font-size: 0.8em;
  grid-column: 1;
  grid-row: 3;
  text-transform: uppercase;
  @media only screen and (min-width: 1600px) {
    grid-row: 2;
    grid-column: 2;
  }
`;

const NumberLeft = styled.div`
  font-size: 2em;
  margin: 0;
  grid-column: 1;
  grid-row: 1;

  @media only screen and (min-width: 1600px) {
    grid-row: 1;
  }
`;

const NumberMidLeft = styled.div`
  font-size: 4em;
  margin: 0;
  font-weight: bold;
  grid-column: 1;
  grid-row: 2;
  @media only screen and (min-width: 1600px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const Stats = styled.div`
  grid-column: 1;
  display: grid;
  @media only screen and (min-width: 1600px) {
    grid-column: 1 / span 2;
  }
`;

const Skills = styled.div`
  grid-column: 2 / span 3;
  display: grid;
  @media only screen and (min-width: 1600px) {
    grid-column: 3 / span 4;
  }
`;

const TextRight = styled.div`
  font-size: 0.8em;
  display: inherit;
  grid-column: 2;
  text-transform: uppercase;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const TextFarRight = styled.div`
  font-size: 0.8em;
  display: inherit;
  grid-column: 3;
  text-transform: uppercase;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const NumberMid = styled.div`
  font-size: 1.2em;
  margin: 0;
  grid-column: 2;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

// duplicate, move to utilities
const SheetAbilities = ({ character, onCharacterChange }) => {
  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const getSave = (name, stat) => {
    let saveTotal = Math.floor((stat - 10) / 2);
    var savesArray = [];
    Object.keys(character.saves).forEach(function (key) {
      savesArray.push(character.saves[key]);
    });
    savesArray.map((save, index) => {
      if (name === save) {
        saveTotal += character.proficiency_bonus + savesArray[index + 1];
      }
      return true;
    });

    if (saveTotal > 0) {
      return "+" + saveTotal;
    } else {
      return saveTotal;
    }
  };

  const getSkill = (skill, stat) => {
    let totalMod = 0;
    let prof = 0;
    let statMod = 0;
    statMod = Math.floor((stat - 10) / 2);

    if (skill === "Proficient") {
      prof = character.proficiency_bonus;
    } else if (skill === "Expert") {
      prof = character.proficiency_bonus * 2;
    }

    totalMod = prof + statMod;
    if (totalMod > 0) {
      return "+" + totalMod;
    } else {
      return totalMod;
    }
  };

  const getPassive = (skill, stat) => {
    let totalMod = 0;
    let prof = 0;
    let statMod = 0;
    statMod = Math.floor((stat - 10) / 2);

    if (skill === "Proficient") {
      prof = character.proficiency_bonus;
    } else if (skill === "Expert") {
      prof = character.proficiency_bonus * 2;
    }

    totalMod = prof + statMod + 10;

    return totalMod;
  };

  return (
    <Container>
      <Bar>
        <NumberLeft>+{character.proficiency_bonus}</NumberLeft>
        <TextRight>proficiency bonus</TextRight>
      </Bar>
      <Bar>
        {/* <NumberLeft>{character.inspiration ? "Yes" : "No"}</NumberLeft> */}
        <NumberLeft>
          <input
            type="checkbox"
            id="inspiration"
            name="inspiration"
            checked={character.inspiration}
            onChange={onCharacterChange}
          />
        </NumberLeft>
        <TextRight>inspiration</TextRight>
        {/* <ToggleInspirationModal character={character} toggleInspiration={toggleInspiration} /> */}
      </Bar>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.str}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.str)}</NumberMidLeft>
          <TextBottomLeft>
            <b>STRENGTH</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("str", character.stats.str)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Athletics, character.stats.str)}
          </NumberMid>
          <TextFarRight>ATHLETICS</TextFarRight>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.dex}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.dex)}</NumberMidLeft>
          <TextBottomLeft>
            <b>DEXTERITY</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("dex", character.stats.dex)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Acrobatics, character.stats.dex)}{" "}
          </NumberMid>
          <TextFarRight>Acrobatics</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.SleightOfHand, character.stats.dex)}{" "}
          </NumberMid>
          <TextFarRight>Sleight Of Hand</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Stealth, character.stats.dex)}{" "}
          </NumberMid>
          <TextFarRight>Stealth</TextFarRight>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.con}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.con)}</NumberMidLeft>
          <TextBottomLeft>
            <b>constitution</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("con", character.stats.con)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.int}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.int)}</NumberMidLeft>
          <TextBottomLeft>
            <b>intelligence</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("int", character.stats.int)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Arcana, character.stats.int)}{" "}
          </NumberMid>
          <TextFarRight>Arcana</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.History, character.stats.int)}{" "}
          </NumberMid>
          <TextFarRight>History</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Investigation, character.stats.int)}{" "}
          </NumberMid>
          <TextFarRight>Investigation</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Nature, character.stats.int)}{" "}
          </NumberMid>
          <TextFarRight>Nature</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Religion, character.stats.int)}{" "}
          </NumberMid>
          <TextFarRight>Religion</TextFarRight>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.wis}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.wis)}</NumberMidLeft>
          <TextBottomLeft>
            <b>wisdom</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("wis", character.stats.wis)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
          <NumberMid>
            {getSkill(character.skills.AnimalHandling, character.stats.wis)}{" "}
          </NumberMid>
          <TextFarRight>Animal Handling</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Insight, character.stats.wis)}{" "}
          </NumberMid>
          <TextFarRight>Insight</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Medicine, character.stats.wis)}{" "}
          </NumberMid>
          <TextFarRight>Medicine</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Perception, character.stats.wis)}{" "}
          </NumberMid>
          <TextFarRight>Perception</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Survival, character.stats.wis)}{" "}
          </NumberMid>
          <TextFarRight>Survival</TextFarRight>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <NumberLeft>{character.stats.cha}</NumberLeft>
          <NumberMidLeft>{getModifier(character.stats.cha)}</NumberMidLeft>
          <TextBottomLeft>
            <b>charisma</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>{getSave("cha", character.stats.cha)} </NumberMid>
          <TextFarRight>
            <b>SAVING THROWS</b>
          </TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Deception, character.stats.cha)}{" "}
          </NumberMid>
          <TextFarRight>Deception</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Intimidation, character.stats.cha)}{" "}
          </NumberMid>
          <TextFarRight>Intimidation</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Performance, character.stats.cha)}{" "}
          </NumberMid>
          <TextFarRight>Performance</TextFarRight>
          <NumberMid>
            {getSkill(character.skills.Persuasion, character.stats.cha)}{" "}
          </NumberMid>
          <TextFarRight>Persuasion</TextFarRight>
        </Skills>
      </Box>
      <Bar>
        <NumberLeft>
          {getPassive(character.skills.Perception, character.stats.wis)}
        </NumberLeft>
        <TextRight>passive wisdom (perception)</TextRight>
      </Bar>
      <Bar>
        <NumberLeft>
          {getPassive(character.skills.Investigation, character.stats.int)}
        </NumberLeft>
        <TextRight>passive intelligence (investigation)</TextRight>
      </Bar>
    </Container>
  );
};

export default SheetAbilities;
