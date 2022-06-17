const Model = require("../utils/model");

class locatarioModel extends Model {
  constructor() {
    super("Locatario");
  }
  async query(){
    return this.like('Endereco', 'ave')
  }

  async count(){
    return this.countModel();
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new locatarioModel();