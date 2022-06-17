const Model = require("../utils/model");

class validaModel extends Model {
  constructor() {
    super("Valida");
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new validaModel();