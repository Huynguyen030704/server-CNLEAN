const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect MongoDB");
  } catch (error) {
    console.log("Connect Failed " + error.messenger);
  }
};

module.exports = connectDB;
