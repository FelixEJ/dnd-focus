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

const BotButtons = stylish.div`
  margin-bottom: 40px;
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

const ChooseClass = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
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

  return (
    <div>
      <h1>Choose Class:</h1>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
      <Box>
        <FormControl margin="normal">
          <label>
            {character.name}, lvl:{character.level}
          </label>
          <Section>
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
          </Section>

          <Section>
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
          </Section>

          <Section>
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
              value={character.level}
              onChange={onCharacterChange}
              size="3"
              display="none"
            />
            <label>Hit Dice current:&emsp;</label>
            <input
              type="number"
              id="hit_dice.current"
              name="hit_dice.current"
              value={character.level}
              onChange={onCharacterChange}
              size="3"
              display="none"
            />
          </Section>

          <Section>
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
              value={character.hp.max}
              onChange={onCharacterChange}
              size="3"
              display="none"
            />
            <label>
              &emsp;Con mod = {getModifier(character.stats.con)}
            </label>
          </Section>

          <Section style={{ backgroundColor: "beige" }}>
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
                  cols="40"
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
                  cols="40"
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
                  cols="40"
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
                  cols="40"
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
            </Item>
          </Section>

          <Section>
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
              <label>&emsp;DEX mod = {getModifier(character.stats.dex)}</label>
            </Item>
          </Section>

          <Section>
            <AddItemModal addItem={addItem} character={character} />
            <h3>Inventory</h3>
            {character.inventory.map((item, index) => (
              <h4 key={index}>{item.item_name}</h4>
            ))}
          </Section>

          <Section>
            <label>
              Magic (if applicable):
              <select
                id="ability"
                name="magic.ability"
                value={character.magic.ability}
                onChange={onCharacterChange}
              >
                <option value={""}>NA</option>
                <option value={"int"}>Intelligence</option>
                <option value={"wis"}>Wisdom</option>
                <option value={"cha"}>Charisma</option>
              </select>
            </label>
          </Section>

          <Section>
            <AddFeatureModal addFeature={addFeature} />
            <h3>Features & abilities</h3>
            {character.features.map((feature) => (
              <h4 key={feature.feature_id + feature.feature_name}>
                {feature.feature_name}
              </h4>
            ))}
          </Section>

          <Section>
            <AddAttackModal addAttack={addAttack} character={character} />
            <h3>Attacks</h3>
            {character.attacks.map((attack, index) => (
              <h4 key={index}>{attack.attack_name}</h4>
            ))}
          </Section>

          <Section>
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
                = 10 + {getModifier(character.stats.wis)}(WIS) +{" "}
                {character.proficiency_bonus}(if proficient in Perception)
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
                = 10 + {getModifier(character.stats.int)}(INT) +{" "}
                {character.proficiency_bonus}(if proficient in Investigation)
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
                = 10 + {getModifier(character.stats.wis)}(WIS) +{" "}
                {character.proficiency_bonus}(if proficient in Insight)
              </label>
            </Item>
          </Section>
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

export default ChooseClass;
