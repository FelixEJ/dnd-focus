import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { ButtonGroup } from "@material-ui/core";

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

const RollDiceModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [diceRoll, setDiceRoll] = useState({
    dNum: 1,
    dSize: 20,
    rollType: "best",
    rolls: [],
    result: "",
  });
  const [rollsRecord, setRollsRecord] = useState([
    {
      dNum: 1,
      dSize: 20,
      rollType: "best",
      rolls: [],
      result: "",
    },
  ]);
  const [rollResults, setRollResults] = useState("");
  let result = 0;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setDiceRoll((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function rollDice() {
    let diceRolls = [];
    for (let i = 0; i < diceRoll.dNum; i++) {
      let roll = Math.ceil(Math.random() * diceRoll.dSize);
      diceRolls.push(roll);
    }
    setDiceRoll((prev) => {
      return { ...prev, rolls: [diceRolls] };
    });
    if (diceRoll.rollType === "total") {
      getTotal(diceRolls);
    } else if (diceRoll.rollType === "worst") {
      getWorst(diceRolls);
    } else {
      getBest(diceRolls);
    }
    setRollsRecord((prev) => {
      return [...prev, diceRoll];
    });
  }

  function getTotal(diceRolls) {
    let rollTotal = 0;
    for (var i = 0; i < diceRoll.dNum; i++) {
      rollTotal += diceRolls[i];
    }
    setRollResults((prev) => {
      return [...prev, `${rollTotal}`];
    });
    setDiceRoll((prev) => {
      return { ...prev, result: rollTotal };
    });
  }

  const getBest = (diceRolls) => {
    let best = Math.max(...diceRolls);
    result = best;
    setDiceRoll((prev) => {
      return { ...prev, result: best };
    });
    setRollResults((prev) => {
      return [...prev, best];
    });
  };

  const getWorst = (diceRolls) => {
    let worst = Math.min(...diceRolls);
    result = worst;
    setDiceRoll((prev) => {
      return { ...prev, result: worst };
    });
    setRollResults((prev) => {
      return [...prev, worst];
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Dice
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Item>
              <h2>Dice Simulator</h2>
              <label>Number of dice:</label>
              <input
                type="number"
                id="dNum"
                name="dNum"
                value={diceRoll.dNum}
                onChange={handleChange}
                size="3"
              />
            </Item>
            <Item>
              <label>
                Dice size:
                <select
                  id="dSize"
                  name="dSize"
                  value={diceRoll.dSize}
                  onChange={handleChange}
                >
                  <option value={20}>d20</option>
                  <option value={100}>d100</option>
                  <option value={12}>d12</option>
                  <option value={10}>d10</option>
                  <option value={8}>d8</option>
                  <option value={6}>d6</option>
                  <option value={4}>d4</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Total or best roll?
                <select
                  id="rollType"
                  name="rollType"
                  value={diceRoll.rollType}
                  onChange={handleChange}
                >
                  <option value={"best"}>Highest</option>
                  <option value={"worst"}>Lowest</option>
                  <option value={"total"}>Total</option>
                </select>
              </label>
            </Item>
          </Grid>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                rollDice();
              }}
            >
              Roll Dice
            </Button>
          </Item>          
          <Item>Dice rolls: {diceRoll.rolls.join(".")}
          <br />
          <br />
          Result {diceRoll.result}</Item>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default RollDiceModal;
