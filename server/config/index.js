module.exports = {
  'secret': 'super secret passphrase of entredeuxparis by landry',
  'database': 'mongodb://localhost/entre-deux-paris',
  'port': process.env.PORT || 3000,
  'webpackConfig': (process.env.NODE_ENV == 'dev') ?
    require('../../webpack.config.dev')
    : require('../../webpack.config.prod'),
};