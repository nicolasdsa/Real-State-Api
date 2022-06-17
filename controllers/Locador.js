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

  async selectAll(){
    const select = locadorModel.selectAll()
    return select
  }
}


module.exports = new locadorController();