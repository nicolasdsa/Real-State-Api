const ContratoController = require('../../controllers/Contrato');

const route = async (req, res) => {
  const information = await ContratoController.information();

  res.status(200).send({
    results: information
  })
};

module.exports = route;