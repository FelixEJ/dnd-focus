import React, { useState } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import {
  Window,
  Page,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
  TopRightButton,
} from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddFeatureModal = ({ addFeature }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [feature, setFeature] = useState({
    feature_id: 0,
    level_acquired: 0,
    feature_name: "",
    source: "",
    description: "",
    max_uses: 0,
    current_uses: 0,
    recharge: "",
    action_type: "",
    damage_dice: "",
    damage_dice_amount: "",
    damage_type: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFeature((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  //sometimes duplicate feature id?
  function clearFeature() {
    setFeature({
      feature_id: 0,
      feature_name: "",
      description: "",
      max_uses: 0,
      current_uses: 0,
      recharge: "",
      action_type: "",
      damage_dice: "",
      damage_dice_amount: "",
      damage_type: "",
    });
  }

  return (
    <>
      <TopRightButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </TopRightButton>
      <AddModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Add Feature</h2>
          <Label>Level Acquired:</Label>
          <input
            type="number"
            id="level_acquired"
            name="level_acquired"
            value={feature.level_acquired}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
        </Item>
        <Item>
          <Label>Feature Name:</Label>
          <input
            type="text"
            id="feature_name"
            name="feature_name"
            value={feature.feature_name}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Source:</Label>
          <select
            id="source"
            name="source"
            value={feature.source}
            onChange={handleChange}
          >
            <option value={""}></option>
            <option value={"race"}>Race</option>
            <option value={"background"}>Background</option>
            <option value={"class"}>Class</option>
            <option value={"multiclass"}>Multiclass</option>
            <option value={"feat"}>Feat</option>
            <option value={"equipment"}>Equipment/Item</option>
          </select>
        </Item>
        <Item>
          <Label>Feature Description:</Label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={feature.description}
            onChange={handleChange}
            cols="35"
            rows="5"
          />
        </Item>
        <Item>
          <Label>Action Type:</Label>
          <select
            id="action_type"
            name="action_type"
            value={feature.action_type}
            onChange={handleChange}
          >
            <option value={""}></option>
            <option value={"free"}>Free Action</option>
            <option value={"bonus"}>Bonus Action</option>
            <option value={"action"}>Action</option>
            <option value={"reaction"}>Reaction</option>
          </select>
        </Item>
        <Item>
          <Label>Uses/Charges</Label>
          <input
            type="number"
            id="max_uses"
            name="max_uses"
            value={feature.max_uses}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
        </Item>
        <Item>
          <Label>Recharge:</Label>
          <select
            id="recharge"
            name="recharge"
            value={feature.recharge}
            onChange={handleChange}
          >
            <option value={"passive"}>Passive/Always on</option>
            <option value={"short"}>Short Rest</option>
            <option value={"long"}>Long Rest</option>
            <option value={"daily"}>Daily/Dawn</option>
          </select>
        </Item>
        <Item>
          <Label>Damage:</Label>
          <input
            type="number"
            id="damage_dice_amount"
            name="damage_dice_amount"
            value={feature.damage_dice_amount}
            onChange={handleChange}
            style={{ width: "20%" }}
          />
          <select
            id="damage_dice"
            name="damage_dice"
            value={feature.damage_dice}
            onChange={handleChange}
          >
            <option value={""}></option>
            <option value={"d4"}>d4</option>
            <option value={"d6"}>d6</option>
            <option value={"d8"}>d8</option>
            <option value={"d10"}>d10</option>
            <option value={"d12"}>d12</option>
            <option value={"d20"}>d20</option>
          </select>
          <input
            type="text"
            id="damage_type"
            name="damage_type"
            value={feature.damage_type}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              addFeature(feature);
              clearFeature();
              handleClose();
            }}
          >
            Confirm Feature
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default AddFeatureModal;
