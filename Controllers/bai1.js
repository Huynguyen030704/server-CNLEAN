
// controllers/dataController.js
const bai1 = require("../Models/bai1Data");

exports.createData = async (req, res) => {
  const { name, selectedAnswers } = req.body;
  console.log(selectedAnswers);
  try {
    const newData = new bai1({ name, selectedAnswers });
    const savedData = await newData.save();
    console.log(savedData);
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
};