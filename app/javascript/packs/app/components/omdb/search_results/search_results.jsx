import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Style from './style.scss';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    componentDidMount() {
        console.log("mounting. here are props.", this.props);
    }

    generateResults() {
        console.log("generating results", this.props)
        const { results } = this.props;
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
        return null
    }

    render() {
        console.log("rendering", this.props)
        return (
            <ul>
                {this.generateResults()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.movieReducer.results
    }
};


export default connect(mapStateToProps)(SearchResults);
