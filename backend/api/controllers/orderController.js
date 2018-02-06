var Order = require('../models/order');
// require('mongoose-pagination');

exports.getList = function(req, resp){

	// var page = Number(req.query.page);
	// var limit = Number(req.query.limit);
	// console.log(limit);
	// console.log(page);
	// if (page != null && page != NaN && limit != null && limit != NaN) {
	// 	Order.find({}).sort({createdAt: -1})
	// 	.paginate(page, limit, function(err, result, total) { 
	//     	var responseData = {
	//     		'listData': result,
	//     		'totalPage': Math.ceil(total/limit)
	//     	};
	//     	resp.send(responseData);
	//   	});
	// }
	// else{
		Order.find({},function(err, result){
			if (err) {
				console.log(err);
			}	
			resp.send(result);
		}).sort({createdAt: -1});
	// }
	
}
exports.getDetail = function(req, resp){
	
	Order.find({ customerId: req.params.id},function(err, result){
		
		resp.send(result);
	});
}

exports.add = function(req, resp){	

	var order = new Order(req.body);	
	order.save(function(err){				
		resp.send(order);
	});
}

exports.update = function(req, resp){
	Order.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {

	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	Order.findById(req.params.id,function(err, result){				
		result.status = 0;
		Order.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}