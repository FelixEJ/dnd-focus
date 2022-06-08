import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

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

const TextLeft = styled.div`
  float: left;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const FeatureAccordion = ({ character, updateFeatures, updateCharacter }) => {
  const [tempFeats, setTempFeats] = useState([...character.features]);

  useEffect(() => {
    setTempFeats([...character.features]);
  }, [character]);

  const handleChange = (e, index, name) => {
    e.preventDefault();
    let feats = [...character.features];

    let featIndex = feats.findIndex((feat) => feat.feature_name === name);
    feats[featIndex].current_uses = e.target.value;

    console.log("feats", tempFeats);
    updateFeatures(tempFeats);
  };

  return (
    <Accordion>
      <div>
        {character.features.map((feature, index) => (
          <Card>
            <Card.Header>
              <TextLeft>
                {feature.feature_name}: {feature.action_type}
              </TextLeft>
              {feature.max_uses > 0 && (
                <>
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
                </>
              )}
              <ButtonRight>
                <CustomToggle eventKey={feature.feature_id}>
                  EXPAND
                </CustomToggle>
              </ButtonRight>
            </Card.Header>
            <Accordion.Collapse eventKey={feature.feature_id}>
              <Card.Body
                style={{ backgroundColor: "lightgrey", maxHeight: "25vh" }}
                class="overflow-auto"
              >
                <div>
                  Source: <b>{feature.source}</b>
                  <br />
                </div>
                {feature.action_type && (
                  <div>
                    Action used: <b>{feature.action_type}</b>
                    <br />
                  </div>
                )}
                {feature.damage_dice_num != "" && (
                  <div>
                    {feature.damage_dice_num}
                    {feature.damage_dice}
                    {feature.damage_type} damage
                  </div>
                )}
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
                        onChange={(e) => handleChange(e, index)}
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
  );
};

export default FeatureAccordion;
