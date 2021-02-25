const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const url = require('url')
const app = next({ dev });
const {createServer} = require('http')
const handle = app.getRequestHandler();
const { ParamName } = require('koa-router');

app.prepare().then(() => {
  const server = (req, res) => {
    const parseUrl = url.parse(req.url, true)
    const { pathname, query } = parseUrl
    if (pathname.startsWith('/index')||pathname.startsWith('/')) {
      app.render(req, res, '/index', {list:[],total:10});
    } else if (/artist\/\d/.test(pathname)) {
      app.render(req, res, '/artist', params);
    } else {
      handle(req, res)
    }
  }
  createServer(server).listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
