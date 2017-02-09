const
	keystone = require('keystone'),
	social = require('keystone-social-login'),
	i18n = require('i18n'),
	keystoneRestApi = require('./rest');
	// restful = require('./modules/restful-keystone')(keystone);

keystone.init({

	'name': 'palomasafe.com',
	'brand': 'palomasafe',
	'port': process.env.PORT || 3000,
	'host': process.env.NODE_ENV === 'production' ? '0.0.0.0' : process.env.IP || '127.0.0.1',
	// 'admin path': 'admin',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	'ssl': false,
	'auto update': true,
	'session': true,
	'session store': 'mongo',
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.APP_COOKIE_SECRET || require('crypto').randomBytes(Math.ceil(128 / 2))
		.toString('hex')
		.slice(0, 128)
});

// keystone.mongoose.plugin(require('./modules/mongoose-plugins/auth').plugin);

keystone.import('models');

i18n.configure({
	locales: ['es', 'en'],
	directory: __dirname + '/locales'
});
//
// social.config({
//   'keystone': keystone,
//   'signin url': '/social/login',
//   'auto create user': true,
//   'onAuthenticate': function() {
//     console.log(arguments, 'signin');
//   },
//   'providers': {
//     google: {
//       clientID: 'your-client-id',
//       clientSecret: 'your-client-secret'
//     },
//     facebook: {
//       clientID: 'your-client-id',
//       clientSecret: 'your-client-secret'
//     },
//     github: {
//       clientID: 'your-client-id',
//       clientSecret: 'your-client-secret'
//     },
//     twitter: {
//       clientID: 'your-client-id',
//       clientSecret: 'your-client-secret'
//     }
//   }
// });

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystoneRestApi(keystone);
// restful.expose({
// 	Post: true
// }).start()



// keystoneRestApi.createRest(keystone, {
//   apiRoot: '/api/v1/'
// });

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
