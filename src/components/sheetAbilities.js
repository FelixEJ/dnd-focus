import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: red;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: grid;
  grid-template-columns: 100px 50px 100px;
  margin: 1% 1% 1% 1%;
`;

const Title = styled.p`
  margin: 0;
  font-size: 0.8em;
  grid-column: 1;
  grid-row: 3;
  text-transform: uppercase;
`;

const Ability = styled.p`
  font-size: 2em;
  margin: 0;
  grid-column: 1;
  grid-row: 1;
`;

const Modifier = styled.p`
  font-size: 4em;
  margin: 0;
  font-weight: bold;
  grid-column: 1;
  grid-row: 2;
`;

const Stats = styled.div`
  grid-column: 1;
`;

const Skills = styled.div`
  grid-column: 2 / span 3;
  display: grid;
`;

const Text = styled.div`
  font-size: 0.8em;
  display: inherit;
  grid-column: 3;
  text-transform: uppercase;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;
const Number = styled.div`
  font-size: 1.5em;
  margin: 0;
  grid-column: 2;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

// duplicate, move to utilities
const SheetAbilities = ({ character }) => {
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

  return (
    <Container>
      <Box>
        <Stats>
          <Ability>{character.stats.str}</Ability>
          <Modifier>{getModifier(character.stats.str)}</Modifier>
          <Title>
            <b>STRENGTH</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("str", character.stats.str)} </Number>
          <Text><b>SAVING THROWS</b></Text>
          <Number>
            {getSkill(character.skills.Athletics, character.stats.str)}
          </Number>
          <Text>ATHLETICS</Text>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <Ability>{character.stats.dex}</Ability>
          <Modifier>{getModifier(character.stats.dex)}</Modifier>
          <Title>
            <b>DEXTERITY</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("dex", character.stats.dex)} </Number>
          <Text><b>SAVING THROWS</b></Text>
          <Number>
            {getSkill(character.skills.Acrobatics, character.stats.dex)}{" "}
          </Number>
          <Text>Acrobatics</Text>
          <Number>
            {getSkill(character.skills.SleightOfHand, character.stats.dex)}{" "}
          </Number>
          <Text>Sleight Of Hand</Text>
          <Number>
            {getSkill(character.skills.Stealth, character.stats.dex)}{" "}
          </Number>
          <Text>Stealth</Text>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <Ability>{character.stats.con}</Ability>
          <Modifier>{getModifier(character.stats.con)}</Modifier>
          <Title>
            <b>constitution</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("con", character.stats.con)} </Number>
          <Text><b>SAVING THROWS</b></Text>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <Ability>{character.stats.int}</Ability>
          <Modifier>{getModifier(character.stats.int)}</Modifier>
          <Title>
            <b>intelligence</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("int", character.stats.int)} </Number>
          <Text><b>SAVING THROWS</b></Text>
          <Number>
            {getSkill(character.skills.Arcana, character.stats.int)}{" "}
          </Number>
          <Text>Arcana</Text>
          <Number>
            {getSkill(character.skills.History, character.stats.int)}{" "}
          </Number>
          <Text>History</Text>
          <Number>
            {getSkill(character.skills.Investigation, character.stats.int)}{" "}
          </Number>
          <Text>Investigation</Text>
          <Number>
            {getSkill(character.skills.Nature, character.stats.int)}{" "}
          </Number>
          <Text>Nature</Text>
          <Number>
            {getSkill(character.skills.Religion, character.stats.int)}{" "}
          </Number>
          <Text>Religion</Text>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <Ability>{character.stats.wis}</Ability>
          <Modifier>{getModifier(character.stats.wis)}</Modifier>
          <Title>
            <b>wisdom</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("wis", character.stats.wis)} </Number>
          <Text><b>SAVING THROWS</b></Text>
          <Number>
            {getSkill(character.skills.AnimalHandling, character.stats.wis)}{" "}
          </Number>
          <Text>Animal Handling</Text>
          <Number>
            {getSkill(character.skills.Insight, character.stats.wis)}{" "}
          </Number>
          <Text>Insight</Text>
          <Number>
            {getSkill(character.skills.Medicine, character.stats.wis)}{" "}
          </Number>
          <Text>Medicine</Text>
          <Number>
            {getSkill(character.skills.Perception, character.stats.wis)}{" "}
          </Number>
          <Text>Perception</Text>
          <Number>
            {getSkill(character.skills.Survival, character.stats.wis)}{" "}
          </Number>
          <Text>Survival</Text>
        </Skills>
      </Box>
      <Box>
        <Stats>
          <Ability>{character.stats.cha}</Ability>
          <Modifier>{getModifier(character.stats.cha)}</Modifier>
          <Title>
            <b>charisma</b>
          </Title>
        </Stats>
        <Skills>
          <Number>{getSave("cha", character.stats.cha)} </Number>
          <Text><b>SAVING THROWS</b></Text>
          <Number>
            {getSkill(character.skills.Deception, character.stats.cha)}{" "}
          </Number>
          <Text>Deception</Text>
          <Number>
            {getSkill(character.skills.Intimidation, character.stats.cha)}{" "}
          </Number>
          <Text>Intimidation</Text>
          <Number>
            {getSkill(character.skills.Performance, character.stats.cha)}{" "}
          </Number>
          <Text>Performance</Text>
          <Number>
            {getSkill(character.skills.Persuasion, character.stats.cha)}{" "}
          </Number>
          <Text>Persuasion</Text>
        </Skills>
      </Box>
    </Container>
  );
};

export default SheetAbilities;
