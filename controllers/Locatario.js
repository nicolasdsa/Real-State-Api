const locatarioModel = require('../models/Locatario');

class locadorController {
  async query(query){
    const search = locatarioModel.query(query)
    return search
  }

  async count(){
    const count = locatarioModel.count();
    return count
  }

  async select(condition){
    const select = locatarioModel.select(condition);
    return select
  }

  async selectAll(){
    const select = locatarioModel.selectAll()
    return select
  }

  async create(json, names){
    const create = locatarioModel.create(json, names);
    return create
  }

  async delete(condition){
    const deleteLocatario = locatarioModel.delete(condition);
    return deleteLocatario
  }
}


module.exports = new locadorController();