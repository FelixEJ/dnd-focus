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

const ChooseBackground = ({
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

  console.log("character:", character);

  return (
    <div>
      <h1>Choose Background:</h1>
      <Box sx={{ flexGrow: 2 }}>
      <div>
          <ButtonGroup variant="contained">
            <Button onClick={Previous}>Back</Button>
            <Button onClick={Continue}>Next</Button>
          </ButtonGroup>
        </div>
        <FormControl margin="normal">
          <Item>
            <label>
              Title:
              <input
                type="text"
                id="title"
                placeholder="Noble, Orphan..."
                name="background.title"
                value={character.background.title}
                onChange={onCharacterChange}
                required
              />
            </label>
          </Item>
          <Item>
            <label>
              Proficient skills:
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
            <h3>Money</h3>
            <Item>
              <label>Copper:</label>
              <input
                type="number"
                id="copper"
                name="currency.copper"
                value={character.currency.copper}
                onChange={onCharacterChange}
                size="3"
              />
            </Item>
            <Item>
              <label>Silver:</label>
              <input
                type="number"
                id="silver"
                name="currency.silver"
                value={character.currency.silver}
                onChange={onCharacterChange}
                size="3"
              />
            </Item>
            <Item>
              <label>Electrum:</label>
              <input
                type="number"
                id="electrum"
                name="currency.electrum"
                value={character.currency.electrum}
                onChange={onCharacterChange}
                size="3"
              />
            </Item>
            <Item>
              <label>Gold:</label>
              <input
                type="number"
                id="gold"
                name="currency.gold"
                value={character.currency.gold}
                onChange={onCharacterChange}
                size="3"
              />
            </Item>
            <Item>
              <label>Platinum:</label>
              <input
                type="number"
                id="platinum"
                name="currency.platinum"
                value={character.currency.platinum}
                onChange={onCharacterChange}
                size="3"
              />
            </Item>
          </Item>

          <Item>
            <AddFeatureModal
              addFeature={addFeature}
              featureLength={character.features.length}
            />
            <h3>Features & abilities</h3>
            {character.features.map((feature) => (
              <h4 key={feature.feature_id + feature.feature_name}>
                {feature.feature_name}
              </h4>
            ))}
          </Item>

          <Item>
            <h3>Characteristics</h3>
            <Item>
              <label>
                Personality:
                <textarea
                  type="text"
                  id="trait1"
                  placeholder="The first thing I ...?"
                  name="personality.trait1"
                  value={character.personality.trait1}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
                <textarea
                  type="text"
                  id="trait2"
                  placeholder="I always ...?"
                  name="personality.trait2"
                  value={character.personality.trait1}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Ideal:
                <textarea
                  type="text"
                  id="ideal"
                  placeholder="Honour, freedom, charity...?"
                  name="personality.ideal"
                  value={character.personality.ideal}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Bond:
                <textarea
                  type="text"
                  id="bond"
                  placeholder="Debt, family, home..."
                  name="personality.bond"
                  value={character.personality.bond}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
            <Item>
              <label>
                Flaw:
                <textarea
                  type="text"
                  id="flaw"
                  placeholder="Greed, pleasure, fame..."
                  name="personality.flaw"
                  value={character.personality.flaw}
                  onChange={onCharacterChange}
                  cols="40"
                  rows="2"
                />
              </label>
            </Item>
          </Item>
        </FormControl>
        <div>
          <ButtonGroup variant="contained">
            <Button onClick={Previous}>Back</Button>
            <Button onClick={Continue}>Next</Button>
          </ButtonGroup>
        </div>
      </Box>
    </div>
  );
};

export default ChooseBackground;
