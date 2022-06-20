const validaController = require('../../controllers/Valida');
const contratoController = require('../../controllers/Contrato');
const cartorioController = require('../../controllers/Cartorio');


const route = async (req, res) => {
  const json = JSON.parse(req.body);
  const names = Object.keys(json).toString();

  console.log(json);
  const verifyContrato = await contratoController.select(`WHERE Id = '${json.IdContrato}';`);
  const verifyCartorio = await cartorioController.select(`WHERE CNPJ = '${json.CNPJCartorio}';`);
  const verifyValida = await validaController.select(`WHERE IdContrato = '${json.IdContrato}';`);

  if(verifyValida[0].length > 0){
    return res.status(400).send('Este contrato já está validado');
  }

  if(verifyContrato[0].length == 0){
    return res.status(400).send('Este contrato não existe');
  }
  if(verifyCartorio[0].length == 0){
    return res.status(400).send('Este cartorio não existe');
  }

  const create = await validaController.create(json, names);

    return res.status(200).send('Confirmado');
  
};

module.exports = route;