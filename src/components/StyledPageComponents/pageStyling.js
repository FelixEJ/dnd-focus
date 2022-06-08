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
  width: 99%;
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

const SectionColumnContainer = styled.div`
  background-color: orange;
  width: 99%;
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
  width: 99%;
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
  width: 99%;
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
  width: 99%;
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
  clear: right;
`;
export const Label = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>;
};

const BottomButtons = styled.div`
  margin-bottom: 40px;
`;
export const BotButtons = ({ children }) => {
  return <BottomButtons>{children}</BottomButtons>;
};

const ModalWindowContainer = styled.div`
  max-height: 85vh;
  overflow: auto;
`;
export const ModalWindow = ({ children }) => {
  return <ModalWindowContainer>{children}</ModalWindowContainer>;
};

const CentredContainer = styled.div`
  background: maroon;
  width: 100vw;
  max-width: 480px;
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
export const Container = ({ children }) => {
  return <CentredContainer>{children}</CentredContainer>;
};
