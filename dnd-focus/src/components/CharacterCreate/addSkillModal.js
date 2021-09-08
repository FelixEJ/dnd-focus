import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import stylish, { css } from "styled-components";

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

const All = stylish.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Proficient = stylish.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
`;
const Expert = stylish.div`
  width: 98%;
  background-color: lightblue;
  display: block;
  column-count: 3;
  column-gap: 1%;
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

const AddSkillModal = ({ addSkill, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [skills, setSkills] = useState([
    { name: "Athletics", ability: "STR", bonus: "" },
    { name: "Acrobatics", ability: "DEX", bonus: "" },
    { name: "Sleight of Hand", ability: "DEX", bonus: "" },
    { name: "Stealth", ability: "DEX", bonus: "" },
    { name: "Arcana", ability: "INT", bonus: "" },
    { name: "History", ability: "INT", bonus: "" },
    { name: "Investigation", ability: "INT", bonus: "" },
    { name: "Nature", ability: "INT", bonus: "" },
    { name: "Religion", ability: "INT", bonus: "" },
    { name: "Animal Handling", ability: "WIS", bonus: "" },
    { name: "Insight", ability: "WIS", bonus: "" },
    { name: "Medicine", ability: "WIS", bonus: "" },
    { name: "Perception", ability: "WIS", bonus: "" },
    { name: "Survival", ability: "WIS", bonus: "" },
    { name: "Deception", ability: "CHA", bonus: "" },
    { name: "Intimidation", ability: "CHA", bonus: "" },
    { name: "Performance", ability: "CHA", bonus: "" },
    { name: "Persuasion", ability: "CHA", bonus: "" },
  ]);

  const handleChange = (e) => {
    let name = e.target.name;
    let bonus = e.target.value;
    setSkills((prev) => ({ ...prev, [name]: bonus }));
    e.preventDefault();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add/Edit Skills
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Item>
              <h2>Add/Edit Skills</h2>
              <Container>
                {character.skills.map((skill, index) => (
                  <Skill key={index}>
                    <label>{skill.name}</label>
                    <select
                      id={skill.name}
                      name={skill.name}
                      value={skill.bonus}
                      onChange={handleChange}
                    >
                      <option value="">-</option>
                      <option value="+1">+1</option>
                      <option value="prof">Proficient</option>
                      <option value="exp">Expert</option>
                    </select>
                  </Skill>
                ))}
              </Container>
            </Item>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default AddSkillModal;
