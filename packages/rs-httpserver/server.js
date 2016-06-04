const path = require('path');
const express = require('express');
const open = require('open');
const serveStatic = require('serve-static');

const app = express();
const staticPath = path.resolve('packages/rs-static');

app.use(serveStatic(staticPath));

app.listen(3000, () => {
  if (process.env.NODE_ENV !== 'production') {
    open('localhost:3000', process.env.PREFERRED_BROWSER);
  }
});