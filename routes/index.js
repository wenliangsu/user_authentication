//Section Set the variable
//for server, framework and database
const express = require("express")
const router = express.Router()

//require the home module 
const home = require("./modules/home")

// Section Router invoke
//the home page route
router.use("/", home)

// export the modules
module.exports = router