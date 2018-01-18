var mongoose = require('mongoose');

module.exports = mongoose.model('thamgia', {
	userID: String,
	fesID:String,
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