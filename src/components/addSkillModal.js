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
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;

& {
    width: 98%;
    background-color: lightblue;
    display: inline-block;
    margin: 1% 1% 1% 1%;
  }
  &:nth-child(odd) {
    font-weight: bold;
    background-color: lightgreen;
  }
`;

const Label = stylish.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  float: left;
  width: 45%;
`;

const RightStuff = stylish.span`
  float: right;
  width: 54%;
`;

const Select = stylish.select`
  width: 65%;
`;

const Input = stylish.input`
  width: 25%;
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
          variant="contained"
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
              <Label>[STR] Althletics</Label>
              <RightStuff>
                <Select
                  id="Athletics"
                  name="skills.Athletics"
                  value={character.skills.Athletics}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Athletics_bonus"
                  name="skills.Athletics_bonus"
                  value={character.skills.Athletics_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[DEX] Acrobatics</Label>
              <RightStuff>
                <Select
                  id="Acrobatics"
                  name="skills.Acrobatics"
                  value={character.skills.Acrobatics}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Acrobatics_bonus"
                  name="skills.Acrobatics_bonus"
                  value={character.skills.Acrobatics_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[DEX] Sleight Of Hand</Label>
              <RightStuff>
                <Select
                  id="SleightOfHand"
                  name="skills.SleightOfHand"
                  value={character.skills.SleightOfHand}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="SleightOfHand_bonus"
                  name="skills.SleightOfHand_bonus"
                  value={character.skills.SleightOfHand_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[DEX] Stealth</Label>
              <RightStuff>
                <Select
                  id="Stealth"
                  name="skills.Stealth"
                  value={character.skills.Stealth}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Stealth_bonus"
                  name="skills.Stealth_bonus"
                  value={character.skills.Stealth_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[INT] Arcana</Label>
              <RightStuff>
                <Select
                  id="Arcana"
                  name="skills.Arcana"
                  value={character.skills.Arcana}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Arcana_bonus"
                  name="skills.Arcana_bonus"
                  value={character.skills.Arcana_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[INT] History</Label>
              <RightStuff>
                <Select
                  id="History"
                  name="skills.History"
                  value={character.skills.History}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="History_bonus"
                  name="skills.History_bonus"
                  value={character.skills.History_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[INT] Investigation</Label>
              <RightStuff>
                <Select
                  id="Investigation"
                  name="skills.Investigation"
                  value={character.skills.Investigation}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Investigation_bonus"
                  name="skills.Investigation_bonus"
                  value={character.skills.Investigation_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[INT] Nature</Label>
              <RightStuff>
                <Select
                  id="Nature"
                  name="skills.Nature"
                  value={character.skills.Nature}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Nature_bonus"
                  name="skills.Nature_bonus"
                  value={character.skills.Nature_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[INT] Religion</Label>
              <RightStuff>
                <Select
                  id="Religion"
                  name="skills.Religion"
                  value={character.skills.Religion}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Religion_bonus"
                  name="skills.Religion_bonus"
                  value={character.skills.Religion_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[WIS] Animal Handling</Label>
              <RightStuff>
                <Select
                  id="AnimalHandling"
                  name="skills.AnimalHandling"
                  value={character.skills.AnimalHandling}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="AnimalHandling_bonus"
                  name="skills.AnimalHandling_bonus"
                  value={character.skills.AnimalHandling_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[WIS] Insight</Label>
              <RightStuff>
                <Select
                  id="Insight"
                  name="skills.Insight"
                  value={character.skills.Insight}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Insight_bonus"
                  name="skills.Insight_bonus"
                  value={character.skills.Insight_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[WIS] Medicine</Label>
              <RightStuff>
                <Select
                  id="Medicine"
                  name="skills.Medicine"
                  value={character.skills.Medicine}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Medicine_bonus"
                  name="skills.Medicine_bonus"
                  value={character.skills.Medicine_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[WIS] Perception</Label>
              <RightStuff>
                <Select
                  id="Perception"
                  name="skills.Perception"
                  value={character.skills.Perception}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Perception_bonus"
                  name="skills.Perception_bonus"
                  value={character.skills.Perception_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[WIS] Survival</Label>
              <RightStuff>
                <Select
                  id="Survival"
                  name="skills.Survival"
                  value={character.skills.Survival}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Survival_bonus"
                  name="skills.Survival_bonus"
                  value={character.skills.Survival_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[CHA] Deception</Label>
              <RightStuff>
                <Select
                  id="Deception"
                  name="skills.Deception"
                  value={character.skills.Deception}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Deception_bonus"
                  name="skills.Deception_bonus"
                  value={character.skills.Deception_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[CHA] Intimidation</Label>
              <RightStuff>
                <Select
                  id="Intimidation"
                  name="skills.Intimidation"
                  value={character.skills.Intimidation}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Intimidation_bonus"
                  name="skills.Intimidation_bonus"
                  value={character.skills.Intimidation_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[CHA] Performance</Label>
              <RightStuff>
                <Select
                  id="Performance"
                  name="skills.Performance"
                  value={character.skills.Performance}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Performance_bonus"
                  name="skills.Performance_bonus"
                  value={character.skills.Performance_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
            </Skill>
            <Skill>
              <Label>[CHA] Persuasion</Label>
              <RightStuff>
                <Select
                  id="Persuasion"
                  name="skills.Persuasion"
                  value={character.skills.Persuasion}
                  onChange={onCharacterChange}
                >
                  <option value="">-</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </Select>
                +
                <Input
                  type="number"
                  id="Persuasion_bonus"
                  name="skills.Persuasion_bonus"
                  value={character.skills.Persuasion_bonus}
                  onChange={onCharacterChange}
                />
              </RightStuff>
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
