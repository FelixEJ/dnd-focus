import React, { useState, useEffect } from "react";
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
  PageContent,
  SectionColumn,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButtons,
} from "./StyledPageComponents/pageStyling";

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
  margin-top: -20px;
`;

const MoneyModal = ({ character, updateMoney }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [money, setMoney] = useState({});

  const [transaction, setTransaction] = useState({
    trans_type: "add",
    trans_amount: 0,
    trans_currency: "",
  });

  useEffect(
    () => {
      setMoney({ ...character.currency });
    },
    [character.currency],
    transaction
  );

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTransaction((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editMoney = () => {

  }

  // const editMoney = () => {
  //   // let hp = { ...health };
  //   let hpTotal = parseInt(money.current) + parseInt(money.temp);
  //   // console.log("total",hpTotal);
  //   if (transaction.trans_type === "heal") {
  //     money.current = parseInt(money.current + transaction.trans_amount);
  //     if (money.temp_max > 0) {
  //       if (money.current > money.temp_max) {
  //         money.current = parseInt(money.temp_max);
  //       }
  //     } else if (money.current > money.max) {
  //       if (money.temp_max > 0) {
  //         money.current = parseInt(money.temp_max);
  //       } else {
  //         money.current = parseInt(money.max);
  //       }
  //     }
  //   } else {
  //     if (transaction.trans_amount < money.temp) {
  //       money.temp = parseInt(money.temp - transaction.trans_amount);
  //     } else {
  //       money.current = parseInt(hpTotal - transaction.trans_amount);
  //       money.temp = 0;
  //     }
  //   }
  //   updateHealth(money);
  //   handleClose();
  // };

  function clearTransaction() {
    setTransaction({ trans_type: "add", trans_amount: 0, trans_currency: "" });
  }

  return (
    <div>
      <ButtonContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          buy/sell
        </Button>
      </ButtonContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalWindow>
            <Grid>
              <Container>
                {/* HP:{money.current} temp:{money.temp} */}
                <Item>
                <select
                    type="select"
                    id="trans_type"
                    name="trans_type"
                    value={transaction.trans_type}
                    onChange={handleChange}
                  >
                    <option value={"add"}>Add</option>
                    <option value={"remove"}>Remove</option>
                  </select>
                  <input
                    type="number"
                    min="0"
                    id="trans_amount"
                    name="trans_amount"
                    value={transaction.trans_amount}
                    onChange={handleChange}
                    size="3"
                    display="none"
                  />{" "}
                  <select
                    type="select"
                    id="trans_currency"
                    name="trans_currency"
                    value={transaction.trans_currency}
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
                  <Button
                    variant="contained"
                    onClick={() => {
                      editMoney(transaction);
                      clearTransaction();
                    }}
                  >
                    Apply
                  </Button>
                </Item>
              </Container>
            </Grid>
          </ModalWindow>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MoneyModal;
