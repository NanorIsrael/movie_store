const BASEURL = "http://www.omdbapi.com/?apikey=1fc42e86&";

class MovieClient {
    constructor() {
        this.baseUrl = BASEURL;
    }

    getAllMovies() {
        console.log("I have been called")
            makeAjaxRequest(this.baseUrl + 'i=tt3896198', "GET",  (error, response) => {
            if (error) {
              console.error(error);
            } else {
              console.log(response);
            }
        })
    }
    getMovieBySearch(title, callback) {
        console.log("I have been called")
      makeAjaxRequest(this.baseUrl + `t=${title}`, "GET",  callback)
    }

    // makeAjaxRequest(url, )
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
