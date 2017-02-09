exports.create = {
	User: [
		{ 'name.full': 'Admin User', email: process.env.APP_ADMIN_USER || 'admin', password: process.env.APP_ADMIN_PASS || 'admin', isAdmin: true }
	]
};
