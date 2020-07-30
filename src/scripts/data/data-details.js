class DataDetails {
    static tampilkanDetails(movieID) {
        const api_key = '2e58f367c4b203847995c13936694f5b';
        const baseURL = 'https://api.themoviedb.org/3/';
        return fetch(`${baseURL}movie/${movieID}?api_key=${api_key}&language=id`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson){
                return Promise.resolve(responseJson);
            } else{
                return Promise.reject(`${movieID} is not found`);
            }
        })
    }
}

export default DataDetails;