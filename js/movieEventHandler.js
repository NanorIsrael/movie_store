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
        }
        ]

    const moviesContainer = document.getElementById("movies_container");

    sampleResp.forEach(movie => {
        updateMoviesContainer(movie, moviesContainer)
    });

    const searchBox = document.getElementById("search_box");
    const searchBtn = document.getElementById("search_btn");
    
    let searchItem = searchBox.value;
    searchBox.addEventListener('input', handleInputChange)
    function handleInputChange(event) {
        searchItem = event.target.value;
    }
    
    searchBtn.addEventListener('click', searchMovie);
    function searchMovie(event) {
        console.log(searchItem)
        if (searchItem != '') {
            let message = '';
            window.client.getMovieBySearch(searchItem, (error, response) => {
                if (error) {
                  console.error(error);
                } else {
                    console.log("--------->", response)
                    if (!response) {
                        message = "<p>Loading...</p>"
                        moviesContainer.innerHTML = message;
                    } else {
                    const movie = JSON.parse(response)
                    if (movie.Response) {
                        moviesContainer.innerHTML= "";
                        updateMoviesContainer(movie, moviesContainer)
                    } else {
                        message = "<p>Search item can not be found</p>"
                        moviesContainer.innerHTML = message;
                    }
                }
                }
            })
        }
    }
    
    

})

function updateMoviesContainer(movie, moviesContainer) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const title = document.createElement("p");
    const year = document.createElement("p");
    const button = document.createElement("button");
    
    img.src = movie.Poster;
    img.alt = `${movie.Title} poster`;
    title.innerHTML = `<strong>Title</strong>: ${movie.Title}`;
    year.innerHTML = `<strong>Released year</strong>: ${movie.Year}`;
    button.textContent = "View more details";

    figcaption.appendChild(title);
    figcaption.appendChild(year);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figcaption.appendChild(button);


    button.addEventListener('click', function(event) {
        if (button.textContent.includes('more'))
        {
            const newfigcaption = document.createElement("figcaption");
            Object.keys(movie).forEach(prop => {
                const key = document.createElement("p");
                key.innerHTML = `<strong>${prop}</strong>: ${movie[prop]}`;
    
                newfigcaption.appendChild(key)
            })
    
            button.textContent = "View less details"
            newfigcaption.appendChild(button);
            figure.replaceChild(newfigcaption, figcaption)
        }
      
    })

    moviesContainer.append(figure);

}


