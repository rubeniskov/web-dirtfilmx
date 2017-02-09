const
	router = require('router'),
	lodash = require('lodash'),
	util = require('util'),
	JSONStream = require('JSONStream'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function(keystone, options) {
	var r = router()

	r.use(bodyParser.json())
	r.use(methodOverride())
	r.use(function(req, res, next) {
		res.set('Content-Type', 'application/json');
		next();
	});

	lodash.each(keystone.lists, function(list, name) {
		var options = list.options.rest;
		if (options) {
			options = typeof(options) === 'object' ? options : {};
			options.path = options.path || util.format('/%s', name.toLowerCase());
			r.get(options.path, function(req, res) {
				var query = list.model.find(options.columns);
				lodash.each(options.query, function(args, sentence) {
					query = query[sentence].apply(query, args);
				});
				query.cursor()
					.pipe(JSONStream.stringify()).pipe(res);
			});
		}
	});

	keystone.pre('routes', router().use('/api/v1', r));
}
