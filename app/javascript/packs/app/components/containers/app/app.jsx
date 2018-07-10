import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from 'components/layouts/header/header';

import Router from 'components/containers/router/router';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Router />
                </div>
            </BrowserRouter>
        )
    }
}
