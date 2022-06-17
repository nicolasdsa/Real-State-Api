const vistoriaModel = require('../models/Vistoria');

class vistoriaController {

  async selectAll(){
    const select = vistoriaModel.selectAll()
    return select
  }
}

module.exports = new vistoriaController();