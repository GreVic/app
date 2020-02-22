//const baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_genres=18&with_original_language=ca&sort_by=runtime.asc"
const languages = document.querySelector("#language");
const genres = document.querySelector("#genre");
//const adults = document.querySelector("#adult");

//&with_original_language=en

function apiMaster() {
  const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=62706964a54757878e9737ac5a8ceafc&with_original_language=${languages.value}&with_genres=${genres.value}`;
  //&include_adult=${adults.value == "true"} checkbox?

  function getData(baseURL) {
    axios
      .get(baseURL)
      .then(movies => {
        console.log(movies);
        return movies;
      })
      .catch(err => console.log(err));
  }
  return getData(baseURL);
}

languages.addEventListener("change", apiMaster);
genres.addEventListener("change", apiMaster);
//adults.addEventListener("change", apiMaster);
apiMaster();

// function apiLanguage () {
//   const english = languageEnglish.
// }
