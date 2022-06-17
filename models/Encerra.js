const Model = require("../utils/model");

class encerraModel extends Model {
  constructor() {
    super("Encerra");
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new encerraModel();