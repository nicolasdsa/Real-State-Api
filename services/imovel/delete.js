const vistoraController = require('../../controllers/Vistora');
const imovelController = require('../../controllers/Imovel');
const contratoController = require('../../controllers/Contrato');

const route = async (req, res) => {

  const json = JSON.parse(req.body);
  
  const verifyVistora= await vistoraController.select(`WHERE IdImovel= '${json.Id}';`);
  const verifyContrato = await contratoController.select(`WHERE IdImovel = '${json.Id}';`);

  if(verifyVistora[0].length > 0){
    return res.status(400).send('O Imovel já está vinculado a uma vistoria');
  }

  if(verifyContrato[0].length > 0){
    return res.status(400).send('O Imovel já está vinculado a um contrato');
  }

  const deleteLocador = await imovelController.delete(`WHERE Id = '${json.Id}';`);

  res.status(200).send('Confirmado')
};

module.exports = route;