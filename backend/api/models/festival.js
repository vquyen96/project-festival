var mongoose = require('mongoose');

module.exports = mongoose.model('festival', {
	nameLeHoi: String,
	timeStart: Date,
	timeEnd: Date,
	diadiem: String,
	kinhdo: String,
	vido: String,
	lucdia: String,
	tongiao: String,
	chitiet: String,
	trangthai:  {
		type: Number,
		default: 1
	},
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