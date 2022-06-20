const locadorController = require('../../controllers/Locador');
const imovelController = require('../../controllers/Imovel');
const contratoController = require('../../controllers/Contrato');

const route = async (req, res) => {

  const json = JSON.parse(req.body);
  
  const verifyLocador= await imovelController.select(`WHERE CPFLocador= '${json.CPFLocador}';`);
  const verifyContrato = await contratoController.select(`WHERE CPFLocador = '${json.CPFLocador}';`);

  if(verifyLocador[0].length > 0){
    return res.status(400).send('O CPF do locador já está vinculado a um imovel');
  }

  if(verifyContrato[0].length > 0){
    return res.status(400).send('O CPF do locador já está vinculado a um contrato');
  }

  const deleteLocador = await locadorController.delete(`WHERE CPF = '${json.CPFLocador}';`);

  res.status(200).send('Confirmado')
};

module.exports = route;