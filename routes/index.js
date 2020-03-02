const express = require("express");
const router = express.Router();
const model = require("../models/user");
const axios = require("axios");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

/* GET home page */
router.get("/", (req, res, next) => {
  return res.render("enter", {
    layout: false
  });
});

// router.get("/", (req, res, next) => {
//   return res.render("enter");
// });

/* Movie router */
router.use("/", require("./movieRouter"));

module.exports = router;
