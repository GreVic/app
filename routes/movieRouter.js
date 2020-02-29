const express = require("express");
const router = express.Router();
const axios = require("axios");
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Comment = require("../models/comment");

const apiCallToRetrieveMovie = movieId =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.APIKEY}`
  );

/* Get Movie Card */
// router.get("/movie/:id", isLoggedIn(), async (req, res) => {
//   const movieId = req.params.id;
//   const user = req.user;

//   const comments = await Comment.find({ movieId: movieId });

//   apiCallToRetrieveMovie(movieId)
//     .then(results => {
//       return res.render("passport/card", {
//         movie: results.data,
//         user,
//         comments
//       });
//     })
//     .catch(err => console.log(err));
// });

router.get("/movie/:movieId", isLoggedIn(), async (req, res) => {
  const { comment } = req.body;
  const { userId, movieId } = req.params;
  const user = req.user;

  await Comment.find({ commentMovie: comment, userId, movieId });

  Comment.find({ movieId })
    .populate("userId")
    .then(async comments => {
      try {
        const movie = await apiCallToRetrieveMovie(movieId);
        res.render("passport/card", { user, movie: movie.data, comments });
      } catch (error) {
        console.log(error);
      }
    });
});

/* CREATE COMMENT */
router.post("/movie/:userId/:movieId", isLoggedIn(), async (req, res) => {
  const { comment } = req.body;
  const { userId, movieId } = req.params;
  const user = req.user;

  await Comment.create({ commentMovie: comment, userId, movieId });

  Comment.find({ movieId })
    .populate("userId")
    .then(async comments => {
      try {
        const movie = await apiCallToRetrieveMovie(movieId);
        res.render("passport/card", { user, movie: movie.data, comments });
      } catch (error) {
        console.log(error);
      }
    });
});

module.exports = router;
