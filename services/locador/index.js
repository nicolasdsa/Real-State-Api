const express = require("express");
const router = express.Router();
const locador = require("./locador");

router.get("/", locador);


module.exports = router;