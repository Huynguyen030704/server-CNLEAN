const bai2Controller = require("../Controllers/bai2");
const express = require("express");
const router = express.Router();

router.post("/api/data2", bai2Controller.createData);
router.post("/api/questions2", bai2Controller.addQuestion);

router.get("/get/questions2", bai2Controller.Question);
router.get("/get/results2", bai2Controller.renderData);

module.exports = router;
