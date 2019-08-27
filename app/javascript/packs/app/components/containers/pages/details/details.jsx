import React, { Component } from 'react';

import MovieShow from 'components/omdb/movie_show/movie_show';

import OmdbAPI from 'middleware/omdb_api';

import Style from './style.scss';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        let movieId = this.props.match.url.substr(1);

        return (
            <div>
                <MovieShow movieId={movieId}/>
            </div>
        )
    }
}
