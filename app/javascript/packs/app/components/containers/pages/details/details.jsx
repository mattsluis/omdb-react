import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieShow from 'components/omdb/movie_show/movie_show';

import { getDetails } from 'actions/omdb_actions';

import Style from './style.scss';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.props.getDetails(movieId);

    }
    renderData() {
        const { details } = this.props;
        return (
            <MovieShow data={details}/>
        )
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        details: state.movieReducer.details,
    }
};

export default connect(mapStateToProps, { getDetails })(Details);
