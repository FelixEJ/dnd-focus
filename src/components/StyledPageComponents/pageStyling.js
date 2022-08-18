import React from "react";
import styled from "styled-components";

const WindowContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
export const Window = ({ children }) => {
  return <WindowContentContainer>{children}</WindowContentContainer>;
};

// background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("https://aerrond.com/wp-content/uploads/2012/12/Seamless_Parchment_Texture_by_FantasyStock1.jpg");
// background-image: url("http://3.bp.blogspot.com/-mvmaXN8reK4/UKSGrkaw-kI/AAAAAAAADNs/IiFdSWfVy3o/w1200-h630-p-nu/white_grid_paper-background_pattern.jpg");

const PageContentContainer = styled.div`
  width: 99vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const Page = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};

const LayoutContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  column-break-inside: avoid;
  break-inside: avoid-column;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    column-count: 2;
    column-gap: 0;
    width: 99%;
    height: 200vh;
  }
  @media only screen and (min-width: 1024px) {
    column-count: 3;
    column-gap: 0;
    width: 99%;
    height: 99vh;
  }
  @media only screen and (min-width: 1600px) {
    column-count: 4;
    column-gap: 0;
    width: 99%;
    height: 99vh;
  }
`;
export const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const SectionContainer = styled.div`
  width: 99%;
  max-width: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 10px 0;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    margin: 0 0;
  }
  @media only screen and (min-width: 1600px) {
    margin: 0 0;
  }
`;
export const Section = ({ children, className }) => {
  return <SectionContainer className={className}>{children}</SectionContainer>;
};

const CardContainer = styled.div`
  width: 99%;
  max-height: 99%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardColumnContainer = styled.div`
  background-color: none;
  width: 99%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const CardColumn = ({ children }) => {
  return <CardColumnContainer>{children}</CardColumnContainer>;
};

const CardRowContainer = styled.div`
  background-color: none;
  width: 95%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0.5em;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const CardRow = ({ children }) => {
  return <CardRowContainer>{children}</CardRowContainer>;
};

const CardItemContainer = styled.div`
  background-color: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
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

const BottomButtonContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  clear: both;
`;
export const BotButton = ({ children }) => {
  return <BottomButtonContainer>{children}</BottomButtonContainer>;
};

const TopRightButtonContainer = styled.div`
  margin-left: 80%;
  margin-top: -30px;
  margin-right: 5px;
`;
export const TopRightButton = ({ children }) => {
  return <TopRightButtonContainer>{children}</TopRightButtonContainer>;
};

const TopLeftButtonContainer = styled.div`
  margin-right: 80%;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: -35px;
`;
export const TopLeftButton = ({ children }) => {
  return <TopLeftButtonContainer>{children}</TopLeftButtonContainer>;
};

const ModalContentContainer = styled.div`
  max-height: 90vh;
  overflow: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 400px;
`;
export const ModalContent = ({ children }) => {
  return <ModalContentContainer>{children}</ModalContentContainer>;
};

const ModalWindowContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const ModalWindow = ({ children }) => {
  return <ModalWindowContainer>{children}</ModalWindowContainer>;
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const SectionColumnContainer = styled.div`
  background-color: none;
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const SectionColumn = ({ children }) => {
  return <SectionColumnContainer>{children}</SectionColumnContainer>;
};

const SectionRowContainer = styled.div`
  background-color: none;
  width: 95%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const SectionRow = ({ children }) => {
  return <SectionRowContainer>{children}</SectionRowContainer>;
};
