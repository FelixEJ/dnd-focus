import React from "react";
import styled from "styled-components";

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
} from "../components/StyledPageComponents/pageStyling";

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
  &:nth-child(odd) {
    background-color: rgba(203, 203, 203, 0.3);
  }
`;
const Text = styled.div`
  margin: 1% 1% 1% 1%;
`;

const SheetProficiencies = ({ character, onCharacterChange }) => {
  return (
    <CardColumn>
      <Box>
        <Text>
          <b>WEAPONS: </b>
          {character.proficiencies.weapons}
        </Text>
      </Box>
      <Box>
        <Text>
          <b>ARMOUR: </b>
          {character.proficiencies.armour}
        </Text>
      </Box>
      <Box>
        <Text>
          <b>LANGUAGES: </b>
          {character.proficiencies.languages}
        </Text>
      </Box>
      <Box>
        <Text>
          <b>OTHER: </b>
          {character.proficiencies.other}
        </Text>
      </Box>
    </CardColumn>
  );
};

export default SheetProficiencies;
