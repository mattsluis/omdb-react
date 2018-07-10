import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <Link to="/sign_up">Sign Up</Link>
                <Link to="/log_in">Log In</Link>
            </header>
        )
    }
}
