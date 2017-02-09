exports.create = {
	User: [
		{ 'name.full': 'Paloma Sánchez Fernández', email: process.env.APP_ADMIN_USER || 'admin@admin.com', password: process.env.APP_ADMIN_PASS || 'admin', isAdmin: true }
	]
};
