import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddFeatureModal from "./addFeatureModal";

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

const AddEquipmentModal = ({ addEquipment, addFeature, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [equipment, setEquipment] = useState({
    equipment_id: 0,
    equipment_name: "",
    desc: "",
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
      desc: "",
    });
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Equipment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={12} md={6}>
            <h2>Edit Equipment</h2>
            <Item>
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
              <label>Equipment desc:</label>
              <input
                type="text"
                id="desc"
                name="desc"
                value={equipment.desc}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>
                Equipment type:
                <select
                  id="equipment_type"
                  name="equipment.equipment_type"
                  value={equipment.equipment_type}
                  onChange={handleChange}
                >
                  <option value={"armour"}>Armour</option>
                  <option value={"weapon"}>Weapon</option>
                  <option value={"class"}>Class</option>
                  <option value={"equipment"}>Equipment</option>
                </select>
              </label>
            </Item>
            <Item>
              <AddFeatureModal
                addFeature={addFeature}
              />
              <h3>Features & abilities</h3>
              {character.features.map((feature) => (
                <h4 key={feature.feature_id + feature.feature_name}>
                  {feature.feature_name}
                </h4>
              ))}
            </Item>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              addEquipment(equipment);
              clearEquipment();
            }}
          >
            Confirm Equipment
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddEquipmentModal;
