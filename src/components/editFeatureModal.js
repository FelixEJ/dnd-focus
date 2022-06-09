import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";

import ConfirmDeleteFeatureModal from "./confirmDeleteFeatureModal";

import EditModalWindow from "./StyledPageComponents/editModalWindow";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const EditFeatureModal = ({ character, updateFeatures, index, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [feature, setFeature] = useState({});

  useEffect(() => {
    setFeature(
      ...character.features.filter((feat) => feat.feature_name === name)
    );
  }, [character.features]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFeature((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editFeature = () => {
    let features = [...character.features];
    features[index] = feature;
    updateFeatures(features);
    handleClose();
  };

  return (
    <EditModalWindow
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Item>
        <h2>Edit Feature</h2>
        <label>Level Acquired:</label>
        <input
          type="number"
          id="level_acquired"
          name="level_acquired"
          value={feature.level_acquired}
          onChange={handleChange}
          size="3"
          required
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
            required
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
            <option value={""}>-</option>
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
            required
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
          size="3"
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
            editFeature();
          }}
          startIcon={<SaveIcon />}
          color="primary"
        >
          Save change
        </Button>
        <ConfirmDeleteFeatureModal
          character={character}
          updateFeatures={updateFeatures}
          index={index}
          closePrev={handleClose}
        />
      </Item>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </EditModalWindow>
  );
};

export default EditFeatureModal;
