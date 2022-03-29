import React, { useState } from "react";
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

const ToggleInspirationModal = ({
  toggleInspiration,
  character,
  setLoadedChar,
  onCharacterChange
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inspo, setInspo] = useState();

  const handleChange = (e) => {
    onCharacterChange(e);

    e.preventDefault();
  };

  // function clearItem() {
  //   setItem({
  //     item_id: 0,
  //     item_name: "",
  //     quantity: 0,
  //     value_each: 0,
  //     value_currency: "cp",
  //     value_total: 0,
  //   });
  // }

  // function getTotalValue() {
  //   return item.quantity * item.value_each;
  // }

  function saveInspo() {
    // item.value_total = getTotalValue();
    // toggleInspiration(inspo);
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Toggle Inspiration
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
              <label>Inspired?</label>

              <select
                id="inspiration"
                name="inspiration"
                value={character.inspiration}
                onChange={toggleInspiration}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </Item>
          </Grid>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                saveInspo();
              }}
            >
              Confirm Inspiration
            </Button>
          </Item>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ToggleInspirationModal;
