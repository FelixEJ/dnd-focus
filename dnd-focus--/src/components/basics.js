import React from "react";
import styled from "styled-components";

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

const Name = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Class = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Race = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Background = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Alignment = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const XP = styled.div`
  width: 98%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;

const Basics = ({ character }) => {
  return (
    <Container>
      <Name>Name: <b>{character.name}</b></Name>
      <Class>Class: <b>{character.class} {character.subclass}</b></Class>
      <Race>Race: <b>{character.race}</b></Race>
      <Background>Background: <b>{character.background.title}</b></Background>
      <Alignment>Alignment: <b>{character.alignment}</b></Alignment>
      <XP>XP: <b>{character.xp}</b></XP>
    </Container>
  );
};

export default Basics;
