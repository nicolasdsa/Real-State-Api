const Model = require("../utils/model");

class locatarioModel extends Model {
  constructor() {
    super("Locatario");
  }
  async query(){
    return this.like('Endereco', 'ave')
  }

  async count(){
    return this.countModel();
  }

  async selectAll(){
    return this.selectAllModel();
  }

  async create(json, names){
    return this.createModelPessoas(json, names);
  }

  async select(condition){
    return this.selectModel(condition);
  }

  async delete(condition){
    return this.deleteModel(condition);
  }
}

module.exports = new locatarioModel();