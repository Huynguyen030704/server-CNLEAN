// backend/models/Question.js
const mongoose = require("mongoose");

const bai1Schema = new mongoose.Schema({
  id: Number,
  points: Number,
  text: String,
  options: [{ value: String, text: String, isCorrect: Boolean }],
});

module.exports = mongoose.model("Cauhoi1", bai1Schema);
