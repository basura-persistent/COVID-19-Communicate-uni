const express= require("express");
const email_router = express.Router();


const email_controller = require('../controllers//email_controller');



email_router.post('/input', email_controller.campus_update);//email blast using email controller class
