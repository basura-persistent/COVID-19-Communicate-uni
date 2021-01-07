
const archive_Route = require('koa-router')({
});

archive_Route.get('/archive', (req, res) => res.render('pages/db'));


module.exports = archive_Route;
