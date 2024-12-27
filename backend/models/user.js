const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" }, // Ensure role has a valid schema type
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
