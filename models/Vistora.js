const Model = require("../utils/model");

class vistoraModel extends Model {
  constructor() {
    super("Vistora");
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new vistoraModel();