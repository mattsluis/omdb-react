import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import Style from './style.scss';

export default class MovieShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <div className={Style.movieContainer}>
                <h1 className={Style.movieHeader}>{data.Title}</h1>
                <p className={Style.plot}>{data.Plot}</p>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}
