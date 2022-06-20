const imovelModel = require('../models/Imovel');


class imovelController {
  async selectAll(){
    const select = imovelModel.selectAll()
    return select
  }

  async count(){
    const count = imovelModel.countModel();
    return count
  }

  async rented(){
    const rented = imovelModel.rented();
    return rented;
  }

  async notRented(){
    const notRented = imovelModel.notRented();
    return notRented;
  }

  async create(json, names){
    const create = imovelModel.create(json, names);
    return create
  } 

  async select(condition){
    const select = imovelModel.select(condition);
    return select
  }

  async delete(condition){
    const deleteImovel = imovelModel.delete(condition);
    return deleteImovel
  }
}

module.exports = new imovelController();