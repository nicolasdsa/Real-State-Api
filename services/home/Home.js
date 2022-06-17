const homeController = require('../../controllers/Home');

const route = async (req, res) => {
  const information = await homeController.information();
  
  res.status(200).send({
    results: information
  })
};

module.exports = route;