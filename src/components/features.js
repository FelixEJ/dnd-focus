import React from "react";
import styled from "styled-components";
import FeatureAccordion from "./featuresAccordion";

const Features = ({ character, updateFeatures, addFeature }) => {
  return (
    <>
      <FeatureAccordion character={character} updateFeatures={updateFeatures} />
    </>
  );
};

export default Features;
