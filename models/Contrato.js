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

  async select(condition){
    return this.selectModel(condition);
  }

}

module.exports = new contratoModel();