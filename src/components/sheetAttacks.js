import React from "react";
import styled from "styled-components";
import AttackAccordion from "./attackAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;
  max-height: 20vh;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  border-style: inset;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const Attacks = ({ character }) => {
  return (
    <div>
      <h4>Attacks</h4>
      <Container>
        <Box>
          <AttackAccordion attacks={character.attacks} />
        </Box>
      </Container>
    </div>
  );
};

export default Attacks;
