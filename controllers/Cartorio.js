const cartorioModel = require('../models/Cartorio');

class cartorioController {

  async selectAll(){
    const select = cartorioModel.selectAll();
    return select
  }

  
  async select(condition){
    const select = cartorioModel.select(condition);
    return select
  }
}

module.exports = new cartorioController();