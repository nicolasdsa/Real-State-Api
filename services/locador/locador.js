const locadorController = require('../../controllers/Locador');

const route = async (req, res) => {  
  const select = await locadorController.selectAll();

  res.status(200).send({
    results: select[0]
  })
};

module.exports = route;