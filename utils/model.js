const database = require("./database");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }
  
  selectAllModel() {
    return database.query(`SELECT * FROM ${this.tableName}`);
  }

  likeModel(column, search){
    return database.query(`SELECT ${column} FROM ${this.tableName} where ${column} like '%${search}%'`);
  }
  
  countModel(){
    return database.query(`SELECT COUNT(*) as ${this.tableName} FROM ${this.tableName}`);
  }

  sumModel(){
    return database.query(`SELECT SUM(Aluguel) as 'Total' FROM ${this.tableName}`);
  }

  innerjoin(){
    return database.query(`SELECT COUNT(*) as 'Alugados' FROM Locador INNER JOIN ${this.tableName} on (CPFLocador = CPF) WHERE CPFLocatario IS NOT NULL;`);
  }

  notInnerjoin(){
    return database.query(`SELECT COUNT(*) as 'Vagos' FROM Locador INNER JOIN ${this.tableName} on (CPFLocador = CPF) WHERE CPFLocatario IS NULL;`)
  }
}

module.exports = Model;
