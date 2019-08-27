import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import SearchBox from 'components/omdb/search_box/search_box';

import Style from './style.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                term: "",
                result: {},
            }
        };
    }

    render() {
        return (
            <div>
                <SearchBox />
            </div>
        )
    }
}
