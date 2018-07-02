const omdbKey = process.env.OMDB_KEY

export default class OmdbApi {
    static getMovies(searchTerm) {
        const url = `http://www.omdbapi.com/?apikey=${omdbKey}&s=${searchTerm}&plot=full`;
        console.log(url);
        return fetch(url).then( response => {
            return response.json();
        }).catch( error => {
            return error;
        })
    }
}


// export function get(url) {
//     return fetch(url).then(response => {
//         return response.json();
//     }).catch(error => {
//         return error;
//     });
// }
