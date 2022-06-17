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



}

module.exports = new imovelModel();