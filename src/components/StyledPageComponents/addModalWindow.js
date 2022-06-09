import React from "react";
import styled from "styled-components";

const ModalWindowContainer = styled.div`
  max-height: 90vh;
  overflow: auto;
`;

export const AddModalWindow = ({children}) => {
  return <ModalWindowContainer>{children}</ModalWindowContainer>;
};
