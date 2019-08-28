import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getMovies } from 'actions/omdb_actions';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import Style from './style.scss';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
        };
    }

    handleChange(val) {
        this.setState({
            search: Object.assign({}, this.state.search, val)
        });
    }

    handleSearch = () => {
        const term = this.state.search.term;
        this.props.getMovies(term);
    }

    render() {
        const searchInputProps = {
            inputChange: (event) => {this.handleChange({term: event.target.value})},
        };

        const searchBtnProps = {
            buttonText: "Search",
            onClick: this.handleSearch,
        };

        return (
            <div>
                <Input {...searchInputProps}/>
                <Button {...searchBtnProps}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        query: state.movieReducer.query,
        results: state.movieReducer.results
    }
};

export default connect(mapStateToProps, { getMovies })(SearchBox);
