var OrderDetail = require('../models/order_detail');
require('mongoose-pagination');
var crypto = require('crypto');

exports.getList = function(req, resp){

	// Lấy tham số và parse ra number.	
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	OrderDetail.find({}).sort({username: 1})
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

exports.getbyOrder = function(req, resp){	
	OrderDetail.find({ orderId: req.params.id},function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var obj = new OrderDetail(req.body);
	
	obj.save(function(err){
		if(err){
			return resp.status(400).send('Tài khoản đã tồn tại');
		}
		resp.send(obj);
	});	
}

exports.update = function(req, resp){
	var orderDetail = new OrderDetail(req.body);

	orderDetail.findOneAndUpdate({_id: req.params.id}, obj, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	OrderDetail.findById(req.params.id,function(err, result){				
		result.status = 0;
		OrderDetail.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}