import React from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Container = stylish.div`
  max-height: 90vh;
  overflow: auto;
`;

const ButtonContainer = stylish.div`
  float: right;
  margin-top: -30px;
`;

const SkillContainer = stylish.div`
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

const EditAbilitiesModal = ({ character, onCharacterChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </ButtonContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Container>              
              <Item>
                <label>
                  Proficiency Bonus:
                  <select
                    id="proficiency_bonus"
                    name="proficiency_bonus"
                    value={character.proficiency_bonus}
                    onChange={onCharacterChange}
                  >
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </label>
              </Item>
              <Item>
                <h3>Ability Scores</h3>
                <Item>
                  <label>Strength:</label>
                  <input
                    type="number"
                    id="str"
                    name="stats.str"
                    value={character.stats.str}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_str"
                    name="stats.temp_str"
                    value={character.stats.temp_str}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
                <Item>
                  <label>Dexterity:</label>
                  <input
                    type="number"
                    id="dex"
                    name="stats.dex"
                    value={character.stats.dex}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_dex"
                    name="stats.temp_dex"
                    value={character.stats.temp_dex}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
                <Item>
                  <label htmlFor="con">Constitution:</label>
                  <input
                    type="number"
                    id="con"
                    name="stats.con"
                    value={character.stats.con}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_con"
                    name="stats.temp_con"
                    value={character.stats.temp_con}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
                <Item>
                  <label htmlFor="int">Intelligence:</label>
                  <input
                    type="number"
                    id="int"
                    name="stats.int"
                    value={character.stats.int}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_int"
                    name="stats.temp_int"
                    value={character.stats.temp_int}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
                <Item>
                  <label htmlFor="wis">Wisdom:</label>
                  <input
                    type="number"
                    id="wis"
                    name="stats.wis"
                    value={character.stats.wis}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_wis"
                    name="stats.temp_wis"
                    value={character.stats.temp_wis}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
                <Item>
                  <label htmlFor="cha">Charisma:</label>
                  <input
                    type="number"
                    id="cha"
                    name="stats.cha"
                    value={character.stats.cha}
                    onChange={onCharacterChange}
                    size="4"
                    required
                  />&emsp;
                  <label>Temp:</label>
                  <input
                    type="number"
                    id="temp_cha"
                    name="stats.temp_cha"
                    value={character.stats.temp_cha}
                    onChange={onCharacterChange}
                    size="4"
                  />
                </Item>
              </Item>
              <Item>
                <h2>Add/Edit Skills</h2>
                <SkillContainer>
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
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
                      size="2"
                    />
                  </Skill>
                </SkillContainer>
              </Item>
            </Container>
          </Grid>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditAbilitiesModal;
