import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import { BotButton } from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddEquipmentModal = ({ addEquipment }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [equipment, setEquipment] = useState({
    equipment_id: 0,
    equipment_name: "",
    equipment_type: "",
    desc: "",
    value: 0,
    value_currency: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEquipment((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function clearEquipment() {
    setEquipment({
      equipment_id: 0,
      equipment_name: "",
      equipment_type: "",
      desc: "",
      value: 0,
      value_currency: "",
    });
  }

  return (
    <>
      <BotButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </BotButton>
      <AddModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Add Equipment</h2>
          <label>Equipment name:</label>
          <input
            type="text"
            id="equipment_name"
            name="equipment_name"
            value={equipment.equipment_name}
            onChange={handleChange}            
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
              value={equipment.value}
              onChange={handleChange}
              style={{ width: "20%" }}
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
        <Item>
          <label>Uses/Charges</label>
          <input
            type="number"
            id="max_uses"
            name="max_uses"
            value={equipment.max_uses}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
        </Item>
        <Item>
          <label>
            Recharge:
            <select
              id="recharge"
              name="recharge"
              value={equipment.recharge}
              onChange={handleChange}
            >
              <option value={"passive"}>Passive/Always on</option>
              <option value={"short"}>Short Rest</option>
              <option value={"long"}>Long Rest</option>
              <option value={"daily"}>Daily/Dawn</option>
            </select>
          </label>
        </Item>
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              addEquipment(equipment);
              clearEquipment();
            }}
          >
            Confirm Equipment
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default AddEquipmentModal;
