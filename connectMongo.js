const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://huynguyen030704:Huynguyen2004@cluster0.xdzqfz6.mongodb.net/CN_LEAN"
    );
    // await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect MongoDB");
  } catch (error) {
    console.log("Connect Failed " + error.messenger);
  }
};

module.exports = connectDB;
