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

}


module.exports = new imovelController();