
document.addEventListener('DOMContentLoaded', function(event) {
    const sampleResp = [
        {
            Title:"Guardians of the Galaxy Vol. 2",
            Year:"2017",
            Rated:"PG-13",
            Released:"05 May 2017",
            Runtime:"136 min",
            Genre:"Action, Adventure, Comedy",
            Director:"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning",
            Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",
            Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
            Language:"English","Country":"United States",
            Awards:"Nominated for 1 Oscar. 15 wins & 60 nominations total",
            Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
            Metascore:"67",
            imdbRating:"7.6",
            imdbVotes:"712,189",
            imdbID:"tt3896198",
            Type:"movie",
            Website:"N/A",
            Response:"True"
        },
        {
            Title:"Guardians of the Galaxy Vol. 2",
            Year:"2017",
            Rated:"PG-13",
            Released:"05 May 2017",
            Runtime:"136 min",
            Genre:"Action, Adventure, Comedy",
            Director:"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning",
            Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",
            Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
            Language:"English","Country":"United States",
            Awards:"Nominated for 1 Oscar. 15 wins & 60 nominations total",
            Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
            Metascore:"67",
            imdbRating:"7.6",
            imdbVotes:"712,189",
            imdbID:"tt3896198",
            Type:"movie",
            Website:"N/A",
            Response:"True"
        },
        {
            Title:"Guardians of the Galaxy Vol. 2",
            Year:"2017",
            Rated:"PG-13",
            Released:"05 May 2017",
            Runtime:"136 min",
            Genre:"Action, Adventure, Comedy",
            Director:"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning",
            Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",
            Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
            Language:"English","Country":"United States",
            Awards:"Nominated for 1 Oscar. 15 wins & 60 nominations total",
            Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
            Metascore:"67",
            imdbRating:"7.6",
            imdbVotes:"712,189",
            imdbID:"tt3896198",
            Type:"movie",
            Website:"N/A",
            Response:"True"
        },
        {
            Title:"Guardians of the Galaxy Vol. 2",
            Year:"2017",
            Rated:"PG-13",
            Released:"05 May 2017",
            Runtime:"136 min",
            Genre:"Action, Adventure, Comedy",
            Director:"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning",
            Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",
            Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
            Language:"English","Country":"United States",
            Awards:"Nominated for 1 Oscar. 15 wins & 60 nominations total",
            Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
            Metascore:"67",
            imdbRating:"7.6",
            imdbVotes:"712,189",
            imdbID:"tt3896198",
            Type:"movie",
            Website:"N/A",
            Response:"True"
        }
        ]

    const moviesContainer = document.getElementById("movies_container");
    const searchBox = document.getElementById("search_box");
    const searchForm = document.getElementById("search_form");
    const loadMore = document.getElementById("load_more");

    
    handleLoadMore(moviesContainer);
    loadMore.addEventListener('click', () => handleLoadMore(moviesContainer));
    searchBox.addEventListener('input', handleInputChange);
   
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        searchMovie(moviesContainer)
    });
})

let searchItem = ''
function handleInputChange(event) {
    searchItem = event.target.value;
}

function updateMoviesContainer(movie) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const title = document.createElement("h3");
    const year = document.createElement("h3");
    
    img.src = movie.Poster;
    img.alt = `${movie.Title} poster`;
    title.innerHTML = `<strong>Title</strong>: ${movie.Title}`;
    year.innerHTML = `<strong>Released year</strong>: ${movie.Year}`;

    figcaption.appendChild(title);
    figcaption.appendChild(year);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    document.querySelector('#load_more').hidden = true;

    return {
        figure, 
        figcaption
    };
}

function searchMovie(moviesContainer) {
    if (searchItem != '') {
        let message = '';
        try {
            window.client.getMovieBySearch(searchItem, (error, response) => {
                if (error) {
                  console.error(error);
                  message = "Oops! Something went wrong.<br />This page didn't load correctly. Please try again later."
                  moviesContainer.innerHTML = message;
                } else {
                    if (!response) {
                        message = "<p>Loading...</p>"
                        moviesContainer.innerHTML = message;
                    } else {
                    const movie = JSON.parse(response)
                    if (movie.Response) {
                        handleView(movie, moviesContainer);
                    } else {
                        message = "<p>Search item can not be found</p>"
                        moviesContainer.innerHTML = message;
                    }
                }
                }
            })
        } catch(error) {
            message = "Oops! Something went wrong.<br />This page didn't load correctly. Please try again later."
            moviesContainer.innerHTML = message;
        }
    }
}
function getAllhMovie(pageNumber = 1, moviesContainer) {
        try {
            window.client.getAllMovies(pageNumber, (error, response) => {
                if (error) {
                  console.error(error);
                  message = "Oops! Something went wrong.<br />This page didn't load correctly. Please try again later."
                  moviesContainer.innerHTML = message;
                } else {  
                    if (!response) {
                        message = "<p>Loading...</p>"
                        moviesContainer.innerHTML = message;
                    } else {
                        const movies = JSON.parse(response)
                        movies.Search.forEach(movie => {
                            const {figure} = updateMoviesContainer(movie)
                                moviesContainer.append(figure);
                        });
                        document.querySelector('#load_more').hidden = false;
                    }
                }
            })
        } catch(error) {
            message = "Oops! Something went wrong.<br />This page didn't load correctly. Please try again later."
            moviesContainer.innerHTML = message;
        }
}


function handleView(movie, moviesContainer) {
    document.querySelector('#load_more').hidden = true;
    const searchContainer = document.getElementById('movies_search_container'); 
    moviesContainer.innerHTML= "";
    const hero = document.querySelector('.hero');
    hero.textContent = "search result: "
    hero.classList.add('search__result');
    const {figure, figcaption} = updateMoviesContainer(movie)
    const moreButton = document.createElement("button");
    const lessButton = document.createElement("button");
    moreButton.textContent = "view more details";
    lessButton.textContent = "view less details"
    figcaption.appendChild(moreButton);
    searchContainer.appendChild(figure);

    const newfigcaption = document.createElement("figcaption");
    Object.keys(movie).forEach(prop => {
        if (prop !== 'Poster' && prop !== 'Response') {
            const key = document.createElement("h3");
            if (prop === 'Ratings') {
                key.innerHTML = `<strong>${prop}</strong>: 
                <ul>
                   ${movie[prop].map(rating => {
                      return ( `${
                            Object.keys(rating).map(k => `<li><strong>${k}</strong>: ${rating[k]}</li>`)
                        }`)
                    })} 
                </ul>
                `
            } else {
                key.innerHTML = `<strong>${prop}</strong>: ${movie[prop]}`;
            }
            newfigcaption.appendChild(key);
        }
    
    })
    newfigcaption.appendChild(lessButton);
    moreButton.addEventListener('click', function(){
        figure.replaceChild(newfigcaption, figcaption)
    });
    lessButton.addEventListener('click', function(){
        figcaption.appendChild(moreButton);
        figure.replaceChild(figcaption, newfigcaption)
    });
}

let pageNumber = 1;
function handleLoadMore(moviesContainer) {
    getAllhMovie(pageNumber, moviesContainer);
    pageNumber += 1;
}