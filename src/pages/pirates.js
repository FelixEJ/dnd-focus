import React from "react";
import "../App.css";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import {
  Window,
  Page,
  Layout,
  Section,
  Card,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../components/StyledPageComponents/pageStyling";

const chars = require.context("../data/premade/pirates", true, /.json$/);
const allChars = [];
chars.keys().forEach((key) => {
  const fileName = key.replace("./", "");
  const resource = require(`../data/premade/pirates/${fileName}`);
  allChars.push(resource);
});

function saveLocalCharacter(character) {
  localStorage.setItem(character.name, JSON.stringify(character));
}

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80vw;
  @media only screen and (min-width: 480px) {
    width: 65vw;
  }
  @media only screen and (min-width: 768px) {
    width: 60vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 60vw;
  }
  @media only screen and (min-width: 1600px) {
    width: 60vw;
  }
`;

const CharBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 50px;
`;

const Pirates = () => {
  return (
    <Page>
      <TextContainer>
        <h1>Premade Character Sheets</h1>

        {allChars.map((character) => {
          return (
            <CharBox>
              <h2>{character.name}</h2>
              <p>{character.summary}</p>
              <p>
                {character.race} {character.class} {character.subclass}, {character.level}
              </p>
              <Button
                variant="contained"
                onClick={() => saveLocalCharacter(character)}
              >
                Save to local storage
              </Button>
            </CharBox>
          );
        })}
      </TextContainer>
    </Page>
  );
};

export default Pirates;
