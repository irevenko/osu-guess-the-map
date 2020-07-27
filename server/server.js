const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const makeConnection = require('./utils/connection');
const routes = require('./routes');

const app = new Koa();
const PORT = process.env.PORT || 3000;

makeConnection(app, PORT);

app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods({ throw: true }));

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts/template',
  viewExt: 'html',
  cache: false,
  debug: false,
});