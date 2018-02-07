var User = require('../models/user');
var Credential = require('../models/credential');
require('mongoose-pagination');
var crypto = require('crypto');

exports.getList = function(req, resp){
	User.find({'status': 1 }, function(err, task) {
	    if (err)
	      	resp.send(err);
	    resp.json(task);
	});
}

exports.getDetail = function(req, resp){	
	var tokenKey = req.headers.authorization;
	if(tokenKey != undefined){
		Credential.findOne({ tokenKey: tokenKey },function(err, result){
			if(err){
				console.log(err);
				resp.send('Not okie.');
				return;
			}
			if(result){
				var someday = result.createdAt.getTime() + 172800000;
				var today = new Date();
				if(someday > today.getTime()){
					User.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
						resp.send(result);
					});
				}
				else{
					return resp.status(400).send('Tài khoản hết hạn');
				}
			}
		});
	}
	else{
		return resp.status(400).send('Bạn không có quyền vào đây');
	}
	
}

exports.add = function(req, resp){		
	var obj = new User(req.body);
	var salt = Math.random().toString(36).substring(7);
	obj.salt = salt;
	obj.password = sha512(obj.password, obj.salt);
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
	User.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		if (result != null && result != undefined) {
			var obj = new User(req.body);
			var salt = Math.random().toString(36).substring(7);
			obj.salt = salt;
			obj.password = sha512(obj.password, obj.salt);
			User.findOneAndUpdate({_id: req.params.id}, obj, {new: true}, function(err, result) {
			    resp.json(result);
			});
		}
		else{
			return resp.status(400).send('Tài khoản đã bị xóa');
		}
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