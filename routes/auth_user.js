const express= require("express");
const authUSERRoute = express.Router();


const Archive_Controller = require('../controllers/arhive_Controller');
const Authuser_Controller = require('../controllers/auth_userController');



authUSERRoute.post('/auth_admin', Authuser_Controller.auth_admin);
authUSERRoute.post('auth_gen', Authuser_Controller.auth_general);


module.exports = authUSERRoute;
