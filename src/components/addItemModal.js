import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import { BotButton, TopRightButton } from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddItemModal = ({ addItem, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [item, setItem] = useState({
    item_id: 0,
    item_name: "",
    item_description: "",
    quantity: 1,
    rarity: "common",
    value_each: 0,
    value_currency: "cp",
    value_total: 0,
    group_loot: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function clearItem() {
    setItem({
      item_id: 0,
      item_name: "",
      item_description: "",
      quantity: 1,
      rarity: "common",
      value_each: 0,
      value_currency: "cp",
      value_total: 0,
      group_loot: "",
    });
  }

  function getTotalValue() {
    return item.quantity * item.value_each;
  }

  function saveItem() {
    item.value_total = getTotalValue();
    addItem(item);
    clearItem();
  }

  return (
    <>
      <BotButton>
        <Button
          variant="contained"
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
          <h2>Add Item</h2>
          <label>Item Name</label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            value={item.item_name}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Item Description</label>
          <input
            type="text"
            id="item_description"
            name="item_description"
            value={item.item_description}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>
            Rarity:
            <select
              id="rarity"
              name="rarity"
              value={item.rarity}
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
            value={item.quantity}
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
            value={item.value_each}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
          <select
            id="value_currency"
            name="value_currency"
            value={item.value_currency}
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
          <p>{getTotalValue() + item.value_currency}</p>
        </Item>
        <Item>
          <label>Group Loot?</label>
          <select
            id="group_loot"
            name="group_loot"
            value={item.group_loot}
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
              saveItem();
              handleClose();
            }}
          >
            Confirm Item
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default AddItemModal;
