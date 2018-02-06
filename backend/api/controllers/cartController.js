var mongoose = require('mongoose');
var Transaction = require('mongoose-transaction')(mongoose); // phải chạy 
// lệnh npm install mongoose-transactions --save
var Order = require('../models/order');
var OrderDetail = require('../models/order_detail');
var Festival = require('../models/festival');


exports.saveCart = function(req, resp){
	var listOrderProducts = JSON.parse(req.body.products);
	console.log(req.body);
	var infoOrder = (req.body.info);
	var customerId = req.params.id;
	console.log(customerId);
	// Lấy productId từ trong cart truyền lên, tạo ra một mảng
	// các objectId.
	var ids = [];
	var mapProduct = {}; // Lưu map product để lấy số lượng sản phẩm về sau.
	for (var i = 0; i < listOrderProducts.length; i++) {
		mapProduct[listOrderProducts[i].id] = listOrderProducts[i].quantity;
				
		var objectId = mongoose.Types.ObjectId(listOrderProducts[i].id);		
		ids.push(objectId);
	}	

	// Tìm các sản phẩm nằm trong danh sách id truyền lên.
	Festival.find({
	    '_id': { $in: ids}
	}, function(err, productResult){

		var orderDetailArray = [];
		var totalPrice = 0;

		// Tạo đối tượng order.
		var order = new Order({
			_id: mongoose.Types.ObjectId(),
			customerId: customerId,
			shipName: 'Ship Name',
			fullName: infoOrder.fullname,
			phone: infoOrder.phone,
			email: infoOrder.email,
			city: infoOrder.city,
			adress: infoOrder.adress,
			totalPrice: 0,
			status: 2
		});

		// Tạo mảng order detail.
	    for (var i = 0; i < productResult.length; i++) {
	     	var orderDetail = new OrderDetail({
	     		orderId: order._id,
	     		productId: productResult[i]._id,
	     		nameLehoi: productResult[i].nameLeHoi,
	     		time: productResult[i].timeStart,
	     		quantity: mapProduct[productResult[i]._id],
	     		unitPrice: productResult[i].price
	     	});
	     	console.log(productResult[i].time);
	     	// Thêm từng đối tượng order detail vào mảng.
	     	orderDetailArray.push(orderDetail);
	     	// Tính toán tổng giá đơn hàng.
	     	totalPrice += orderDetail.quantity * orderDetail.unitPrice;	     	
	    }
	    // Set tổng giá cho order.
	    for(var i = 0; i < listOrderProducts.length; i++){
	    	orderDetailArray[i].time = listOrderProducts[i].time;
	    }
	    order.totalPrice = totalPrice;
	    order.createdAt = new Date();
	    console.log(order);
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
		    resp.send(docs);
		});    
	});
}
