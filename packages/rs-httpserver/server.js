const express = require('express');
const open = require('open');
const app = express();


app.listen(3000, () => {
  if (process.env.NODE_ENV !== 'production') {
    open('localhost:3000', process.env.PREFERRED_BROWSER);
  }
});