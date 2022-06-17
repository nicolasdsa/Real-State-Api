const Model = require("../utils/model");

class contratoModel extends Model {
  constructor() {
    super("Contrato");
  }
  async selectAll(){
    return this.selectAllModel();
  }

  async sum(){
    return this.sumModel();
  }
}

module.exports = new contratoModel();