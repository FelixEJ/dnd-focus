import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import AddEquipmentModal from "./addEquipmentModal";
import EditEquipmentModal from "./editEquipmentModal";

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
  max-width: 85%
`;

const Container = styled.div`
  width: 95vw;
  max-width: 400px;
  padding: 2%;
`;

const EquipmentAccordion = ({
  character,
  addEquipment,
  addFeature,
  updateEquipment,
}) => {
  const getEquipmentValue = () => {
    let total = 0;
    character.equipment.forEach(myFunc);

    function myFunc(item) {
      total += Number(item.value);
    }
    return total;
  };

  return (
    <Container>
      <Accordion>
        <div>
          <Card>
            <Card.Header>
              <Header>
                <b>Equipment:</b>
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
                  {character.equipment.map((item, index) => (
                    <ItemRow>
                      <Item key={index}>
                        <b>{item.equipment_name}</b> {item.desc}
                      </Item>
                      <EditEquipmentModal
                        character={character}
                        updateEquipment={updateEquipment}
                        index={index}
                        name={item.equipment_name}
                        equip={{ item }}
                      />
                    </ItemRow>
                  ))}
                </>
                <AddEquipmentModal
                  character={character}
                  addEquipment={addEquipment}
                  addFeature={addFeature}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </Container>
  );
};

export default EquipmentAccordion;
