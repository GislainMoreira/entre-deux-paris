const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser  = require('body-parser');
const config = (process.env.NODE_ENV == 'dev') ? require('../webpack.config.dev') : require('../webpack.config.prod');
const passport = require('passport');
const app = express();
const compiler = webpack(config);
const routes = require('./routes');
const authController = require('./controllers/auth');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(passport.initialize());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000, 'localhost', (err) => {
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

