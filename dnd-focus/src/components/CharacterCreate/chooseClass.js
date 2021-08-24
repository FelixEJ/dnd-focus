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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChooseClass = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  addFeature,
  addEquipment,
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
      <Box sx={{ flexGrow: 2 }}>
        <FormControl margin="normal">
          <Item>
            <label>
              Class:
              <input
                type="text"
                id="class"
                name="class"
                value={character.class}
                onChange={onCharacterChange}
              />
            </label>
          </Item>

          <Item>
            <label>Hit Dice:</label>
            <select
              id="hit_dice"
              name="hit_dice"
              value={character.hit_dice}
              onChange={onCharacterChange}
            >
              <option value={"d6"}>d6</option>
              <option value={"d8"}>d8</option>
              <option value={"d10"}>d10</option>
              <option value={"d12"}>d12</option>
            </select>
          </Item>

          <Item>
            <label>Hit Points</label>
            <input
              type="number"
              id="max"
              name="hp.max"
              value={character.hp.max}
              onChange={onCharacterChange}
              size="3"
              required
            />
          </Item>

          <Item>
            <h3>Proficiencies</h3>
            <Item>
              <label>
                Languages:
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
                Weapons:
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
                Armour:
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
                Other:
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
              <h3>Saving throws</h3>
              <input
                type="checkbox"
                id="save_str"
                name="saves.save_str"
                value={character.saves.save_str}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Strength</label>
              <input
                type="checkbox"
                id="save_dex"
                name="saves.save_dex"
                value={character.saves.save_dex}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Dexterity</label>
              <br></br>
              <input
                type="checkbox"
                id="save_con"
                name="saves.save_con"
                value={character.saves.save_con}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Constitution</label>
              <input
                type="checkbox"
                id="save_int"
                name="saves.save_int"
                value={character.saves.save_int}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Intelligence</label>
              <br></br>
              <input
                type="checkbox"
                id="save_wis"
                name="saves.save_wis"
                value={character.saves.save_wis}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Wisdom</label>
              <input
                type="checkbox"
                id="save_cha"
                name="saves.save_cha"
                value={character.saves.save_cha}
                onChange={onCharacterChange}
              />
              <label htmlFor="save_str">Charisma</label>
              <br></br>
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
          </Item>

          <Item>
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
          </Item>

          <Item>
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
          </Item>

          <Item>
            <AddFeatureModal addFeature={addFeature} />
            <h3>Features & abilities</h3>
            {character.features.map((feature) => (
              <h4 key={feature.feature_id + feature.feature_name}>
                {feature.feature_name}
              </h4>
            ))}
          </Item>
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
