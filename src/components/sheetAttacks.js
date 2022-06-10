import React from "react";
import styled from "styled-components";
import AttackAccordion from "./attackAccordion";

import AddAttackModal from "./addAttackModal";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 1300px) {
    max-height: 90vh;
  }
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

const Attacks = ({ character, updateAttacks, addAttack }) => {
  return (
    <Container>
      
        <Box>
          <AttackAccordion
            character={character}
            updateAttacks={updateAttacks}
          />
        </Box>
    </Container>
  );
};

export default Attacks;
