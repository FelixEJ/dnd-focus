import React, { useState, useEffect } from "react";
import "./App.css";
import CreatePage from "./components/CharacterCreate/createPage";
import { Container } from "@material-ui/core";

function App() {

  return (
    <div className="App">
      <Container >
        {/* <h1>App</h1> */}
        <CreatePage />
      </Container>
    </div>
  );
}

export default App;
