const express = require("express");
const defaultrouter = express.Router();

const Authuser_Controller = require('../controllers/auth_userController');




defaultRouter.get('/', (req, res) => res.render('pages/index'));//default route to a index view


module.exports = defaultRouter;
