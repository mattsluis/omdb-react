import React, {Component} from 'react';

import SearchBox from 'components/omdb/search_box/search_box';
import SearchResults from 'components/omdb/search_results/search_results';

import OmdbApi from 'middleware/omdb_api';

import Style from './style.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <SearchBox />
                <SearchResults />
            </div>
        )
    }
}
