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

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const ColContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 33%;
`;

const ButtonRight = styled.div`
  margin-left: auto;
  margin-right: 0;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const Title = styled.div`
  float: left;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;
const Text = styled.div`
  font-size: 0.9em;
  text-transform: uppercase;
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const TextRight = styled.div`
  font-size: 0.7em;
  text-transform: uppercase;
`;

const LargeNumber = styled.span`
  font-size: 1.6em;
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
    <Accordion style={{ width: "100%" }}>
      <div>
        {character.attacks.map((attack, index) => (
          <Card style={{ backgroundColor: "rgba(203, 203, 203, 0.2)" }}>
            {attack.attack_type !== "spell" && (
              <>
                <RowContainer
                  style={{ backgroundColor: "rgba(203, 203, 203, 0.1)" }}
                >
                  <ColContainer>
                    <Title>{attack.attack_name}:</Title>
                    {attack.bonus_damage_dice_num > 0 && (
                      <>
                        <LargeNumber>
                          +{attack.bonus_damage_dice_num}
                          {attack.bonus_damage_dice}
                        </LargeNumber>
                        <TextRight>{attack.bonus_damage_dice_type}</TextRight>
                      </>
                    )}
                  </ColContainer>
                  <ColContainer>
                    <b>
                      <LargeNumber>
                        +{attack.attack_bonus}; {attack.damage_dice_num}
                        {attack.damage_dice}+{attack.damage_bonus}
                      </LargeNumber>
                    </b>
                    <TextRight>{attack.damage_type} </TextRight>
                  </ColContainer>
                  <ColContainer>
                    <ButtonRight>
                      <CustomToggle eventKey={attack.attack_name}>
                        EXPAND
                      </CustomToggle>
                    </ButtonRight>
                    {attack.range.length > 0 && <>({attack.range})</>}
                    {attack.ammo > 0 && <>[{attack.ammo}]</>}
                  </ColContainer>
                </RowContainer>
                <Accordion.Collapse eventKey={attack.attack_name}>
                  <Card.Body
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                    class="overflow-auto"
                  >
                    <>
                      <p>{attack.attack_name}</p>
                      Attack Bonus: <b>+{attack.attack_bonus}</b>
                      <br />
                      Damage:
                      <b>
                        {attack.damage_dice_num}
                        {attack.damage_dice}+{attack.damage_bonus}
                        {attack.damage_type};
                      </b>
                      {attack.tags !== "" && (
                        <span>
                          <br />
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
                      <p>{attack.description}</p>
                      <p>
                        {attack.bonus_damage_dice_num > 0 && (
                          <>
                            <LargeNumber>
                              +{attack.bonus_damage_dice_num}
                              {attack.bonus_damage_dice}
                            </LargeNumber>
                            <span>{attack.bonus_damage_dice_type}</span>
                          </>
                        )}
                      </p>
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
              </>
            )}
            {attack.attack_type === "spell" && (
              <>
                <RowContainer
                  style={{ backgroundColor: "rgba(50, 150, 150, 0.2)" }}
                >
                  <ColContainer>
                    <Title>{attack.attack_name}:</Title>
                    <b>
                      <LargeNumber>
                        {attack.damage_dice_num}
                        {attack.damage_dice}
                        {attack.bonus_damage_bonus > 0 && (
                          <span>+{attack.bonus_damage_bonus}</span>
                        )}
                      </LargeNumber>
                    </b>
                    <TextRight>{attack.damage_type}</TextRight>
                    {attack.bonus_damage_dice_num > 0 && (
                      <>
                        <LargeNumber>
                          +{attack.bonus_damage_dice_num}
                          {attack.bonus_damage_dice}
                        </LargeNumber>
                        <TextRight>{attack.bonus_damage_dice_type}</TextRight>
                      </>
                    )}
                  </ColContainer>
                  <ColContainer>
                    <Text> {attack.components}</Text>
                    <Text>
                      {attack.range.length > 0 && <>{attack.range}</>}
                    </Text>
                    <Text>{attack.casting_time}</Text>
                    <Text>{attack.duration}</Text>
                  </ColContainer>
                  <ColContainer>
                    <ButtonRight>
                      <CustomToggle eventKey={attack.attack_id}>
                        EXPAND
                      </CustomToggle>
                    </ButtonRight>
                    <Text>{attack.effect_summary}</Text>
                    {attack.ritual === "yes" && <Text>Ritual</Text>}
                    {attack.concentration === "yes" && (
                      <Text>Concentration</Text>
                    )}
                  </ColContainer>
                </RowContainer>
                <Accordion.Collapse eventKey={attack.attack_id}>
                  <Card.Body
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                    class="overflow-auto"
                  >
                    <>
                      <p>{attack.attack_name}</p>
                      <br />
                      Casting Time: {attack.casting_time}
                      <br />
                      Range: {attack.range}
                      <br />
                      Components: {attack.components}
                      <br />
                      Duration: {attack.duration}
                      <br />
                      <br />
                      <p>{attack.description}</p>
                      <p>
                        <b>At higher levels:</b> {attack.upcasting}
                      </p>
                      <p>
                        <Text>Damage:</Text>
                        <LargeNumber>
                          {attack.damage_dice_num}
                          {attack.damage_dice}
                          {attack.bonus_damage_bonus > 0 && (
                            <span>+{attack.bonus_damage_bonus}</span>
                          )}
                          
                        </LargeNumber>
                        <TextRight>{attack.damage_type}</TextRight>
                        {attack.bonus_damage_dice_num > 0 && (
                          <span>
                            <LargeNumber>
                              +{attack.bonus_damage_dice_num}
                              {attack.bonus_damage_dice}
                            </LargeNumber>
                            <TextRight>{attack.bonus_damage_dice_type}</TextRight>
                          </span>
                        )}
                        </p>
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
              </>
            )}
          </Card>
        ))}
      </div>
    </Accordion>
  );
};

export default AttackAccordion;
