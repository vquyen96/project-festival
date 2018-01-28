var mongoose = require('mongoose');

module.exports = mongoose.model('comment', {
	userID: String,
	userName: String,
	userUrl: String,
	lehoiID:String,
	content:String,
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