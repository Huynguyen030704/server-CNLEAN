<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./Routers/Auth")

const app = express()
app.use(express.json());
app.use(cors())

app.use(authRouter);

const MONGO_URI =
  "mongodb+srv://huynguyen030704:Huynguyen2004@cluster0.xdzqfz6.mongodb.net/CN_LEAN";

// Connect Mongooes
mongoose
  .connect(MONGO_URI)
  app.listen(process.env.PORT || 5000);
  console.log("Server run Post 5000" )
=======
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./Routers/Auth")

const app = express()
app.use(express.json());
app.use(cors())

app.use(authRouter);

const MONGO_URI =
  "mongodb+srv://huynguyen030704:Huynguyen2004@cluster0.xdzqfz6.mongodb.net/CN_LEAN";



// Connect Mongooes
mongoose
  .connect(MONGO_URI)
  app.listen(process.env.PORT || 5000);
  console.log("Server run Post 5000" )
>>>>>>> 072b8df (first commit)
