import * as React from "react";
import "./App.css";
import styled from "styled-components";
// import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { Window } from "./components/StyledPageComponents/pageStyling";

import LogoImage from "./images/og/logo.png";

const Logo = styled.img`
  width: 20vw;
  height: 20vw;
  position: absolute;
  top: 70px;
  left: 0;

  @media only screen and (max-width: 490px) {
    top: 0;
    left: 40vw;
    width: 15vw;
    height: 15vw;
  }
`;

function App() {
  return (
    // <BrowserRouter>
    <Window>
      <div className="App">
        <Navbar />
        <Logo src={LogoImage} />
      </div>
    </Window>
    // </BrowserRouter>
  );
}

export default App;
