const User = require("../Models/UserData");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const io = require("socket.io")(http);
require("dotenv").config();
// user.controller.js

const SECRET_KEY = process.env.SECRET_KEY;

exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    const newUser = new User({ fullname, email, password });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ userId: user._id }, SECRET_KEY);
  res.json({ token });
};
