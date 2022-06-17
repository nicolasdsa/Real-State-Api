const express = require("express");
const router = express.Router();
const Home = require("./Home");

router.get("/", Home);


module.exports = router;