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
        const defaultImage = "https://res.cloudinary.com/dul90jusb/image/upload/v1582912162/Greevic/default_iwh7gr.png";
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
            : "https://res.cloudinary.com/dul90jusb/image/upload/v1582912162/Greevic/default_iwh7gr.png"
          }>
          <div class="card-text">
            <h3>${original_title}</h3>
            <p>${overview}</p>
            <div class="average">
              <p><h5>Language:</h5> ${original_language}</p>
              <p><h5>Vote Average:</h5> ${vote_average}</p>
            </div>
            <p><h5>Stream On:</h5> <a
            href="https://www.netflix.com/watch/80203147?trackId=13752289&tctx=0%2C0%2C462185742f6066a07c133611d5da8f57aebf5966%3A0719d4feaa7c495afcf149b867741d7bd07a582f%2C%2C"
            target="_blank"><img
              src="https://res.cloudinary.com/dul90jusb/image/upload/v1582911840/Greevic/logo-netflix_ejgyud.png"></a>
          <a href="#"><img
              src="https://res.cloudinary.com/dul90jusb/image/upload/v1582911840/Greevic/logo-amazon_ifdixq.png"></a>
          <a href="#"><img
              src="https://res.cloudinary.com/dul90jusb/image/upload/v1582911840/Greevic/logo-hbo_qkssjc.png"></a>
        </p>
            
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
