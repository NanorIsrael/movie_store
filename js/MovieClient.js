const BASEURL = "https://www.omdbapi.com/?apikey=1fc42e86&";
class MovieClient {
    constructor() {
        this.baseUrl = BASEURL;
    }

    getAllMovies(pageNumber, callback) {
      makeAjaxRequest(this.baseUrl + `&s=movie&page=${pageNumber}`, "GET",  callback);
    }
    getMovieBySearch(title, callback) {
      makeAjaxRequest(this.baseUrl + `t=${title}`, "GET",  callback);
    }
}

function makeAjaxRequest(url, method, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText);
      } else {
        callback(new Error(`Request failed with status ${xhr.status}`));
      }
    }
  };

  xhr.send();
}

window.client = new MovieClient();
