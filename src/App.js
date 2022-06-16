import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { Window } from "./components/StyledPageComponents/pageStyling";
import DarkModeToggle from "./components/StyledPageComponents/darkModeToggle";

import LogoImage from "./images/og/logo.png";

const Logo = styled.img`
  width: 20vw;
  height: 20vw;
  position: absolute;
  top: 70px;
  left: 0;
`;

function App() {
  return (
    <BrowserRouter>
      <Window>
        <div className="App">
        <DarkModeToggle />
          <Routes />
          <Logo src={LogoImage}/>
        </div>
      </Window>
    </BrowserRouter>
  );
}

export default App;
