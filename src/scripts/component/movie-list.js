import './movie-item.js';

class MovieList extends HTMLElement{
    constructor(){
        super();
    }

    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            movie-list{
                display: flex;
                justify-content: center;
            }
        </style>`;
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`;
    }
}

customElements.define("movie-list", MovieList);