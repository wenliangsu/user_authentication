const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfoSchema = new Schema({
  firstName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("userInfoData", userInfoSchema);
