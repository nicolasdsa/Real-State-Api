const imovelController = require('../../controllers/Imovel');
const locadorController = require('../../controllers/Locador');
const locatarioController = require('../../controllers/locatario');

const route = async (req, res) => {
  const json = JSON.parse(req.body);
  const names = Object.keys(json).toString();
  const verifyLocador = await locadorController.select(`WHERE CPF = '${json.CPFLocador}';`);
  const verifyLocatario = await locatarioController.select(`WHERE CPF = '${json.CPFLocatario}';`);
  const verifyImovel = await imovelController.select(`WHERE Id = '${json.Id}';`);

  if(verifyLocador[0].length == 0){
    return res.status(400).send('O locador não existe');
  }

  if(verifyLocatario[0].length == 0){
    return res.status(400).send('O locatario não existe');
  }

  if(verifyImovel[0].length > 0){
    return res.status(400).send('Este id já está sendo utilizado');
  }

  const create = await imovelController.create(json, names);

    return res.status(200).send('Confirmado');
  
};

module.exports = route;