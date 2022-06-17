const imovelController = require('../../controllers/Imovel');

const route = async (req, res) => {
  const select = await imovelController.selectAll();

  res.status(200).send({
    results: select[0]
  })
};

module.exports = route;