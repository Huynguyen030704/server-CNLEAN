
// controllers/dataController.js
const bai1 = require("../Models/Bai1/bai1Data");
const Question = require("../Models/Bai1/Cauhoi1");

exports.addQuestion = async (req, res) => {
  try {
    const { id, text, options } = req.body;
    const question = new Question({ id, text, options });
    await question.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Question = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createData = async (req, res) => {

  const { name, selectedAnswers, score } = req.body;
  console.log(selectedAnswers);
  try {
    const newData = new bai1({ name, selectedAnswers, score });
    const savedData = await newData.save();
    console.log(savedData);
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
};