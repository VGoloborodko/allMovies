const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

getMovies(API_URL_POPULAR)

async function getMovies(url) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY,
        },
    });
    const respData = await response.json();
    console.log(respData);
    showMovies(respData)
}

function showMovies(data) {
    const movieList = document.querySelector('.movie-list');

    data.films.forEach(movie => {
        const movieItem = document.createElement('div')
        movieItem.classList.add('movie-list__item')
        movieItem.innerHTML = `
        <div class="image">
            <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" width="240" height="360">
        </div>
        <div class="movie-list__item--title">${movie.nameRu}</div>
        <div class="movie-list__item--genre">${movie.genres.map(genre => ` ${genre.genre}`)}</div>
        <div class="movie-list__item--rating">7</div>
        `;
    
    movieList.appendChild(movieItem);
    })
}