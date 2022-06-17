const Model = require("../utils/model");

class locadorModel extends Model {
  constructor() {
    super("Locador");
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

module.exports = new locadorModel();