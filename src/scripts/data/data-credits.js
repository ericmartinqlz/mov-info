class DataCredits {
    static tampilkanCredits(movieID) {
        const api_key = '2e58f367c4b203847995c13936694f5b';
        const baseURL = 'https://api.themoviedb.org/3/';
        return fetch(`${baseURL}movie/${movieID}/credits?api_key=${api_key}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.cast){
                return Promise.resolve(responseJson.cast);
            } else{
                return Promise.reject(`${movieID} is not found`);
            }
        })
    }
}

export default DataCredits;