const path = require('path');
const express = require('express');
const webpack = require('webpack');
let config = "";
if(process.env.NODE_ENV == 'dev') {
  config = require('../webpack.config.dev');
}else{
  config = require('../webpack.config.prod');
}
const app = express();
const compiler = webpack(config);
const routes = require('./routes');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/api',routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});




