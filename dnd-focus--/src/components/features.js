import React from "react";
import styled from "styled-components";
import FeatureAccordion from "./featuresAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;

const Features = ({ character }) => {
  return (
    <div>
      <h4>Features</h4>
      <Container>
        <Box>
          <FeatureAccordion features={character.features} />
        </Box>
      </Container>
    </div>
  );
};

export default Features;
