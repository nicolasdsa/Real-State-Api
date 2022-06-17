const express = require("express");
const router = express.Router();
const Imovel = require("./Imovel");

router.get("/", Imovel);

module.exports = router;