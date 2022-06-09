import React, { useState } from "react";
import styled from "styled-components";

import EditAbilitiesModal from "./editAbilitiesModal";

import { getModifier, getSave, getSkill, getPassive } from "./utils";

import {
  WindowContent,
  PageContent,
  Container,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../components/StyledPageComponents/pageStyling";

// const Container = styled.div`
//   text-align: center;
//   z-index: 1;
//   width: 100%;
//   max-width: 400px;
//   background-color: none;

//   display: block;
//   margin-left: auto;
//   margin-right: auto;

//   @media only screen and (min-width: 1300px) {
//     max-height: 90vh;
//   }
// `;

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

const SheetAbilities = ({ character, onCharacterChange }) => {
  return (
    <>
      <h4>Ability Scores</h4>
      <EditAbilitiesModal
        character={character}
        onCharacterChange={onCharacterChange}
      />
      <Bar>
        <NumberLeft>+{character.proficiency_bonus}</NumberLeft>
        <TextRight>proficiency bonus</TextRight>
      </Bar>
      <Bar>
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
      </Bar>
      <Box>
        <Stats>
          {character.stats.temp_str > 0 && (
            <NumberLeft>{character.stats.temp_str}</NumberLeft>
          )}
          {character.stats.temp_str < 1 && (
            <NumberLeft>{character.stats.str}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.str, character.stats.temp_str)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>STRENGTH</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.str,
              character.saves.str_bonus,
              character.stats.str,
              character.stats.temp_str
            )}{" "}
          </NumberMid>
          {character.saves.str === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.str === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Athletics,
              character.skills.Athletics_bonus,
              character.stats.str,
              character.stats.temp_str
            )}
          </NumberMid>
          {character.skills.Athletics === "" && (
            <TextFarRight>ATHLETICS</TextFarRight>
          )}
          {character.skills.Athletics === "Proficient" && (
            <TextFarRight>*ATHLETICS*</TextFarRight>
          )}
          {character.skills.Athletics === "Expert" && (
            <TextFarRight>**ATHLETICS**</TextFarRight>
          )}
        </Skills>
      </Box>
      <Box>
        <Stats>
          {character.stats.temp_dex > 0 && (
            <NumberLeft>{character.stats.temp_dex}</NumberLeft>
          )}
          {character.stats.temp_dex < 1 && (
            <NumberLeft>{character.stats.dex}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.dex, character.stats.temp_dex)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>DEXTERITY</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.dex,
              character.saves.dex_bonus,
              character.stats.dex,
              character.stats.temp_dex
            )}{" "}
          </NumberMid>
          {character.saves.dex === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.dex === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Acrobatics,
              character.skills.Acrobatics_bonus,
              character.stats.dex
            )}{" "}
          </NumberMid>
          {character.skills.Acrobatics === "" && (
            <TextFarRight>Acrobatics</TextFarRight>
          )}
          {character.skills.Acrobatics === "Proficient" && (
            <TextFarRight>*Acrobatics*</TextFarRight>
          )}
          {character.skills.Acrobatics === "Expert" && (
            <TextFarRight>**Acrobatics**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.SleightOfHand,
              character.skills.SleightOfHand_bonus,
              character.stats.dex
            )}{" "}
          </NumberMid>
          {character.skills.SleightOfHand === "" && (
            <TextFarRight>Sleight Of Hand</TextFarRight>
          )}
          {character.skills.SleightOfHand === "Proficient" && (
            <TextFarRight>*Sleight Of Hand*</TextFarRight>
          )}
          {character.skills.SleightOfHand === "Expert" && (
            <TextFarRight>**Sleight Of Hand**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Stealth,
              character.skills.Stealth_bonus,
              character.stats.dex
            )}{" "}
          </NumberMid>
          {character.skills.Stealth === "" && (
            <TextFarRight>Stealth</TextFarRight>
          )}
          {character.skills.Stealth === "Proficient" && (
            <TextFarRight>*Stealth*</TextFarRight>
          )}
          {character.skills.Stealth === "Expert" && (
            <TextFarRight>**Stealth**</TextFarRight>
          )}
        </Skills>
      </Box>
      <Box>
        <Stats>
          {character.stats.temp_con > 0 && (
            <NumberLeft>{character.stats.temp_con}</NumberLeft>
          )}
          {character.stats.temp_con < 1 && (
            <NumberLeft>{character.stats.con}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.con, character.stats.temp_con)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>constitution</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.con,
              character.saves.con_bonus,
              character.stats.con,
              character.stats.temp_con
            )}{" "}
          </NumberMid>
          {character.saves.con === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.con === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
        </Skills>
      </Box>
      <Box>
        <Stats>
          {character.stats.temp_int > 0 && (
            <NumberLeft>{character.stats.temp_int}</NumberLeft>
          )}
          {character.stats.temp_int < 1 && (
            <NumberLeft>{character.stats.int}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.int, character.stats.temp_int)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>intelligence</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.int,
              character.saves.int_bonus,
              character.stats.int,
              character.stats.temp_int
            )}{" "}
          </NumberMid>
          {character.saves.int === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.int === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Arcana,
              character.skills.Arcana_bonus,
              character.stats.int
            )}{" "}
          </NumberMid>
          {character.skills.Arcana === "" && (
            <TextFarRight>Arcana</TextFarRight>
          )}
          {character.skills.Arcana === "Proficient" && (
            <TextFarRight>*Arcana*</TextFarRight>
          )}
          {character.skills.Arcana === "Expert" && (
            <TextFarRight>**Arcana**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.History,
              character.skills.History_bonus,
              character.stats.int
            )}{" "}
          </NumberMid>
          {character.skills.History === "" && (
            <TextFarRight>History</TextFarRight>
          )}
          {character.skills.History === "Proficient" && (
            <TextFarRight>*History*</TextFarRight>
          )}
          {character.skills.History === "Expert" && (
            <TextFarRight>**History**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Investigation,
              character.skills.Investigation_bonus,
              character.stats.int
            )}{" "}
          </NumberMid>
          {character.skills.Investigation === "" && (
            <TextFarRight>Investigation</TextFarRight>
          )}
          {character.skills.Investigation === "Proficient" && (
            <TextFarRight>*Investigation*</TextFarRight>
          )}
          {character.skills.Investigation === "Expert" && (
            <TextFarRight>**Investigation**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Nature,
              character.skills.Nature_bonus,
              character.stats.int
            )}{" "}
          </NumberMid>
          {character.skills.Nature === "" && (
            <TextFarRight>Nature</TextFarRight>
          )}
          {character.skills.Nature === "Proficient" && (
            <TextFarRight>*Nature*</TextFarRight>
          )}
          {character.skills.Nature === "Expert" && (
            <TextFarRight>**Nature**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Religion,
              character.skills.Religion_bonus,
              character.stats.int
            )}{" "}
          </NumberMid>
          {character.skills.Religion === "" && (
            <TextFarRight>Religion</TextFarRight>
          )}
          {character.skills.Religion === "Proficient" && (
            <TextFarRight>*Religion*</TextFarRight>
          )}
          {character.skills.Religion === "Expert" && (
            <TextFarRight>**Religion**</TextFarRight>
          )}
        </Skills>
      </Box>
      <Box>
        <Stats>
          {character.stats.temp_wis > 0 && (
            <NumberLeft>{character.stats.temp_wis}</NumberLeft>
          )}
          {character.stats.temp_wis < 1 && (
            <NumberLeft>{character.stats.wis}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.wis, character.stats.temp_wis)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>wisdom</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.wis,
              character.saves.wis_bonus,
              character.stats.wis,
              character.stats.temp_wis
            )}{" "}
          </NumberMid>
          {character.saves.wis === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.wis === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.AnimalHandling,
              character.skills.AnimalHandling_bonus,
              character.stats.wis
            )}{" "}
          </NumberMid>
          {character.skills.AnimalHandling === "" && (
            <TextFarRight>Animal Handling</TextFarRight>
          )}
          {character.skills.AnimalHandling === "Proficient" && (
            <TextFarRight>*Animal Handling*</TextFarRight>
          )}
          {character.skills.AnimalHandling === "Expert" && (
            <TextFarRight>**Animal Handling**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Insight,
              character.skills.Insight_bonus,
              character.stats.wis
            )}{" "}
          </NumberMid>
          {character.skills.Insight === "" && (
            <TextFarRight>Insight</TextFarRight>
          )}
          {character.skills.Insight === "Proficient" && (
            <TextFarRight>*Insight*</TextFarRight>
          )}
          {character.skills.Insight === "Expert" && (
            <TextFarRight>**Insight**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Medicine,
              character.skills.Medicine_bonus,
              character.stats.wis
            )}{" "}
          </NumberMid>
          {character.skills.Medicine === "" && (
            <TextFarRight>Medicine</TextFarRight>
          )}
          {character.skills.Medicine === "Proficient" && (
            <TextFarRight>*Medicine*</TextFarRight>
          )}
          {character.skills.Medicine === "Expert" && (
            <TextFarRight>**Medicine**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Perception,
              character.skills.Perception_bonus,
              character.stats.wis
            )}{" "}
          </NumberMid>
          {character.skills.Perception === "" && (
            <TextFarRight>Perception</TextFarRight>
          )}
          {character.skills.Perception === "Proficient" && (
            <TextFarRight>*Perception*</TextFarRight>
          )}
          {character.skills.Perception === "Expert" && (
            <TextFarRight>**Perception**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Survival,
              character.skills.Survival_bonus,
              character.stats.wis
            )}{" "}
          </NumberMid>
          {character.skills.Survival === "" && (
            <TextFarRight>Survival</TextFarRight>
          )}
          {character.skills.Survival === "Proficient" && (
            <TextFarRight>*Survival*</TextFarRight>
          )}
          {character.skills.Survival === "Expert" && (
            <TextFarRight>**Survival**</TextFarRight>
          )}
        </Skills>
      </Box>
      <Box>
        <Stats>
          {character.stats.temp_cha > 0 && (
            <NumberLeft>{character.stats.temp_cha}</NumberLeft>
          )}
          {character.stats.temp_cha < 1 && (
            <NumberLeft>{character.stats.cha}</NumberLeft>
          )}
          <NumberMidLeft>
            {getModifier(character.stats.cha, character.stats.temp_cha)}
          </NumberMidLeft>
          <TextBottomLeft>
            <b>charisma</b>
          </TextBottomLeft>
        </Stats>
        <Skills>
          <NumberMid>
            {getSave(
              character,
              character.saves.cha,
              character.saves.cha_bonus,
              character.stats.cha,
              character.stats.temp_cha
            )}{" "}
          </NumberMid>
          {character.saves.cha === true && (
            <TextFarRight>
              <b>*SAVING THROWS*</b>
            </TextFarRight>
          )}
          {character.saves.cha === false && (
            <TextFarRight>
              <b>SAVING THROWS</b>
            </TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Deception,
              character.skills.Deception_bonus,
              character.stats.cha
            )}{" "}
          </NumberMid>
          {character.skills.Deception === "" && (
            <TextFarRight>Deception</TextFarRight>
          )}
          {character.skills.Deception === "Proficient" && (
            <TextFarRight>*Deception*</TextFarRight>
          )}
          {character.skills.Deception === "Expert" && (
            <TextFarRight>**Deception**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Intimidation,
              character.skills.Intimidation_bonus,
              character.stats.cha
            )}{" "}
          </NumberMid>
          {character.skills.Intimidation === "" && (
            <TextFarRight>Intimidation</TextFarRight>
          )}
          {character.skills.Intimidation === "Proficient" && (
            <TextFarRight>*Intimidation*</TextFarRight>
          )}
          {character.skills.Intimidation === "Expert" && (
            <TextFarRight>**Intimidation**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Performance,
              character.skills.Performance_bonus,
              character.stats.cha
            )}{" "}
          </NumberMid>
          {character.skills.Performance === "" && (
            <TextFarRight>Performance</TextFarRight>
          )}
          {character.skills.Performance === "Proficient" && (
            <TextFarRight>*Performance*</TextFarRight>
          )}
          {character.skills.Performance === "Expert" && (
            <TextFarRight>**Performance**</TextFarRight>
          )}
          <NumberMid>
            {getSkill(
              character,
              character.skills.Persuasion,
              character.skills.Persuasion_bonus,
              character.stats.cha
            )}{" "}
          </NumberMid>
          {character.skills.Persuasion === "" && (
            <TextFarRight>Persuasion</TextFarRight>
          )}
          {character.skills.Persuasion === "Proficient" && (
            <TextFarRight>*Persuasion*</TextFarRight>
          )}
          {character.skills.Persuasion === "Expert" && (
            <TextFarRight>**Persuasion**</TextFarRight>
          )}
        </Skills>
      </Box>
      {character.passives.senses != "" && (
        <Bar>
        <TextBottomLeft>
          {character.passives.senses}
        </TextBottomLeft>
        <TextRight>Senses</TextRight>
      </Bar>
      )}      
      <Bar>
        <NumberLeft>
          {getPassive(
            character,
            character.passives.perception_bonus,
            character.skills.Perception,
            character.skills.Perception_bonus,
            character.stats.wis
          )}
        </NumberLeft>
        <TextRight>passive wisdom (perception)</TextRight>
      </Bar>
      <Bar>
        <NumberLeft>
          {getPassive(
            character,
            character.passives.investigation_bonus,
            character.skills.Investigation,
            character.skills.Investigation_bonus,
            character.stats.int
          )}
        </NumberLeft>
        <TextRight>passive intelligence (investigation)</TextRight>
      </Bar>
    </>
  );
};

export default SheetAbilities;
