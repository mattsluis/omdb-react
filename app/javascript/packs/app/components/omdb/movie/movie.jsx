import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Style from './style.scss';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <div className={Style.movieLinks}>
                <Link to={data.imdbID} className={Style.link}>
                    <h5 className={Style.title}>{data.Title}</h5>
                    <span className={Style.year}>({data.Year})</span>
                    <img src={data.Poster} className={Style.poster}/>
                </Link>
            </div>
        )
    }
}
