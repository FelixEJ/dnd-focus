import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { ButtonGroup } from "@material-ui/core";
import {
  Window,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../components/StyledPageComponents/pageStyling";

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


// gets stuck on previous loaded char
const RestModal = ({character, updateCharacter}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rest, setRest] = useState({
    type: "short",
    dawn: false,
  });
  // const [tempChar, setTempChar] = useState({...character});
  // const [tempChar, setTempChar] = useState({});
  // console.log("char1", character);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRest((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function takeRest() {
    // setTempChar({...character});
    let tempChar = {...character};
    // console.log("temp", tempChar);
    // console.log("char2", character);

    //short rests
    if (rest.type === "short") {
      tempChar.features.map((feature) => {
        if (feature.recharge === "short") {
          feature.current_uses = feature.max_uses;
        }
      });
      // long rests
    } else if (rest.type === "long") {
      tempChar.features.map((feature) => {
        if (feature.recharge === "short") {
          feature.current_uses = feature.max_uses;
        }
      });
      tempChar.features.map((feature) => {
        if (feature.recharge === "long") {
          // console.log(feature);
          feature.current_uses = feature.max_uses;
        }
      });
      // restore hp
      tempChar.hp.current = tempChar.hp.max;
      tempChar.hp.temp = 0;
      // restore hit dice
      tempChar.hit_dice.current = parseInt(tempChar.hit_dice.current) + Math.floor(tempChar.hit_dice.max / 2);
      if (tempChar.hit_dice.current > tempChar.hit_dice.max) {
        tempChar.hit_dice.current = tempChar.hit_dice.max;
      }
      // restore multiclass1 hit dice
      tempChar.hit_dice.mult1_current = parseInt(tempChar.hit_dice.mult1_current) + Math.floor(tempChar.hit_dice.mult1_max / 2);
      if (tempChar.hit_dice.mult1_current > tempChar.hit_dice.mult1_max) {
        tempChar.hit_dice.mult1_current = tempChar.hit_dice.mult1_max;
      }
      // restore multiclass2 hit dice
      tempChar.hit_dice.mult2_current = parseInt(tempChar.hit_dice.mult2_current) + Math.floor(tempChar.hit_dice.mult2_max / 2);
      if (tempChar.hit_dice.mult2_current > tempChar.hit_dice.mult2_max) {
        tempChar.hit_dice.mult2_current = tempChar.hit_dice.mult2_max;
      }
      // reduce exhaustion
      if(tempChar.exhaustion > 0) {
        tempChar.exhaustion--;
        tempChar.exhaustion = tempChar.exhaustion.toString();
      }
      // reset death saves
      tempChar.death_saves.pass = 0;
      tempChar.death_saves.fail = 0;
      // reset spell slots
      tempChar.spellslots.first_remaining = tempChar.spellslots.first;
      tempChar.spellslots.second_remaining = tempChar.spellslots.second;
      tempChar.spellslots.third_remaining = tempChar.spellslots.third;
      tempChar.spellslots.fourth_remaining = tempChar.spellslots.fourth;
      tempChar.spellslots.fifth_remaining = tempChar.spellslots.fifth;
      tempChar.spellslots.sixth_remaining = tempChar.spellslots.sixth;
      tempChar.spellslots.seventh_remaining = tempChar.spellslots.seventh;
      tempChar.spellslots.eighth_remaining = tempChar.spellslots.eighth;
      tempChar.spellslots.ninth_remaining = tempChar.spellslots.ninth;
      
    }
    if (rest.dawn === "true") {
      tempChar.features.map((feature) => {
        if (feature.recharge === "daily") {
          feature.current_uses = feature.max_uses;
        }
      });
    }
    // console.log("rest", rest);
    updateCharacter(tempChar);
  }

  return (
    <CardItem>
      <Button variant="contained" onClick={handleOpen}>
        Rest
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <h2>Give {character.name} a rest?</h2>
            {/* <h2>Give {tempChar.name} a rest?</h2> */}
            <Item>
              <label>
                Rest type:
                <select
                  id="type"
                  name="type"
                  value={rest.type}
                  onChange={handleChange}
                >
                  <option value={"short"}>Short Rest</option>
                  <option value={"long"}>Long Rest</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Past dawn?
                <select
                  id="dawn"
                  name="dawn"
                  value={rest.dawn}
                  onChange={handleChange}
                >
                  <option value={"false"}>No</option>
                  <option value={"true"}>Yes</option>
                </select>
              </label>
            </Item>
          </Grid>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                takeRest();
                handleClose();
              }}
            >
              Confirm Rest
            </Button>
          </Item>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </CardItem>
  );
};

export default RestModal;
