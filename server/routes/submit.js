const Router = require('koa-router');

const router = new Router();

router.post('/submit', async (ctx) => {
  const map = ctx.request.body['map'];
  await ctx.render('new', {
    data: map,
  });
});

module.exports = router.routes();