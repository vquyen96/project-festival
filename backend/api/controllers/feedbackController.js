var FeedBack = require('../models/feedback');

exports.getList = function(req, resp){
	FeedBack.find({'status': 1 },function(err, result){
		if (err) {
			console.log(err);
		}
		resp.send(result);
	});

 	
}

exports.getDetail = function(req, resp){	
	FeedBack.find({ userID: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var feedback = new FeedBack(req.body);	
	feedback.save(function(err){				
		resp.send(feedback);
	});
}

exports.update = function(req, resp){
	FeedBack.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// FeedBack.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	FeedBack.findById(req.params.id,function(err, result){				
		result.status = 0;
		FeedBack.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}