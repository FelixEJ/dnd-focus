import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import abilities from "../../images/og/abilities.png";
import attacks from "../../images/og/attacks.png";
import combat from "../../images/og/combat.png";
import features from "../../images/og/features.png";
import inventory from "../../images/og/inventory.png";
import magic from "../../images/og/magic.png";
import notes from "../../images/og/notes.png";
import personality from "../../images/og/personality.png";
import dice from "../../images/og/dice.png";

const SideBarStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  background: rgb(255,255,255, .7);

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1100px) {
    display: none;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Icon = styled.img`
  width: 30px;
  margin: 0px 3px;
`;
const Button = styled.button`
  width: 30px;
  margin: 2px 0;
`;

const Text = styled.span`
display: flex;
flex-flow: column wrap;
  float: right;
  background: white;
`;

const Opt = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const SideBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <SideBarStyle>
      <Opt>
        <Button onClick={() => setExpand(!expand)}>&#8614;</Button>
        {expand && <Text>Expand</Text>}
      </Opt>
      <Link to="top" spy={true} smooth={true}>
        <Opt>
          <Icon src={dice} />
          {expand && <Text>Top</Text>}
        </Opt>
      </Link>

      <Link to="abilities" spy={true} smooth={true}>
        <Opt>
          <Icon src={abilities} />
          {expand && <Text>Abilities</Text>}
        </Opt>
      </Link>
      {/* <Link to="proficiencies" spy={true} smooth={true}>
        <Icon src={proficiencies} />
        Proficiencies
      </Link> */}
      <Link to="combat" spy={true} smooth={true}>
        <Opt>
          <Icon src={combat} />
          {expand && <Text>Combat</Text>}
        </Opt>
      </Link>
      <Link to="attacks" spy={true} smooth={true}>
        <Opt>
          <Icon src={attacks} />
          {expand && <Text>Attacks</Text>}
        </Opt>
      </Link>
      <Link to="magic" spy={true} smooth={true}>
        <Opt>
          <Icon src={magic} />
          {expand && <Text>Magic</Text>}
        </Opt>
      </Link>
      <Link to="features" spy={true} smooth={true}>
        <Opt>
          <Icon src={features} />
          {expand && <Text>Features</Text>}
        </Opt>
      </Link>
      <Link to="inventory" spy={true} smooth={true}>
        <Opt>
          <Icon src={inventory} />
          {expand && <Text>Inventory</Text>}
        </Opt>
      </Link>
      <Link to="personality" spy={true} smooth={true}>
        <Opt>
          <Icon src={personality} />
          {expand && <Text>Personality</Text>}
        </Opt>
      </Link>
      <Link to="notes" spy={true} smooth={true}>
        <Opt>
          <Icon src={notes} />
          {expand && <Text>Notes</Text>}
        </Opt>
      </Link>
    </SideBarStyle>
  );
};

export default SideBar;
