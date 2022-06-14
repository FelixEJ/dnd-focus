import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import AddItemModal from "./addItemModal";
import EditInventoryModal from "./editInventoryModal";

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

const Header = styled.div`
  float: left;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const ItemRow = styled.div`
  width: 90%
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  clear: both;
`;

const Item = styled.div`
  float: left;
  font-size: 0.9em;
  margin: 5px 5px;
  max-width: 85%;
`;

const Container = styled.div`
  width: 95vw;
  max-width: 400px;
  padding: 2%;
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
    <Container>
      <Accordion>
        <div>
          <Card>
            <Card.Header>
              <Header>
                <b>Inventory:</b>
                {/* total value = {getInventoryValue()} gp */}
              </Header>
              <ButtonRight>
                <CustomToggle eventKey={0}>EXPAND</CustomToggle>
              </ButtonRight>
            </Card.Header>
            <Accordion.Collapse eventKey={0}>
              <Card.Body
                style={{ backgroundColor: "lightgrey" }}
                class="overflow-auto"
              >
                <>
                  {character.inventory.map((item, index) => (
                    <ItemRow>
                      <Item key={index}>
                        {item.group_loot !== "" && (
                          <b>(G)</b>
                        )}
                        <b>{item.item_name}</b> x{item.quantity}, value=
                        {item.quantity * item.value_each}
                        {item.value_currency} ({item.value_each}
                        {item.value_currency}/ea)
                      </Item>
                      <EditInventoryModal
                        character={character}
                        updateInventory={updateInventory}
                        index={index}
                        name={item.item_name}
                        item={{ item }}
                      />
                    </ItemRow>
                  ))}
                </>
                <AddItemModal character={character} addItem={addItem} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </Container>
  );
};

export default InventoryAccordion;
