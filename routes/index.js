const express = require("express");
const router = express.Router();
const model = require("../models/user");
const passport = require("passport");
const axios = require("axios");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");


/* GET home page */
router.get("/", (req, res, next) => {
  return res.render("index");
});

/*Get Movie Card */
router.get("/movie/:id", isLoggedIn(), (req, res, next) => {
  const movieId = req.params.id;
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=62706964a54757878e9737ac5a8ceafc`)
    .then((results) => {
      return res.render("passport/card", { movie: results.data });
    })
    .catch(err => console.log(err));
})



// passportRouter.get("/my-account", isLoggedIn(), async (req, res, next) => {
//   try {
//     const { id } = req.user;
//     const foundObjFromId = await model.findById(id);
//     return res.render("passport/show", { foundObjFromId });
//   } catch (err) {
//     res.send(`error: ${err}`);
//     next();
//   }
// });










module.exports = router;
