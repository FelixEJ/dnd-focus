import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  WindowContent,
  ModalWindow,
  PageContent,
  SectionColumn,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButtons,
} from "./StyledPageComponents/pageStyling";

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

const AddItemModal = ({ addItem, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [item, setItem] = useState({
    item_id: 0,
    item_name: "",
    item_description: "",
    quantity: 0,
    value_each: 0,
    value_currency: "",
    value_total: 0,
    party_loot: false,
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
      quantity: 0,
      value_each: 0,
      value_currency: "",
      value_total: 0,
      party_loot: false,
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
    <PageContent>
      <Button variant="contained" onClick={handleOpen}>
        Add Item
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalWindow>
            <Grid>
              <Item>
                <h2>Add/Edit Item</h2>
                <Label>Item Name</Label>
                <input
                  type="text"
                  id="item_name"
                  name="item_name"
                  value={item.item_name}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Label>Item Description</Label>
                <input
                  type="text"
                  id="item_description"
                  name="item_description"
                  value={item.item_description}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Label>Quantity</Label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={item.quantity}
                  onChange={handleChange}
                  size="3"
                />
              </Item>
              <Item>
                <Label>Value (each)</Label>
                <input
                  type="number"
                  id="value_each"
                  name="value_each"
                  value={item.value_each}
                  onChange={handleChange}
                  size="4"
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
                <Label>Total Value</Label>
                <p>{getTotalValue() + item.value_currency}</p>
              </Item>
              <Item>
                <Label>Party loot?</Label>
                <select
                  type="checkbox"
                  id="party_loot"
                  name="party_loot"
                  value={item.party_loot}
                  onChange={handleChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </Item>
            </Grid>
          </ModalWindow>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                saveItem();
              }}
            >
              Confirm Item
            </Button>
          </Item>

          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </PageContent>
  );
};

export default AddItemModal;
