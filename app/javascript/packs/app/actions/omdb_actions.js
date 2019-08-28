import {
    QUERY_URL, DETAILS_URL,
    START_SEARCH, SET_MOVIES, START_SET_DETAILS, SET_DETAILS }
from 'constants';

import axios from 'axios';

export const getMovies = searchTerm => dispatch => {
    const url = `${QUERY_URL+searchTerm}`;
    dispatch({ type: START_SEARCH });
    axios
        .get(url)
        .then(response => {
            console.log(response.data.Search)
            dispatch({
                type: SET_MOVIES,
                payload: response.data.Search
            })
        })
        .catch(err => console.log(err));
};


export const getDetails = movieId => {
    const url = `${DETAILS_URL+searchTerm}`;
    const urlTwo = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${movieId}&plot=full`;
    console.log(url,urlTwo)
    return fetch(url).then( response => {
        return response.json();
    }).catch( error => {
        return error;
    })
}
