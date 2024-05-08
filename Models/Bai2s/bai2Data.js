const mongoose = require("mongoose");

const mySchema2 = new mongoose.Schema({
  name: String,
  selectedAnswers: { type: Object, required: true },
  score: String,
});

const Bai2 = mongoose.model("Bai2", mySchema2);

module.exports = Bai2;
