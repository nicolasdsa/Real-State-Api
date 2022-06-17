const cartorioModel = require('../models/Cartorio');

class cartorioController {

  async selectAll(){
    const select = cartorioModel.selectAll()
    return select
  }
}

module.exports = new cartorioController();