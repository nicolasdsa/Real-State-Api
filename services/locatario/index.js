const express = require("express");
const router = express.Router();
const locatario = require("./locatario");
const create = require('./create');
const deleteLocatario = require('./delete');

router.get("/", locatario);
router.post("/", create);
router.delete('/', deleteLocatario);

module.exports = router;