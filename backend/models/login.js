const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const LoginModel = mongoose.model("user", loginSchema);
module.exports = LoginModel;