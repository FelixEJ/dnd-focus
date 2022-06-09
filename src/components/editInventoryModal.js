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

import ConfirmDeleteItemModal from "./confirmDeleteItemModal";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

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

const EditInventoryModal = ({
  character,
  updateInventory,
  index,
  name,
  item,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [invItem, setInvItem] = useState({ item });

  useEffect(() => {
    setInvItem(...character.inventory.filter((inv) => inv.item_name === name));
  }, [character]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInvItem((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editInventory = () => {
    let inventory = [...character.inventory];
    inventory[index] = invItem;
    updateInventory(inventory);
    handleClose();
  };

  function getTotalValue() {
    return invItem.quantity * invItem.value_each;
  }

  return (
    <EditModalWindow
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Item>
        <h2>Edit Item</h2>
        <label>Item Name</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={invItem.item_name}
          onChange={handleChange}
          required
        />
      </Item>
      <Item>
        <label>Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={invItem.quantity}
          onChange={handleChange}
          size="3"
        />
      </Item>
      <Item>
        <label>Value (each)</label>
        <input
          type="number"
          id="value_each"
          name="value_each"
          value={invItem.value_each}
          onChange={handleChange}
          size="4"
        />
        <select
          id="value_currency"
          name="value_currency"
          value={invItem.value_currency}
          onChange={handleChange}
        >
          <option value={"cp"}>Copper</option>
          <option value={"sp"}>Silver</option>
          <option value={"ep"}>Electrum</option>
          <option value={"gp"}>Gold</option>
          <option value={"pp"}>Platinum</option>
        </select>
      </Item>
      <Item>
        <label>Total Value</label>
        <p>{getTotalValue() + invItem.value_currency}</p>
      </Item>
      <Item>
        <Button
          variant="contained"
          onClick={() => {
            editInventory();
          }}
          startIcon={<SaveIcon />}
          color="primary"
        >
          Save change
        </Button>
        <ConfirmDeleteItemModal
          character={character}
          updateInventory={updateInventory}
          index={index}
          closePrev={handleClose}
        />
      </Item>
    </EditModalWindow>
  );
};

export default EditInventoryModal;
