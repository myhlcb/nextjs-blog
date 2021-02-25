const express = require('express');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  const route = pathMatch();

  server.get('/index', (req, res) => {
    return app.render(req, res, '/index', {list:[],total:10});
  });

  server.get('/artist/:id', (req, res) => {
    const params = route('/artist/:id')(parse(req.url).pathname);
    return app.render(req, res, '/artist', params);
  });

  server.get('/album/:id', (req, res) => {
    const params = route('/album/:id')(parse(req.url).pathname);
    return app.render(req, res, '/album', params);
  });

    server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
