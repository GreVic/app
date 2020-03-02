const sorting = document.querySelector("#sorting");
const languages = document.querySelector("#language");
const genres = document.querySelector("#genre");

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

  function getDataAndPrint(baseURL, languagesPrint, genresPrint) {
    document.querySelector("#movies").innerHTML = "";
    axios.get(baseURL).then(movies => {

      movies.data.results.forEach(data => {
        const defaultImage =
          "https://res.cloudinary.com/dul90jusb/image/upload/v1582912162/Greevic/default_iwh7gr.png";
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
            : "https://res.cloudinary.com/dul90jusb/image/upload/v1582912162/Greevic/default_iwh7gr.png"
          }>
          <div class="card-text">
            <h3>${original_title}</h3>
            <p>${overview}</p>
            <div class="average">
              <p><h5>Language:</h5> ${original_language}</p>
              <p><h5>Vote Average:</h5> ${vote_average}</p>
            </div>
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
apiMaster();
