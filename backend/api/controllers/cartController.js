var mongoose = require('mongoose');
var Festival = require('../models/festival');
var Order = require('../models/order');
var OrderDetail = require('../models/order_detail');
const Transaction = require('mongoose-transactions'); // phải chạy 
// lệnh npm install mongoose-transactions --save

exports.saveCart = function(req, resp){
	var listOrderFestivals = JSON.parse(req.body.products);

	// Lấy productId từ trong cart truyền lên, tạo ra một mảng
	// các objectId.
	var ids = [];
	var mapFestival = {}; // Lưu map product để lấy số lượng sản phẩm về sau.
	for (var i = 0; i < listOrderFestivals.length; i++) {
		mapFestival[listOrderFestivals[i].id] = listOrderFestivals[i].quantity;
				
		var objectId = mongoose.Types.ObjectId(listOrderFestivals[i].id);		
		ids.push(objectId);
	}	

	// Tìm các sản phẩm nằm trong danh sách id truyền lên.
	Festival.find({
	    '_id': { $in: ids}
	}, function(err, festivalResult){

		var orderDetailArray = [];
		var totalPrice = 0;

		// Tạo đối tượng order.
		var order = new Order({
			_id: mongoose.Types.ObjectId(),
			customerId: 'lay_tu_credentail_user_id',
			shipName: 'Ship Name',
			totalPrice: 0,
			status: 2
		});

		// Tạo mảng order detail.
	    for (var i = 0; i < festivalResult.length; i++) {
	     	var orderDetail = new OrderDetail({
	     		orderId: order._id,
	     		productId: festivalResult[i]._id,
	     		quantity: mapFestival[festivalResult[i]._id],
	     		unitPrice: festivalResult[i].price
	     	});
	     	// Thêm từng đối tượng order detail vào mảng.
	     	orderDetailArray.push(orderDetail);
	     	// Tính toán tổng giá đơn hàng.
	     	totalPrice += orderDetail.quantity * orderDetail.unitPrice;	     	
	    }
	    // Set tổng giá cho order.
	    order.totalPrice = totalPrice;
	    
	    // Tiến hành lưu vào database với transaction, đảm bảo tất cả đều thành công.
	    var transaction = new Transaction();
	    // Lưu order
	    transaction.insert('orders', order);
	    // Lưu danh sách order detail.
	    orderDetailArray.forEach(function(orderDetail){
	    	transaction.insert('order_details', orderDetail);
	    });
	    // Kết thúc transaction.
	    transaction.run(function(err, docs){
		    resp.send('OK');
		});    
	});
}
