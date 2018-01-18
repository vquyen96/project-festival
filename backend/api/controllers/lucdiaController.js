var LucDia = require('../models/lucdia');
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

	// LucDia.find({'status': 1})
	// .paginate(page, limit, function(err, result, total) {    	
 //    	var responseData = {
 //    		'listLucDia': result,
 //    		'totalPage': Math.ceil(total/limit)
 //    	};
 //    	resp.send(responseData);
 //  	});

 	LucDia.find({'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.getDetail = function(req, resp){	
	LucDia.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var lucdia = new LucDia(req.body);	
	lucdia.save(function(err){				
		resp.send(lucdia);
	});
}

exports.update = function(req, resp){
	LucDia.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// LucDia.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	LucDia.findById(req.params.id,function(err, result){				
		result.status = 0;
		LucDia.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}