const locadorModel = require('../models/Locador');

class locadorController {
  async query(query){
    const search = locadorModel.query(query)
    return search
  }

  async count(){
    const count = locadorModel.count();
    return count
  }

  async select(condition){
    const select = locadorModel.select(condition);
    return select
  }

  async selectAll(){
    const select = locadorModel.selectAll();
    return select
  }

  async create(json, names){
    const create = locadorModel.create(json, names);
    return create
  }

  async delete(condition){
    const deleteLocador = locadorModel.delete(condition);
    return deleteLocador
  }
}


module.exports = new locadorController();