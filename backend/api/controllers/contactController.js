var Contact = require('../models/contact');


exports.getDetail = function(req, resp){	

	Contact.findOne({_id: req.params.id},function(err, result){
		resp.send(result);
	});
}

exports.getAll = function(req, resp){	
	Contact.findOne({},function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){		
	var contact = new Contact(req.body);
	console.log(req.body);
	contact.save(function(err){
		if(err){
			console.log(err);	
		}		
		resp.send(contact);
	});
}

exports.update = function(req, resp){
	Contact.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
		if(err)
			console.log(err);
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	
	Contact.findById(req.params.id,function(err, result){				
		result.status = 0;
		Contact.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}