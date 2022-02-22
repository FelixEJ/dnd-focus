import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/index';
import CreateCharacter from '../pages/createCharacter';
import LoadCharacter from '../pages/loadCharacter';
import CreateCharacterGrid from '../pages/createCharacterGrid';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/createCharacter" component={CreateCharacter}></Route>
            <Route exact path="/createCharacterGrid" component={CreateCharacterGrid}></Route>
            <Route exact path="/loadCharacter" component={LoadCharacter}></Route>
        </Switch>
    );
}

export default Routes;