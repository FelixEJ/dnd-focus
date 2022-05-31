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

const EditProficienciesModal = ({ character, onCharacterChange }) => {
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
                  Weapons:
                  <textarea
                    type="text"
                    id="weapons"
                    placeholder="Simple and...?"
                    name="proficiencies.weapons"
                    value={character.proficiencies.weapons}
                    onChange={onCharacterChange}
                    cols="30"
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
                    cols="30"
                    rows="2"
                  />
                </label>
              </Item>
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
                    cols="30"
                    rows="2"
                  />
                </label>
              </Item>
              <Item>
                <label>
                  Other:<br/>
                  <textarea
                    type="text"
                    id="other"
                    placeholder="Instruments, games, vehicles...?"
                    name="proficiencies.other"
                    value={character.proficiencies.other}
                    onChange={onCharacterChange}
                    cols="30"
                    rows="2"
                  />
                </label>
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

export default EditProficienciesModal;
