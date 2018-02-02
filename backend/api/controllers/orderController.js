var Order = require('../models/order');
var Credential = require('../models/credential');
require('mongoose-pagination');
var crypto = require('crypto');

exports.getList = function(req, resp){

	// Lấy tham số và parse ra number.	
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
	Order.find({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var obj = new Order(req.body);
	
	obj.save(function(err){
		if(err){
			return resp.status(400).send('Tài khoản đã tồn tại');
		}
		resp.send(obj);
	});	
}

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return hash.digest('hex');    
};

exports.sha512 = sha512;

exports.update = function(req, resp){
	var obj = new Order(req.body);
	var salt = Math.random().toString(36).substring(7);
	obj.salt = salt;
	obj.password = sha512(obj.password, obj.salt);
	Order.findOneAndUpdate({_id: req.params.id}, obj, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// Order.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	Order.findById(req.params.id,function(err, result){				
		result.status = 0;
		Order.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}