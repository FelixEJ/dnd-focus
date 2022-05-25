import React from "react";
import styled from "styled-components";
import FeatureAccordion from "./featuresAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;
  max-height: 30vh;
  overflow: auto;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 1300px) {
    max-height: 90vh;
  }
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  border-style: inset;
  border-radius: 5px;
  margin: 1% 1% 1% 1%;

  
`;

const Features = ({ character, updateFeatures }) => {
  return (
    <div>
      <h4>Features</h4>
      <Container>
        <Box>
          <FeatureAccordion
            character={character}
            updateFeatures={updateFeatures}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Features;
