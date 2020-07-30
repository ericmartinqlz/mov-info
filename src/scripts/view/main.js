import '../component/movie-list.js';
import DataSource from '../data/data-source.js';
import DataDetails from '../data/data-details.js';
import DataCredits from '../data/data-credits.js';

const main = () => {
    // Membuat Movie-List - API
    const movieListElement = document.querySelector("movie-list");
    const displayCariDulu = document.getElementById('cariDulu');
    const buttonSearch = document.getElementById('searchButtonElement');
    const valueSearch = document.getElementById('searchFilm');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(valueSearch.value);
            renderResult(result);
            displayCariDulu.innerText = `Menampilkan ${result.length} hasil dari ${valueSearch.value}`;
        } catch (message) {
            fallbackResult(message)
        }
    };

        const renderResult = results => {
            movieListElement.movies = results;
       };
    
        const fallbackResult = message => {
            movieListElement.renderError(message);
        };

    buttonSearch.addEventListener('click', onButtonSearchClicked);

    // Modal-Details
    const modalDetailsElement = document.querySelector("modal-details");

    document.addEventListener('click', async function(element){
        if(element.target.classList.contains('overlay-movie-details')){
            try{
                const movieID = element.target.dataset.movieid;
                const movieDetails = await DataDetails.tampilkanDetails(movieID);
                const movieCredits = await DataCredits.tampilkanCredits(movieID);
                modalMovieDetails(movieDetails, movieCredits)
            }
            catch(message){
                console.log(message);
            }
        }
    });

    function modalMovieDetails(movieDetails, movieCredits){
        const movDetails = showMovieDetails(movieDetails, movieCredits);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = movDetails;
    }

    function showMovieDetails(movieDetails, movieCredits){
        let actors = '';
        for(let i= 0; i < 10; i++){
            actors += `
            <div class="card card-body card-body-actor" id="card-body-actor-${i}">
                <img src="https://image.tmdb.org/t/p/w500/${movieCredits[i].profile_path}" width="200px" alt="No Image">
                <p>${movieCredits[i].name}</p>
            </div>
            `;
        }

        return `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}" alt="No Image" class="img-fluid">
                    <p><strong>Vote Average : </strong>${movieDetails.vote_average}</p>
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${movieDetails.title} <span style="color:grey;">(${movieDetails.release_date})</span></h4></li>
                        <li class="list-group-item"><strong>Production Companie : </strong>${movieDetails.production_companies[0].name}</li>
                        <li class="list-group-item"><strong>Popularity : </strong>${movieDetails.popularity}</li>
                        <li class="list-group-item"><strong>Overview</strong>: <br>${movieDetails.overview}</li>
                    </ul>
                </div>
            </div>
            
                <div class="container-fluid py-2">
                    <h4 class="font-weight-light">Crew</h4>
                    <div class="d-flex flex-row flex-nowrap card-actor">
                        ${actors}
                    </div>
                </div>
            
        </div>
        `;
    }
}

export default main;