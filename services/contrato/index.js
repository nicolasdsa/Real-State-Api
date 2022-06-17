const express = require("express");
const router = express.Router();
const contrato = require("./contrato");

router.get("/", contrato);

module.exports = router;