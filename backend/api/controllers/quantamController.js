var QuanTam = require('../models/quantam');
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

	// QuanTam.find({'status': 1})
	// .paginate(page, limit, function(err, result, total) {    	
 //    	var responseData = {
 //    		'listQuanTam': result,
 //    		'totalPage': Math.ceil(total/limit)
 //    	};
 //    	resp.send(responseData);
 //  	});
 	QuanTam.find({}, function(err, task) {
	    if (err)
	      	resp.send(err);
	    resp.json(task);
	});
}

exports.getDetail = function(req, resp){	
	QuanTam.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var quantam = new QuanTam(req.body);	
	quantam.save(function(err){				
		resp.send(quantam);
	});
}

exports.update = function(req, resp){
	QuanTam.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// QuanTam.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	QuanTam.findById(req.params.id,function(err, result){				
		result.status = 0;
		QuanTam.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}