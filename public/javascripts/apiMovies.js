//const gen = require("genres");
const sorting = document.querySelector("#sorting");
//&sort_by=runtime.asc
//const baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_genres=18&with_original_language=ca&sort_by=runtime.asc"
const languages = document.querySelector("#language");
const genres = document.querySelector("#genre");
//const adults = document.querySelector("#adult");

//&with_original_language=en

const gen = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 53,
    name: "Thriller"
  }
];

const findGenres = genresToFind => gen.find(el => el.id == genresToFind).name;

function apiMaster() {
  const languagesPrint = languages.value;
  const genresPrint = genres.value;

  const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_original_language=${languages.value}&with_genres=${genres.value}&sort_by=${sorting.value}`;
  //&include_adult=${adults.value == "true"} checkbox?

  function getDataAndPrint(baseURL, languagesPrint, genresPrint) {
    document.querySelector("#movies").innerHTML = "";
    axios.get(baseURL).then(movies => {
      //console.log(movies);

      movies.data.results.forEach(data => {
        const defaultImage = "http://localhost:3001/images/default.png";
        //const moviePoster = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
        const {
          original_title,
          original_language,
          backdrop_path,
          vote_average,
          overview,
          id
        } = data;
        const card = `<div class="card"><a href="/movie/${id}"><img class="movie-image" src=${
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : "http://localhost:3001/images/default.png"
        }>
          <div class="card-text">
            <h3>${original_title}</h3>
            <p>${overview}</p>
            <div class="average">
              <p><h5>Language:</h5> ${original_language}</p>
              <p><h5>Vote Average:</h5> ${vote_average}</p>
            </div>
            <p><h5>Stream On:</h5> <a href="#">Netflix</a> | <a href="#">Amazon Prime</a>| <a href="#">HBO</a></p>
            
          </div>
          </a></div> `;

        document.querySelector("#movies").innerHTML += card;
      });

      return movies;
    });
  }

  return getDataAndPrint(baseURL, languagesPrint, genresPrint);
}

languages.addEventListener("change", apiMaster);
genres.addEventListener("change", apiMaster);
sorting.addEventListener("change", apiMaster);
//adults.addEventListener("change", apiMaster);
apiMaster();
