import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import AccordionSection from "./AccordionSection";

import { menuTitles } from "./menuTitles";

const StyledSideMenu = styled.div`
  
  position: fixed;
  top: 14.1vw;
  z-index: 99;
  overflow: hidden auto;
  padding: 4vw;
  display: ${({ open }) => (open ? "block" : "none")};
  background: white;
`;

const SideMenu = (props) => {
  return (
    <StyledSideMenu open={props.open} onClick={props.onClick}>
      <AccordionSection>
        {menuTitles.map((menuItem, index) => (
          <Accordion
            accordionTitle={menuItem.title}
            subcatagories={menuItem.submenu}
            key={index}
          />
        ))}
      </AccordionSection>
    </StyledSideMenu>
  );
};

export default SideMenu;