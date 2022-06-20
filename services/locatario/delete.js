const locatarioController = require('../../controllers/Locatario');
const imovelController = require('../../controllers/Imovel');
const contratoController = require('../../controllers/Contrato');

const route = async (req, res) => {

  const json = JSON.parse(req.body);
  
  const verifyLocatario = await imovelController.select(`WHERE CPFLocatario = '${json.CPFLocatario}';`);
  const verifyContrato = await contratoController.select(`WHERE CPFLocatario = '${json.CPFLocatario}';`);

  if(verifyLocatario[0].length > 0){
    return res.status(400).send('O CPF do locatario já está vinculado a um imovel');
  }

  if(verifyContrato[0].length > 0){
    return res.status(400).send('O CPF do locatario já está vinculado a um contrato');
  }

  const deleteLocatario = await locatarioController.delete(`WHERE CPF = '${json.CPFLocatario}';`);

  res.status(200).send('Confirmado')
};

module.exports = route;