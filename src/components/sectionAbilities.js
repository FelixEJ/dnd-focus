import React, { useState } from "react";
import styled from "styled-components";

import EditAbilitiesModal from "./editAbilitiesModal";

import { getModifier, getSave, getSkill, getPassive } from "./utils";
import { AbilityGroup} from "../components/StyledPageComponents/abilityGroup";

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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const AbilityBox = styled.div`
  width: 98%;
  border-style: inset;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
`;

const Gap = styled.div`
  width: 5%;
`;

const SkillGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  float: right;
`;

const SkillRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: rgba(203, 203, 203, 0.3);
  }
`;

const SkillModifier = styled.div`
  font-size: 1.2em;
  margin: 0;
`;

const SkillName = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  width: 99%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;

const Bar = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const NumberLeft = styled.div`
  font-size: 2em;
  margin: -5px;
  grid-column: 1;
  grid-row: 1;
`;
const TextLeft = styled.div`
  font-size: 1em;
  display: inherit;
  margin: 10px 0 0 0;
  grid-column: 1;
  grid-row: 1;

  @media only screen and (min-width: 1600px) {
    grid-row: 1;
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

const Abilities = ({ character, onCharacterChange }) => {
  return (
    <CardColumn>
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
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.str}
          tempAbility={character.stats.temp_str}
          mod={getModifier(character.stats.str, character.stats.temp_str)}
          name="STRENGTH"
          abrev="STR"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.str,
                character.saves.str_bonus,
                character.stats.str,
                character.stats.temp_str
              )}{" "}
            </SkillModifier>
            {character.saves.str === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.str === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Athletics,
                character.skills.Athletics_bonus,
                character.stats.str,
                character.stats.temp_str
              )}
            </SkillModifier>
            {character.skills.Athletics === "" && (
              <SkillName>ATHLETICS</SkillName>
            )}
            {character.skills.Athletics === "Proficient" && (
              <SkillName>*ATHLETICS*</SkillName>
            )}
            {character.skills.Athletics === "Expert" && (
              <SkillName>**ATHLETICS**</SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.dex}
          tempAbility={character.stats.temp_dex}
          mod={getModifier(character.stats.dex, character.stats.temp_dex)}
          name="dexterity"
          abrev="dex"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.dex,
                character.saves.dex_bonus,
                character.stats.dex,
                character.stats.temp_dex
              )}{" "}
            </SkillModifier>
            {character.saves.dex === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.dex === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Acrobatics,
                character.skills.Acrobatics_bonus,
                character.stats.dex,
                character.stats.temp_dex
              )}{" "}
            </SkillModifier>
            {character.skills.Acrobatics === "" && (
              <SkillName>Acrobatics</SkillName>
            )}
            {character.skills.Acrobatics === "Proficient" && (
              <SkillName>*Acrobatics*</SkillName>
            )}
            {character.skills.Acrobatics === "Expert" && (
              <SkillName>**Acrobatics**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.SleightOfHand,
                character.skills.SleightOfHand_bonus,
                character.stats.dex,
                character.stats.temp_dex
              )}{" "}
            </SkillModifier>
            {character.skills.SleightOfHand === "" && (
              <SkillName>Sleight Of Hand</SkillName>
            )}
            {character.skills.SleightOfHand === "Proficient" && (
              <SkillName>*Sleight Of Hand*</SkillName>
            )}
            {character.skills.SleightOfHand === "Expert" && (
              <SkillName>**Sleight Of Hand**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Stealth,
                character.skills.Stealth_bonus,
                character.stats.dex,
                character.stats.temp_dex
              )}{" "}
            </SkillModifier>
            {character.skills.Stealth === "" && <SkillName>Stealth</SkillName>}
            {character.skills.Stealth === "Proficient" && (
              <SkillName>*Stealth*</SkillName>
            )}
            {character.skills.Stealth === "Expert" && (
              <SkillName>**Stealth**</SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.con}
          tempAbility={character.stats.temp_con}
          mod={getModifier(character.stats.con, character.stats.temp_con)}
          name="constitution"
          abrev="con"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.con,
                character.saves.con_bonus,
                character.stats.con,
                character.stats.temp_con
              )}{" "}
            </SkillModifier>
            {character.saves.con === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.con === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.int}
          tempAbility={character.stats.temp_int}
          mod={getModifier(character.stats.int, character.stats.temp_int)}
          name="intelligence"
          abrev="int"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.int,
                character.saves.int_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.saves.int === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.int === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Arcana,
                character.skills.Arcana_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.skills.Arcana === "" && <SkillName>Arcana</SkillName>}
            {character.skills.Arcana === "Proficient" && (
              <SkillName>*Arcana*</SkillName>
            )}
            {character.skills.Arcana === "Expert" && (
              <SkillName>**Arcana**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.History,
                character.skills.History_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.skills.History === "" && <SkillName>History</SkillName>}
            {character.skills.History === "Proficient" && (
              <SkillName>*History*</SkillName>
            )}
            {character.skills.History === "Expert" && (
              <SkillName>**History**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Investigation,
                character.skills.Investigation_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.skills.Investigation === "" && (
              <SkillName>Investigation</SkillName>
            )}
            {character.skills.Investigation === "Proficient" && (
              <SkillName>*Investigation*</SkillName>
            )}
            {character.skills.Investigation === "Expert" && (
              <SkillName>**Investigation**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Nature,
                character.skills.Nature_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.skills.Nature === "" && <SkillName>Nature</SkillName>}
            {character.skills.Nature === "Proficient" && (
              <SkillName>*Nature*</SkillName>
            )}
            {character.skills.Nature === "Expert" && (
              <SkillName>**Nature**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Religion,
                character.skills.Religion_bonus,
                character.stats.int,
                character.stats.temp_int
              )}{" "}
            </SkillModifier>
            {character.skills.Religion === "" && (
              <SkillName>Religion</SkillName>
            )}
            {character.skills.Religion === "Proficient" && (
              <SkillName>*Religion*</SkillName>
            )}
            {character.skills.Religion === "Expert" && (
              <SkillName>**Religion**</SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.wis}
          tempAbility={character.stats.temp_wis}
          mod={getModifier(character.stats.wis, character.stats.temp_wis)}
          name="wisdom"
          abrev="wis"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.wis,
                character.saves.wis_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.saves.wis === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.wis === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.AnimalHandling,
                character.skills.AnimalHandling_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.skills.AnimalHandling === "" && (
              <SkillName>Animal Handling</SkillName>
            )}
            {character.skills.AnimalHandling === "Proficient" && (
              <SkillName>*Animal Handling*</SkillName>
            )}
            {character.skills.AnimalHandling === "Expert" && (
              <SkillName>**Animal Handling**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Insight,
                character.skills.Insight_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.skills.Insight === "" && <SkillName>Insight</SkillName>}
            {character.skills.Insight === "Proficient" && (
              <SkillName>*Insight*</SkillName>
            )}
            {character.skills.Insight === "Expert" && (
              <SkillName>**Insight**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Medicine,
                character.skills.Medicine_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.skills.Medicine === "" && (
              <SkillName>Medicine</SkillName>
            )}
            {character.skills.Medicine === "Proficient" && (
              <SkillName>*Medicine*</SkillName>
            )}
            {character.skills.Medicine === "Expert" && (
              <SkillName>**Medicine**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Perception,
                character.skills.Perception_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.skills.Perception === "" && (
              <SkillName>Perception</SkillName>
            )}
            {character.skills.Perception === "Proficient" && (
              <SkillName>*Perception*</SkillName>
            )}
            {character.skills.Perception === "Expert" && (
              <SkillName>**Perception**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Survival,
                character.skills.Survival_bonus,
                character.stats.wis,
                character.stats.temp_wis
              )}{" "}
            </SkillModifier>
            {character.skills.Survival === "" && (
              <SkillName>Survival</SkillName>
            )}
            {character.skills.Survival === "Proficient" && (
              <SkillName>*Survival*</SkillName>
            )}
            {character.skills.Survival === "Expert" && (
              <SkillName>**Survival**</SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      <AbilityBox>
        <AbilityGroup
          ability={character.stats.cha}
          tempAbility={character.stats.temp_cha}
          mod={getModifier(character.stats.cha, character.stats.temp_cha)}
          name="charisma"
          abrev="cha"
        />
        <Gap />
        <SkillGroup>
          <SkillRow>
            <SkillModifier>
              {getSave(
                character,
                character.saves.cha,
                character.saves.cha_bonus,
                character.stats.cha,
                character.stats.temp_cha
              )}{" "}
            </SkillModifier>
            {character.saves.cha === true && (
              <SkillName>
                <b>*SAVING THROWS*</b>
              </SkillName>
            )}
            {character.saves.cha === false && (
              <SkillName>
                <b>SAVING THROWS</b>
              </SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Deception,
                character.skills.Deception_bonus,
                character.stats.cha,
                character.stats.temp_cha
              )}{" "}
            </SkillModifier>
            {character.skills.Deception === "" && (
              <SkillName>Deception</SkillName>
            )}
            {character.skills.Deception === "Proficient" && (
              <SkillName>*Deception*</SkillName>
            )}
            {character.skills.Deception === "Expert" && (
              <SkillName>**Deception**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Intimidation,
                character.skills.Intimidation_bonus,
                character.stats.cha,
                character.stats.temp_cha
              )}{" "}
            </SkillModifier>
            {character.skills.Intimidation === "" && (
              <SkillName>Intimidation</SkillName>
            )}
            {character.skills.Intimidation === "Proficient" && (
              <SkillName>*Intimidation*</SkillName>
            )}
            {character.skills.Intimidation === "Expert" && (
              <SkillName>**Intimidation**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Performance,
                character.skills.Performance_bonus,
                character.stats.cha,
                character.stats.temp_cha
              )}{" "}
            </SkillModifier>
            {character.skills.Performance === "" && (
              <SkillName>Performance</SkillName>
            )}
            {character.skills.Performance === "Proficient" && (
              <SkillName>*Performance*</SkillName>
            )}
            {character.skills.Performance === "Expert" && (
              <SkillName>**Performance**</SkillName>
            )}
          </SkillRow>
          <SkillRow>
            <SkillModifier>
              {getSkill(
                character,
                character.skills.Persuasion,
                character.skills.Persuasion_bonus,
                character.stats.cha,
                character.stats.temp_cha
              )}{" "}
            </SkillModifier>
            {character.skills.Persuasion === "" && (
              <SkillName>Persuasion</SkillName>
            )}
            {character.skills.Persuasion === "Proficient" && (
              <SkillName>*Persuasion*</SkillName>
            )}
            {character.skills.Persuasion === "Expert" && (
              <SkillName>**Persuasion**</SkillName>
            )}
          </SkillRow>
        </SkillGroup>
      </AbilityBox>
      {character.passives.senses != "" && (
        <Bar>
          <TextLeft>{character.passives.senses}</TextLeft>
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
    </CardColumn>
  );
};

export default Abilities;
