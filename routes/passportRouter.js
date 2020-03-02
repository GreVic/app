const express = require("express");
const passportRouter = express.Router();
const model = require("../models/user");
const { hashPassword, checkHashed } = require("../lib/hashing");
const passport = require("passport");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

const ensureLogin = require("connect-ensure-login");

//Home
passportRouter.get("/home", (req, res, next) => {
  res.render("passport/index");
});


// Create: login
passportRouter.get("/login", isLoggedOut(), (req, res, next) => {
  res.render("passport/login");
});

passportRouter.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/signup"
  })
);

// Create: signup or register
passportRouter.get("/signup", isLoggedOut(), (req, res, next) => {
  res.render("passport/signup");
});

passportRouter.post("/signup", isLoggedOut(), async (req, res, next) => {
  const { username, useremail, password } = req.body;
  const existingUser = await model.findOne({ username });

  if (!existingUser) {
    const newUser = await model.create({
      username,
      useremail,
      password: hashPassword(password)
    });

    req.login(newUser, () => {
      return res.redirect("/home");
    });
  } else {
    res.render("passport/signup");
  }
});

//Show user info
passportRouter.get("/my-account", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.user;
    const foundObjFromId = await model.findById(id);
    return res.render("passport/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//Edit user info
passportRouter.get("/edit-account", isLoggedIn(), async (req, res) => {
  const { id } = req.user;
  const obj = await model.findById(id);
  return res.render("passport/edit", { obj, isUpdate: true });
});

passportRouter.post("/edit-account", isLoggedIn(), async (req, res) => {
  const { id } = req.user;
  const { username, useremail, password } = req.body;
  await model.findByIdAndUpdate(id, {
    username,
    useremail,
    password: hashPassword(password)
  });
  res.redirect("/my-account");
});

// Logout
passportRouter.get("/logout", isLoggedIn(), async (req, res, next) => {
  req.logout();
  res.redirect("/home");
});

//Private
passportRouter.get("/movies", isLoggedIn(), (req, res, next) => {
  res.render("passport/private");
});

module.exports = passportRouter;
