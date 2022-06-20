const locatarioController = require('../../controllers/Locatario');

const route = async (req, res) => {
  const json = JSON.parse(req.body);
  const names = Object.keys(json).toString();
  const verifyLocatario = await locatarioController.select(`WHERE CPF = '${json.CPF}';`);

  if(verifyLocatario[0].length > 0){
    return res.status(400).send('O CPF do locatario já existe');
  }

  const create = await locatarioController.create(json, names);

  res.status(200).send('Confirmado')
};

module.exports = route;