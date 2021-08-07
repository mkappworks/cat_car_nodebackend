const express = require("express");
const catController = require("../controller/catController");
const router = express.Router();

router.get("/", catController);

module.exports = router;
