const Model = require("../utils/model");

class cartorioModel extends Model {
  constructor() {
    super("Cartorio");
  }

  async selectAll(){
    return this.selectAllModel();
  }

  async select(condition){
    return this.selectModel(condition);
  }
}

module.exports = new cartorioModel();