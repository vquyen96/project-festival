var mongoose = require('mongoose');

module.exports = mongoose.model('feedback', {
	userID: String,
	username: String,
	email: String,
	title: String,
	content: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});