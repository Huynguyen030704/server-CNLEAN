// backend/models/Question.js
const mongoose = require("mongoose");

const bai2Schema = new mongoose.Schema({
  id: Number,
  points: Number,
  text: String,
  options: [{ value: String, text: String, isCorrect: Boolean }],
});

module.exports = mongoose.model("Cauhoi2", bai2Schema);
