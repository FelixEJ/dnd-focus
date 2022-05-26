import React, { useState, useEffect } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
// import { ButtonGroup } from "@material-ui/core";

import ConfirmDeleteEquipmentModal from "./confirmDeleteEquipmentModal";

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
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: -16px;
  margin-right: 4px;
  cursor: pointer;
  `;

const EditEquipmentModal = ({ character, updateEquipment, index, name, equip }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [equipment, setEquipment] = useState({equip});

  useEffect(() => {
    setEquipment(...character.equipment.filter(equip => equip.equipment_name === name));
  }, [character]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEquipment((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editEquipment = () => {
    let equipments = [...character.equipment];
    equipments[index] = equipment;
    updateEquipment(equipments);
    handleClose();
  };

  return (    
    <div>
      <X onClick={handleOpen}>
        Edit
      </X>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid>
            <Item>
              <h2>Edit Equipment</h2>
              <label>Equipment name:</label>
              <input
                type="text"
                id="equipment_name"
                name="equipment_name"
                value={equipment.equipment_name}
                onChange={handleChange}
                required
              />
            </Item>
            <Item>
              <label>Equipment description:</label>
              <input
                type="text"
                id="desc"
                name="desc"
                value={equipment.desc}
                onChange={handleChange}
                cols="30"
                rows="1"
              />
            </Item>
            <Item>
              <label>
                Value:
                <input
                  type="number"
                  id="value"
                  name="value"
                  size="4"
                  value={equipment.value}
                  onChange={handleChange}
                />
                <select
                  id="value_currency"
                  name="value_currency"
                  value={equipment.value_currency}
                  onChange={handleChange}
                >
                  <option value={"cp"}>Copper</option>
                  <option value={"sp"}>Silver</option>
                  <option value={"ep"}>Electrum</option>
                  <option value={"gp"}>Gold</option>
                  <option value={"pp"}>Platinum</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Equipment type:
                <select
                  id="equipment_type"
                  name="equipment_type"
                  value={equipment.equipment_type}
                  onChange={handleChange}
                >
                  <option value={"armour"}>Armour</option>
                  <option value={"weapon"}>Weapon</option>
                  <option value={"tool"}>Tool</option>
                  <option value={"gear"}>Gear</option>
                  <option value={"misc"}>Misc Equipment</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Attuned:
                <select
                  id="attuned"
                  name="attuned"
                  value={equipment.attuned}
                  onChange={handleChange}
                >
                  <option value={"false"}>False</option>
                  <option value={"true"}>True</option>
                </select>
              </label>
            </Item>            
          </Grid>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                editEquipment();
              }}
              startIcon={<SaveIcon />}
              color="primary"
            >
              Save change
            </Button>
            <ConfirmDeleteEquipmentModal
              character={character}
              updateEquipment={updateEquipment}
              index={index}
              closePrev={handleClose}
            />
          </Item>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditEquipmentModal;
