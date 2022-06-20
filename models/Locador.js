const Model = require("../utils/model");

class locadorModel extends Model {
  constructor() {
    super("Locador");
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

  async select(condition){
    return this.selectModel(condition);
  }

  async create(json, names){
    return this.createModelPessoas(json, names);
  }

  async delete(condition){
    return this.deleteModel(condition);
  }
}

module.exports = new locadorModel();