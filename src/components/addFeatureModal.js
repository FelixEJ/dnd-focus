import React, { useState } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  WindowContent,
  ModalWindow,
  Container,
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

const ButtonContainer = stylish.div`
  float: right;
  margin-top: -30px;
  margin-right: 5px;
`;

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
    action_type: "",
    max_uses: 0,
    current_uses: 0,
    recharge: "",
    damage_dice: "",
    damage_dice_num: "",
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
      level_acquired: 0,
      feature_name: "",
      source: "",
      description: "",
      action_type: "",
      max_uses: 0,
      current_uses: 0,
      recharge: "",
      damage_dice: "",
      damage_dice_num: "",
      damage_type: "",
    });
  }

  return (
    <>
      <ButtonContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </ButtonContainer>
      <CardColumn>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <PageContent>
            <ModalWindow>
              <Grid>
                <Item>
                  <h2>Add/Edit Feature</h2>
                  <Label>Level Acquired:</Label>
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
                  <Label>Feature Name:</Label>
                  <input
                    type="text"
                    id="feature_name"
                    name="feature_name"
                    value={feature.feature_name}
                    onChange={handleChange}
                    required
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
                    <option value={"multiclass1"}>Multiclass 1</option>
                    <option value={"multiclass2"}>Multiclass 2</option>
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
                    required
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
                    size="3"
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
                    id="damage_dice_num"
                    name="damage_dice_num"
                    value={feature.damage_dice_num}
                    onChange={handleChange}
                    size="3"
                  />
                  <select
                    id="damage_dice"
                    name="damage_dice"
                    value={feature.damage_dice}
                    onChange={handleChange}
                  >
                    <option value={"d4"}>D4</option>
                    <option value={"d6"}>D6</option>
                    <option value={"d8"}>D8</option>
                    <option value={"d10"}>D10</option>
                    <option value={"d12"}>D12</option>
                    <option value={"d20"}>D20</option>
                    <option value={"d100"}>D100</option>
                  </select>
                  {/* <Label>Uses/Charges</Label> */}
                  <input
                    type="text"
                    id="damage_type"
                    name="damage_type"
                    value={feature.damage_type}
                    placeholder="Damage type"
                    onChange={handleChange}
                  />
                </Item>
              </Grid>
            </ModalWindow>
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
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </PageContent>
        </Modal>
      </CardColumn>
    </>
  );
};

export default AddFeatureModal;
