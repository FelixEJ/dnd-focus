import React from "react";
import styled, { css } from "styled-components";
import Features from "./features";
import InventoryAccordion from "./inventoryAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.p`
  margin: 1% 1% 1% 1%;
`;

const Inventory = ({ character }) => {
  const getTotalMoney = () => {
    let total = 0;
    total += character.currency.copper / 100;
    total += character.currency.silver / 10;
    total += character.currency.electrum / 2;
    total += character.currency.gold;
    total += character.currency.platinum * 10;
    return total;
  };

  return (
    <div>
      <Container>
        <Box>
          <Text>
            <InventoryAccordion inventory={character.inventory} />{" "}
          </Text>
        </Box>
        <Box>
          <Text>
            cp:{character.currency.copper} | sp:{character.currency.silver} |
            ep: {character.currency.electrum} | gp: {character.currency.gold} |
            pp: {character.currency.platinum}
          </Text>
          <Text>Total: {getTotalMoney()} gp</Text>
        </Box>
      </Container>
    </div>
  );
};

export default Inventory;
