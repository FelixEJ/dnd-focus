import React from "react";
import styled, { css } from "styled-components";
import AttackAccordion from "./attackAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.p`
  margin: 1% 1% 1% 1%;
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
