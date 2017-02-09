var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	nodelete: true,
  rest: true
});

User.add({
	name: {
		type: Types.Name,
		required: true,
		index: true,
    grants: 'public'
	},
	email: {
		type: Types.Email,
		initial: true,
		required: true,
		index: true,
    grants: 'public'
	},
	password: {
		type: Types.Password,
		initial: true,
		required: true
	}
}, 'Permissions', {
	isAdmin: {
		type: Boolean,
		label: 'Can access Keystone',
		index: true
	},
	isProtected: {
		type: Boolean,
		noedit: true
	}
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return true;
});

User.relationship({
	ref: 'Post',
	path: 'posts',
	refPath: 'author'
});

User.schema.methods.wasActive = function() {
	this.lastActiveOn = new Date();
	return this;
};

(['name.first', 'name.last', 'email', 'password', 'isProtected']).map(function(path) {
	User.schema.path(path).set(function(value) {
    console.log('value',this.isProtected);
		return (this.isProtected && this.get(path)) ? this.get(path) : value;
	});
});

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();
