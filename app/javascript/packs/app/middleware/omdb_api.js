const omdbKey = process.env.OMDB_KEY

export default class OmdbAPI {
    static getMovies(searchTerm) {
        const url = `http://www.omdbapi.com/?apikey=${omdbKey}&s=${searchTerm}`;
        return fetch(url).then( response => {
            return response.json();
        }).catch( error => {
            return error;
        })
    }
    static getDetails(movieId) {
        const url = `http://www.omdbapi.com/?apikey=${omdbKey}&i=${movieId}&plot=full`;
        return fetch(url).then( response => {
            return response.json();
        }).catch( error => {
            return error;
        })
    }
}
