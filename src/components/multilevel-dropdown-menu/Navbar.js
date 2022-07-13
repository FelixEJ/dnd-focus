import React, { useState } from "react";
import { menuTitles } from "./menuTitles";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import {keyframes} from "styled-components";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import MenuItems from "./MenuItems";
import Logo from "./Logo";
import DarkModeToggle from "../StyledPageComponents/darkModeToggle";

import Index from "../../pages/index";
import Create from "../../pages/createCharacter";
import Load from "../../pages/loadCharacter";
import Premade from "../../pages/premadeCharacters";

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
  padding: 5px 0;
  margin: 0;
`;

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleToggle = () => {
    setBurgerOpen((prev) => !prev);
  };

  const MenuAnimation = keyframes`
    0% {max-width: 0%;}
  `;

  const BurgerButton = styled.button`
    position: relative;
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
    width: ${burgerOpen ? "100%" : "0"};
    animation-name: ${MenuAnimation};
    animation-duration: .5s;
    overflow: hidden;
    max-width: 290px;
    z-index: 9;
  `;

  return (
    <>
      <Bar>
        {/* <Logo /> */}
        <DarkModeToggle />
        <BurgerNav>
          <BurgerButton onClick={handleToggle}>
            {burgerOpen ? (
              <MdClose
                style={{ color: "black", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "black", width: "40px", height: "40px" }}
              />
            )}
          </BurgerButton>
          <BurgerMenu>
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
          </BurgerMenu>
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
        <Route path="/create" element={<Create />}></Route>
        <Route path="/load" element={<Load />}></Route>
        <Route path="/premade" element={<Premade />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
