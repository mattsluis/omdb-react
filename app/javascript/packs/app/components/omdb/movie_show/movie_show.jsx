import React, { Component } from 'react';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import OmdbAPI from 'middleware/omdb_api';

import Style from './style.scss';

export default class MovieShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const movieId = this.props.movieId;
        OmdbAPI.getDetails(movieId)
            .then( response => {
                //console.log(response)
                const details = response;
                this.setState({details: details});
                console.log(this.state.details)
            });
    }
    renderDetails() {
        //const { movie } = this.state;
        console.log(this.state);
        return (
            <div>
                {/*<h1>{this.state.movie.Title}</h1>*/}
            </div>
        )
    }

    render() {


        return (
            <div>
                {this.renderDetails()}
            </div>
        )
    }
}
