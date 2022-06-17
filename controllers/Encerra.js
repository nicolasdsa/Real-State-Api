const encerraModel = require('../models/Encerra');

class encerraController {

  async selectAll(){
    const select = encerraModel.selectAll()
    return select
  }
}

module.exports = new encerraController();