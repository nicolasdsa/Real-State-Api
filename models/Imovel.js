const Model = require("../utils/model");

class imovelModel extends Model {
  constructor() {
    super("Imovel");
  }

  async selectAll(){
    return this.selectAllModel();
  }
  
  async count(){
    return this.countModel();
  }

  async rented(){
    return this.innerjoin();
  }

  async notRented(){
    return this.notInnerjoin();
  }

  async select(condition){
    return this.selectModel(condition);
  }

  async create(json, names){
    return this.createModelImoveis(json, names);
  }

  async delete(condition){
    return this.deleteModel(condition);
  }

}

module.exports = new imovelModel();