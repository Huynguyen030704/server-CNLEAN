
const express = require("express");
const authController = require("../Controllers/auth");
const bai1Controller = require("../Controllers/bai1");
const router = express.Router();

// POST Sign Up
router.post("/register", authController.registerUser);

// GET Log In - Send All users Data to client
router.post("/login", authController.login);



module.exports = router;