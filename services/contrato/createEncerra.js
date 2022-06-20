const encerraController = require('../../controllers/Encerra');
const contratoController = require('../../controllers/Contrato');
const cartorioController = require('../../controllers/Cartorio');


const route = async (req, res) => {
  const json = JSON.parse(req.body);
  const names = Object.keys(json).toString();

  console.log(json);
  const verifyContrato = await contratoController.select(`WHERE Id = '${json.IdContrato}';`);
  const verifyCartorio = await cartorioController.select(`WHERE CNPJ = '${json.CNPJCartorio}';`);
  const verifyEncerra = await encerraController.select(`WHERE IdContrato = '${json.IdContrato}';`);

  if(verifyEncerra[0].length > 0){
    return res.status(400).send('Este contrato já está encerrado');
  }

  if(verifyContrato[0].length == 0){
    return res.status(400).send('Este contrato não existe');
  }
  console.log(verifyCartorio[0])

  if(verifyCartorio[0].length == 0){
    return res.status(400).send('Este cartorio não existe');
  }

  const create = await encerraController.create(json, names);

    return res.status(200).send('Confirmado');
  
};

module.exports = route;