import React from "react";
import {
  Select,
  TextField,
  Button,
  ButtonGroup,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControl,
  Container,
  Input,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddFeatureModal from "./addFeatureModal";
import AddEquipmentModal from "./addEquipmentModal";
import AddItemModal from "./addItemModal";
import AddAttackModal from "./addAttackModal";

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

  return (
    <div>
      <h1>Choose Class:</h1>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
      <Box>
        <FormControl margin="normal">
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
          </Section>

          <Section>
            <label>Hit Points:&emsp;</label>
            <input
              type="number"
              id="max"
              name="hp.max"
              value={character.hp.max}
              onChange={onCharacterChange}
              size="3"
              required
            />
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
                  rows="2"
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
                  rows="2"
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
                  rows="2"
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
                  rows="2"
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
              <label>
                Skills:
                <textarea
                  type="text"
                  id="proficient"
                  placeholder="Athletics, persuasion..."
                  name="skills.proficient"
                  value={character.skills.proficient}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="3"
                />
              </label>
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
            <AddAttackModal addAttack={addAttack} />
            <h3>Attacks</h3>
            {character.attacks.map((attack, index) => (
              <h4 key={index}>
                {attack.attack_name}
              </h4>
            ))}
          </Section>
        </FormControl>
      </Box>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
    </div>
  );
};

export default ChooseClass;
