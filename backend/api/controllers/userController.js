var User = require('../models/user');
require('mongoose-pagination');

exports.getList = function(req, resp){
	// if (authenticationController.checkToken(req.headers.authorization)){
	// 	console.log('Okie');
	// }else{
	// 	console.log('Not  okie');
	// }

	// // Lấy tham số và parse ra number.	
	// var page = Number(req.query.page);
	// var limit = Number(req.query.limit);

	// User.find({'status': 1})
	// .paginate(page, limit, function(err, result, total) {    	
 //    	var responseData = {
 //    		'listUser': result,
 //    		'totalPage': Math.ceil(total/limit)
 //    	};
 //    	resp.send(responseData);
 //  	});
	User.find({'status': 1 }, function(err, task) {
	    if (err)
	      	resp.send(err);
	    resp.json(task);
	});
}

exports.getDetail = function(req, resp){	
	User.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var user = new User(req.body);	
	user.save(function(err){				
		resp.send(user);
	});
}

exports.update = function(req, resp){
	User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// User.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	User.findById(req.params.id,function(err, result){				
		result.status = 0;
		User.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}