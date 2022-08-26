import React from "react";
import styled from "styled-components";

import EditBasicsModal from "./editBasicsModal";

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


const Container = styled.div`
  
  width: 100%;
  max-width: 380px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
`;

const Text = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;

const Basics = ({ character, onCharacterChange }) => {
  return (
    <Container>
      <Text>
        Name: <b>{character.name}</b>
      </Text>
      <Text>
        Class:{" "}
        <b>
          {character.class}
        </b>
      </Text>
      <Text>
        Subclass: <b>{character.subclass}</b>
      </Text>
      <Text>
        Level: <b>{character.level}</b>
      </Text>
      <Text>
        Race: <b>{character.race}</b>
      </Text>
      <Text>
        Age: <b>{character.age}</b>
      </Text>
      <Text>
        Background: <b>{character.background.title}</b>
      </Text>
      <Text>
        Alignment: <b>{character.alignment}</b>
      </Text>
      <Text>
        XP:
        <input
          type="number"
          min="0"
          id="xp"
          name="xp"
          value={character.xp}
          onChange={onCharacterChange}
          style={{ width: "80px" }}
        />
      </Text>
      <EditBasicsModal
        character={character}
        onCharacterChange={onCharacterChange}
      />
    </Container>
  );
};

export default Basics;
