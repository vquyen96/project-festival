var User = require('../models/user');
var Comment = require('../models/comment');

exports.getList = function(req, resp){
	
	Comment.find({'status': 1 }, function(err, task) {
	    if (err)
	      	resp.send(err);
	    resp.json(task);
	}).sort({lehoiName: 1});
}

exports.getDetail = function(req, resp){
	
	Comment.find({ lehoiID: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	}).sort({createdAt:-1});
}

exports.add = function(req, resp){		
	var comment = new Comment(req.body);	
	comment.save(function(err){				
		resp.send(comment);
	});
}

exports.update = function(req, resp){
	Comment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	Comment.findById(req.params.id,function(err, result){				
		result.status = 0;
		Comment.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}