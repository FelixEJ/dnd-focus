import React from "react";
import styled from "styled-components";

const SectionContentContainer = styled.div`
  background: orange;

  @media only screen and (min-width: 480px) {
    background: yellow;
  }
  @media only screen and (min-width: 768px) {
    background: green;
  }
  @media only screen and (min-width: 1024px) {
    background: blue;
  }
  @media only screen and (min-width: 1800px) {
    background: pink;
  }
`;

export const SectionContent = ({children}) => {
  return <SectionContentContainer>{children}</SectionContentContainer>;
};
