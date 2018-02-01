exports.add = function(req, resp){  
    var rawDocuments = [
  
    {
	
	nameLeHoi: 'Hài kịch Quốc tế Melbourne Comedy',
    timeStart:'2018/03/30',
    timeEnd:'2018/04/15',
    diadiem: 'Melbourne',
    kinhdo:'-37.9701542',
    vido:'144.4927013,9z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Thiên Chúa',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Hài kịch Quốc tế Melbourne Comedy được tổ chức vào cuối tháng Ba và giữa tháng Tư mỗi năm. Là một trong ba lễ hội hài kịch lớn nhất trên thế giới và lớn nhất ở nam bán cầu. Trong khoảng ba tuần rưỡi, Melbourne trở thành trung tâm của hài kịch thế giới với các chương trình mở rộng như: tấu hài, các trò mua vui trong quán rượu, ca kịch, biểu diễn trên đường phố, phim ảnh và các tiết mục biểu diễn trên truyền hình và đài phát thanh. Với sự tham gia của hơn 600.000 người, lễ hội đã trở thành một trong các sự kiện văn hóa lớn nhất Úc.',//Chi tiết
    price: '450000',
    url1:'haikich/haikich1.jpg',//ảnh 4:3 
    url2:'haikich/haikich2.jpg',//ảnh 4:3 
    url3:'haikich/haikich3.jpg',//ảnh 4:3 
    url4:'haikich/haikich4.jpg',//ảnh độ phân giải trên 1920
    url5:'haikich/haikich5.jpg',//ảnh độ phân giải trên 1920
    url6:'haikich/haikich6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
   },{
    
    nameLeHoi: 'Lễ hội hoa Floriade',
    timeStart:'2018/09/01',
    timeEnd:'2018/09/30',
    diadiem: 'Canberra',
    kinhdo:'-35.2813043',
    vido:'149.1204446,15z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Tháng 9, dưới tiết trời xuân Canberra mát mẻ, các loài hoa tulip, violet, thủy tiên, dạ lý hương… đua nhau khoe sắc và tỏa hương thơm nồng. Đặc biệt, đến với thủ đô Canberra, du khác sẽ tận mắt chiêm ngưỡng hàng trăm chủng loại hoa tulip nổi tiếng trên thế giới cùng hàng chục tác phẩm hoa đặc biệt. Các sắc màu như đỏ, cam, vàng, hồng… xen kẽ với nhiều kích cỡ khác nhau bừng sáng dưới vẻ đẹp tráng lệ của thủ đô Canberra xinh đẹp.'
    price: '450000',
    url1:'hoihoa/hoihoa1.jpg',//ảnh 4:3 
    url2:'hoihoa/hoihoa2.jpg',//ảnh 4:3 
    url3:'hoihoa/hoihoa3.jpg',//ảnh 4:3 
    url4:'hoihoa/hoihoa4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoihoa/hoihoa5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoihoa/hoihoa6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

   },{
    
    nameLeHoi: 'Lễ hội ánh sáng  Vivid',
    timeStart:'2018/05/15',
    timeEnd:'2018/06/02',
    diadiem: 'Sydney',
    kinhdo:'-33.847927,150',
    vido:'6517835,10z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội ánh sáng Vivid ở Sydney. Vivid Sydney được mô tả là lễ hội hoành tráng của âm nhạc, ánh sáng và ý tưởng thường được tổ chức từ trung tuần tháng 5 kéo dài cho tới đầu tháng 6 hàng năm. Với hơn 60 điểm lắp đặt ánh sáng tương tác, các ý tưởng gia cùng các nghệ sỹ tài năng hàng đầu thế giới đã mang đến những màn trình diễn công nghệ kỹ thuật số đặc sắc, từ trò chơi điện tử tới thời trang, kỹ xảo điện ảnh, nghệ thuật ánh sáng di động',//Chi tiết
    price: '450000',
    url1:'hoianhsang/anhsang1.jpg',//ảnh 4:3 
    url2:'hoianhsang/anhsang2.jpg',//ảnh 4:3 
    url3:'hoianhsang/anhsang3.jpg',//ảnh 4:3 
    url4:'hoianhsang/anhsang4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoianhsang/anhsang5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoianhsang/anhsang6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
   },{
    
    nameLeHoi: 'Lễ hội ẩm thực và rượu vang Melbourne',
    timeStart:'2018/03/01',
    timeEnd:'2018/03/30',
    diadiem: 'Melbourne',
    kinhdo:'-37.971237',
    vido:'144.4926827,9z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Thiên Chúa',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Tới đây bạn sẽ được thưởng thức các loại rượu quý, rượu vang hảo hạng được trên thế giới hội tụ đầy đủ ở Melbourne. Ngoài ra, bạn sẽ khám phá nét văn hóa ẩm thực vô vùng phong phú của đất nước Australia xinh đẹp.',//Chi tiết
    price: '450000',
    url1:'amthuc/amthuc1.jpg',//ảnh 4:3 
    url2:'amthuc/amthuc2.jpg',//ảnh 4:3 
    url3:'amthuc/amthuc3.jpg',//ảnh 4:3 
    url4:'amthuc/amthuc4.jpg',//ảnh độ phân giải trên 1920amthuc/amthuc1.jpg
    url5:'amthuc/amthuc5.jpg',//ảnh độ phân giải trên 1920
    url6:'amthuc/amthuc6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
   },{
    
    nameLeHoi: 'Lễ hội đua ngựa Melbourne Cup',
    timeStart:'2018/11/01',
    timeEnd:'2018/11/01',
    diadiem: 'Hà Nội',
    kinhdo:'40.508432',
    vido:'-74.8687513,15z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội đua ngựa Melbourne có biểu diễn thời trang, phục vụ thức ăn đặc sản, rượu ngon, các hoạt động ngoài trời vui nhộn cho trẻ em, các chương trình giải trí nơi công cộng và các cuộc đua ngựa liên miên, tất cả kết hợp với nhau ở một số vùng nông thôn tươi đẹp.',//Chi tiết
    price: '450000',
    url1:'duangua/duangua1.jpg',//ảnh 4:3 
    url2:'duangua/duangua2.jpg',//ảnh 4:3 
    url3:'duangua/duangua3.jpg',//ảnh 4:3 
    url4:'duangua/duangua4.jpg',//ảnh độ phân giải trên 1920
    url5:'duangua/duangua5.jpg',//ảnh độ phân giải trên 1920
    url6:'duangua/duangua6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
   },{
    
    nameLeHoi: 'Lễ hội dân gian quốc gia tại thủ đô Canberra',
    timeStart:'2018/11/02',
    timeEnd:'2018/11/05',
    diadiem: 'Canberra',
    kinhdo:'-35.2812958,149',
    vido:'124822,16z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Thiên Chúa',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Dành cho những người yêu thích dòng nhạc nhẹ nhàng, có tâm hồn lãng mạn, lễ hội dân gian tại thủ đô Canberra sẽ đưa du khách chìm đắm trong một không gian văn hóa cổ điển với nhiều loại hình biểu diễn như buổi hòa nhạc, giao lưu thơ ca, khiêu vũ hay hội thảo giao lưu văn hóa.',//Chi tiết
    price: '450000',
    url1:'dangian/dangian1.jpg',//ảnh 4:3 
    url2:'dangian/dangian2.jpg',//ảnh 4:3 
    url3:'dangian/dangian3.jpg',//ảnh 4:3 
    url4:'dangian/dangian4.jpg',//ảnh độ phân giải trên 1920
    url5:'dangian/dangian5.jpg',//ảnh độ phân giải trên 1920
    url6:'dangian/dangian6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920 
   },{
   
    nameLeHoi: 'Lễ hội Adelaide Fringe',
    timeStart:'2018/02/15',
    timeEnd:'2018/03/15',
    diadiem: 'Adelaide',
    kinhdo:'-34.9998825,138',
    vido:'3309738,10z',
    lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    tongiao:'Đạo Thiên Chúa',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Với hơn 900 sự kiện được điễn ra ở khắp các địa điểm trong thành phố, du khách sẽ được đắm chìm vào một không gian nghệ thuật đặc sắc tại Adelaide. Được tổ chức từ giữa tháng 2 đến giữa tháng 3, du khách sẽ được thưởng thức tất cả các màn trình diễn nghệ thuật như múa đương đại, múa rối hay hài kịch,...',//Chi tiết
    price: '450000',
    url1:'adelaide/adelaide1.jpg',//ảnh 4:3 
    url2:'adelaide/adelaide2.jpg',//ảnh 4:3 
    url3:'adelaide/adelaide3.jpg',//ảnh 4:3 
    url4:'adelaide/adelaide4.jpg',//ảnh độ phân giải trên 1920
    url5:'adelaide/adelaide5.jpg',//ảnh độ phân giải trên 1920
    url6:'adelaide/adelaide6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920   
    }
];