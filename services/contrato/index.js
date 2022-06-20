const express = require("express");
const router = express.Router();
const contrato = require("./contrato");
const deleteEncerra = require('./deleteEncerra');
const deleteValida = require('./deleteValida');
const createValida = require('./createValida');
const createEncerra = require('./createEncerra');

router.get("/", contrato);
router.post('/valida', createValida);
router.post('/encerra', createEncerra);
router.delete('/encerra', deleteEncerra);
router.delete('/valida', deleteValida);
module.exports = router;