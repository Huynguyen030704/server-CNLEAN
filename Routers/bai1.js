const bai1Controller = require("../Controllers/bai1");
const express = require("express");
const router = express.Router();

router.post("/api/data", bai1Controller.createData);
router.post("/api/questions", bai1Controller.addQuestion);

router.get("/get/questions", bai1Controller.Question);

module.exports = router;
