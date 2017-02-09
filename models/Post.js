var keystone = require('keystone');
// var transform = require('model-transform');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
  owner: 'admin',
  group: 'juas',
	autokey: {
		from: 'name',
		path: 'key',
		unique: true
	},
	rest: {
      query: {
          where: ['state', 'published'],
          sort: ['-publishedDate'],
          populate: ['author', '-password']
      },
      path: "/post"
  }
});

Post.add({
	name: {
		type: String,
		required: true
	},
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
		index: true
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		index: true
	},
	publishedDate: {
		type: Types.Date,
		index: true
	},
	// image: {
	// 	type: Types.CloudinaryImage
	// },
	content: {
		brief: {
			type: Types.Markdown,
			wysiwyg: true,
			height: 150
		},
		extended: {
			type: Types.Markdown,
			wysiwyg: true,
			height: 400
		},
	},
	categories: {
		type: Types.Relationship,
		ref: 'PostCategory',
		many: true
	},
});

// Post.restHooks = {
// 	list: [listMiddleware],
// 	show: [showMiddleware],
// 	create: [createMiddleware],
// 	update: [updateMiddleware],
// 	delete: [deleteMiddleware]
// };
// Provide access to Keystone
// Post.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });

// transform.toJSON(Post);
// Post.restHooks = {
// 		list: [function(req, res, next){
// 				console.log(arguments);
// 		}]
// };

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.relationship({
	path: 'comments',
	ref: 'PostComment',
	refPath: 'post'
});

Post.track = true;
Post.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Post.register();
