const vistoraModel = require('../models/Vistora');

class vistoraController {

  async selectAll(){
    const select = vistoraModel.selectAll()
    return select
  }
}

module.exports = new vistoraController();