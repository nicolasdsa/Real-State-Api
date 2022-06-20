const validaController = require('../../controllers/Valida');

const route = async (req, res) => {

  const json = JSON.parse(req.body);

  const deleteEncerra = await validaController.delete(`WHERE IdContrato = '${json.Id}';`);

  res.status(200).send('Confirmado')
};

module.exports = route;