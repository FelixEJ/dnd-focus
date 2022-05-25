import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import AddItemModal from "./addItemModal";
import ConfirmDeleteItemModal from "./confirmDeleteItemModal";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const ButtonRight = styled.div`
  float: right;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const TextLeft = styled.div`
  float: left;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const InventoryAccordion = ({ character, addItem, updateInventory }) => {
  // const getInventoryValue = () => {
  //   let total = 0;
  //   character.inventory.forEach(myFunc);

  //   function myFunc(item) {
  //     total += Number(item.value_total);
  //   }
  //   return total;
  // };

  return (
    <div>
      <Accordion>
        <div>
          <Card>
            <Card.Header>
              <TextLeft>
                <b>Inventory:</b> 
                {/* total value = {getInventoryValue()} gp */}
              </TextLeft>
              <ButtonRight>
                <CustomToggle eventKey={0}>EXPAND</CustomToggle>
              </ButtonRight>
            </Card.Header>
            <Accordion.Collapse eventKey={0}>
              <Card.Body
                style={{ backgroundColor: "lightgrey", maxHeight: "20vh" }}
                class="overflow-auto"
              >
                {character.inventory.map((item, index) => (
                  <p key={index}>
                    <b>{item.item_name}</b> x{item.quantity}, value=
                    {item.value_total}
                    {item.value_currency} ({item.value_each}
                    {item.value_currency}/ea)
                    <ConfirmDeleteItemModal 
                      character={character}
                      updateInventory={updateInventory}
                      index={index}
                    />
                  </p>
                ))}
                <AddItemModal 
                  character={character}
                  addItem={addItem}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </div>
  );
};

export default InventoryAccordion;
