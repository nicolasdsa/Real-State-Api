const Model = require("../utils/model");

class vistoriaModel extends Model {
  constructor() {
    super("Vistoria");
  }

  async selectAll(){
    return this.selectAllModel();
  }
}

module.exports = new vistoriaModel();