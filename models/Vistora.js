const Model = require("../utils/model");

class vistoraModel extends Model {
  constructor() {
    super("Vistora");
  }

  async selectAll(){
    return this.selectAllModel();
  }

  async select(condition){
    return this.selectModel(condition);
  }
}

module.exports = new vistoraModel();