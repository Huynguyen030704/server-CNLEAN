const cors = require("cors");
const express = require("express");
require("dotenv").config();
const bai1Router = require("./Routers/bai1");
const bai2Router = require("./Routers/bai2");
const authRouter = require("./Routers/Auth");

let connectDB = require("./connectMongo");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bai1Router);
app.use(bai2Router);
app.use(authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port " + PORT);
});
