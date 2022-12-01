//Section Setting the variable
const express = require('express')
const router = express.Router()
const userDataBase = require("../../models/userInfo");

//Section route
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  userDataBase
    .findOne({ email, password })
    .lean()
    .then((userInfo) => {
      if (userInfo) {
        // Match the user of dataBase
        res.render("show", { userInfo });
      } else {
        // Can't match the user Info from dataBase

        res.render("index", { error: "Email or Password is not wrong" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.render("error", { error: error.message });
    });
});

module.exports = router