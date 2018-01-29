var Festival = require('../models/festival');
require('mongoose-pagination');

exports.getList = function(req, resp){
    // if (authenticationController.checkToken(req.headers.authorization)){
    //  console.log('Okie');
    // }else{
    //  console.log('Not  okie');
    // }

    // Lấy tham số và parse ra number.  
    var page = Number(req.query.page);
    var limit = Number(req.query.limit);
    // if (limit == undefined || limit == null) {
    //  limit = 10;
    // }
    var find = Number(req.query.find);
    switch(find){
        case 0: {
            Festival.find({'lucdia':'Việt Nam', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 1: {
            Festival.find({'lucdia':'Châu Á', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 2: {
            Festival.find({'lucdia':'Châu Âu', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 3: {
            Festival.find({'lucdia':'Châu Mỹ', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 4: {
            Festival.find({'lucdia':'Châu Phi', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 5: {
            Festival.find({'lucdia':'Châu Úc', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 6: {
            Festival.find({'tongiao':'Đạo Phật', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 7: {
            Festival.find({'tongiao':'Đạo Hồi', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 8: {
            Festival.find({'tongiao':'Đạo Thiên Chúa', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        case 9: {
            Festival.find({'tongiao':'Đạo Hindu', 'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        };
        break;
        default:{
            Festival.find({'status': 1})
            .paginate(page, limit, function(err, result, total) {       
                var responseData = {
                    'listFestival': result,
                    'totalPage': Math.ceil(total/limit)
                };
                resp.send(responseData);
            });
        }
    }
        
    
    // Festival.find({'status': 1})
    // .paginate(page, limit, function(err, result, total) {        
 //     var responseData = {
 //         'listFestival': result,
 //         'totalPage': Math.ceil(total/limit)
 //     };
 //     resp.send(responseData);
 //     });
 //     Festival.find({'status': 1 },function(err, result){
    //  resp.send(result);
    // });
}

exports.getDetail = function(req, resp){
    
    Festival.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
        
        resp.send(result);
    });
}

exports.add = function(req, resp){  
    var rawDocuments = [
     nameLeHoi: 'Lễ Giáng Sinh',
        timeStart:'2018-12-24',
        timeEnd:'2018-12-25',
        diadiem: 'Paris-Pháp',
        kinhdo:'48.8587741',
        vido:'2.2069771,11',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Nguyên thủy, lễ Giáng sinh là ngày lễ của những người theo đạo Kitô giáo, nhằm kỷ niệm ngày sinh ra của người lãnh đạo tôn giáo mình, người mà họ cho là Thiên Chúa xuống thế làm người. Dần dần, theo thời gian và qua các lễ hội của phương Tây, lễ Giáng sinh ngày càng được tổ chức linh đình. Kết quả là bây giờ, lễ Giáng sinh được xem là một ngày lễ quốc tế, với ông già Noel, cây Giáng sinh và cây thông noel.',//Chi tiết
        url1:'imgs/Lễ Giáng Sinh/12_24_trong_hang_da.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Giáng Sinh/christmas.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Giáng Sinh/Giang-sinh-la-ngay-nao-1-phunutoday_vn.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Giáng Sinh/636133854120848301-2118387170_m3iG7t1IQ8ybXCDFvoO6_Beautiful_christmas_tree-1.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Giáng Sinh/image (1).jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Giáng Sinh/image.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Hiển Linh',
        timeStart:'2018-1-6',
        timeEnd:'2018-1-8',
        diadiem: 'Athens-Hy Lạp',
        kinhdo:'38.0602355',
        vido:'19.9889917,6',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ Hiển Linh được gọi là lễ Thiên Chúa tỏ mình ra cho nhân loại. Thiên Chúa không chỉ tỏ mình ra cho riêng dân tộc Do Thái mà còn cho muôn dân khác nữa. Bởi đó, mọi người trong chúng ta phải cộng tác với Thiên Chúa để làm bừng sáng lên ánh sáng đã xuất hiện từ Phương Đông. Chúng ta phải là ánh sao dẫn đường cho mọi người đến với Chúa. Trong bài đọc thứ nhất hôm nay, tiên tri Isaia đã mở ra cả một viễn tượng lớn lao: đó là ngày và thời vinh quang của Thiên Chúa chiếu trên Dân Chúa và biến Dân Chúa thành điểm thu phục muôn dân. Mọi người từ mọi phương hướng sẽ cùng qui về một mối trong tiếng ngợi ca Thiên Chúa. ',//Chi tiết
        url1:'imgs/Lễ Hiển Linh/2016cnlehienlinhmt211219.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Hiển Linh/v1.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Hiển Linh/Ve-Mien-Anh-Sang-495x343.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Hiển Linh/DaiDien_9749.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Hiển Linh/NhaThoChanhToa-Thuml.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Hiển Linh/nha-tho-lon-ha-noi-1-1.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Phục Sinh',
        timeStart:'2018-4-15',
        timeEnd:'2018-4-17',
        diadiem: 'London-Anh',
        kinhdo:'52.7535232',
        vido:'-6.8141748,6',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ Phục sinh theo đạo Thiên chúa giáo, là lễ mừng Chúa Jésus Christ sống lại sau ba ngày. Lễ này tiếp theo Tuần Thánh mà người ta tổ chức cho bữa ăn cuối cùng của Chúa Jésus với Tông đồ (ngày thứ Năm: La Cène) và ngày Chúa chết trên thập tự giá (thứ Sáu).Lễ Phục sinh là lễ mùa Xuân, hy vọng và sự tái sinh. Từ xưa lắm, mọi người mừng sự trở lại của mùa Xuân sau những tháng dài lạnh, cây cối bắt đầu đâm chổi nẩy lộc.',//Chi tiết
        url1:'imgs/Lễ Phục Sinh/Easter-Eggs-Hunting-Chasse-aux-Oeufs-16-©-French-Moments.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Phục Sinh/faces-of-mystery-easter-island-heads-cliff-wassmann.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Phục Sinh/phuc-sinh.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Phục Sinh/Easter-Background.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Phục Sinh/easter-bunny.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Phục Sinh/easter-featured-image.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
];

    Festival.insertMany(rawDocuments)
        .then(function(mongooseDocuments) {
            console.log(mongooseDocuments);
        })
        .catch(function(err) {
            console.log(err);
        }); 



    // var festival = new Festival(req.body);   
    // festival.save(function(err){             
    //  resp.send(festival);
    // });
}

exports.update = function(req, resp){
    Festival.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
        resp.json(result);
    });
}

exports.delete = function(req, resp){
    // Festival.remove({
    //     _id: req.params.id
    //    }, function(err, result) {
    //     resp.json({ message: 'Successfully deleted' });
    // });
    Festival.findById(req.params.id,function(err, result){              
        result.status = 0;
        Festival.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
            resp.json(result);
        });
    }); 
}
