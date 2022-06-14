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
  font-size: 0.9em;
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
  max-height: 60vh;
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
    <Container>
      <Accordion>
        <div>
          {character.features.map((feature, index) => (
            <Card>
              <Card.Header>
                <ItemRow>
                  <Item>
                    <Header>{feature.feature_name}:</Header>
                    {feature.damage_dice_amount !== "" && (
                      <>{feature.damage_dice_amount}</>
                    )}
                    {feature.damage_dice !== "" && <>{feature.damage_dice}</>}
                    {feature.damage_type !== "" && <>{feature.damage_type}</>}
                    {feature.max_uses > 0 && (
                      <Label>
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
                          size="2"
                          display="none"
                        />
                        /{feature.max_uses}
                      </Label>
                    )}
                  </Item>
                  <ButtonRight>
                    <CustomToggle eventKey={feature.feature_id}>
                      EXPAND
                    </CustomToggle>
                  </ButtonRight>
                </ItemRow>
              </Card.Header>

              <Accordion.Collapse eventKey={feature.feature_id}>
                <Card.Body
                  style={{ backgroundColor: "lightgrey" }}
                  class="overflow-auto"
                >
                  <>
                    Source: <b>{feature.source}</b>
                    <br />
                  </>
                  {feature.max_uses > 0 && (
                    <text>
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
                      <> Recharge: {feature.recharge}</>
                    </text>
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
    </Container>
  );
};

export default FeatureAccordion;
