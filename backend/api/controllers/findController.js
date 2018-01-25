var Festival = require('../models/festival');

exports.findlist = function(req, resp){
	var name = req.query.name;
	var lucdia = req.query.lucdia;
	var tongiao = req.query.tongiao;
	if(name != null){
		Festival.find({ 'nameLeHoi' : name, 'status': 1 },function(err, result){
			resp.send(result);
		});
	}
	if (lucdia != null) {
		Festival.find({ 'lucdia' : lucdia, 'status': 1 },function(err, result){
			resp.send(result);
		});
	}
	if (tongiao != null) {
		Festival.find({ 'tongiao' : tongiao, 'status': 1 },function(err, result){
			resp.send(result);
		});
	}
	else{
		return resp.status(400).send('Thiếu tham số');
	}
	// function find(attr , val){
	// 	console.log(val);
	// 	Festival.find({ attr : 'Châu Mỹ', 'status': 1 },function(err, result){
			
	// 		resp.send(result);
	// 	});
	// }
	
}
