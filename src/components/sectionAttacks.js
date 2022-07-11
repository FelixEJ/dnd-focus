import React from "react";
import styled from "styled-components";
import AttackAccordion from "./attackAccordion";
import {
  Window,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "./StyledPageComponents/pageStyling";

const Attacks = ({ character, updateAttacks, addAttack }) => {
  return (
    <CardColumn>      
        {/* <Box> */}
          <AttackAccordion
            character={character}
            updateAttacks={updateAttacks}
          />
        {/* </Box> */}
    </CardColumn>
  );
};

export default Attacks;
