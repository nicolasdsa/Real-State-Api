const locadorController = require('../../controllers/Locador');

const route = async (req, res) => {
  const json = JSON.parse(req.body);
  const names = Object.keys(json).toString();
  const verifyLocador = await locadorController.select(`WHERE CPF = '${json.CPF}';`);

  if(verifyLocador[0].length > 0){
    return res.status(400).send('O CPF do locador já existe');
  }

  const create = await locadorController.create(json, names);
  
  res.status(200).send('Confirmado')
};

module.exports = route;