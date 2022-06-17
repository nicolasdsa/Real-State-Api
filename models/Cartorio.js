const Model = require("../utils/model");

class cartorioModel extends Model {
  constructor() {
    super("Cartorio");
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new cartorioModel();