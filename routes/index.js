const
  babelify = require('babelify'),
  i18n = require("i18n"),
  browserify = require('browserify-middleware'),
  keystone = require('keystone');

var importRoutes = keystone.importer(__dirname);

keystone.pre('routes', i18n.init);

// Setup Route Bindings
exports = module.exports = function(app) {

  app.use('/js', browserify('./client/scripts', {
    transform: [babelify.configure({
      plugins: ['object-assign']
    })]
  }));

  // Views
  app.use(function(req, res) {
    res.render('index');
  });

};
