const Model = require("../utils/model");

class encerraModel extends Model {
  constructor() {
    super("Encerra");
  }

  async selectAll(){
    return this.selectAllModel();
  }

  async select(condition){
    return this.selectModel(condition);
  }

  async delete(condition){
    return this.deleteModel(condition);
  }

  async create(json, names){
    return this.createModelContratos(json, names);
  }
}

module.exports = new encerraModel();