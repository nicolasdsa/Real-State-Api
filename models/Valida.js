const Model = require("../utils/model");

class validaModel extends Model {
  constructor() {
    super("Valida");
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

module.exports = new validaModel();