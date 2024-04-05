
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
  // try {
  //   const { name, results } = req.body;
  //   // Calculate total score
  //   const totalScore = results.reduce(
  //     (acc, result) => acc + (result.isCorrect ? 1 : 0),
  //     0
  //   );
  //   // Save score to the database
  //   const result = new bai1({
  //     name: name,
  //     score: totalScore,
  //     answers: results,
  //   });
  //   await result.save();
  //   res
  //     .status(201)
  //     .json({ message: "Result submitted successfully", score: totalScore });
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
  const { name, selectedAnswers } = req.body;
  console.log(selectedAnswers);
  try {
    // Calculate total score
    const totalScore = results.reduce(
      (acc, result) => acc + (result.isCorrect ? 1 : 0),
      0
    );
    const newData = new bai1({ name, selectedAnswers, score: totalScore });
    const savedData = await newData.save();
    console.log(savedData);
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
};