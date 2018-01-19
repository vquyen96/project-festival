var User = require('../models/user');
var Credential = require('../models/credential');
var userController = require('../controllers/userController');
require('mongoose-pagination');
var crypto = require('crypto');

exports.checkLogin = function(req, resp){	
	var username = req.body.username;
	var password = req.body.password;
	User.findOne({ username: username, 'status': 1 },function(err, result){
		if(err){
			console.log(err);
			resp.send('Not okie.');
			return;
		}
		if(result){
			console.log(result);
			var digestedPassword = userController.sha512(password, result.salt);
			if(digestedPassword === result.password){
				var credential = new Credential({
					tokenKey: crypto.randomBytes(20).toString('hex'),
					ownerId: result._id	,
					level: result.level			
				});
				credential.save(function(err){
					if(err){
						resp.send(err);
						return;
					}
					resp.send(credential);
					return;
				});					
				return;
			}else{
				resp.send('Password is not match.');
				return;	
			}
		}else{
			resp.send('Not okie.');
		}
	});	
}

exports.delete = function(req, resp){	
	User.findById(req.params.id,function(err, result){				
		result.status = 0;
		User.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}