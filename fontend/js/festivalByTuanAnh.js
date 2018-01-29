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
    {
        nameLeHoi: 'Tết Nguyên Đán',
        timeStart:'2018-02-23',
        timeEnd:'2018-02-30',
        diadiem: 'Hà Nội-Việt Nam',
        kinhdo:'21.022736',
        vido:'105.801944',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Tết Nguyên Đán (hay còn gọi là Tết Cả, Tết Ta, Tết Âm lịch, Tết Cổ truyền hay chỉ đơn giản còn gọi là Tết) là dịp lễ quan trọng nhất của Việt Nam, cùng với văn hóa Tết Âm lịch của các nước Đông Á. Trước ngày Tết, thường có những ngày khác để sửa soạn như "Tết Táo Quân" (23 tháng chạp âm lịch) và "Tất Niên" (29 hoặc 30 tháng chạp âm lịch).Vì Tết tính theo Âm lịch nên Tết Nguyên Đán của Việt Nam muộn hơn Tết Dương lịch (còn gọi nôm na là Tết Tây). Do quy luật 3 năm nhuận một tháng của âm lịch nên ngày đầu năm của dịp Tết Nguyên đán không bao giờ trước ngày 21 tháng 1 Dương lịch và sau ngày 19 tháng 2 Dương lịch mà thường rơi vào khoảng cuối tháng 1 đến giữa tháng 2 Dương lịch. Toàn bộ dịp Tết Nguyên đán hàng năm thường kéo dài trong khoảng 7 đến 8 ngày cuối năm cũ và 7 ngày đầu năm mới (23 tháng Chạp đến hết ngày 7 tháng Giêng). Hàng năm, Tết được tổ chức vào ngày mồng 1 tháng 1 nông lịch trên đất nước Việt Nam và ở một vài nước khác có cộng đồng người Việt sinh sống. Trong những ngày Tết, các gia đình sum họp bên nhau, cùng thăm hỏi người thân, mừng tuổi và thờ cúng tổ tiên... Theo phong tục tập quán, Tết thường có những điều kiêng kỵ.',//Chi tiết
        url1:'imgs/Tết Nguyên Đán/chup-anh-sang-tu-nhien.jpg',//ảnh 4:3 
        url2:'imgs/Tết Nguyên Đán/1.jpg.1440.640.jpg',//ảnh 4:3 
        url3:'imgs/Tết Nguyên Đán/2016-01-31-04-02-47-2-1454236125234_ruwx.jpg',//ảnh 4:3 
        url4:'imgs/Tết Nguyên Đán/da-nang-ban-2000-qua-phao-hoa-don-giao-thua-tet-at-mui.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Tết Nguyên Đán/qqqqq.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Tết Nguyên Đán/huong-xuat-hanh-tot-ngay-tet-binh-than-2016_XSRG.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    },
    {
        nameLeHoi: 'Lễ Hội Hoa Anh Đào',
        timeStart:'2018-03-27',
        timeEnd:'2018-03-30',
        diadiem: 'Seoul-Hàn Quốc',
        kinhdo:'37.5650172',
        vido:'126.849464',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Hòn đảo nhỏ Yeouido, nằm trên sông Hàn, là một trong những địa điểm nổi tiếng nhất ở Seoul để thưởng thức mùa hoa anh đào. Hàng năm, lễ hội hoa xuân Yeouido thu hút rất nhiều khách du lịch và người dân địa phương, nhờ sắc hồng tuyệt đẹp của hoa anh đào và không khí sôi động của lễ hội. Với hơn 1.600 cây hoa anh đào nằm rải rác trên khắp hòn đảo, Yeouido thật sự là thiên đường sakura. Phố đi bộ Yeouiseo-ro là nơi du khách có thể tản bộ và thưởng thức các món ăn đường phố ngon tuyệt. Về đêm, những ánh đèn lung linh nhảy múa cùng cánh hoa mỏng manh làm sẽ làm ngất lòng du khách.',//Chi tiết
        url1:'imgs/Hoa anh đào/2710011201104009k_CherryblossominYeouido.jpg',//ảnh 4:3 
        url2:'imgs/Hoa anh đào/dai-hoc-han-quoc.jpg',//ảnh 4:3 
        url3:'imgs/Hoa anh đào/hoa-anh-dao-txtd-660-2.jpg',//ảnh 4:3 
        url4:'imgs/Hoa anh đào/hoa-anh-dao-nhat-ban-17.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Hoa anh đào/artsfon.com-19198.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Hoa anh đào/nhung-hinh-anh-mua-xuan-dep-nhat-tren-the-gioi-so-3.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Vu Lan',
        timeStart:'2018-02-23',
        timeEnd:'2018-08-15',
        diadiem: 'Hiroshima-Nhật Bản',
        kinhdo:'31.6776989',
        vido:'120.2741073',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Phật',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Obon là lễ hội được mong chờ nhất trong mùa thu của người Nhật Bản. Lễ hội này mang ý nghĩa chào đón sự ghé thăm của những linh hồn tổ tiên đã khuất, thể hiện lòng biết ơn và cầu an cho các linh hồn. Ngày nay, lễ hội này cũng trở thành dịp để sum họp gia đình và thể hiện tình yêu thương đối với những người còn sống. Có thể nói, lễ hội Obon được coi như lễ Vu Lan của người Nhật Bản. Đây cũng là thời điểm sum họp gia đình gần giống với tết của người Việt Nam.',//Chi tiết
        url1:'imgs/Vu Lan/lễ-hội-vu-lan-ở-nhật-bản - Copy.jpg',//ảnh 4:3 
        url2:'imgs/Vu Lan/Tin-PG-Hoa-Ky-7.jpg',//ảnh 4:3 
        url3:'imgs/Vu Lan/Vu lan 3.jpg',//ảnh 4:3 
        url4:'imgs/Vu Lan/ni.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Vu Lan/Ohara-Matsuri-Dance-Festival-in-Kagoshima-Japan.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Vu Lan/Vu_Lan_festival_1.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Hội Màu Sắc',
        timeStart:'2018-03-7',
        timeEnd:'2018-03-9',
        diadiem: 'Dubai-Ấn Độ',
        kinhdo:'-22.913885',
        vido:'-43.726182',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Phật',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Vào dịp lễ hội Holi, người dân Ấn Độ lại ném bột màu vào nhau thể hiện cho sự tự do và không phân biệt giai cấp vốn tồn tại trong xã hội.. Lễ hội Holi chính thức được bắt đầu vào buổi sáng hôm sau và mọi người chơi đùa với màu sắc. Ai ai cũng nắm trong tay bột màu khô hoặc các quả bóng có chứa dung dịch màu để ném và phun màu vào những người khác.',//Chi tiết
        url1:'imgs/Màu sắc/224577.jpg',//ảnh 4:3 
        url2:'imgs/Màu sắc/631113.jpg',//ảnh 4:3 
        url3:'imgs/Màu sắc/631518.jpg',//ảnh 4:3 
        url4:'imgs/Màu sắc/holi-festival-de-colores-4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Màu sắc/holi1.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Màu sắc/Holi-Festival-of-Colours-2.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Hội Té Nước',
        timeStart:'2018-04-14',
        timeEnd:'2018-04-16',
        diadiem: 'Vientiane-Lào',
        kinhdo:'17.960427',
        vido:'102.5357246',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Phật',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ hội Té Nước ở Lào có tên là Bunpimay, thường diễn ra trong 3 ngày từ 13 đến 15/4 theo Phật lịch. Vào dịp này, người dân Lào tập trung đến chùa lễ Phật, tắm Phật bằng nước thơm, nghe sư giảng đạo, rồi té nước cho các nhà sư, chùa và cây cối xung quanh chùa. Ngoài ra, người Lào còn té nước vào nhà cửa, dụng cụ lao động và súc vật để gột rửa điều xấu xa, bệnh tật và cầu chúc một năm mới tốt đẹp và mạnh khỏe. Ngoài nghi lễ té nước, người Lào có một tục lệ khá độc đáo đó là buộc chỉ cổ tay. Họ buộc những sợi chỉ màu như gửi lời chúc hạnh phúc và sức khỏe đến người được buộc. Tục lệ này tuy đơn giản như nó phản ánh sâu sắc tính cách hiền hòa của người dân Lào. Họ không bao giờ cầu cho mình mà chỉ cầu cho người khác, bởi theo họ khi làm điều gì tốt lành cho người khác, thì điều tốt lành ấy cũng sẽ đến với mình.',//Chi tiết
        url1:'imgs/Té nước/Songkran-History.jpg',//ảnh 4:3 
        url2:'imgs/Té nước/le_hoi_te_nuoc_thai_lan12.jpg',//ảnh 4:3 
        url3:'imgs/Té nước/16songkran832-2013-04-14.jpg',//ảnh 4:3 
        url4:'imgs/Té nước/883296_572265736205744_1800545570_o.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Té nước/o-SONGKRAN-900.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Té nước/Songkran-Thai-New-Year-Festival.jpg',//ảnh độ phân giải trên 1920
        status: '1',
        upload: ''
        __v:'0'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: ' Lễ hội Carnival ',
        timeStart:'2018/02/09',
        timeEnd:'2018/02/22',
        diadiem: 'Rio de Janeiro, Brazil',
        kinhdo:'-22.9138838',
        vido: '-43.7268661',
        lucdia: 'Châu Mỹ',
        tongiao: 'Không',
        chitiet:'Được tổ chức vào khoảng tháng 2 hàng năm trên khắp đất nước Brazil, nhưng sôi nổi nhất vẫn là Carnival tại thủ đô Rio de Janeiro, nơi tất cả các vũ công samba tài giỏi nhất đổ về tranh tài. Đây là một cuộc trình diễn nghệ thuật có quy mô rất hoành tráng.Lễ hội được mở đầu bằng nghi thức trao chìa khóa vào thành phố cho hoàng đế Momo - một nhân vật tưởng tượng, để ngài dẫn các vũ công diễu hành và trình diễn ở vũ trường Samba. Mỗi trường phái được trình diễn trong vòng 85 phút. Trong tiếng trống, ánh pháo hoa, đèn chiếu rực trời, khán giả kết thành từng nhóm trong những bộ trang phục đặc sắc hát hò và vui đùa cùng vua chúa, hoàng hậu, công chúa, hoàng tử, hiệp sĩ... Tâm điểm của lễ hội Carnival là cuộc diễu hành diễn ra vào đêm Chủ nhật và thứ hai tại sân vận động Sambadrome của thành phố cùng rất nhiều bữa tiệc đường phố vui nhộn.Trong lễ hội, một cuộc thi hào hứng liên quan đến vũ điệu Samba được tổ chức tại Sambadrom (Vũ trường Samba). Cuộc thi chọn ra 6 đội múa Samba thuộc các trường phái Samba xuất sắc nhất để tôn vinh và trao giải.',
        url1:'imgs/carnaval/03p-carnival-2011-carnaval-do-rio-de-janeiro-rio-de-janeiro-state-of-rio-de-janeiro-brz.jpg',//ảnh 4:3 
        url2:'imgs/carnaval/34613727730_40e016239e_h.jpg',//ảnh 4:3 
        url3:'imgs/carnaval/cd7ec84274a0c5174c49cae36ae8ccfe.jpg',//ảnh 4:3 
        url4:'imgs/carnaval/12299ab0bd35c0ae8139c9880d0e19d2.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/carnaval/8577411594_fb1482eca3_k.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/carnaval/carnaval_groupon8.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        upload: ''
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: ' Lễ hội Carnival ',
        timeStart:'2018/03/05',
        timeEnd:'2018/03/08',
        diadiem: ' Barranquilla',
        kinhdo:'10.9838039',
        vido:'-74.8882301',
        lucdia:'Châu Mỹ',
        tongiao:'Không',
        chitiet:'Lễ hội Carnival ở Barranquilla, Colombia là một trong những lễ hội Carnival đặc sắc và thú vị nhất Châu Mỹ La Tinh. Carnival Barranquilla (tiếng Tây Ban Nha: Carnaval de Barranquilla) là lễ hội văn hóa dân gian quan trọng nhất ở Colombia, và cũng là một trong những carnival lớn nhất thế giới. carnival này có truyền thống truy ra tới thế kỷ thứ 19. Bốn mươi ngày trước Tuần Thánh, Barranquilla mở cửa đón du khách trong và ngoài nước cùng với cư dân địa phương để tổ chức bốn ngày lễ hội tưng bừng. Trong dịp carnival, các hoạt động thông thường của Barranquilla bị đình trệ vì thành phố đầy những vũ công đường phố, những buổi diễu hành âm nhạc và cải trang. Carnival Barranquilla gồm những điệu nhảy như điệu paloteo Tây Ban Nha, điệu congo châu Phi, và điệu mico y micas của thổ dân. Rất nhiều phong cách của âm nhạc Colombia cũng được biểu diễn, nổi bật nhất là cumbia, một nhạc cụ gồm trống và thanh. Carnival Barranquilla được ghi nhận là một Cultural Masterpiece bởi Quốc hội Colombia vào năm 2002.[1] UNESCO, ở Paris vào ngày 7 tháng 11 năm 2003, cũng thông báo rằng nó là một trong những di sản văn hóa của nhân loại. Việc công bố này diễn ra vào năm Queen Carnival Olga Lucia Rodriquez.',
        url1:'imgs/Carnival/31985860554_97c8dda9cc_b.jpg',//ảnh 4:3 
        url2:'imgs/Carnival/caribbean_parade_20120804_248254832.jpg',//ảnh 4:3 
        url3:'imgs/Carnival/1_Ku4TzfGQmyxMczYZFrcaMg.jpeg',//ảnh 4:3 
        url4:'imgs/Carnival/Image-credit-to-Prudential-Marina-Bay-Carnival.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Carnival/rio-carnival.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Carnival/carnaval.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        upload: ''
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ hội Tango Buenos Aires',
        timeStart:'2018/08/14',
        timeEnd:'2018/08/24',
        diadiem: 'Buenos Aires , Argentina',
        kinhdo:'-34.6234321',
        vido:'-58.454072',
        lucdia:'Châu Mỹ',
        tongiao:'Không',
        chitiet:'Ngày hội Tango lớn nhất thế giới này do chính quyền thành phố Buenos Aires tổ chức hàng năm nhằm tôn vinh và gìn giữ những giá trị của thể loại âm nhạc và khiêu vũ từng được Unesco công nhận là di sản văn hóa phi vật thể của nhân loại năm 2009. Đặc biệt, trong khuôn khổ liên hoan sẽ diễn ra Giải vô địch khiêu vũ Tango thế giới lần thứ 10 với sự tham gia của hơn 500 cặp vũ công đến từ nhiều nước trên thế giới. Lễ hội Tango cũng nhằm tạo dấu ấn riêng để thu hút khách du lịch tới thành phố giàu truyền thống văn hóa như Buenos Aires. Theo số liệu chính thức, mỗi năm vũ điệu truyền thống này đem về cho thành phố hàng trăm triệu USD thông qua các chương trình biểu diễn, tour du lịch, các cuộc họp, hội thảo, các lớp dạy khiêu vũ. Lễ hội năm nay sẽ kéo dài tới ngày 24/8. Năm ngoái sự kiện này đã thu hút được trên 400.000 khán giả.Ra đời cách đây trên 100 năm tại khu vực hạ lưu dòng Sông Bạc, ngày nay Tango đã trở thành “món ăn tinh thần” không thể thiếu trong xã hội Argentina và Uruguay và được phổ biến tới nhiều nước có nền văn hóa khác nhau như Nhật Bản, Hàn Quốc, Pháp, New Zealand, Australia, Anh, Đức và Mexico./.',
        url1:'imgs/Lễ hội Tango/1155249161_8ZNoZ-X2-1.jpg',//ảnh 4:3 
        url2:'imgs/Lễ hội Tango/tango.jpg',//ảnh 4:3 
        url3:'imgs/Lễ hội Tango/buenos-aires-tango-festival-argentina-SA0118.jpg',
        url4:'imgs/Lễ hội Tango/tango-buenos-aires-festival-y-mundial-gran-milonga-de-cierre-2.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ hội Tango/EB8387-001.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ hội Tango/1718_TangoBuenosAires.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        upload: ''
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ hội bia Argentina',
        timeStart:'2018/09/29',
        timeEnd:'2018/10/10',
        diadiem: 'Villa General Belgrano. Argentina',
        kinhdo:'-31.8971718',
        vido:'-70.2249417',
        lucdia: 'Châu Mỹ',
        tongiao: 'Không',
        chitiet:' Từ ngày 29 tháng 9 đến ngày 10 tháng 10, Lễ hội bia quốc gia Argentina, hay còn được biết đến với tên gọi Oktoberfest, được tổ chức tại thành phố Villa General Belgrano. Hàng năm, cộng đồng dân cư của thành phố nhỏ này, phần lớn có nguồn gốc từ Đức, tổ chức sự kiện quốc gia này như một phiên bản của Lễ hội Oktoberfest diễn ra thường niên tại Đức. Trong suốt 11 ngày, hàng ngàn cư dân thị phương và du khách thập phương ăn mừng bữa tiệc độc đáo này trên khắp các con phố, bên cạnh những hoạt động thú vị như diễu hàng, biểu diễn âm nhạc, liên hoan ẩm thực và đặc biệt hơn cả là sự kiện bình chọn Nữ hoàng bia của năm. Một trong số những khoảnh khắc quan trọng nhất của Lễ hội là sự kiện “bóc tem” các thùng bia khổng lồ trước đông đảo công chúng. Theo truyền thống, uống bia từ những thùng chứa này đem lại may mắn cho cả năm đó!',
        url1:'imgs/Lễ hội Bia  Argentina/13-of-the-wildest-pictures-from-this-years-oktoberfest-in-munich.jpg',//ảnh 4:3 
        url2:'imgs/Lễ hội Bia  Argentina/oktoberfest_07.jpg',//ảnh 4:3 
        url3:'imgs/Lễ hội Bia  Argentina/r0_524_4538_3025_w1200_h678_fmax.jpg',//ảnh 4:3 
        url4:'imgs/Lễ hội Bia  Argentina/oktoberfest-2013-09.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ hội Bia  Argentina/group-enjoying-oktoberfest.0d3987a5e5ece0c6bb012b72583d3e01.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ hội Bia  Argentina/Oktoberfest-578f6b955f9b584d20fa50b8.jpg',//ảnh độ phân giải trên 1920
        status: '1'
upload: ''
        
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Tạ Ơn',
        timeStart:'2018/11/21',
        timeEnd:'2018/11/23',
        diadiem: 'USA',
        kinhdo:'36.2024145',
        vido:'-113.7749545',
        lucdia:'Châu Mỹ',
        tongiao:'Không',
        chitiet:'Ngày lễ Tạ Ơn là một kỳ nghỉ hàng năm ở Mỹ kể từ năm 1863. Ngày lễ Tạ Ơn – Thanksgiving Day đầu tiên được cho là diễn ra vào năm 1623 để cảm ơn cơn mưa đã kết thúc đợt hạn hán. George Washington, vị tổng thống đầu tiên của Mỹ đã tuyên bố ngày lễ Tạ ơn trở thành một ngày lễ chính thức của Mỹ vào năm 1789. Ngày là một ngày truyền thống dành cho gia đình bạn bè sum họp bên nhau cho một bữa ăn đặc biệt. Bữa ăn đặc biệt này thường bao gồm gà tây, khoai tây, nước sốt việt quất, bánh bí ngô, rau xanh... Ngày Lễ Tạ Ơn là ngày lễ dành cho nhiều người để tạ ơn cho những gì họ có. Đây cũng có là thời gian dành cho những chuyến đi du lịch hay về thăm gia đình, bạn bè. Lễ Tạ Ơn – Thanksgiving không có ngày cố định. Ngày này được tính bằng cách như sau. Ngày lễ Tạ Ơn của Mỹ sẽ diễn vào ngày thứ năm của tuần lễ thứ 4 của tháng 11. Cụ thể ngày lễ Tạ Ơn của năm 2018 ở Mỹ sẽ diễn ra vào ngày 22/11/2018. Lưu ý ngày Lễ Tạ Ơn ở Canada thì diễn ra vào ngày thứ 2 lần thứ hai của tháng 10. Ngày này còn diễn ra ở những nơi khác như ở Hà Lan, Grenada, Liberia, Anh ...',
        url1:'imgs/Thanksgiving/636457553890827975-iStock-000017351486-Large-1200x800.jpg',//ảnh 4:3 
        url2:'imgs/Thanksgiving/History_BYDK_Thanksgiving_SF_HD_1104x622-16x9.jpg',//ảnh 4:3 
        url3:'imgs/Thanksgiving/Thanksgiving.jpg',//ảnh 4:3 
        url4:'imgs/Thanksgiving/1447772474-delish-thanksgiving-side-says-about-you.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Thanksgiving/thanksgiving2.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Thanksgiving/turjey.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        upload: ''
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: ' Thứ Sáu Đen ',
        timeStart:'2018/11/22',
        timeEnd:'2018/11/24',
        diadiem: 'USA',
        kinhdo:'36.2024145',
        vido:'-113.7749545',
        lucdia:'Châu Mỹ',
        tongiao:'Không',
        chitiet:'Thứ Sáu Đen (tiếng Anh: Black Friday) là "ngày vàng mua sắm" của người dân Mỹ với hàng chục ngàn mặt hàng giảm giá cực lớn. Thứ Sáu Đen là ngày thứ sáu ngay sau Lễ Tạ Ơn (ngày Lễ Tạ Ơn rơi vào ngày Thứ Năm lần thứ 4 trong tháng 11 ở Hoa Kỳ, cho nên Thứ Sáu đen rơi vào khoảng ngày 23-29 tháng 11) và được coi là ngày mở hàng cho mùa mua sắm tấp nập nhất ở Hoa Kỳ. Ngày đặc biệt này có xuất xứ từ tình trạng tắc nghẽn giao thông xảy ra vào ngày thứ sáu sau Lễ Tạ Ơn năm 1965 ở Philadelphia, khi hàng trăm nghìn người Mỹ chen chúc nhau ở các con phố, vỉa hè đi mua sắm để sửa soạn cho Lễ Noel sắp đến, và theo truyền thống được xem là ngày bắt đầu mùa mua sắm Giáng sinh, tương tự như Boxing Day ở nhiều quốc gia Khối thịnh vượng chung.  Trong tiếng Anh có thuật ngữ "in the black" chỉ tình trạng doanh nghiệp làm ăn có lợi nhuận. Tương phản với "in the black" là "in the red" chỉ tình trạng kinh doanh thua lỗ, buôn bán thất bát. Ngày xưa, để tiện phân biệt và theo dõi sổ sách, kế toán thường ghi số lợi nhuận bằng mực đen, số lỗ bằng mực đỏ. Từ đó, người ta đặt tên ngày mua sắm lớn nhất trong năm là Black Friday, ngụ ý rằng đây là ngày ăn nên làm ra của các doanh nghiệp.',
        url1:'imgs/Black Friday/black-friday-1.jpg',//ảnh 4:3 
        url2:'imgs/Black Friday/Black-Friday-2016.jpg',//ảnh 4:3 
        url3:'imgs/Black Friday/nintchdbpict000284609981.jpg',//ảnh 4:3 
        url4:'imgs/Black Friday/161126-macys-black-friday-1245a_fc78e4c221b91bdb8c44b010adba56ad.nbcnews-ux-2880-1000.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Black Friday/brazil-black-friday-1.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Black Friday/Black-friday-shopping-1920x1080.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        upload: ''
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    }
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