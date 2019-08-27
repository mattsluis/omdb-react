import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Style from './style.scss';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    generateResults() {
        const { results } = this.props;
        console.log(results)

        const list = results.map((movie, index) => {
            return (
                <li key={index}>
                    <h5>{movie.Title}</h5>
                    <p></p>
                    <Link to={movie.imdbID}>more details</Link>
                </li>
            )
        })

        return list;
    }

    render() {


        return (
            <ul>
                {this.generateResults()}
            </ul>
        )
    }
}
