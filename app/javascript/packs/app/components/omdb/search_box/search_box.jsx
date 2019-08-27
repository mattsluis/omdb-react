import React, { Component } from 'react';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import Results from 'components/omdb/search_results/search_results';


import OmbdAPI from 'middleware/omdb_api';

import Style from './style.scss';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                results: [],
                term: '',
            }
        };
    }

    handleChange(val) {
        this.setState({
            search: Object.assign({}, this.state.search, val)
        });
    }

    handleSearch = () => {
        const term = this.state.search.term;
        OmbdAPI.getMovies(term)
            .then( response => {
                const results = response.Search;
                this.setState({ search: { results: results, term: term }});
            });
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
                <Results
                    results={this.state.search.results}
                />
            </div>
        )
    }
}
