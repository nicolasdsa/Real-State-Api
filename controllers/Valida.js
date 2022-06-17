const validaModel = require('../models/Valida');

class validaController {

  async selectAll(){
    const select = validaModel.selectAll()
    return select
  }
}

module.exports = new validaController();