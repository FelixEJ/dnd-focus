import React, { useState, useEffect } from "react";
import "./App.css";
import CreatePage from "./components/CharacterCreate/createPage";
import Success from "./components/CharacterCreate/success";
import { Container } from "@material-ui/core";

function App() {

  return (
    <div className="App">
      <Container >
        {/* <h1>App</h1> */}
        <Success />
        {/* <CreatePage /> */}
      </Container>
    </div>
  );
}

export default App;
