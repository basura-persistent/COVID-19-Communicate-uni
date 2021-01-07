const Authuser_Controller = require('../controllers/auth_userController');

const authUSERRoute = require('koa-router')({
    prefix: '/'
});

authUSERRoute.get('/', (req, res) => res.render('pages/index'));
authUSERRoute.post('/auth_admin', Authuser_Controller.auth_admin);
authUSERRoute.post('auth_gen', Authuser_Controller.auth_general);


module.exports = authUSERRoute;
