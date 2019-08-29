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
            dispatch({
                type: SET_MOVIES,
                payload: response.data.Search,
            })
        })
        .catch(err => console.log(err));
};

export const getDetails = movieId => dispatch => {
    const url = `${DETAILS_URL+movieId}`;
    dispatch({ type: START_SET_DETAILS });
    axios
        .get(url)
        .then(response => {
            dispatch({
                type: SET_DETAILS,
                payload: response.data,
            })
        })
        .catch(err => console.log(err));
}
