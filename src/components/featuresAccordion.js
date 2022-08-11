import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";
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

import EditFeatureModal from "./editFeatureModal";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log(""));

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
  font-size: 1em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const ItemRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  clear: both;
`;

const Item = styled.div`
  font-size: 0.9em;
  margin: 5px 5px;
  max-width: 75%;
`;

const Container = styled.div`
  width: 95vw;
  max-width: 400px;
  max-height: 30vh;
`;

const FeatureAccordion = ({ character, updateFeatures }) => {
  const [tempFeats, setTempFeats] = useState([...character.features]);

  useEffect(() => {
    setTempFeats([...character.features]);
  }, [character]);

  const handleChange = (e, index, name) => {
    e.preventDefault();
    let feats = [...character.features];

    let featIndex = feats.findIndex((feat) => feat.feature_name === name);
    feats[featIndex].current_uses = e.target.value;

    updateFeatures(tempFeats);
  };

  return (
    <CardColumn>
      <Accordion style={{ width: "100%" }}>
        <div>
          {character.features.map((feature, index) => (
            <Card
              style={{ backgroundColor: "rgba(203, 203, 203, 0.2)" }}
              key={index}
            >
              <Card.Header>
                <ItemRow>
                  <Item>
                    <ItemRow>
                      {feature.action_type === "action" && <>[A] -</>}
                      {feature.action_type === "bonus" && <>[BA] -</>}
                      {feature.action_type === "reaction" && <>[R] -</>}
                      <Header>{feature.feature_name}:</Header>
                      {feature.dc > 0 && <Item> DC{feature.dc} </Item>}
                      <Item>
                        {feature.damage_dice_amount > 0 && (
                          <>+{feature.damage_dice_amount}</>
                        )}
                        {feature.damage_dice !== "" && (
                          <>{feature.damage_dice}</>
                        )}
                        {feature.damage_type !== "" && (
                          <>{feature.damage_type}</>
                        )}
                      </Item>
                    </ItemRow>
                    {feature.max_uses > 0 && (
                      <Label>
                        <br />
                        Uses:
                        <input
                          type="number"
                          max={feature.max_uses}
                          min="0"
                          id="current_uses"
                          name="current_uses"
                          value={feature.current_uses}
                          onChange={(e) =>
                            handleChange(e, index, feature.feature_name)
                          }
                          style={{ width: "40px" }}
                          display="none"
                        />
                        /{feature.max_uses}
                      </Label>
                    )}
                  </Item>
                  <ButtonRight>
                    <CustomToggle eventKey={feature.feature_name}>
                      EXPAND
                    </CustomToggle>
                  </ButtonRight>
                </ItemRow>
              </Card.Header>

              <Accordion.Collapse eventKey={feature.feature_name}>
                <Card.Body
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                  class="overflow-auto"
                >
                  <>
                    {feature.source !== "" && (
                      <>
                        Source: <b>{feature.source}</b>
                        <br />
                      </>
                    )}
                    {feature.action_type !== "" && (
                      <>
                        Action: <b>{feature.action_type}</b>
                        <br />
                      </>
                    )}
                  </>
                  {feature.max_uses > 0 && (
                    <>
                      <>
                        Uses:{" "}
                        <input
                          type="number"
                          max={feature.max_uses}
                          min="0"
                          id="current_uses"
                          name="current_uses"
                          value={feature.current_uses}
                          onChange={(e) =>
                            handleChange(e, index, feature.feature_name)
                          }
                          size="2"
                          display="none"
                        />
                        /{feature.max_uses}
                      </>
                      <br/>
                      <> Recharge: {feature.recharge}</>
                    </>
                  )}
                  <p>{feature.description}</p>
                  <EditFeatureModal
                    character={character}
                    updateFeatures={updateFeatures}
                    index={index}
                    name={feature.feature_name}
                    feat={{ feature }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </div>
      </Accordion>
    </CardColumn>
  );
};

export default FeatureAccordion;
