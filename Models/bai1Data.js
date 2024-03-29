const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  name: String,
  selectedAnswers: { type: Object, required: true },
});

const Bai1 = mongoose.model("Bai1", mySchema);

module.exports = Bai1;
