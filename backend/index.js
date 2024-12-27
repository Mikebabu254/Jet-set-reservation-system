const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");
const LoginModel = require("./models/login")

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {
});






// API for adding a user
app.post("/addUser", async (req, res) => {
  const { firstName, lastName, phoneNo, email, gender, password, role } = req.body;

  if (!firstName || !lastName || !phoneNo || !email || !gender || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Account already exists" });
    }

    const newUser = await UserModel.create({ firstName, lastName, phoneNo, email, gender, password, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});





// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await LoginModel.findOne({ email });
      if (user) {
        if (user.password === password) {
          return res.status(200).json({ message: "Login successfully" });
        } else {
          return res.status(400).json({ message: "Incorrect password" });
        }
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).json({ message: "Server error", error: err.message });
    }
  });
  



app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
