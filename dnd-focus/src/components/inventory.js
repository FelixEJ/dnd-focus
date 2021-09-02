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
  return (
    <div>
      <h4>Inventory</h4>
      <Container>
        <Box>
          <InventoryAccordion inventory={character.inventory} />
        </Box>
      </Container>
    </div>
  );
};

export default Inventory;
