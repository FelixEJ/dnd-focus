import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "../pages/index";
import LoadCharacter from "../pages/loadCharacter";
import CreateCharacterGrid from "../pages/createCharacterGrid";
import DarkModeToggle from "../components/StyledPageComponents/darkModeToggle";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route
          exact
          path="/createCharacterGrid"
          component={CreateCharacterGrid}
        ></Route>
        <Route exact path="/loadCharacter" component={LoadCharacter}></Route>
      </Switch>
    </>
  );
};

export default Routes;
