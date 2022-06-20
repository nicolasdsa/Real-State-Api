const express = require("express");
const router = express.Router();
const locador = require("./locador");
const create = require('./create');
const deleteLocador = require('./delete');

router.get("/", locador);
router.post("/", create);
router.delete('/', deleteLocador);
module.exports = router;