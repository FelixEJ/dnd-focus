import React from "react";
import styled from "styled-components";

import AddFeatureModal from "./addFeatureModal";

import ConfirmDeleteFeatureModal from "../confirmDeleteFeatureModal";

import { SectionColumn, CardColumn } from "../StyledPageComponents/pageStyling";

export const CreateFeatures = ({
  onCharacterChange,
  character,
  addFeature,
  updateFeatures,
}) => {
  return (
    <SectionColumn>
      <h3>Features & abilities</h3>
      <CardColumn>
        <CardColumn>
          <AddFeatureModal
            addFeature={addFeature}
            featureLength={character.features.length}
          />
          {character.features.map((feature, index) => (
            <h4 key={feature.feature_id + feature.feature_name}>
              {feature.feature_name}
              <ConfirmDeleteFeatureModal
                character={character}
                updateFeatures={updateFeatures}
                index={index}
              />
            </h4>
          ))}
        </CardColumn>
      </CardColumn>
    </SectionColumn>
  );
};

export default CreateFeatures;
