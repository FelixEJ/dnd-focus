import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { Window } from "./components/StyledPageComponents/pageStyling";

function App() {
  return (
    <BrowserRouter>
      <Window>
        <div className="App">
          <Routes />
        </div>
      </Window>
    </BrowserRouter>
  );
}

export default App;
