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

const Attacks = ({ character, updateAttacks, addAttack }) => {
  return (
    <Container>
      <h4>Attacks</h4>
      <AddAttackModal character={character} addAttack={addAttack}/>
      <Box>
        <AttackAccordion character={character} updateAttacks={updateAttacks} />
      </Box>
    </Container>
  );
};

export default Attacks;
