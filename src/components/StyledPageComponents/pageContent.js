import React from "react";
import styled from "styled-components";

const PageContentContainer = styled.div`
  background: red;

  @media only screen and (min-width: 480px) {
    background: orange;
  }
  @media only screen and (min-width: 768px) {
    background: yellow;
  }
  @media only screen and (min-width: 1024px) {
    background: green;
  }
  @media only screen and (min-width: 1800px) {
    background: blue;
  }
`;

export const PageContent = ({children}) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};
