const vistoraModel = require('../models/Vistora');

class vistoraController {

  async selectAll(){
    const select = vistoraModel.selectAll()
    return select
  }

  async select(condition){
    const select = vistoraModel.select(condition);
    return select
  }
}

module.exports = new vistoraController();