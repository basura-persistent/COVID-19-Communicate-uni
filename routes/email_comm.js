const email_controller = require('../controllers//email_controller');

const email_router = require('koa-router')({
});

email_router.post('/input', email_controller.campus_update);

module.exports = email_router;
