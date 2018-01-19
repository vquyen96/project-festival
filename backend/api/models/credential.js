var mongoose = require('mongoose');

module.exports = mongoose.model('credentials', {	
	tokenKey: String,
	ownerId: String,
	level: Number,	
	createdAt: {
		type: Date,
		default: Date.now
	},
	expiredAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});