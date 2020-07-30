class DataSource {
    static searchMovie(keyword) {
        const api_key = '2e58f367c4b203847995c13936694f5b';
        const baseURL = 'https://api.themoviedb.org/3/';
        return fetch(`${baseURL}search/movie?api_key=${api_key}&query=${keyword}&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;