import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Movie from '../movie/movie';

import Style from './style.scss';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    generateResults() {
        const { results } = this.props;
        const list = results.map((movie, index) => {
            return (
                <li key={index}>
                    <Movie data={movie}/>
                </li>
            )
        })
        return list;
    }

    render() {
        return (
            <ul className={Style.resultsList}>
                {this.generateResults()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        query: state.movieReducer.query,
        results: state.movieReducer.results
    }
};

export default connect(mapStateToProps)(SearchResults);
