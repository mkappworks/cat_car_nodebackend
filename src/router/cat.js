const express = require("express");
const router = express.Router();

const catController = require("../controller/cat_controller");

router.get("/", catController);

module.exports = router;
