var mongoose = require('mongoose');

module.exports = mongoose.model('accounts', {
	username: String,
	password: String,
	salt: String,
	email: String,
	birthday: String,
	avaUrl: {
		type: String,
		default: "imgs/default-avatar.jpg"
	},
	level:  {
		type: Number,
		default: 1
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});