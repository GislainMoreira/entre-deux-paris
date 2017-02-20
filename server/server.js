const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser  = require('body-parser');
const config = require('./config');
const passport = require('./config/passport');
const app = express();
const compiler = webpack(config.webpackConfig);
const routes = require('./routes');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(passport.initialize());

app.get('/admin/dashboard', (req, res) => {
  console.log(req.user);
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
/*
const User = require('./models/user');
const landry = new User({ login: 'landry', password:'pass' });
landry.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
*/

