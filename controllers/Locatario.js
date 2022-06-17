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

  async selectAll(){
    const select = locatarioModel.selectAll()
    return select
  }
}


module.exports = new locadorController();