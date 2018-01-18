var mongoose = require('mongoose');

module.exports = mongoose.model('quantam', {
	serID: String,
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