var mongoose = require('mongoose');

module.exports = mongoose.model('order_details', {	
	orderId: mongoose.Schema.Types.ObjectId,
	productId: mongoose.Schema.Types.ObjectId,
	nameLehoi: String,
	time: Date,
	quantity: Number,	
	unitPrice: Number,
	updatedAt: {
		type: Date,
		default: Date.now
	},
});