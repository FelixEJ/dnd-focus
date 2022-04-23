import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import AddEquipmentModal from "./addEquipmentModal";
import ConfirmDeleteEquipmentModal from "./confirmDeleteEquipmentModal";

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
    <Accordion>
      <div>
        <Card>
          <Card.Header>
            <TextLeft>
              <b>Equipment:</b>
            </TextLeft>
            <ButtonRight>
              <CustomToggle eventKey={0}>EXPAND</CustomToggle>
            </ButtonRight>
          </Card.Header>
          <Accordion.Collapse eventKey={0}>
            <Card.Body
              style={{ backgroundColor: "lightgrey", maxHeight: "15vh" }}
              class="overflow-auto"
            >
              {character.equipment.map((item, index) => (
                <>
                  <p key={index}>
                    <b>{item.equipment_name}</b> [{item.value}
                    {item.value_currency}]: {item.desc}
                    <ConfirmDeleteEquipmentModal
                      character={character}
                      updateEquipment={updateEquipment}
                      index={index}
                    />
                  </p>
                </>
              ))}
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
  );
};

export default EquipmentAccordion;
