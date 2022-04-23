import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

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

const FeatureAccordion = ({
  character,
  editFeature,
}) => {
  const [tempFeats, setTempFeats] = useState([...character.features]);

  const handleChange = (e, index) => {
    e.preventDefault();
    const feats = [...tempFeats];

    const feat = feats.findIndex((feat) => feat.feature_id === index);
    feats[feat].current_uses = e.target.value;

    console.log(feats);
    setTempFeats(feats);
    editFeature(tempFeats);
  };

  return (
    <Accordion defaultActiveKey={character.features[0].feature_id}>
      <div>
        {character.features.map((feature, index) => (
          <Card>
            <Card.Header>
              <TextLeft>
                ({feature.level_acquired}){feature.feature_name}: {index}
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
                    onChange={(e) => handleChange(e, index)}
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
                style={{ backgroundColor: "lightgrey", maxHeight: "15vh" }}
                class="overflow-auto"
              >
                <>
                  Source: <b>{feature.source}</b>
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
                        onChange={(e) => handleChange(e, index)}
                        size="2"
                        display="none"
                      />
                      /{feature.max_uses}
                    </>
                    <>Recharge: {feature.recharge}</>
                  </text>
                )}
                <p>{feature.description}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </div>
    </Accordion>
  );
};

export default FeatureAccordion;
