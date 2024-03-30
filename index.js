
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./Routers/Auth")

const connectDB = require("./connectMongo");

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port " + PORT);
});