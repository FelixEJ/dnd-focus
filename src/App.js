import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Routes />
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
