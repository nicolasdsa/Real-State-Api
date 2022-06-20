const validaModel = require('../models/Valida');

class validaController {

  async selectAll(){
    const select = validaModel.selectAll()
    return select
  }

  async select(condition){
    const select = validaModel.select(condition)
    return select
  }

  async delete(condition){
    const deleteValida = validaModel.delete(condition);
    return deleteValida
  }

  async create(json, names){
    const create = validaModel.create(json, names);
    return create
  }
}

module.exports = new validaController();