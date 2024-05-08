const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./Routers/user");
require("dotenv").config();

const app = express();

// Sử dụng CORS middleware
app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
// Middleware để nhận dữ liệu từ React
app.use(express.json());

// app.get('*',function(req,res){
//     res.sendFile(__dirname + '/public/views/index.html');
// });   // * means any route.



mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT);
    console.log("http://localhost:" + process.env.PORT);
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
