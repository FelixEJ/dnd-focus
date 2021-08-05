import React from "react";
import "./App.css";
import CreateCharacter from "./components/createCharacter";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>App</h1>
        <CreateCharacter />
      </Container>
    </div>
  );
}

export default App;
