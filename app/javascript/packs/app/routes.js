import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from 'components/containers/index.js'

import {
    Home,
    SignUp,
    SignIn,
} from 'components/containers/index';

const App = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={SignUp} />
            <Route exact path='/' component={SignIn} />
        </Switch>
    </BrowserRouter>
)

export default App;
