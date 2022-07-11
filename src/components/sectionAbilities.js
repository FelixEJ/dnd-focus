import React, { useState } from "react";
import styled from "styled-components";

import EditAbilitiesModal from "./editAbilitiesModal";

import { getModifier, getSave, getSkill, getPassive } from "./utils";

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

const AbilityGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 40%;
`;

const AbilityScore = styled.div`
  font-size: 2em;
  margin: 0 0 0 10px;
  grid-area: abilityscore;
  align-self: flex-start;
`;

const AbilityModifier = styled.div`
  font-size: 6em;
  margin: -40px 0 -30px 0;
  font-weight: bold;
`;

const AbilityName = styled.div`
  margin: 0;
  font-size: 0.8em;
  grid-area: abilityname;
  text-transform: uppercase;
  align-self: flex-end;
`;

const SkillGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  float: right;
`;

const Gap = styled.div`
  width: 10%;
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

const SheetAbilities = ({ character, onCharacterChange }) => {
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
        <AbilityGroup>
          {character.stats.temp_str > 0 ? (
            <AbilityScore>{character.stats.temp_str}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.str}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.str, character.stats.temp_str)}
          </AbilityModifier>
          <AbilityName>
            <b>STRENGTH</b>
          </AbilityName>
        </AbilityGroup>
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
        <AbilityGroup>
          {character.stats.temp_dex > 0 ? (
            <AbilityScore>{character.stats.temp_dex}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.dex}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.dex, character.stats.temp_dex)}
          </AbilityModifier>
          <AbilityName>
            <b>DEXTERITY</b>
          </AbilityName>
        </AbilityGroup>
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
        <AbilityGroup>
          {character.stats.temp_con > 0 ? (
            <AbilityScore>{character.stats.temp_con}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.con}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.con, character.stats.temp_con)}
          </AbilityModifier>
          <AbilityName>
            <b>constitution</b>
          </AbilityName>
        </AbilityGroup>
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
        <AbilityGroup>
          {character.stats.temp_int > 0 ? (
            <AbilityScore>{character.stats.temp_int}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.int}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.int, character.stats.temp_int)}
          </AbilityModifier>
          <AbilityName>
            <b>intelligence</b>
          </AbilityName>
        </AbilityGroup>
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
        <AbilityGroup>
          {character.stats.temp_wis > 0 ? (
            <AbilityScore>{character.stats.temp_wis}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.wis}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.wis, character.stats.temp_wis)}
          </AbilityModifier>
          <AbilityName>
            <b>wisdom</b>
          </AbilityName>
        </AbilityGroup>
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
        <AbilityGroup>
          {character.stats.temp_cha > 0 ? (
            <AbilityScore>{character.stats.temp_cha}</AbilityScore>
          ) : (
            <AbilityScore>{character.stats.cha}</AbilityScore>
          )}
          <AbilityModifier>
            {getModifier(character.stats.cha, character.stats.temp_cha)}
          </AbilityModifier>
          <AbilityName>
            <b>charisma</b>
          </AbilityName>
        </AbilityGroup>
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

export default SheetAbilities;
