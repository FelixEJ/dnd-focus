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

import EditModalWindow from "./StyledPageComponents/editModalWindow";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditEquipmentModal = ({
  character,
  updateEquipment,
  index,
  name,
  equip,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [equipment, setEquipment] = useState({ equip });

  useEffect(() => {
    setEquipment(
      ...character.equipment.filter((equip) => equip.equipment_name === name)
    );
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

  const X = stylish.div`
    text-transform: uppercase;
    text-decoration: underline;
    float:right;
    font-size: .7em;
    padding-right: 5px;
  `;

  return (
    <>
      <X onClick={handleOpen}>Edit</X>
      <EditModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
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
          <textarea
            type="text"
            id="desc"
            name="desc"
            value={equipment.desc}
            onChange={handleChange}
            cols="35"
            rows="5"
          />
        </Item>
        <Item>
          <label>
            Value:
            <input
              type="number"
              id="value"
              name="value"
              style={{ width: "20%" }}
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
              <option value={""}>-</option>
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
            Rarity:
            <select
              id="rarity"
              name="rarity"
              value={equipment.rarity}
              onChange={handleChange}
            >
              <option value={"common"}>Common</option>
              <option value={"uncommon"}>Uncommon</option>
              <option value={"rare"}>Rare</option>
              <option value={"veryrare"}>Very Rare</option>
              <option value={"legendary"}>Legendary</option>
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
      </EditModalWindow>
    </>
  );
};

export default EditEquipmentModal;
