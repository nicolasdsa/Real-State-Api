const express = require("express");
const server = express();
const database = require('./utils/database');
const imovelRouter = require('./services/imovel');
const homeRouter = require('./services/home');
const locatarioRouter = require('./services/locatario');
const locadorRouter = require('./services/locador');
const contratoRouter = require('./services/contrato');
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(bodyParser.text());
server.use(cors());

server.listen(3000, async () => {
  await database.init();
  console.log('alo');
})

server.use("/imovel", imovelRouter);
server.use('/home', homeRouter);
server.use('/locatario' , locatarioRouter);
server.use('/locador', locadorRouter);
server.use('/contrato', contratoRouter);