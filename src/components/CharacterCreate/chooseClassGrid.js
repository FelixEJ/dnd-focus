import React from "react";
import { Button, ButtonGroup, FormControl } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import AddFeatureModal from "./addFeatureModal";
import AddEquipmentModal from "./addEquipmentModal";
import AddItemModal from "./addItemModal";
import AddAttackModal from "./addAttackModal";
import AddSkillModal from "./addSkillModal";
import stylish from "styled-components";
import CardContainer from "../cardContainer";
import CardDiv from "../cardDiv";

const BotButtons = stylish.div`
  margin-bottom: 40px;
`;

const Proficient = stylish.div`
  width: 98%;
  background-color: none;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Skill = stylish.div`
  & {
    width: 98%;
    background-color: lightgreen;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    background-color: lightblue;
  }
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "5px",
}));

const Section = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "beige",
}));

const ChooseClassGrid = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  setMagicUser,
  addFeature,
  addEquipment,
  addItem,
  addAttack,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  // duplicate, move to utilities
  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const getSpellModifier = (spellStat) => {
    for (const stat in character.stats) {
      // console.log(spellStat, stat);
      if (stat === spellStat) {
        // console.log(spellStat, character.stats[stat]);
        return getModifier(character.stats[stat]);
      }
    }
  };

  function setMagicUse(e) {
    console.log("setMagicUser");
    // onCharacterChange(e);
    setMagicUser(e);
  }

  return (
    <div>
      <h1>Choose Class:</h1>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
      <Box>
        <FormControl>
          <label>
            {character.name}, lvl:{character.level}
          </label>
          <CardContainer>
            <CardDiv>
              <label>
                Class:&emsp;
                <input
                  type="text"
                  id="class"
                  name="class"
                  value={character.class}
                  onChange={onCharacterChange}
                />
              </label>
            </CardDiv>

            <CardDiv>
              <label>
                Subclass:&emsp;
                <input
                  type="text"
                  id="subclass"
                  name="subclass"
                  value={character.subclass}
                  onChange={onCharacterChange}
                />
              </label>
            </CardDiv>

            <CardDiv>
              <label>Hit Dice:&emsp;</label>
              <select
                id="hit_dice"
                name="hit_dice.dice"
                value={character.hit_dice.dice}
                onChange={onCharacterChange}
              >
                <option value={"d6"}>d6</option>
                <option value={"d8"}>d8</option>
                <option value={"d10"}>d10</option>
                <option value={"d12"}>d12</option>
              </select>
              <label>Hit Dice Max:&emsp;</label>
              <input
                type="number"
                id="hit_dice.max"
                name="hit_dice.max"
                value={character.hit_dice.max}
                onChange={onCharacterChange}
                size="3"
                display="none"
              />
              <label>Hit Dice current:&emsp;</label>
              <input
                type="number"
                id="hit_dice.current"
                name="hit_dice.current"
                value={character.hit_dice.current}
                onChange={onCharacterChange}
                size="3"
                display="none"
              />
            </CardDiv>

            <CardDiv>
              <label>Hit Points:&emsp; Max</label>
              <input
                type="number"
                id="max"
                name="hp.max"
                value={character.hp.max}
                onChange={onCharacterChange}
                size="4"
                required
              />
              <label>&emsp; Current:</label>
              <input
                type="number"
                id="current"
                name="hp.current"
                value={character.hp.current}
                onChange={onCharacterChange}
                size="3"
                display="none"
              />
              <label>&emsp;Con mod = {getModifier(character.stats.con)}</label>
            </CardDiv>

            <CardDiv style={{ backgroundColor: "beige" }}>
              <h3>Proficiencies</h3>
              <Item>
                <label>
                  Languages:&emsp;
                  <textarea
                    type="text"
                    id="languages"
                    placeholder="Common and...?"
                    name="proficiencies.languages"
                    value={character.proficiencies.languages}
                    onChange={onCharacterChange}
                    cols="30"
                    rows="1"
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Weapons:&emsp;
                  <textarea
                    type="text"
                    id="weapons"
                    placeholder="Simple and...?"
                    name="proficiencies.weapons"
                    value={character.proficiencies.weapons}
                    onChange={onCharacterChange}
                    cols="30"
                    rows="1"
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Armour:&emsp;
                  <textarea
                    type="text"
                    id="armour"
                    placeholder="Light and...?"
                    name="proficiencies.armour"
                    value={character.proficiencies.armour}
                    onChange={onCharacterChange}
                    cols="30"
                    rows="1"
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Other:&emsp;
                  <textarea
                    type="text"
                    id="other"
                    placeholder="Instruments, games, vehicles...?"
                    name="proficiencies.other"
                    value={character.proficiencies.other}
                    onChange={onCharacterChange}
                    cols="30"
                    rows="1"
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Saving Throws: &emsp;
                  <select
                    id="save1"
                    name="saves.save1"
                    value={character.saves.save1}
                    onChange={onCharacterChange}
                  >
                    <option value={""}>-</option>
                    <option value={"str"}>Strength</option>
                    <option value={"dex"}>Dexterity</option>
                    <option value={"con"}>Constitution</option>
                    <option value={"int"}>Intelligence</option>
                    <option value={"wis"}>Wisdom</option>
                    <option value={"cha"}>Charisma</option>
                  </select>
                  &emsp;
                  <select
                    id="save2"
                    name="saves.save2"
                    value={character.saves.save2}
                    onChange={onCharacterChange}
                  >
                    <option value={""}>-</option>
                    <option value={"str"}>Strength</option>
                    <option value={"dex"}>Dexterity</option>
                    <option value={"con"}>Constitution</option>
                    <option value={"int"}>Intelligence</option>
                    <option value={"wis"}>Wisdom</option>
                    <option value={"cha"}>Charisma</option>
                  </select>
                </label>
              </Item>

              <Item>
                <AddSkillModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                <h3>Proficient Skills</h3>
                <Proficient>
                  {character.skills.Athletics !== "" ? (
                    <Skill>Athletics</Skill>
                  ) : null}
                  {character.skills.Acrobatics !== "" ? (
                    <Skill>Acrobatics</Skill>
                  ) : null}
                  {character.skills.SleightOfHand !== "" ? (
                    <Skill>SleightOfHand</Skill>
                  ) : null}
                  {character.skills.Stealth !== "" ? (
                    <Skill>Stealth</Skill>
                  ) : null}
                  {character.skills.Arcana !== "" ? (
                    <Skill>Arcana</Skill>
                  ) : null}
                  {character.skills.History !== "" ? (
                    <Skill>History</Skill>
                  ) : null}
                  {character.skills.Investigation !== "" ? (
                    <Skill>Investigation</Skill>
                  ) : null}
                  {character.skills.Nature !== "" ? (
                    <Skill>Nature</Skill>
                  ) : null}
                  {character.skills.Religion !== "" ? (
                    <Skill>Religion</Skill>
                  ) : null}
                  {character.skills.AnimalHandling !== "" ? (
                    <Skill>Animal Handling</Skill>
                  ) : null}
                  {character.skills.Insight !== "" ? (
                    <Skill>Insight</Skill>
                  ) : null}
                  {character.skills.Medicine !== "" ? (
                    <Skill>Medicine</Skill>
                  ) : null}
                  {character.skills.Perception !== "" ? (
                    <Skill>Perception</Skill>
                  ) : null}
                  {character.skills.Survival !== "" ? (
                    <Skill>Survival</Skill>
                  ) : null}
                  {character.skills.Deception !== "" ? (
                    <Skill>Deception</Skill>
                  ) : null}
                  {character.skills.Intimidation !== "" ? (
                    <Skill>Intimidation</Skill>
                  ) : null}
                  {character.skills.Performance !== "" ? (
                    <Skill>Performance</Skill>
                  ) : null}
                  {character.skills.Persuasion !== "" ? (
                    <Skill>Persuasion</Skill>
                  ) : null}
                </Proficient>
              </Item>
            </CardDiv>

            <CardDiv>
              <AddEquipmentModal
                addEquipment={addEquipment}
                addFeature={addFeature}
                character={character}
              />
              <h3>Equipment</h3>
              {character.equipment.map((equip) => (
                <h4 key={equip.equipment_id + equip.equipment_name}>
                  {equip.equipment_name}
                </h4>
              ))}
              <Item>
                <label>
                  Armour Class (AC):
                  <input
                    type="number"
                    id="ac"
                    name="ac"
                    value={character.ac}
                    onChange={onCharacterChange}
                    size="3"
                  />
                </label>
                <label>
                  AC = 10 + armour + {getModifier(character.stats.dex)}{" "}
                </label>
              </Item>
              <Item>
                <label>
                  Initiative:
                  <input
                    type="number"
                    id="initiative"
                    name="initiative"
                    value={character.initiative}
                    onChange={onCharacterChange}
                    size="3"
                  />
                </label>
                <label>
                  &emsp;DEX mod = {getModifier(character.stats.dex)}
                </label>
              </Item>
            </CardDiv>

            <CardDiv>
              <AddItemModal addItem={addItem} character={character} />
              <h3>Inventory</h3>
              {character.inventory.map((item, index) => (
                <h4 key={index}>{item.item_name}</h4>
              ))}
            </CardDiv>

            <CardDiv>
              <label>
                Magic (if applicable):
                <select
                  type="select"
                  id="ability"
                  name="magic.ability"
                  value={character.magic.ability}
                  onChange={(e) => setMagicUse(e)}
                >
                  <option value={""}>NA</option>
                  <option value={"int"}>Intelligence</option>
                  <option value={"wis"}>Wisdom</option>
                  <option value={"cha"}>Charisma</option>
                </select>
              </label>
              {character.magic.magic_user === true && (
                <>
                  <br />
                  <label>
                    &emsp;{character.magic.ability} mod ={" "}
                    {getSpellModifier(character.magic.ability)}{" || "}
                    Proficiency Bonus: +{character.proficiency_bonus}
                  </label>
                  <br />
                  <label>Spell save DC:</label>
                  <input
                    type="number"
                    id="save_dc"
                    name="magic.save_dc"
                    value={character.magic.save_dc}
                    onChange={onCharacterChange}
                    size="3"
                    required
                  />
                  <br />
                  <label>Spell attack modifier:</label>
                  <input
                    type="number"
                    id="spell_attack_mod"
                    name="magic.spell_attack_mod"
                    value={character.magic.spell_attack_mod}
                    onChange={onCharacterChange}
                    size="3"
                    required
                  />
                  <br />
                  <label>Cantrips known:</label>
                  <input
                    type="number"
                    id="cantrips_known"
                    name="magic.cantrips_known"
                    value={character.magic.cantrips_known}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  <br />
                  <label>Spells known/preparable:</label>
                  <input
                    type="number"
                    id="spells_known"
                    name="magic.spells_known"
                    value={character.magic.spells_known}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  <br />
                  <label>Spell slots:</label>
                  <br />
                  &emsp;<label>1st:</label>
                  <input
                    type="number"
                    id="first"
                    name="spellslots.first"
                    value={character.spellslots.first}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>2nd:</label>
                  <input
                    type="number"
                    id="second"
                    name="spellslots.second"
                    value={character.spellslots.second}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>3rd:</label>
                  <input
                    type="number"
                    id="third"
                    name="spellslots.third"
                    value={character.spellslots.third}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  <br />
                  &emsp;<label>4th:</label>
                  <input
                    type="number"
                    id="fourth"
                    name="spellslots.fourth"
                    value={character.spellslots.fourth}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>5th:</label>
                  <input
                    type="number"
                    id="fifth"
                    name="spellslots.fifth"
                    value={character.spellslots.fifth}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>6th:</label>
                  <input
                    type="number"
                    id="sixth"
                    name="spellslots.sixth"
                    value={character.spellslots.sixth}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  <br />
                  &emsp;<label>7th:</label>
                  <input
                    type="number"
                    id="seventh"
                    name="spellslots.seventh"
                    value={character.spellslots.seventh}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>8th:</label>
                  <input
                    type="number"
                    id="eighth"
                    name="spellslots.eighth"
                    value={character.spellslots.eighth}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                  &emsp;<label>9th:</label>
                  <input
                    type="number"
                    id="ninth"
                    name="spellslots.ninth"
                    value={character.spellslots.ninth}
                    onChange={onCharacterChange}
                    size="2"
                    required
                  />
                </>
              )}
            </CardDiv>

            <CardDiv>
              <AddFeatureModal addFeature={addFeature} />
              <h3>Features & abilities</h3>
              {character.features.map((feature) => (
                <h4 key={feature.feature_id + feature.feature_name}>
                  {feature.feature_name}
                </h4>
              ))}
            </CardDiv>

            <CardDiv>
              <AddAttackModal addAttack={addAttack} character={character} />
              <h3>Attacks</h3>
              {character.attacks.map((attack, index) => (
                <h4 key={index}>{attack.attack_name}</h4>
              ))}
            </CardDiv>

            <CardDiv>
              <label>Passives:</label>
              <Item>
                <label>
                  Senses:
                  <input
                    type="text"
                    id="senses"
                    placeholder="Darkvision?"
                    name="passives.senses"
                    value={character.passives.senses}
                    onChange={onCharacterChange}
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Passive Perception (PP):
                  <input
                    type="number"
                    id="PP"
                    name="passives.perception"
                    value={character.passives.perception}
                    onChange={onCharacterChange}
                    size="3"
                  />
                </label>
                <label>
                  = 10 {getModifier(character.stats.wis)}(WIS)
                  {character.skills.Perception === "Proficient" ? (
                    <label>+ {character.proficiency_bonus}(Perception)</label>
                  ) : null}
                  {character.skills.Perception === "Expert" ? (
                    <label>
                      + {character.proficiency_bonus * 2}(Perception)
                    </label>
                  ) : null}
                </label>
              </Item>
              <Item>
                <label>
                  Passive Investigation(PInv):
                  <input
                    type="number"
                    id="PI"
                    name="passives.investigation"
                    value={character.passives.investigation}
                    onChange={onCharacterChange}
                    size="3"
                  />
                </label>
                <label>
                  = 10 {getModifier(character.stats.int)}(INT)
                  {character.skills.Investigation === "Proficient" ? (
                    <label>
                      + {character.proficiency_bonus}(Investigation)
                    </label>
                  ) : null}
                  {character.skills.Investigation === "Expert" ? (
                    <label>
                      + {character.proficiency_bonus * 2}(Investigation)
                    </label>
                  ) : null}
                </label>
              </Item>
              <Item>
                <label>
                  Passive Insight(PIns):
                  <input
                    type="number"
                    id="senses"
                    name="passives.insight"
                    value={character.passives.insight}
                    onChange={onCharacterChange}
                    size="3"
                  />
                </label>
                <label>
                  = 10 + {getModifier(character.stats.wis)}(WIS)
                  {character.skills.Insight === "Proficient" ? (
                    <label>+ {character.proficiency_bonus}(Insight)</label>
                  ) : null}
                  {character.skills.Insight === "Expert" ? (
                    <label>+ {character.proficiency_bonus * 2} (Insight)</label>
                  ) : null}
                </label>
              </Item>
            </CardDiv>
          </CardContainer>
        </FormControl>
      </Box>
      <BotButtons>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
      </BotButtons>
    </div>
  );
};

export default ChooseClassGrid;
