import React from "react";
import styled from "styled-components";

const WindowContentContainer = styled.div`
  background: maroon;
  width: 100vw;
  max-width: 480px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
    background: red;
    max-width: 765px;
  }
  @media only screen and (min-width: 768px) {
    background: orange;
  }
  @media only screen and (min-width: 1024px) {
    background: yellow;
  }
  @media only screen and (min-width: 1800px) {
    background: green;
  }
`;
export const WindowContent = ({ children }) => {
  return <WindowContentContainer>{children}</WindowContentContainer>;
};

const PageContentContainer = styled.div`
  background: red;
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

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
export const PageContent = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};

const SectionContainer = styled.div`
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
export const Container = ({ children }) => {
  return <Container>{children}</Container>;
};

const SectionColumnContainer = styled.div`
  background-color: orange;
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;

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
export const SectionColumn = ({ children }) => {
  return <SectionColumnContainer>{children}</SectionColumnContainer>;
};

const SectionRowContainer = styled.div`
  background-color: orange;
  width: 95%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;

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
export const SectionRow = ({ children }) => {
  return <SectionRowContainer>{children}</SectionRowContainer>;
};

const CardColumnContainer = styled.div`
  background-color: yellow;
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0.5em;

  @media only screen and (min-width: 480px) {
    background: green;
  }
  @media only screen and (min-width: 768px) {
    background: blue;
  }
  @media only screen and (min-width: 1024px) {
    background: pink;
  }
  @media only screen and (min-width: 1800px) {
    background: purple;
  }
`;
export const CardColumn = ({ children }) => {
  return <CardColumnContainer>{children}</CardColumnContainer>;
};

const CardRowContainer = styled.div`
  background-color: yellow;
  width: 95%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0.5em;

  @media only screen and (min-width: 480px) {
    background: green;
  }
  @media only screen and (min-width: 768px) {
    background: blue;
  }
  @media only screen and (min-width: 1024px) {
    background: pink;
  }
  @media only screen and (min-width: 1800px) {
    background: purple;
  }
`;
export const CardRow = ({ children }) => {
  return <CardRowContainer>{children}</CardRowContainer>;
};

const CardItemContainer = styled.div`
  background-color: green;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
    background: blue;
  }
  @media only screen and (min-width: 768px) {
    background: pink;
  }
  @media only screen and (min-width: 1024px) {
    background: purple;
  }
  @media only screen and (min-width: 1800px) {
    background: teal;
  }
`;
export const CardItem = ({ children }) => {
  return <CardItemContainer>{children}</CardItemContainer>;
};

const LabelStyle = styled.div`
    clear:right;
`;
export const Label = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>;
};

const BottomButtonContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const BotButton = ({ children }) => {
  return <BottomButtonContainer>{children}</BottomButtonContainer>;
};

const TopRightButtonContainer = styled.div`
  float: right;
  margin-top: -30px;
  margin-right: 5px;
`;
export const TopRightButton = ({ children }) => {
  return <TopRightButtonContainer>{children}</TopRightButtonContainer>;
};

const ModalContentContainer = styled.div`
  max-height: 90vh;
  overflow: auto;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:90vw;
  max-width: 400;
`;
export const ModalContent = ({ children }) => {
  return <ModalContentContainer>{children}</ModalContentContainer>;
};

const ModalWindowContainer = styled.div`
  background: red;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

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
export const ModalWindow = ({ children }) => {
  return <ModalWindowContainer>{children}</ModalWindowContainer>;
};