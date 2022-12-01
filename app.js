//Section Setting the variable
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

const routes = require("./routes")

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

app.use(routes)



//Section Set server listener
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
