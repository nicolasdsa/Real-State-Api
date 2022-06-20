const express = require("express");
const router = express.Router();
const Imovel = require("./Imovel");
const create = require('./create');
const deleteImovel = require('./delete');

router.get("/", Imovel);
router.post('/', create);
router.delete('/', deleteImovel);
module.exports = router;