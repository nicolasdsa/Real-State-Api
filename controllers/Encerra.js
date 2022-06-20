const encerraModel = require('../models/Encerra');

class encerraController {

  async selectAll(){
    const select = encerraModel.selectAll()
    return select
  }

  async delete(condition){
    const deleteEncerra = encerraModel.delete(condition);
    return deleteEncerra
  }

  async select(condition){
    const select = encerraModel.select(condition)
    return select
  }

  async create(json, names){
    const create = encerraModel.create(json, names);
    return create
  }

}

module.exports = new encerraController();