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
} from "../components/StyledPageComponents/pageStyling";


const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: lightpurple;

  display: block;
  margin-left: auto;
  margin-right: auto;

  column-count: 3;
  column-gap: 1%;
`;

const Text = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;

const Basics = ({ character, onCharacterChange }) => {
  return (
    <>
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
          size="7"
        />
      </Text>
      <EditBasicsModal
        character={character}
        onCharacterChange={onCharacterChange}
      />
    </>
  );
};

export default Basics;
