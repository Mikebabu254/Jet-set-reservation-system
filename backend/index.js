const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API for adding a user
app.post("/addUser", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Account already exists" });
    }

    const newUser = await UserModel.create({ firstName, lastName, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
