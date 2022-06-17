const locatarioController = require('../../controllers/Locatario');

const route = async (req, res) => {
  const select = await locatarioController.selectAll();

  res.status(200).send({
    results: select[0]
  })
};

module.exports = route;