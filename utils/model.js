const database = require("./database");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  selectModel(condition){
    return database.query(`SELECT * FROM ${this.tableName} ${condition}`);
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

  createModelPessoas(json, names){
    return database.query(`INSERT INTO ${this.tableName} (${names}) VALUES ('${json.CPF}', '${json.Nome}', ${json.Idade}, '${json.Telefone}', '${json.Email}');`);
  }

  createModelImoveis(json, names){
    return database.query(`INSERT INTO ${this.tableName} (${names}) VALUES ('${json.Id}', '${json.Tipo}', '${json.Endereco}', '${json.CPFLocador}', '${json.CPFLocatario}');`);
  }

  createModelContratos(json, names){
    return database.query(`INSERT INTO ${this.tableName} (${names}) VALUES ('${json.IdContrato}', '${json.CNPJCartorio}', '${json.Comprovante}');`);
  }

  deleteModel(condition){
    return database.query(`DELETE FROM ${this.tableName} ${condition}`);
  }
}

module.exports = Model;
