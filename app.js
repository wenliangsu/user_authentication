//Section Setting the variable
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

const userDataBase = require("./models/userInfo");

const app = express();
const port = 3000;

require("./config/mongoose");

// Section Set template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Section static file, body-parser and mothod-override
// bootstrap, popper
app.use(express.static("public"));

//body-parser
app.use(express.urlencoded({ extended: true }));

// router pre-treat
app.use(methodOverride("_method"));

//Section route
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const {email, password} = req.body

  
  userDataBase
    .findOne({ email, password })
    .lean()
    .then((userInfo) => {
      if (userInfo) {
        // Match the user of dataBase
        res.render('show', { userInfo })
      } else {
        // Can't match the user Info from dataBase
        
        res.render("index", {error: "Email or Password is not wrong"});
      }
    })
    .catch((error) => {
      console.log(error)
      res.render('error', {error: error.message})
    })
});

//Section Set server listener
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
