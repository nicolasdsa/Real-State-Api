const contratoModel = require('../models/Contrato');
const encerraController = require('./Encerra');
const validaController = require('./Valida');
const vistoraController = require('./Vistora')
const vistoriaController = require('./Vistoria');
const cartorioController = require('./Cartorio');

class contratoController {
  async selectAll(){
    const select = await validaModel.selectAll()
    return select
  }

  async sum(){
    const sum = await contratoModel.sum();
    return sum
  }

  async information(){
    const informationVistoria = await vistoriaController.selectAll();
    const informationVistora = await vistoraController.selectAll();
    const informationEncerra = await encerraController.selectAll();
    const informationValida = await validaController.selectAll();
    const informationContrato = await contratoModel.selectAll();
    const informationCartorio = await cartorioController.selectAll();
    console.log(informationVistoria[0]);
    
    const result = {informationVistoria: informationVistoria[0], informationVistora: informationVistora[0], informationEncerra: informationEncerra[0], informationValida: informationValida[0], informationContrato: informationContrato[0], informationCartorio: informationCartorio[0]};

    return result

  }
}


module.exports = new contratoController();