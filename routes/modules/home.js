//Section Setting the variable
const express = require('express')
const router = express.Router()
const userDataBase = require("../../models/userInfo");

//Section route
//todo keeping the login page or not
router.get("/", (req, res) => {
  //note 此設定為若從不同網站過來的時候，可以保持在登入狀態
  if (req.session.login) {
    res.render('back', { userName: req.session.name});
  }
  res.render("index");
});

//todo Check if already login or not
router.post("/", (req, res) => {
  const { email, password } = req.body; //解構賦值((Destructuring assignment)

  userDataBase
    .findOne({ email, password })
    .lean()
    .then((userInfo) => {
     if (userInfo) {
       //search and compare the user info
       //note 在session裡面新增兩個key-value
       req.session.login = true;
       req.session.name = userInfo.firstName;
       // console.log(req.session)

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

// todo logout and destroy the record

router.get('/logout', (req, res) => {
  req.session.destroy()
  console.log("Already destroy the session")
  res.redirect("/")
})


module.exports = router