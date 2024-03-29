import React, { useState, useEffect } from "react";
import stylish from "styled-components";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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

const X = stylish.div`
    text-transform: uppercase;
    text-decoration: underline;
    float:right;
    font-size: .7em;
    padding-right: 5px;
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
    <>
      <X onClick={handleOpen}>Edit</X>
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
          <label>Item Description</label>
          <textarea
            type="text"
            id="item_description"
            name="item_description"
            value={invItem.item_description}
            onChange={handleChange}
            cols="35"
            rows="3"
          />
        </Item>
        <Item>
          <label>
            Rarity:
            <select
              id="rarity"
              name="rarity"
              value={invItem.rarity}
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
          <label>Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={invItem.quantity}
            onChange={handleChange}
            style={{ width: "20%" }}
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
            style={{ width: "20%" }}
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
          <label>Group Loot?</label>
          <select
            id="group_loot"
            name="group_loot"
            value={invItem.group_loot}
            onChange={handleChange}
          >
            <option value={""}>No</option>
            <option value={"yes"}>Yes</option>
          </select>
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
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </EditModalWindow>
    </>
  );
};

export default EditInventoryModal;
