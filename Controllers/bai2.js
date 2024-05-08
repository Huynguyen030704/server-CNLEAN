// controllers/dataController.js
const bai2 = require("../Models/Bai2s/bai2Data");
const Question2 = require("../Models/Bai2s/Cauhoi25s");

exports.addQuestion = async (req, res) => {
  try {
    const { id, text, options } = req.body;
    const question = new Question2({ id, text, options });
    await question.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Question = async (req, res) => {
  try {
    const questions = await Question2.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createData = async (req, res) => {
  const { name, selectedAnswers, score } = req.body;
  console.log(selectedAnswers);
  try {
    const newData = new bai2({ name, selectedAnswers, score });
    const savedData = await newData.save();
    console.log(savedData);
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
};

exports.renderData = async (req, res) => {
  try {
    const results = await bai2.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Error fetching results" });
  }
};
