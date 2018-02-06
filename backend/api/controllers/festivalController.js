var Festival = require('../models/festival');
require('mongoose-pagination');

exports.getList = function(req, resp){
	// if (authenticationController.checkToken(req.headers.authorization)){
	// 	console.log('Okie');
	// }else{
	// 	console.log('Not  okie');
	// }

	// Lấy tham số và parse ra number.	

	
	// var page = Number(req.query.page);
	// var limit = Number(req.query.limit);
	
	// var find = Number(req.query.find);
	// switch(find){
	// 	case 0: {
	// 		Festival.find({'lucdia':'Việt Nam', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 1: {
	// 		Festival.find({'lucdia':'Châu Á', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 2: {
	// 		Festival.find({'lucdia':'Châu Âu', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 3: {
	// 		Festival.find({'lucdia':'Châu Mỹ', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 4: {
	// 		Festival.find({'lucdia':'Châu Phi', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 5: {
	// 		Festival.find({'lucdia':'Châu Úc', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 6: {
	// 		Festival.find({'tongiao':'Đạo Phật', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 7: {
	// 		Festival.find({'tongiao':'Đạo Hồi', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 8: {
	// 		Festival.find({'tongiao':'Đạo Thiên Chúa', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	case 9: {
	// 		Festival.find({'tongiao':'Đạo Hindu', 'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});
	// 	};
	// 	break;
	// 	default:{
	// 		Festival.find({'status': 1})
	// 		.paginate(page, limit, function(err, result, total) {    	
	// 	    	var responseData = {
	// 	    		'listFestival': result,
	// 	    		'totalPage': Math.ceil(total/limit)
	// 	    	};
	// 	    	resp.send(responseData);
	// 	  	});

	// 	}
	// }
	Festival.find({'status': 1 },function(err, result){
		if (err) {
			console.log(err);
		}
		resp.send(result);
	});
}

exports.getDetail = function(req, resp){
	
	Festival.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		
		resp.send(result);
	});
}

exports.add = function(req, resp){	
// 	var rawDocuments = [
// ];
// 	Festival.insertMany(rawDocuments)
// 	    .then(function(mongooseDocuments) {
// 			console.log(mongooseDocuments);
// 	    })
// 	    .catch(function(err) {
// 	        console.log(err);
// 	    });	



	// var festival = new Festival(req.body);	
	// festival.save(function(err){				
	// 	resp.send(festival);
	// });
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