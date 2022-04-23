import React, { useState } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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

const X = stylish.div`
  float: right;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
  margin-top: -16px;
  margin-right: 4px;
  cursor: pointer;
  `;

const ConfirmDeleteEquipmentModal = ({ character, updateEquipment, index }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tempEquipment, setTempEquipment] = useState([...character.equipment]);

  function deleteEquipment() {
    tempEquipment.splice(index, 1);
    setTempEquipment(tempEquipment);
    updateEquipment(tempEquipment);
    handleClose();
  }

  return (
    <div>
      <X onClick={handleOpen}>x</X>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Item>
            <Button
              variant="contained"
              onClick={deleteEquipment}
            >
              Delete {character.equipment[index].equipment_name}?
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

export default ConfirmDeleteEquipmentModal;
