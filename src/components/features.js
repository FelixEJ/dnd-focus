import React from "react";
import styled from "styled-components";
import FeatureAccordion from "./featuresAccordion";

import AddFeatureModal from "./addFeatureModal";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

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
  max-height: 30vh;
  overflow: auto;
`;

const Features = ({ character, updateFeatures, addFeature }) => {
  return (
    <Container>
      <h4>Features & Abilities</h4>
      <AddFeatureModal addFeature={addFeature}/>
      <Box>
        <FeatureAccordion
          character={character}
          updateFeatures={updateFeatures}
        />
      </Box>
    </Container>
  );
};

export default Features;
