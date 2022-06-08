import React from "react";
import stylish from "styled-components";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = stylish.div`
  width: 100vw;  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Routes />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
