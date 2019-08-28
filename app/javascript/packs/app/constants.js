const OMDB_KEY = process.env.OMDB_KEY;
export const QUERY_URL = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=`
export const DETAILS_URL = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&plot=full&i=`

export const START_SEARCH = 'START_SEARCH';
export const SET_MOVIES = 'SET_MOVIES';
export const START_SET_DETAILS = 'START_SET_DETAILS';
export const SET_DETAILS = 'SET_DETAILS';
