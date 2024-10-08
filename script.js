const genres = {};
const movies = [];

function showMovieForm() {
    const title = prompt('Enter Movie Title:');
    if (!title) return;

    const genre = prompt('Enter Movie Genre:');
    if (!genre) return;

    if (!genres[genre]) {
        genres[genre] = [];
        
        // Add new genre section
        const newSection = document.createElement('section');
        newSection.id = genre.toLowerCase();
        newSection.innerHTML = `<h2>${genre} Movies</h2><ul></ul>`;
        document.querySelector('main').appendChild(newSection);

        // Add new genre to navigation
        const genreNav = document.getElementById('genre-nav');
        const newNavItem = document.createElement('li');
        newNavItem.innerHTML = `<a href="#${genre.toLowerCase()}">${genre}</a>`;
        genreNav.appendChild(newNavItem);
    }

    genres[genre].push(title);
    displayMovies();
}

function displayMovies() {
    for (const genre in genres) {
        const genreSection = document.querySelector(`#${genre.toLowerCase()} ul`);
        genreSection.innerHTML = '';
        genres[genre].forEach(title => {
            const listItem = document.createElement('li');
            listItem.textContent = title;
            genreSection.appendChild(listItem);
        });
    }
}
