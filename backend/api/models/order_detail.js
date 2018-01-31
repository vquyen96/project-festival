var mongoose = require('mongoose');

module.exports = mongoose.model('order_details', {	
	orderId: mongoose.Schema.Types.ObjectId,
	productId: mongoose.Schema.Types.ObjectId,
	quantity: Number,	
	unitPrice: Number
});