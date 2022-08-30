import React from "react";
import styled from "styled-components";

const AbilityGroupCont = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
`;
const AbilityRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const AbilityScore = styled.div`
  font-size: 2em;
  align-self: flex-start;
  margin-top: -40px;
`;

const AbilityModifier = styled.div`
  font-size: 6em;
  margin: -20px 0;
  padding: 0;
  font-weight: bold;
`;

const AbilityName = styled.div`
  font-size: 1.2em;
  text-transform: uppercase;
  align-self: flex-end;
`;

export const AbilityGroup = ({ ability, tempAbility, mod, name, colour }) => {
  return (
    <AbilityGroupCont>
      <AbilityRow>
        <AbilityName>
          <b>{name}</b>
        </AbilityName>
      </AbilityRow>
      <AbilityModifier style={{ color: colour }}>{mod}</AbilityModifier>
      <AbilityScore>{tempAbility > 0 ? tempAbility : ability}</AbilityScore>
    </AbilityGroupCont>
  );
};
