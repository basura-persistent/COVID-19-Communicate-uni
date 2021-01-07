
const Authuser_Controller = require('../controllers/auth_userController');
const archive_route = require('./archive.js');
const auth_user = require('./auth_user.js');
const enail_comm = require('./email_comm.js');


const defaultRouter = require('koa-router')({
    prefix: '/'
});

defaultRouter.use(
    archive_route.routes();
);
defaultRouter.use(
    auth_user.routes();
);

defaultRouter.use(
    email_comm.routes();
);

defaultRouter.get('/', (req, res) => res.render('pages/index'));
defaultRouter.post('/auth_admin', Authuser_Controller.auth_admin);
defaultRouter.post('/auth_gen', Authuser_Controller.auth_general);


function addRoutesToAPI (api) {
    api.use(defaultRouter.routes());
    api.use(defaultRouter.allowedMethods());
  
}

module.exports = addRoutesToAPI
