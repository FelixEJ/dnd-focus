import React from "react";
import styled from "styled-components";
import FeatureAccordion from "./featuresAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;
  max-height: 20vh;
  overflow: auto;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  border-style: inset;
  border-radius: 5px;
  margin: 1% 1% 1% 1%;

  
`;

const Features = ({ character, onCharacterChange, editFeature }) => {
  return (
    <div>
      <h4>Features</h4>
      <Container>
        <Box>
          <FeatureAccordion
            character={character}
            onCharacterChange={onCharacterChange}
            editFeature={editFeature}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Features;
