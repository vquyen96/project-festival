var mongoose = require('mongoose');

module.exports = mongoose.model('lucdia', {
	nameLucDia: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},	status: {
		type: Number,
		default: 1
	}
});