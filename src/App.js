import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";

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
