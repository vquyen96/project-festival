var userController = require('../controllers/userController');
var festivalController = require('../controllers/festivalController');
var authenticationController = require('../controllers/authenticationController');
var lucdiaController = require('../controllers/lucdiaController');
var tongiaoController = require('../controllers/tongiaoController');
var quantamController = require('../controllers/quantamController');
var thamgiaController = require('../controllers/thamgiaController');

module.exports = function(app){
	// users api.
	app.route('/api/users')
		.get(userController.getList)
		.post(userController.add);	

	app.route('/api/users/:id')
		.get(userController.getDetail)
		.put(userController.update)
		.delete(userController.delete);	

	// festival api.
	app.route('/api/festivals')
		.get(festivalController.getList)
		.post(festivalController.add);	

	app.route('/api/festivals/:id')
		.get(festivalController.getDetail)
		.put(festivalController.update)
		.delete(festivalController.delete);

	// authentication api.
	app.route('/api/authentications')		
		.post(authenticationController.checkLogin);		

	// lucdia api.
	app.route('/api/lucdia')
		.get(lucdiaController.getList)
		.post(lucdiaController.add);	

	app.route('/api/lucdia/:id')
		.get(lucdiaController.getDetail)
		.put(lucdiaController.update)
		.delete(lucdiaController.delete);	

	// tongiao api.
	app.route('/api/tongiao')
		.get(tongiaoController.getList)
		.post(tongiaoController.add);	

	app.route('/api/tongiao/:id')
		.get(tongiaoController.getDetail)
		.put(tongiaoController.update)
		.delete(tongiaoController.delete);	

	// thamgia api.
	app.route('/api/thamgia')
		.get(thamgiaController.getList)
		.post(thamgiaController.add);	

	app.route('/api/thamgia/:id')
		.get(thamgiaController.getDetail)
		.put(thamgiaController.update)
		.delete(thamgiaController.delete);	

	// quantam api.
	app.route('/api/quantam')
		.get(quantamController.getList)
		.post(quantamController.add);	

	app.route('/api/quantam/:id')
		.get(quantamController.getDetail)
		.put(quantamController.update)
		.delete(quantamController.delete);	

	// image api.	
	app.post('/api/images', function(req, res) {		
		console.log(req.files);
		if (!req.files)
			return res.status(400).send('No files were uploaded.');

		// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
		let sampleFile = req.files.myFile;	

		// Use the mv() method to place the file somewhere on your server
		sampleFile.mv('./public/images/' + sampleFile.name, function(err) {
			if (err)
			  return res.status(500).send(err);

			res.send('http://localhost:3000/images/' + sampleFile.name);
		});
	});	
}