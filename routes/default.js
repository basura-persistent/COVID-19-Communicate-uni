const Authuser_Controller = require('../controllers/auth_userController');



const defaultRouter = require('koa-router')({
    prefix: '/'
});

defaultRouter.get('/', (req, res) => res.render('pages/index'));
defaultRouter.post('/auth_admin', Authuser_Controller.auth_admin);
defaultRouter.post('/auth_gen', Authuser_Controller.auth_general);
