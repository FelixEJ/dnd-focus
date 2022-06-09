import React, { useState } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

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
      level_acquired: 0,
      feature_name: "",
      source: "",
      description: "",
      max_uses: 0,
      current_uses: 0,
      recharge: "",
    });
  }

  return (
    <AddModalWindow
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Item>
        <h2>Add/Edit Feature</h2>
        <label>Level Acquired:</label>
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
        <label>
          Feature Name:
          <input
            type="text"
            id="feature_name"
            name="feature_name"
            value={feature.feature_name}
            onChange={handleChange}
          />
        </label>
      </Item>
      <Item>
        <label>
          Source:
          <select
            id="source"
            name="source"
            value={feature.source}
            onChange={handleChange}
          >
            <option value={"race"}>Race</option>
            <option value={"background"}>Background</option>
            <option value={"class"}>Class</option>
            <option value={"equipment"}>Equipment/Item</option>
          </select>
        </label>
      </Item>
      <Item>
        <label>
          Feature Description:
          <textarea
            type="text"
            id="description"
            name="description"
            value={feature.description}
            onChange={handleChange}
            cols="35"
            rows="5"
          />
        </label>
      </Item>
      <Item>
        <label>Uses/Charges</label>
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
        <label>
          Recharge:
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
        </label>
      </Item>
      <Item>
        <Button
          variant="contained"
          onClick={() => {
            addFeature(feature);
            clearFeature();
          }}
        >
          Confirm Feature
        </Button>
      </Item>
    </AddModalWindow>
  );
};

export default AddFeatureModal;
