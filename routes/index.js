const express = require("express");
const router = express.Router();
const axios = require("axios");


/* GET home page */
router.get("/", (req, res, next) => {
  return res.render("index");
});

router.get("/movie/:id", (req, res, next) => {

  const movieId = req.params.id;

  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=62706964a54757878e9737ac5a8ceafc`)
    .then((results) => {
      return res.render("passport/card", { movie: results.data });
    })
    .catch(err => console.log(err));
})


// router.get("/movie/:id", (req, res, next) => {
//   const movieId = req.params.id;
//   const movieTitle = data.results.original_title;
//   axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=62706964a54757878e9737ac5a8ceafc`)

//     .then((results) => {
//       return res.render("passport/card", { movieTitle });
//     })
//     .catch(err => console.log(err));
// })

module.exports = router;
