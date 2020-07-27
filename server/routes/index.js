const Router = require('koa-router');
const home = require('./home');
const submit = require('./submit');

const router = new Router();

router.use(home, submit);

module.exports = router;