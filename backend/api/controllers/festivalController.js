var Festival = require('../models/festival');
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

	// Festival.find({'status': 1})
	// .paginate(page, limit, function(err, result, total) {    	
 //    	var responseData = {
 //    		'listFestival': result,
 //    		'totalPage': Math.ceil(total/limit)
 //    	};
 //    	resp.send(responseData);
 //  	});
 	Festival.find({'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.getDetail = function(req, resp){	
	Festival.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var festival = new Festival(req.body);	
	festival.save(function(err){				
		resp.send(festival);
	});
}

exports.update = function(req, resp){
	Festival.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// Festival.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	Festival.findById(req.params.id,function(err, result){				
		result.status = 0;
		Festival.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}