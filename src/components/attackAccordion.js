import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import EditAttackModal from "./editAttackModal";
import {
  Window,
  Page,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
  TopRightButton,
} from "./StyledPageComponents/pageStyling";

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

const AttackAccordion = ({ character, updateAttacks }) => {
  const [tempAttacks, setTempAttacks] = useState([...character.attacks]);

  useEffect(() => {
    setTempAttacks([...character.attacks]);
  }, [character]);

  const handleChange = (e, index, name) => {
    e.preventDefault();
    let attacks = [...character.attacks];

    let attackIndex = attacks.findIndex(
      (attack) => attack.attack_name === name
    );
    attacks[attackIndex].ammo = e.target.value;

    updateAttacks(tempAttacks);
  };

  return (
    <Accordion>
      <div>
        {character.attacks.map((attack, index) => (
          <Card style={{ backgroundColor: "rgba(203, 203, 203, 0.2)" }}>
            <Card.Header>
              <TextLeft>
                {attack.attack_name}:{" "}
                <b>
                  +{attack.attack_bonus}; {attack.damage_dice_num}
                  {attack.damage_dice}+{attack.damage_bonus}{" "}
                  {attack.damage_type}{" "}
                  {attack.range.length > 0 && <>({attack.range})</>}
                  {attack.ammo > 0 && <>[{attack.ammo}]</>}
                </b>
              </TextLeft>
              <ButtonRight>
                <CustomToggle eventKey={attack.attack_id}>EXPAND</CustomToggle>
              </ButtonRight>
            </Card.Header>
            <Accordion.Collapse eventKey={attack.attack_id}>
              <Card.Body
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                // style={{ backgroundColor: "none" }}
                class="overflow-auto"
              >
                <>
                  <p>{attack.attack_name}</p>
                  Attack Bonus: <b>+{attack.attack_bonus}</b>; Damage:
                  <b>
                    {attack.damage_dice_num}
                    {attack.damage_dice}+{attack.damage_bonus}
                    {attack.damage_type};
                  </b>
                  {attack.tags !== "" && (
                    <span>
                      Tags: <b>{attack.tags}</b>
                    </span>
                  )}
                  {attack.range.length > 0 && <p>Range: {attack.range}</p>}
                  {attack.ammo > 0 && (
                    <Label>
                      Ammo:
                      <input
                        type="number"
                        min="0"
                        id="ammo"
                        name="ammo"
                        value={attack.ammo}
                        onChange={(e) =>
                          handleChange(e, index, attack.attack_name)
                        }
                        style={{ width: "60px" }}
                        display="none"
                      />
                    </Label>
                  )}
                  <EditAttackModal
                    character={character}
                    updateAttacks={updateAttacks}
                    index={index}
                    name={attack.attack_name}
                    attack={{ attack }}
                  />
                </>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </div>
    </Accordion>
  );
};

export default AttackAccordion;
