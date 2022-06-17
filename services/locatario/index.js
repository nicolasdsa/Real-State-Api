const express = require("express");
const router = express.Router();
const locatario = require("./locatario");

router.get("/", locatario);


module.exports = router;