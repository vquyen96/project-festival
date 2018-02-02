var Order = require('../models/order');
require('mongoose-pagination');

exports.getList = function(req, resp){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Order.find({}).sort({username: 1})
	.paginate(page, limit, function(err, result, total) { 
		// console.log(result); 	
		// console.log(total);
    	var responseData = {
    		'listData': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	resp.send(responseData);
  	});
}
exports.getDetail = function(req, resp){
	
	Order.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		
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