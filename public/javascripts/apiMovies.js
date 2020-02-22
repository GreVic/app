const gen = require("genres.js")

//const baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_genres=18&with_original_language=ca&sort_by=runtime.asc"
const languages = document.querySelector("#language");
const genres = document.querySelector("#genre");
//const adults = document.querySelector("#adult");

//&with_original_language=en

// const gen = [{
//   "id": 28,
//   "name": "Action"
// },
// {
//   "id": 12,
//   "name": "Adventure"
// },
// {
//   "id": 16,
//   "name": "Animation"
// },
// {
//   "id": 35,
//   "name": "Comedy"
// },
// {
//   "id": 80,
//   "name": "Crime"
// },
// {
//   "id": 18,
//   "name": "Drama"
// },
// {
//   "id": 14,
//   "name": "Fantasy"
// },
// {
//   "id": 27,
//   "name": "Horror"
// },
// {
//   "id": 9648,
//   "name": "Mystery"
// },
// {
//   "id": 10749,
//   "name": "Romance"
// },
// {
//   "id": 878,
//   "name": "Science Fiction"
// },
// {
//   "id": 53,
//   "name": "Thriller"
// }]


const findGenres = genresToFind => gen.find(el => el.id == genresToFind).name

function apiMaster() {
  const languagesPrint = languages.value;
  const genresPrint = genres.value;

  const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_original_language=${languages.value}&with_genres=${genres.value}`;
  //&include_adult=${adults.value == "true"} checkbox?

  function getDataAndPrint(baseURL, languagesPrint, genresPrint) {
    axios
      .get(baseURL)
      .then(movies => {
        console.log(movies);
        movies.data.results.forEach(data => {
          const { original_title, original_language, backdrop_path } = data;
          const title = `Title: ${original_title}, Language: ${original_language}, ${backdrop_path} `
          document.querySelector('#movies').appendChild(document.createTextNode(title))
        });
        return movies;
      });

    document.querySelector('#printGenre').innerText = findGenres(genresPrint)
  }

  return getDataAndPrint(baseURL, languagesPrint, genresPrint);
}


languages.addEventListener("change", apiMaster);
genres.addEventListener("change", apiMaster);
//adults.addEventListener("change", apiMaster);
apiMaster();
