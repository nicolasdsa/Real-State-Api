const imovelController = require('./Imovel');
const locatarioController = require('./Locatario');
const locadorController = require('./Locador');
const contratoController = require('./Contrato');

class homeController {
  async information(){
    const countImovel = await imovelController.count();
    const rentedImovel = await imovelController.rented();
    const notRentedImovel = await imovelController.notRented();
    const countLocador = await locadorController.count();
    const countLocatario = await locatarioController.count();
    const sumContrato = await contratoController.sum();

    const result = {countMovel: countImovel[0], rentedMovel: rentedImovel[0], notRentedImovel: notRentedImovel[0], countLocador: countLocador[0], countLocatario: countLocatario[0], sumContrato: sumContrato[0] };

    return result;

  }
}


module.exports = new homeController();