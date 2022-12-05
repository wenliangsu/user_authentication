//Section Setting the variable
const express = require("express");
const exphbs = require("express-handlebars");

//note 導入session 
const session = require("express-session")

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

// session setting
//note 針對session 以及cookie裡的設定值
app.use(session({
  secret: 'This a secret test for Wen', //note 此為require option, 存放在cookie中的hashed session id 
  resave: false,
  saveUninitialized: false,
  // note Maxage設定多久後cookie要消滅掉，null或是不設定則一關browder就會不見，要再重新登入
  //note httpOnly則是設定不可使用code操作cookie
  cookie : {maxAge: 60000, httpOnly: true}
}))

// router pre-treat
app.use(methodOverride("_method"));

app.use(routes)



//Section Set server listener
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
