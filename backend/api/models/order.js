var mongoose = require('mongoose');

module.exports = mongoose.model('orders', {	
	customerId: String,
	totalPrice: Number,
	city: {
		type: String,
		default: 'Hà Nội'
	},
	shipName: String,
	fullName:String,
	phone: String,
	email: String,
	adress: String,
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