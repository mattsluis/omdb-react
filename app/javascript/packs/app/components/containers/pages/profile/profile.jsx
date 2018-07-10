import React, { Component } from 'react';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import {createUser} from 'middleware/user_api';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}
