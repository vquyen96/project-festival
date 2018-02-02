var userController = require('../controllers/userController');
var festivalController = require('../controllers/festivalController');
var findController = require('../controllers/findController');
var commentController = require('../controllers/commentController');
var feedbackController = require('../controllers/feedbackController');
var cartController = require('../controllers/cartController');
var addController = require('../controllers/addController');
var orderController = require('../controllers/orderController');

var authenticationController = require('../controllers/authenticationController');
var lucdiaController = require('../controllers/lucdiaController');
var tongiaoController = require('../controllers/tongiaoController');
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
	//find api
	app.route('/api/find')
		.get(findController.findlist);
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

	// order api.
	app.route('/api/order')
		.get(orderController.getList)
		.post(orderController.add);	

	app.route('/api/order/:id')
		.get(orderController.getDetail)
		.put(orderController.update)
		.delete(orderController.delete);	

	app.route('/api/cart')
		.post(cartController.saveCart);

	// comment api.
	// app.route('/api/comments')
	// 	.get(commentController.getList)
	// 	.post(commentController.add);	

	// app.route('/api/comments/:id')
	// 	.get(commentController.getDetail)
	// 	.put(commentController.update)
	// 	.delete(commentController.delete);

	// feedback api.
	app.route('/api/feedback')
		.get(feedbackController.getList)
		.post(feedbackController.add);	

	app.route('/api/feedback/:id')
		.get(feedbackController.getDetail)
		.put(feedbackController.update)
		.delete(feedbackController.delete);	

	app.route('/api/add')
		.post(addController.add);	

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