import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'components/containers/home/home';

const App = (props) => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
        </div>
    </BrowserRouter>
)

export default App;
