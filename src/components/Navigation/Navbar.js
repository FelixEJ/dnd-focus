import React, { useState } from "react";
import { menuTitles } from "./menuTitles";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Burger from "./burger";

import MenuItems from "./MenuItems";
import DarkModeToggle from "../StyledPageComponents/darkModeToggle";

import Index from "../../pages/index";
import Create from "../../pages/createCharacter";
import Load from "../../pages/loadCharacter";
import Refined from "../../pages/loadRefined";
import Premade from "../../pages/premadeCharacters";
import Henry from "../../pages/henry";
import Pirates from "../../pages/pirates";

const Bar = styled.div`
  width: 70vw;
  height: 58px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #212529;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;

  top: 0;

  @media only screen and (max-width: 1100px) {
    width: 95vw;
  }
`;

const Nav = styled.nav`
  position: relative;
  display: block;
  float: right;
  padding-right: 2vw;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 7px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Menus = styled.ul`
  display: flex;
  list-style: none;
  padding: 7px 0;
  margin: 0;
`;

const MenuAnimation = keyframes`
  0% {max-width: 0%;}
`;

const BurgerButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  left: 30vw;
  z-index: 10;
  background: transparent;
  border: none;
`;

const BurgerMenu = styled.ul`
  overflow-y: scroll;
  list-style: none;
  position: fixed;
  background: #e0e0e0;
  padding-top: 20px;
  left: -35px;
  bottom: 0;
  height: 100vh;
  width: ${(burgerOpen) => (burgerOpen ? "100%" : "0")};
  animation-name: ${MenuAnimation};
  animation-duration: 0.2s;
  overflow: hidden;
  max-width: 290px;
  z-index: 9;
`;

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function handleToggle() {
    setBurgerOpen((prev) => !prev);
  }

  return (
    <>
      <Bar>
        <DarkModeToggle />
        <BurgerNav>
          <Burger />          
        </BurgerNav>
        <Nav>
          <Menus>
            {menuTitles.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  handleToggle={handleToggle}
                />
              );
            })}
          </Menus>
        </Nav>
      </Bar>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/createCharacter" element={<Create />}></Route>
        <Route path="/loadCharacter" element={<Load />}></Route>
        <Route path="/loadRefined" element={<Refined />}></Route>
        <Route path="/premadeCharacters" element={<Premade />}></Route>
        <Route path="/henry" element={<Henry />}></Route>
        <Route path="/pirates" element={<Pirates />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
