var mongoose = require('mongoose');

module.exports = mongoose.model('contact', {
	adress: String,
	phoneCSKH: String,
	phoneDoiTac: String,
	phoneTuyenDung: String,
	email: String,
	website: String,
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