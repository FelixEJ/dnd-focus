import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import stylish from "styled-components";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import { BotButton, TopRightButton } from "./StyledPageComponents/pageStyling";

const Container = stylish.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Skill = stylish.div`
  & {
    width: 98%;
    background-color: lightblue;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    font-weight: bold;
  }
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddSkillModal = ({ character, onCharacterChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TopRightButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </TopRightButton>
    <AddModalWindow
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Item>
        <h2>Add/Edit Skills</h2>
        <Container>
          <Skill>
            <label>Althletics(STR)</label>
            <select
              id="Athletics"
              name="skills.Athletics"
              value={character.skills.Athletics}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Athletics_bonus"
              name="skills.Athletics_bonus"
              value={character.skills.Athletics_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Acrobatics(DEX)</label>
            <select
              id="Acrobatics"
              name="skills.Acrobatics"
              value={character.skills.Acrobatics}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Acrobatics_bonus"
              name="skills.Acrobatics_bonus"
              value={character.skills.Acrobatics_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Sleight Of Hand(DEX)</label>
            <select
              id="SleightOfHand"
              name="skills.SleightOfHand"
              value={character.skills.SleightOfHand}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="SleightOfHand_bonus"
              name="skills.SleightOfHand_bonus"
              value={character.skills.SleightOfHand_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Stealth(DEX)</label>
            <select
              id="Stealth"
              name="skills.Stealth"
              value={character.skills.Stealth}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Stealth_bonus"
              name="skills.Stealth_bonus"
              value={character.skills.Stealth_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Arcana(INT)</label>
            <select
              id="Arcana"
              name="skills.Arcana"
              value={character.skills.Arcana}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Arcana_bonus"
              name="skills.Arcana_bonus"
              value={character.skills.Arcana_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>History(INT)</label>
            <select
              id="History"
              name="skills.History"
              value={character.skills.History}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="History_bonus"
              name="skills.History_bonus"
              value={character.skills.History_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Investigation(INT)</label>
            <select
              id="Investigation"
              name="skills.Investigation"
              value={character.skills.Investigation}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Investigation_bonus"
              name="skills.Investigation_bonus"
              value={character.skills.Investigation_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Nature(INT)</label>
            <select
              id="Nature"
              name="skills.Nature"
              value={character.skills.Nature}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Nature_bonus"
              name="skills.Nature_bonus"
              value={character.skills.Nature_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Religion(INT)</label>
            <select
              id="Religion"
              name="skills.Religion"
              value={character.skills.Religion}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Religion_bonus"
              name="skills.Religion_bonus"
              value={character.skills.Religion_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Animal Handling(WIS)</label>
            <select
              id="AnimalHandling"
              name="skills.AnimalHandling"
              value={character.skills.AnimalHandling}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="AnimalHandling_bonus"
              name="skills.AnimalHandling_bonus"
              value={character.skills.AnimalHandling_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Insight(WIS)</label>
            <select
              id="Insight"
              name="skills.Insight"
              value={character.skills.Insight}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Insight_bonus"
              name="skills.Insight_bonus"
              value={character.skills.Insight_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Medicine(WIS)</label>
            <select
              id="Medicine"
              name="skills.Medicine"
              value={character.skills.Medicine}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Medicine_bonus"
              name="skills.Medicine_bonus"
              value={character.skills.Medicine_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Perception(WIS)</label>
            <select
              id="Perception"
              name="skills.Perception"
              value={character.skills.Perception}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Perception_bonus"
              name="skills.Perception_bonus"
              value={character.skills.Perception_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Survival(WIS)</label>
            <select
              id="Survival"
              name="skills.Survival"
              value={character.skills.Survival}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Survival_bonus"
              name="skills.Survival_bonus"
              value={character.skills.Survival_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Deception(CHA)</label>
            <select
              id="Deception"
              name="skills.Deception"
              value={character.skills.Deception}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Deception_bonus"
              name="skills.Deception_bonus"
              value={character.skills.Deception_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Intimidation(CHA)</label>
            <select
              id="Intimidation"
              name="skills.Intimidation"
              value={character.skills.Intimidation}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Intimidation_bonus"
              name="skills.Intimidation_bonus"
              value={character.skills.Intimidation_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Performance(CHA)</label>
            <select
              id="Performance"
              name="skills.Performance"
              value={character.skills.Performance}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Performance_bonus"
              name="skills.Performance_bonus"
              value={character.skills.Performance_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
          <Skill>
            <label>Persuasion(CHA)</label>
            <select
              id="Persuasion"
              name="skills.Persuasion"
              value={character.skills.Persuasion}
              onChange={onCharacterChange}
            >
              <option value="">-</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
            +
            <input
              type="number"
              id="Persuasion_bonus"
              name="skills.Persuasion_bonus"
              value={character.skills.Persuasion_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
            />
          </Skill>
        </Container>
      </Item>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </AddModalWindow>
    </>
  );
};

export default AddSkillModal;
