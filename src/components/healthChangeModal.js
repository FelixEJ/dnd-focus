import React, { useState, useEffect } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  getModifier,
  getSave,
  getSkill,
  getPassive,
  getSpellModifier,
} from "./utils";

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

const Container = stylish.div`
  max-height: 90vh;
  overflow: auto;
`;

const ButtonContainer = stylish.div`
  float: right;
  margin-top: -90px;
`;

const DamageHealingModal = ({ character, onCharacterChange, updateHealth }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [health, setHealth] = useState({});

  const [hit, setHit] = useState({
    hit_type: "dam",
    hit_amount: 0,
  });

  useEffect(
    () => {
      setHealth({ ...character.hp });
    },
    [character.hp],
    hit
  );

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setHit((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editHealth = () => {
    // let hp = { ...health };
    let hpTotal = parseInt(health.current) + parseInt(health.temp);
    let hitAmount = parseInt(hit.hit_amount);
    let tempHP = parseInt(health.temp);
    let currHP = parseInt(health.current);
    // console.log("total",hpTotal);
    if (hit.hit_type === "heal") {
      health.current = currHP + hitAmount;
      if (health.temp_max > 0) {
        if (health.current > health.temp_max) {
          health.current = parseInt(health.temp_max);
        }
      } else if (health.current > health.max) {
        health.current = parseInt(health.max);
      }
    } else {
      // console.log("hptotal", hpTotal);
      if (hitAmount < health.temp) {
        health.temp = tempHP - hitAmount;
      } else {
        health.current = hpTotal - hitAmount;
        health.temp = 0;
        // console.log("hptotal", hpTotal);
        // console.log("hit", hitAmount);
        // console.log("temp", health.temp);
      }
    }
    updateHealth(health);
    handleClose();
  };

  function clearHit() {
    setHit({ hit_type: "dam", hit_amount: 0 });
  }

  return (
    <div>
      <ButtonContainer>
        <Button
          variant="contained"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          hit/heal
        </Button>
      </ButtonContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Container>
              HP:{health.current} temp:{health.temp}
              <Item>
                <label>Take: </label>{" "}
                <input
                  type="number"
                  min="0"
                  id="hit_amount"
                  name="hit_amount"
                  value={hit.hit_amount}
                  onChange={handleChange}
                  style={{ width: "20%" }}
                  display="none"
                />{" "}
                <select
                  type="select"
                  id="hit_type"
                  name="hit_type"
                  value={hit.hit_type}
                  onChange={handleChange}
                >
                  <option value={"dam"}>Damage</option>
                  <option value={"heal"}>Healing</option>
                </select>
              </Item>
              <Item>
                <Button
                  variant="contained"
                  onClick={() => {
                    editHealth(hit);
                    clearHit();
                  }}
                >
                  Apply
                </Button>
              </Item>
            </Container>
          </Grid>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DamageHealingModal;
