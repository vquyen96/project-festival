var Festival = require('../models/festival');
require('mongoose-pagination');

exports.add = function(req, resp){	
	var rawDocuments = [
	    {
        nameLeHoi: ' Lễ hội Carnaval ',
        timeStart:'2018/02/09',
        timeEnd:'2018/02/22',
        diadiem: 'Rio de Janeiro, Brazil',
        kinhdo:'-22.9138838',
        vido: '-43.7268661',
        lucdia: 'Châu Mỹ',
        tongiao: 'Không',
        price: '150000',
        chitiet:'Được tổ chức vào khoảng tháng 2 hàng năm trên khắp đất nước Brazil, nhưng sôi nổi nhất vẫn là Carnival tại thủ đô Rio de Janeiro, nơi tất cả các vũ công samba tài giỏi nhất đổ về tranh tài. Đây là một cuộc trình diễn nghệ thuật có quy mô rất hoành tráng.Lễ hội được mở đầu bằng nghi thức trao chìa khóa vào thành phố cho hoàng đế Momo - một nhân vật tưởng tượng, để ngài dẫn các vũ công diễu hành và trình diễn ở vũ trường Samba. Mỗi trường phái được trình diễn trong vòng 85 phút. Trong tiếng trống, ánh pháo hoa, đèn chiếu rực trời, khán giả kết thành từng nhóm trong những bộ trang phục đặc sắc hát hò và vui đùa cùng vua chúa, hoàng hậu, công chúa, hoàng tử, hiệp sĩ... Tâm điểm của lễ hội Carnival là cuộc diễu hành diễn ra vào đêm Chủ nhật và thứ hai tại sân vận động Sambadrome của thành phố cùng rất nhiều bữa tiệc đường phố vui nhộn.Trong lễ hội, một cuộc thi hào hứng liên quan đến vũ điệu Samba được tổ chức tại Sambadrom (Vũ trường Samba). Cuộc thi chọn ra 6 đội múa Samba thuộc các trường phái Samba xuất sắc nhất để tôn vinh và trao giải.',
        url1:'imgs/carnaval/03p-carnival-2011-carnaval-do-rio-de-janeiro-rio-de-janeiro-state-of-rio-de-janeiro-brz.jpg',//ảnh 4:3 
        url2:'imgs/carnaval/34613727730_40e016239e_h.jpg',//ảnh 4:3 
        url3:'imgs/carnaval/cd7ec84274a0c5174c49cae36ae8ccfe.jpg',//ảnh 4:3 
        url4:'imgs/carnaval/12299ab0bd35c0ae8139c9880d0e19d2.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/carnaval/8577411594_fb1482eca3_k.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/carnaval/carnaval_groupon8.jpg',//ảnh độ phân giải trên 1920
        status: '1'
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
        price: '150000',
        chitiet:'Lễ hội Carnival ở Barranquilla, Colombia là một trong những lễ hội Carnival đặc sắc và thú vị nhất Châu Mỹ La Tinh. Carnival Barranquilla (tiếng Tây Ban Nha: Carnaval de Barranquilla) là lễ hội văn hóa dân gian quan trọng nhất ở Colombia, và cũng là một trong những carnival lớn nhất thế giới. carnival này có truyền thống truy ra tới thế kỷ thứ 19. Bốn mươi ngày trước Tuần Thánh, Barranquilla mở cửa đón du khách trong và ngoài nước cùng với cư dân địa phương để tổ chức bốn ngày lễ hội tưng bừng. Trong dịp carnival, các hoạt động thông thường của Barranquilla bị đình trệ vì thành phố đầy những vũ công đường phố, những buổi diễu hành âm nhạc và cải trang. Carnival Barranquilla gồm những điệu nhảy như điệu paloteo Tây Ban Nha, điệu congo châu Phi, và điệu mico y micas của thổ dân. Rất nhiều phong cách của âm nhạc Colombia cũng được biểu diễn, nổi bật nhất là cumbia, một nhạc cụ gồm trống và thanh. Carnival Barranquilla được ghi nhận là một Cultural Masterpiece bởi Quốc hội Colombia vào năm 2002.[1] UNESCO, ở Paris vào ngày 7 tháng 11 năm 2003, cũng thông báo rằng nó là một trong những di sản văn hóa của nhân loại. Việc công bố này diễn ra vào năm Queen Carnival Olga Lucia Rodriquez.',
        url1:'imgs/Carnival/31985860554_97c8dda9cc_b.jpg',//ảnh 4:3 
        url2:'imgs/Carnival/caribbean_parade_20120804_248254832.jpg',//ảnh 4:3 
        url3:'imgs/Carnival/1_Ku4TzfGQmyxMczYZFrcaMg.jpeg',//ảnh 4:3 
        url4:'imgs/Carnival/Image-credit-to-Prudential-Marina-Bay-Carnival.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Carnival/rio-carnival.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Carnival/carnaval.jpg',//ảnh độ phân giải trên 1920
        status: '1'
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
        price: '150000',
        chitiet:'Ngày hội Tango lớn nhất thế giới này do chính quyền thành phố Buenos Aires tổ chức hàng năm nhằm tôn vinh và gìn giữ những giá trị của thể loại âm nhạc và khiêu vũ từng được Unesco công nhận là di sản văn hóa phi vật thể của nhân loại năm 2009. Đặc biệt, trong khuôn khổ liên hoan sẽ diễn ra Giải vô địch khiêu vũ Tango thế giới lần thứ 10 với sự tham gia của hơn 500 cặp vũ công đến từ nhiều nước trên thế giới. Lễ hội Tango cũng nhằm tạo dấu ấn riêng để thu hút khách du lịch tới thành phố giàu truyền thống văn hóa như Buenos Aires. Theo số liệu chính thức, mỗi năm vũ điệu truyền thống này đem về cho thành phố hàng trăm triệu USD thông qua các chương trình biểu diễn, tour du lịch, các cuộc họp, hội thảo, các lớp dạy khiêu vũ. Lễ hội năm nay sẽ kéo dài tới ngày 24/8. Năm ngoái sự kiện này đã thu hút được trên 400.000 khán giả.Ra đời cách đây trên 100 năm tại khu vực hạ lưu dòng Sông Bạc, ngày nay Tango đã trở thành “món ăn tinh thần” không thể thiếu trong xã hội Argentina và Uruguay và được phổ biến tới nhiều nước có nền văn hóa khác nhau như Nhật Bản, Hàn Quốc, Pháp, New Zealand, Australia, Anh, Đức và Mexico./.',
        url1:'imgs/Lễ hội Tango/1155249161_8ZNoZ-X2-1.jpg',//ảnh 4:3 
        url2:'imgs/Lễ hội Tango/tango.jpg',//ảnh 4:3 
        url3:'imgs/Lễ hội Tango/buenos-aires-tango-festival-argentina-SA0118.jpg',
        url4:'imgs/Lễ hội Tango/tango-buenos-aires-festival-y-mundial-gran-milonga-de-cierre-2.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ hội Tango/EB8387-001.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ hội Tango/1718_TangoBuenosAires.jpg',//ảnh độ phân giải trên 1920
        status: '1'
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
        price: '150000',
        chitiet:' Từ ngày 29 tháng 9 đến ngày 10 tháng 10, Lễ hội bia quốc gia Argentina, hay còn được biết đến với tên gọi Oktoberfest, được tổ chức tại thành phố Villa General Belgrano. Hàng năm, cộng đồng dân cư của thành phố nhỏ này, phần lớn có nguồn gốc từ Đức, tổ chức sự kiện quốc gia này như một phiên bản của Lễ hội Oktoberfest diễn ra thường niên tại Đức. Trong suốt 11 ngày, hàng ngàn cư dân thị phương và du khách thập phương ăn mừng bữa tiệc độc đáo này trên khắp các con phố, bên cạnh những hoạt động thú vị như diễu hàng, biểu diễn âm nhạc, liên hoan ẩm thực và đặc biệt hơn cả là sự kiện bình chọn Nữ hoàng bia của năm. Một trong số những khoảnh khắc quan trọng nhất của Lễ hội là sự kiện “bóc tem” các thùng bia khổng lồ trước đông đảo công chúng. Theo truyền thống, uống bia từ những thùng chứa này đem lại may mắn cho cả năm đó!',
        url1:'imgs/Lễ hội Bia  Argentina/13-of-the-wildest-pictures-from-this-years-oktoberfest-in-munich.jpg',//ảnh 4:3 
        url2:'imgs/Lễ hội Bia  Argentina/oktoberfest_07.jpg',//ảnh 4:3 
        url3:'imgs/Lễ hội Bia  Argentina/r0_524_4538_3025_w1200_h678_fmax.jpg',//ảnh 4:3 
        url4:'imgs/Lễ hội Bia  Argentina/oktoberfest-2013-09.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ hội Bia  Argentina/group-enjoying-oktoberfest.0d3987a5e5ece0c6bb012b72583d3e01.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ hội Bia  Argentina/Oktoberfest-578f6b955f9b584d20fa50b8.jpg',//ảnh độ phân giải trên 1920
        status: '1'
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
        price: '150000',
        chitiet:'Ngày lễ Tạ Ơn là một kỳ nghỉ hàng năm ở Mỹ kể từ năm 1863. Ngày lễ Tạ Ơn – Thanksgiving Day đầu tiên được cho là diễn ra vào năm 1623 để cảm ơn cơn mưa đã kết thúc đợt hạn hán. George Washington, vị tổng thống đầu tiên của Mỹ đã tuyên bố ngày lễ Tạ ơn trở thành một ngày lễ chính thức của Mỹ vào năm 1789. Ngày là một ngày truyền thống dành cho gia đình bạn bè sum họp bên nhau cho một bữa ăn đặc biệt. Bữa ăn đặc biệt này thường bao gồm gà tây, khoai tây, nước sốt việt quất, bánh bí ngô, rau xanh... Ngày Lễ Tạ Ơn là ngày lễ dành cho nhiều người để tạ ơn cho những gì họ có. Đây cũng có là thời gian dành cho những chuyến đi du lịch hay về thăm gia đình, bạn bè. Lễ Tạ Ơn – Thanksgiving không có ngày cố định. Ngày này được tính bằng cách như sau. Ngày lễ Tạ Ơn của Mỹ sẽ diễn vào ngày thứ năm của tuần lễ thứ 4 của tháng 11. Cụ thể ngày lễ Tạ Ơn của năm 2018 ở Mỹ sẽ diễn ra vào ngày 22/11/2018. Lưu ý ngày Lễ Tạ Ơn ở Canada thì diễn ra vào ngày thứ 2 lần thứ hai của tháng 10. Ngày này còn diễn ra ở những nơi khác như ở Hà Lan, Grenada, Liberia, Anh ...',
        url1:'imgs/Thanksgiving/636457553890827975-iStock-000017351486-Large-1200x800.jpg',//ảnh 4:3 
        url2:'imgs/Thanksgiving/History_BYDK_Thanksgiving_SF_HD_1104x622-16x9.jpg',//ảnh 4:3 
        url3:'imgs/Thanksgiving/Thanksgiving.jpg',//ảnh 4:3 
        url4:'imgs/Thanksgiving/1447772474-delish-thanksgiving-side-says-about-you.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Thanksgiving/thanksgiving2.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Thanksgiving/turjey.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: ' Thứ Sáu Đen ',
        timeStart:'2018/11/22',
        timeEnd:'2018/11/24',
        diadiem: 'Las Vegas - USA',
        kinhdo:'36.171979',
        vido:'-115.145572',
        lucdia:'Châu Mỹ',
        tongiao:'Không',
        price: '150000',
        chitiet:'Thứ Sáu Đen (tiếng Anh: Black Friday) là "ngày vàng mua sắm" của người dân Mỹ với hàng chục ngàn mặt hàng giảm giá cực lớn. Thứ Sáu Đen là ngày thứ sáu ngay sau Lễ Tạ Ơn (ngày Lễ Tạ Ơn rơi vào ngày Thứ Năm lần thứ 4 trong tháng 11 ở Hoa Kỳ, cho nên Thứ Sáu đen rơi vào khoảng ngày 23-29 tháng 11) và được coi là ngày mở hàng cho mùa mua sắm tấp nập nhất ở Hoa Kỳ. Ngày đặc biệt này có xuất xứ từ tình trạng tắc nghẽn giao thông xảy ra vào ngày thứ sáu sau Lễ Tạ Ơn năm 1965 ở Philadelphia, khi hàng trăm nghìn người Mỹ chen chúc nhau ở các con phố, vỉa hè đi mua sắm để sửa soạn cho Lễ Noel sắp đến, và theo truyền thống được xem là ngày bắt đầu mùa mua sắm Giáng sinh, tương tự như Boxing Day ở nhiều quốc gia Khối thịnh vượng chung.  Trong tiếng Anh có thuật ngữ "in the black" chỉ tình trạng doanh nghiệp làm ăn có lợi nhuận. Tương phản với "in the black" là "in the red" chỉ tình trạng kinh doanh thua lỗ, buôn bán thất bát. Ngày xưa, để tiện phân biệt và theo dõi sổ sách, kế toán thường ghi số lợi nhuận bằng mực đen, số lỗ bằng mực đỏ. Từ đó, người ta đặt tên ngày mua sắm lớn nhất trong năm là Black Friday, ngụ ý rằng đây là ngày ăn nên làm ra của các doanh nghiệp.',
        url1:'imgs/Black Friday/black-friday-1.jpg',//ảnh 4:3 
        url2:'imgs/Black Friday/Black-Friday-2016.jpg',//ảnh 4:3 
        url3:'imgs/Black Friday/nintchdbpict000284609981.jpg',//ảnh 4:3 
        url4:'imgs/Black Friday/161126-macys-black-friday-1245a_fc78e4c221b91bdb8c44b010adba56ad.nbcnews-ux-2880-1000.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Black Friday/brazil-black-friday-1.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Black Friday/Black-friday-shopping-1920x1080.jpg',//ảnh độ phân giải trên 1920
        status: '1'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Oktoberfest',
        timeStart:'2018/10/12',
        timeEnd:'2018/10/17',
        diadiem: 'Munich, Đức',
        kinhdo:'48.155004',
        vido:'11.4717964',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Lễ hội Oktoberfest là lễ hội bia tháng 10 của người dân xứ  Bavvaria –Munich nước Đức. Lễ hội được tổ chức nhằm kỉ niệm lễ cưới hoàng thái tử Ludwig (sau này là vua Ludwig I) và công chúa Therese của Sachsen-Hildburghausen (vì thế mà có tên Theresienwiese-Cánh đồng Therese) đã tổ chức một cuộc đua ngựa lớn. Lễ cưới được tổ chức vào ngày 12 tháng 10, cuộc đua ngựa vào ngày 17 tháng 10, vì thế mà thời điểm được ghi lại khác nhau. Đây là lễ hội bia lớn nhất thế giới có lịch sử hơn 200 năm của người Đức, ước tính hàng năm có khoảng trên 6 triệu lượt khách từ khắp nơi trên thế giới đổ về tham dự  lễ hội và tiêu thụ khoảng hơn 7 triệu lít bia. Lễ hội tháng Mười được khai mạc bằng 12 phát súng chào và sau khi thị trưởng đương nhiệm đóng vòi khui thùng bia đầu tiên. Người thị trưởng đầu tiên khui thùng bia là Thomas Wimmer.  Đây là dịp để các hãng bia nổi tiếng xứ Bavaria quảng bá sản phẩm tốt nhất tới toàn thể du khách tham gia lễ hội. Mọi người đến lễ hội với trang phục truyền thống cùng uống bia, thưởng thức các món ăn truyền thống, cùng tham gia hát các bài hát dân ca Đức và các trò chơi trong lễ hội ( Ví dụ như: Thi uống bia, đu quay, kéo co, thi ăn xúc xích…) .',
        price:'300000',
        url1:'imgs/oktoberfest/lễ hội bia 341.jpg',
        url2:'imgs/oktoberfest/lễ hội bia 342.jpg', 
        url3:'imgs/oktoberfest/lễ hội bia 343.jpg', 
        url4:'imgs/oktoberfest/lehoibia-hight1.jpg',
        url5:'imgs/oktoberfest/lehoibiahight-2.jpg',
        url6:'imgs/oktoberfest/lehoibia-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội chanh',
        timeStart:'2018/02/15',
        timeEnd:'2018/3/3',
        diadiem: 'Menton, Pháp',
        kinhdo:'43.7763166',
        vido:'7.4958256',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Đây là lễ hội thường niên được tổ chức ở thành phố Menton, nước Pháp vào giữa tháng 2 đến đầu tháng 3 hàng năm. Menton là một vùng khí hậu ôn hòa ở miền Nam nước Pháp, nổi tiếng với cảnh đẹp làng quê và là nơi trồng chanh lý tưởng nhất châu Âu. Sự kiện hoành tráng với chủ thể chính là trái chanh này xuất phát từ ý tưởng tuyệt vời của nhóm những người quản lý khách sạn nhằm thu hút khách du lịch đến với Menton. Họ đề nghị tổ chức cuộc triển lãm hoa và cây ăn quả có múi trong vườn khách sạn Riviera. Sự kiện đã tạo ấn tượng mạnh và thu hút được sự chú ý và hưởng hứng của người dân địa phương và đặc biệt là du khách. Từ đó, Lễ hội chanh chính thức ra đời. Gần 80 năm qua, lễ hội vẫn được tổ chức đều đặn. Mỗi năm, ban tổ chức lễ hội sẽ đưa ra một chủ đề và tác phẩm trưng bày trên đường phố sẽ được tạo hình theo các chủ đề đó. Các chủ đề trong các năm vừa qua là điện ảnh, rock & roll, các công trình kiến trúc nổi tiếng, các con vật... với sự góp mặt của rất nhiều chuyên gia và nghệ sỹ tạo hình. Các nghệ nhân sử dụng đến hàng trăm tấn cam và chanh để xây dựng các công trình độc đáo như đền Taj Maha, cối xay gió... trong các mùa lễ hội, thu hút hàng trăm ngàn lượt du khách từ mọi nơi trên thế giới ghé thăm ngay cả trong tiết trời mùa đông lạnh giá. Không chỉ có chanh, những quả cam đẹp nhất, với sắc màu rực rỡ cũng được sử dụng để tạo nên những tác phẩm mê hồn từ chanh.  Để hoàn thành những kiệt tác từ hoa quả này, những nghệ nhân của thành phố Menton đã phải chuẩn bị từ rất sớm trước đó, từ khâu chọn lựa cam, chanh chín tới trong vườn tới lên ý tưởng, thực hiện và hoàn thành ý tưởng. Có rất nhiều hình ảnh đẹp được diễn ra trong lễ hội, du khách đến đây vào đúng dịp lễ hội sẽ được tận mắt chứng kiến những kiệt tác từ chanh lộng lẫy và sáng loáng .',
        price:'300000',
        url1:'imgs/lễ hội chanh(pháp)/lehoichanh-431.jpg',
        url2:'imgs/lễ hội chanh(pháp)/lehoichanh-432.jpg', 
        url3:'imgs/lễ hội chanh(pháp)/lehoichanh-433.jpg', 
        url4:'imgs/lễ hội chanh(pháp)/lehoichanh-hight1.jpg',
        url5:'imgs/lễ hội chanh(pháp)/lehoichanh-hight2.jpg',
        url6:'imgs/lễ hội chanh(pháp)/lehoichanh-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội cõng vợ',
        timeStart:'2018/07/07',
        timeEnd:'2018/07/18',
        diadiem: 'Sonkajarvi, Phần Lan',
        kinhdo:'63.6716476',
        vido:'27.5133322',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:' (PLO) -Cuộc thi diễn ra vào ngày thứ bảy đầu tiên của tháng 7, ở thành phố Sonkajarvi, phía bắc thủ đô Helsinki, Phần Lan. Trong dịp lễ hội, những người đàn ông sẽ cõng cô vợ hoặc người yêu của mình trên vai và vượt qua những chướng ngại vật trong thời gian ngắn nhất để giành chiến thắng. Điểm độc đáo của lễ hội này có lẽ là tính chất hài hước của nó. Trong thời gian diễn ra cuộc tranh tài giữa các cặp đôi, cả người tham gia và người xem đều cảm nhận được sự vui vẻ và hứng khởi mà không phải lễ hội nào cũng mang lại được. Lễ hội cõng vợ này dường như đã ăn sâu vào trong tiềm thức của người dân địa phương. Có rất nhiều giả thuyết về lễ hội hài hước này, theo đó, truyền thuyết kể lại rằng, vào thế kỷ thứ 19, có một tên cướp khét tiếng tên là Rosvo-Ronkainen sống trong rừng và thành lập một băng cướp. Vì muốn rèn luyện sức khỏe cho các thành viên trong băng đảng của mình, Ronkainen đã tổ chức một khóa học vô cùng khó khăn: Yêu cầu các thành viên phải đeo bao tải nặng hay những con thú rừng trên lưng, chạy thật nhanh để tăng cường năng lực bản thân về sự nhanh nhẹn, sức mạnh và sức chịu đựng cho họ. Trước khi lễ hội diễn ra, các cặp đôi có ý định tranh tài sẽ phải rèn luyện sức khỏe từ trước đó một cách nghiêm túc và chăm chỉ, đòi hỏi một tinh thần nỗ lực rất cao từ cả hai phía. Tham gia lễ hội này không phải chỉ có những thí sinh là người dân đất nước Phần Lan mà bất kỳ người dân của nước nào muốn tham gia cũng được phép đăng ký tham dự. Người ta thống kê, mỗi năm có các thí sinh đến từ 15 quốc gia khác nhau như Australia, Mỹ, Hong Kong, Nhật Bản... cùng đổ về tham gia vào lễ hội vui nhộn này .',
        price:'300000',
        url1:'imgs/lễ hội cõng vợ (phần lan)/congvo-431.jpg', 
        url2:'imgs/lễ hội cõng vợ (phần lan)/congvo-432.jpg',
        url3:'imgs/lễ hội cõng vợ (phần lan)/congvo-433.jpg',
        url4:'imgs/lễ hội cõng vợ (phần lan)/congvo-hight1.jpg',
        url5:'imgs/lễ hội cõng vợ (phần lan)/congvo-hight2.jpg',
        url6:'imgs/lễ hội cõng vợ (phần lan)/congvo-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội đấu bò tót',
        timeStart:'2018/09/23',
        timeEnd:'2018/10/22',
        diadiem: 'Pamplona, Tây Ban Nha',
        kinhdo:'42.8157961',
        vido:'-1.6675312',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Đấu bò tót là một lễ hội truyền thống của Tây Ban Nha ở thành phố Pamplona. Hàng năm lại có rất nhiều du khách từ khắp mọi nơi không hẹn mà gặp tại đây để được tận mắt chứng kiến những trận đấu kịch tính của hiệp sĩ với những chú bò dũng mãnh. Nhưng có lẽ không phải tất cả những người đến xem đều hiểu rõ tường tận được từ đâu lại có cuộc đấu bò tót thú vị này. Trước đây, lễ hội kéo dài một tuần này được tổ chức vào tháng Mười hàng năm để tôn vinh vị thánh bảo hộ San Fermín của thành phố . Xuất xứ của nó có lẽ bắt nguồn từ thời Trung cổ. Sau đó, trải qua bao nhiêu thời gian, những người tham gia lễ hội dần dần đã cho thêm những hoạt động khác vào sự kiện này như hội chợ, ca nhạc, các cuộc thi nhào lộn, đua bò và đấu bò tót. Chính xác thì nó đã có tuổi đời khoảng 421 năm. Dù các sự kiện ăn mừng tôn vinh thánh bảo hộ đã bắt đầu có từ thế kỷ XIII nhưng lễ hội đấu bò mới chỉ được tổ chức thường niên từ năm 1592, một thế kỷ sau khi đế quốc Tây Ban Nha bắt đầu phong trào thám hiểm thế giới và Columbus phát hiện ra châu Mỹ. Cũng vào năm này, lễ hội đấu bò đã được chuyển sang tổ chức vào tháng Bảy thay vì tháng Mười như trước kia để hợp nhất với một lễ hội khác cũng trong tháng Bảy. Từ đó trở đi, sự kiện này đã trở thành tâm điểm cho mùa hè ở Tây Ban Nha .',
        price:'300000',
        url1:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-431.jpg',
        url2:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-432.jpg',
        url3:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-433.jpg',
        url4:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-hight1.jpg',
        url5:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-hight2.jpg',
        url6:'imgs/lễ hội đấu bò (Tây Ban Nha)/lehoidaubo-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội hoa hồng',
        timeStart:'2018/06/05',
        timeEnd:'2018/06/12',
        diadiem: 'Kazanlak, Bulgaria',
        kinhdo:'42.625243',
        vido:'25.3960953',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Lễ hội hoa hồng là lễ hội được tao ra nhằm chào mừng Quốc khánh nước Cộng hòa Bulgaria 3/3 và ngày Quốc tế Phụ nữ 8/3. lễ hội được tổ chức vào ngày Chủ nhật đầu tiên của tháng 6 hàng năm tại Kazanlak thung lũng trồng hoa hồng nổi tiếng nhất ở Bulgaria, hoa hồng ở Kazanlak được thu hoạch trong khoảng thời gian từ tháng 5 đến tháng 6 hàng năm. Trước thời gian diễn ra lễ hội hoa hồng, người dân ở Kazanlak sẽ tổ chức cuộc thi tuyển chọn Hoa hậu Hoa hồng – cuộc thi sắc đẹp quen thuộc và cũng rất đặc trưng ở đất nước Bulgaria. Việc đoạt được vương niệm này là giấc mơ của tất cả các cô gái ở Kazanlak. Để đoạt được danh hiệu Hoa hậu Hoa hồng, ngoài xinh đẹp, có trí tuệ các cô gái còn phải nắm vững những kiến thức và kỹ thuật trồng hoa hồng. Người đoạt ngôi vị hoa hậu sẽ ngồi trên xe hoa diễu hành trong lễ hội để gửi lời chúc phúc đến mọi người. Sau đó người dân và khách du lịch sẽ cùng nhau diễu hành trên đường phố với những lẵng hoa tươi thắm và nhảy những điệu múa dân gian rất đặc trưng của người dân địa phương .',
        price:'300000',
        url1:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-431.jpg',
        url2:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-432.jpg',
        url3:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-433.jpg', 
        url4:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-hight1.jpg',
        url5:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-hight2.jpg',
        url6:'imgs/lễ hội hoa hồng (Bulgaria)/lehoihoahong-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội hóa trang venice',
        timeStart:'2018/02/13',
        timeEnd:'2018/02/27',
        diadiem: 'Venice, Ý',
        kinhdo:'45.4551712',
        vido:'12.251931',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Được đánh giá là một trong những lễ hội mùa xuân hấp dẫn nhất thế giới, Lễ hội carnival hằng năm ở Venice, Italy luôn thu hút số lượng lớn du khách từ khắp nơi trên thế giới. Lễ hội hóa trang Venice lần đầu tiên được tổ chức vào năm 1296. Sau một thời gian khá dài gián đoạn, lễ hội được khôi phục vào năm 1980 và được tổ chức đều đặn hàng năm cho đến nay. Mỗi năm lễ hội mang một chủ đề khác nhau nhưng đều  nhằm tôn vinh văn hóa và tạo nên những ngày hội vui vẻ cho người dân đầu năm mới. Trong suốt thời gian hai tuần, quảng trường St. Mark, các rạp hát, đường phố và tòa nhà công sở trở thành sàn diễn của các diễn viên, người làm xiếc, vũ công, nhạc sĩ... khiến người ta có cảm giác như đang sống ở thế kỷ XVII. Mặt nạ là nét đặc trưng nhất của lễ hội hóa trang Venice. Những nghệ nhân làm mặt nạ cũng có vị trí riêng được tôn trọng trong xã hội, với những phường hội và luật lệ riêng của họ. Mặt nạ hóa trang thường được làm bằng da hoặc bằng giấy bồi theo kỹ thuật truyền thống. Ngày nay, mặt nạ còn được làm từ thạch cao, vàng lá và luôn được vẽ tay, thêm các chi tiết trang trí bằng lông chim, đá quí. Lavra là loại mặt nạ phổ biến và đặc trưng nhất của Venice, làm bằng sáp và thạch cao trắng như hình hồn ma, họa tiết đơn giản, nhưng có các chi tiết trang trí trên mũ cầu kỳ. Lễ hội hóa trang (Carnival) Venice được tổ chức vào khoảng trung tuần tháng 2 hàng năm, bắt đầu vào ngày thứ tư đầu tiên của Mùa Chay, kết thúc vào ngày Thứ ba sau đó 2 tuần. Đây là một dịp để mọi người vui chơi, hòa nhạc, khiêu vũ và cũng là dịp để ôn lại và ca ngợi lịch sử hình thành và cai trị một đất nước yên bình, phồn vinh, một xã hội công bằng, ổn định cũng như khích lệ tinh thần yêu nước của mỗi người dân .',
        price:'300000',
        url1:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-431.jpg',
        url2:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-432.jpg',
        url3:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-433.jpg',
        url4:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-hight1.jpg',
        url5:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-hight2.jpg',
        url6:'imgs/lễ hội hóa trang (Ý)/lehoihoatrang-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội hoa tulip',
        timeStart:'2018/03/22',
        timeEnd:'2018/05/20',
        diadiem: 'công viên Keukenhof, Hà Lan',
        kinhdo:'52.2700221',
        vido:'4.5442006',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Mỗi độ xuân về, xứ sở “cối xay gió” lại náo nức đón chào lễ hội hoa tulip - một trong những sự kiện lớn nhất trong năm. Mỗi năm, lễ hội Keukenhof đưa ra một chủ đề đặc biệt và chủ đề năm nay là "Hà Lan" với triển lãm về lịch sử hình thành, cách gieo trồng hoa tulip. Bạn sẽ có cơ hội tìm hiểu các câu chuyện về hoa tulip mà người dân xứ này rất đỗi tự hào. Bên cạnh đó, lễ hội còn có các khu vườn hoa rực rỡ đầy sáng tạo được cắt tỉa khéo léo mô tả các biểu tượng đất nước Hà Lan để tạo nên một thành phố hoa thu nhỏ, tuyệt đẹp, cùng với hơn 60.000 bóng đèn hoa tulip được trang trí khắp các khu vườn. Lễ hội diễn ra từ ngày 22/03 – 20/05. Lễ hội chính được tổ chức tại công viên Keukenhof – vườn hoa lớn nhất thế giới thuộc thị trấn Lisse ở phía Tây Nam của thủ đô Amsterdam. Lễ hội mang tên: Lễ Hội Hoa KeukenhofNhững ngày lễ hội hoa Tulip Hà Lan diễn ra, dù nhiệt độ tại Hà Lan xuống thấp (chỉ khoảng 3 – 4 độ) nhưng những khóm hoa Tulip được trồng ở công viên Keukenhof vẫn đua nhau khoe sắc. Đây cũng là loài hoa được trộng nhiều nhất tại công viên trong số hơn 70 triệu bông hoa ôn đới với nhiều màu sắc sặc sỡ. Thời điểm thích hợp nhất cho bạn để thưởng ngoạn lễ hội hoa tulip chính là vào đầu tháng 4, khi các bông hoa bắt đầu nở rộ. Bạn cũng sẽ bắt gặp một không gian ấn tượng ở Keukenhof với những đài phun nước hình dáng độc đáo và những chiếc cối xay gió cổ kính nổi tiếng thế giới. Đây sẽ là điểm đến lý tưởng cho chuyến du lịch của bạn trong những ngày đầu tháng 4 sắp tới.',
        price:'300000',
        url1:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-431.jpg', 
        url2:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-432.jpg',
        url3:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-433.jpg',
        url4:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-hight1.jpg',
        url5:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-hight2.jpg',
        url6:'imgs/lễ hội hoa tulip (Hà Lan)/lehoihoatulip-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Life Ball',
        timeStart:'2018/05/29',
        timeEnd:'2018/5/06',
        diadiem: 'Vienna, Áo',
        kinhdo:'48.220778',
        vido:'16.3100206',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Lễ hội Life Ball được tổ chức bởi tổ chức phi lợi nhuận AIDS LIFE thành lập vào năm 1992 bởi Gery Keszler và Torgom Petrosian. Sự kiện đầu tiên diễn ra vào ngày 29 tháng 5 hàng năm tại Vienna( thủ đô của áo). Ngoài các chính quyền thành phố Vienna, sự kiện này chỉ có hai nhà tài trợ. Sự kiện được lập ra nhằm để hỗ trợ các tổ chức khác trong việc giúp đỡ những người có HIV dương tính hoặc có AIDS. Từ năm 1999, lễ hội được diễn ra tại cung điện Hofburg. Sự kiện từ thiện quyến rũ này được biết đến ra cả ngoài biên giới nước Áo. Đến nay, hơn 60 đài truyền hình và hơn 500 đại diện truyền thông quốc gia và quốc tế tham gia vào quan tâm sự kiện này mỗi năm.  Điều này cũng làm tăng nguồn vốn huy động của sự kiện Life Ball để có thể quyên góp cho các dự án và nghiên cứu bệnh AIDS nhiều hơn. Và trên hết, sự kiện có mục tiêu nhằm nâng cao nhận thức cộng đồng về các bệnh nhân liên quan tới AIDS và mục đích cao cả là kêu gọi mọi người ủng hộ quỹ dành cho người nhiễm HIV AIDS . ững bộ trang phục lộng lẫy sắc màu đặc biệt sẽ được nhiều người nổi tiếng khoác lên mình cùng với người dân nước Áo cùng bạn bè 5 châu với những điệu múa truyền thống. Ngoài ra, hàng năm đều có nhiều nhà thiết kế thời trang nổi tiếng chịu trách nhiệm cho các buổi biểu diễn thời trang của sự kiện Life Ball với sự tham gia những người mẫu chuyên nghiệp trên sàn catwalk như Marcus Schenkenberg, Alek Wek, Eva Padberg, Nadja Auermann, Heidi Klum, Eva Riccobono. Ngoài ra, sự kiện còn có sự xuất hiện bởi các ngôi sao và người nổi tiếng như Udo Kier, Olivia Jones, Til Schweiger, Kylie Minogue, Cyndi Lauper, Dolly Buster, Bộ trưởng y tế Áo Andrea Kdolsky. Tới với lễ hội Life Ball, bạn không chỉ được hòa mình trong những điệu múa truyền thống mà còn có cơ hội gặp gỡ những người có tên tuổi nổi tiếng thế giới, họ diện những bộ trang phục đẹp lộng lẫy và vô cùng cầu kỳ. Đặc biệt hơn, ngoài việc tham gia lễ hội, bạn còn có thể góp tiền hay quà tặng dành cho chương trình. Nếu bạn yêu thích sự kiện này, bạn hoàn toàn có thể trở thành tình nguyện viên của chương trình bằng việc đăng ký với tổ chức sự kiện Life Ball.',
        price:'300000',
        url1:'imgs/lifeball(Áo)/lifeball-431.jpg',
        url2:'imgs/lifeball(Áo)/lifeball-432.jpg',
        url3:'imgs/lifeball(Áo)/lifeball-433.jpg', 
        url4:'imgs/lifeball(Áo)/lifeball-hight1.jpg',
        url5:'imgs/lifeball(Áo)/lifeball-hight2.jpg',
        url6:'imgs/lifeball(Áo)/lifeball-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội ánh sáng',
        timeStart:'2018/06/23',
        timeEnd:'2018/06/30',
        diadiem: 'Nhà thờ lớn Berlin ,Đức',
        kinhdo:'52.5119642',
        vido:'13.3505705',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Từ 10 đến 21/10, khoảng 50 công trình kiến trúc và danh thắng nổi tiếng ở khắp Berlin như quảng trường, đại lộ, các tháp tòa nhà hiện đại, được thay đổi diện mạo bằng ánh sáng rực rỡ màu sắc nhân dịp Lễ hội Ánh sáng Berlin thường niên. Các sự kiện bên lề cũng hứa hẹn độc đáo đầy hấp dẫn như: buổi hòa nhạc tại Nhà thờ Berlin, các chương trình Lightseeing cung cấp các tour du lịch mạo hiểm bằng xe buýt, thuyền và đi bộ. Suốt 12 năm qua, Lễ hội ánh sáng Berlin đã trở thành một thế giới đầy nghệ thuật của ánh sáng. Tại đây, các nghệ sĩ quốc tế thiết kế những tác phẩm nghệ thuật và truyền cảm hứng cho công chúng tham dự. Hơn 2 triệu lượt du khách, 650 nghìn đêm khách sạn, 1.8 tỷ địa chỉ liên lạc truyền thông, Lễ hội ánh sáng Berlin trở thành một trong những sự kiện cộng đồng thành công và là lễ hội ánh sáng lớn trên thế giới .',
        price:'300000',
        url1:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-431.jpg',
        url2:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-432.jpg', 
        url3:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-433.jpg', 
        url4:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-hight1.jpg',
        url5:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-hight2.jpg',
        url6:'imgs/lễ hội ánh sáng (Đức)/lehoianhsang-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội ném cà chua',
        timeStart:'2018/8/29',
        timeEnd:'2018/8/29',
        diadiem: 'Bunol, Tây Ban Nha',
        kinhdo:'39.4199219',
        vido:'-0.7932593',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Lễ hội cà chua La Tomatina là lễ hội ném hoa quả lớn nhất châu Âu, được tổ chức vào ngày thứ Tư cuối cùng trong tháng 8 ở thị trấn Bunol, Valencia, Tây Ban Nha. Lễ hội thu hút hàng chục nghìn người từ khắp nơi trên thế giới đổ về đây để tham gia vào một “cuộc chiến” vô hại và vui vẻ, với hơn một tấn cà chua chín mọng được tung ném trên các đường phố.Trong một tuần diễn ra lễ hội có rất nhiều chương trình âm nhạc, diễu hành, nhảy múa, và bắn pháo hoa. Vào đêm trước ngày diễn ra hội ném cà chua, những người đến dự sẽ tham gia vào một cuộc thi nấu cơm đặc biệt: cơm thập cẩm paella. Vào khoảng 11h sáng, sự kiện đầu tiên của lễ hội Tomatina bắt đầu. Người ta treo một miếng thịt đùi nướng lên trên chiếc cột cao đã được bôi mỡ trơn. Trận chiến cà chua chỉ được bắt đầu khi có người leo lên tới đỉnh cột và mang miếng thịt xuống. Mọi người bắt đầu tranh đua lẫn nhau, người nọ leo sau người kia, tất cả đều cố gắng giành chiến thắng để lễ hội khai cuộc.Trận chiến ném cà chua trên đường phố bắt đầu bằng một tiếng nổ rền vang của khẩu thần công trong thị trấn. Mọi người được khuyến khích mang kính che mắt và đeo găng tay. Ngoài ra, để đảm bảo an toàn, những người tham gia phải bóp nát quả cà chua trước khi ném vào người khácTrận chiến ồn ào, hỗn loạn với cà chua này sẽ kéo dài trong khoảng 1 đến 2 giờ. Người ta ném cà chua vào nhau, và vào những chiếc xe tải đang ùn ùn đổ về mang theo những đống cà chua lớn. Khi một tiếng nổ rền vang lại phát ra từ khẩu thần công chính là lúc cuộc chơi kết thúc. Không ai còn được phép ném cà chua trên phố nữa.Công cuộc dọn dẹp vệ sinh thị trấn ngay lập tức bắt đầu với những chiếc xe chữa cháy tiến vào phun nước lên tất cả các con đường. Mọi người thì đổ về con sông Bunol tắm gội.Lễ hội cà chua được tổ chức trùng với ngày thánh Luis Bertran - vị thần hộ mệnh của thành phố, và Đức mẹ đồng trinh Mare de Déu dels Desemparats. Không ai biết nguồn gốc và mục đích thực sự của lễ hội là gì. Có giả thuyết cho rằng truyền thống này bắt đầu từ tục lệ ném cà chua vào đoàn người diễu hành trong các lễ hội để trêu chọc, phản đối những ca sĩ tồi. Một giả thuyết khác có vẻ thuyết phục hơn là lễ hội này bắt đầu từ khi người dân trong thị trấn bất bình trước cách thức điều hành của chính quyền nơi đây và bắt đầu ném cà chua vào các quan chức để phản đối. Dần dần, hình thức này được phát triển thành lễ hội, và thực sự nổi tiếng sau khi được phát sóng trên truyền hình Tây Ban Nha .',
        price:'300000',
        url1:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-431.jpg',
        url2:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-432.jpg',
        url3:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-433.jpg',
        url4:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-hight1.jpg',
        url5:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-hight2.jpg',
        url6:'imgs/lễ hôi ném cà chua (Tây Ban Nha)/lehoicachua-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Agitagueda',
        timeStart:'2018/07/23',
        timeEnd:'2018/07/31',
        diadiem: 'Agitagueda, Bồ Đào Nha',
        kinhdo:'40.5721869',
        vido:'-8.4491686',
        lucdia:'Châu Âu',
        tongiao:'Không',
        chitiet:'Trong những ngày cuối tháng 7/2013, trên đường phố Agueda, Bồ Đào Nha đang tràn ngập sắc màu rực rỡ bởi những chiếc ô được treo lơ lửng. Đây chính là một phần đặc sắc của lễ hội nghệ thuật Agitagueda. Được biết, Ý tưởng độc đáo này là của một nhà thiết kế người Bồ Đào Nha – Ivotavares. Nhà thiết kế Ivotavares lựa chọn phố Agueda làm địa điểm trình bày ý tưởng của mình với mục đích biến một con phố mua sắm truyền thống trở nên hấp dẫn hơn và mang đến những trải nghiệm mới lạ cho khách tham quan và bạn bè quốc tế. Những chiếc “ô bay” này tồn tại trong suốt thời gian diễn ra lễ hội nghệ thuật Agitagueda. Với nhiều hoạ tiết, hình vẽ đẹp, lạ mắt cùng nhiều màu sắc sinh động, con "phố ô" Agueda đã thu hút sự quan tâm của đông đảo người dân và khách du lịch. Nếu đang du lịch tại Bồ Đào Nha hoặc sang đây vào những ngày này, bạn hãy tận hưởng dịp hiếm có để tham gia vào các hoạt động của lễ hội nghệ thuật Agitagueda. Đặc biệt, bạn không nên bỏ lỡ cơ hội được tản bộ dưới bóng mát của "phố ô” rực rỡ này và lưu lại những bức hình đáng nhớ cho chuyến du lịch của mình .',
        price:'300000',
        url1:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-431.jpg',
        url2:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-432.jpg',
        url3:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-433.jpg',
        url4:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-hight1.jpg',
        url5:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-hight2.jpg',
        url6:'imgs/lễ hội ô (Bồ Đào Nha)/lehoio-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội thánh Patrick',
        timeStart:'2018/03/17',
        timeEnd:'2018/03/17',
        diadiem: 'Ireland',
        kinhdo:'53.3975179',
        vido:'-10.1980727',
        lucdia:'Châu Âu',
        tongiao:'Đạo Thiên Chúa',
        chitiet:'Lễ Thánh Patrick là lễ hội quốc gia ở Ireland. Vào ngày này, tất cả mọi người dừng hết tất cả công việc và cùng nhau hưởng trọn không khí tưng bừng của lễ hội. Các bệnh viện, ngân hàng, trường học... tất cả đều đóng của để cháo đón lễ hội. Ngày lễ thánh Patrick được chính thức công khai là ngày lễ quốc gia vào khoảng thế kỷ 17, và dần dần trở thành ngày lễ tượng trưng cho nền văn hóa của người Ireland. Có rất nhiều truyền thuyết liên quan đến Thánh Patrick. Một trong số đó là Patrick có khả năng làm người chết sống dậy. Và huyền thoại lớn nhất về Thánh Patrick là khi ông giảng đạo trên đỉnh một ngọn đồi và đặt lời nguyền của Thiên chúa giáo, khiến cho toàn bộ các loài rắn có nọc độc bị đuổi khỏi Ireland và chết ngoài biển khơi. Có thể nói, rắn là hình ảnh ẩn dụ cho những tà giáo đã được Thánh Patrick loại bỏ khỏi Ireland. Người ta nói rằng ông đã sử dụng cỏ 3 lá shamrock mọc trên đất Ireland để giải thích cho dân chúng về học thuyết “Ba ngôi một thể” (The Trinity) trong Thiên chúa giáo vào thế kỷ thứ 5. Ông sử dụng hình ảnh này trong các bài giảng đạo của mình để diễn tả tại sao Cha, Con và Thánh Thần lại có thể tồn tại như những thành phần riêng biệt, ngang nhau về đặc tính và quyền năng của một thực thể giống nhau. Đến nay, vào ngày thánh Patrick hàng năm, cộng đồng người Ireland vẫn thường mặc trang phục màu xanh lá có hình cây cỏ 3 lá để kỷ niệm truyền thuyết này. Cỏ 3 lá này cũng trở thành biểu tượng cho niềm tin, hy vọng và sự đâm trồi nảy lộc của đất nước Ireland. Cỏ 3 lá là một chi thuộc họ Đậu, có thân mềm, sống một năm hoặc lâu năm, có 3 lá (rất hiếm cây có 5 hay 7 lá) đặc biệt những cây cỏ 4 lá được xem là biểu tượng của sự may mắn. Từ truyền thuyết này mà vào ngày lễ hội, toàn bộ mọi thứ trên khắp các con đường và góc phố dường như được  nhuộm thành màu xanh. Từ con người đến đồ vật, thức ăn... tất thảy đều khoác lên mình bộ cánh màu xanh. Có người còn trang trí cỏ ba lá lên mặt, lên quần áo và các vật dụng, có người thì chọn cho mình một chiếc mũ yêu tinh đầy tinh nghịch, hay ở một vài nơi, người dân còn nhuôm xanh cảm một  dòng sông, đài tưởng niệm và thậm chí cả khu trượt tuyết cũng biến thành màu xanh để kỷ niệm dịp này. Đối với người Ireland, màu xanh còn thể hiện tình yêu dân tộc hay niềm tin tôn giáo, từ những cụ bà đeo khăn choàng xanh, cài huy hiệu xanh đến các cô gái đeo bờm xanh đến cả nhưng cô bé cậu bé nhỏ mặc những bộ cánh dễ thương cũng trong một màu xanh ngắt .',
        price:'300000',
        url1:'imgs/lễ hội thánh Patrick (Ireland)/patrick-431.jpg',
        url2:'imgs/lễ hội thánh Patrick (Ireland)/patrick-432.jpg',
        url3:'imgs/lễ hội thánh Patrick (Ireland)/patrick-433.jpg',
        url4:'imgs/lễ hội thánh Patrick (Ireland)/patrick-hight1.JPG',
        url5:'imgs/lễ hội thánh Patrick (Ireland)/patrick-hight2.jpg',
        url6:'imgs/lễ hội thánh Patrick (Ireland)/patrick-hight3.jpg'
    },
    {
        nameLeHoi: 'Đua Thuyền',
        timeStart:'2018/04/23',
        timeEnd:'2018/04/30',
        diadiem: 'Nghệ An',
        kinhdo:'18.9366424',
        vido:'105.2602071',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ hội đền Quả xã Bạch Ngọc, huyện Đô Lương, Nghệ An có đua thuyền rồng. Vùng này có nơi toàn các tay đua nữ thi đấu với nhau như ở Xa Long, huyện Hương Sơn, còn thường thì nam thi với nam, nam thi với nữ cũng có nhưng ít hơn. Trước khi hạ thủy thuyền đua, có tục lệ trai đinh rước 12 thuyền rồng sau 4 ngựa gỗ, gồm hai ngựa hồng, hai ngựa bạch từ đền Quả đến hạ thủy ở sông Lam. Tương truyền, dân ở đây đua thuyền để tỏ lòng biết ơn công đức của Hoàng tử Uy Minh Vương, con trai thứ tám của vua Lý Thái Tổ.',//Chi tiết
        price: '250000',
        url1:'imgs/duathuyen/duathuyen1.jpg',//ảnh 4:3 
        url2:'imgs/duathuyen/duathuyen2.jpg',//ảnh 4:3 
        url3:'imgs/duathuyen/duathuyen3.jpg',//ảnh 4:3 
        url4:'imgs/duathuyen/duathuyen4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/duathuyen/duathuyen5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/duathuyen/duathuyen6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Đền Hùng',
        timeStart:'2018/03/09',
        timeEnd:'2018/03/13',
        diadiem: 'Phú Thọ',
        kinhdo:'21.3179784',
        vido:'104.8550264',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Hội mở từ ngày 9 đến 13 tháng Ba, chính hội vào ngày 10 tháng Ba âm lịch, có các nghi thức rước bánh chưng - bánh giầy tại đền Hùng (Hy Cương, Phong Châu, Phú Thọ). Từ trước chính hội, lễ hội đã diễn ra với những phong tục như đâm đuống (đánh trống đồng) của dân tộc Mường, hành hương tưởng niệm các vua Hùng và kết thúc vào ngày 10 tháng 3 âm lịch với lễ rước kiệu, dâng hương trên đền Thượng.Phần lễ trong ngày hội chính gồm 2 phần là: Lễ rước kiệu vua và lễ dâng hương. Phần hội có nhiều trò chơi dân gian đặc sắc. Đó là những cuộc thi hát xoan (tức hát ghẹo), thi đấu vật, thi kéo co, thi bơi,...',//Chi tiết
        price: '250000',
        url1:'imgs/denhung/denhung1.jpg',//ảnh 4:3 
        url2:'imgs/denhung/denhung2.jpg',//ảnh 4:3 
        url3:'imgs/denhung/denhung3.jpg',//ảnh 4:3 
        url4:'imgs/denhung/denhung4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/denhung/denhung5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/denhung/denhung6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Đua Bò',
        timeStart:'2018/08/29',
        timeEnd:'2018/09/01',
        diadiem: 'An Giang',
        kinhdo:'10.572684',
        vido:'104.8952316',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ hội đua bò Bảy Núi ở Châu Đốc (An Giang) là phong tục truyền thống độc đáo của đồng bào dân tộc Khmer Nam Bộ, tổ chức từ 29/8 đến 1/9 Âm lịch, cùng dịp lễ hội Dolta. Những cuộc đua luôn diễn ra hấp dẫn và quyết liệt, thu hút hàng nghìn du khách mỗi năm, vừa giúp phát triển du lịch tỉnh An Giang, vừa giữ gìn được nét văn hóa đặc sắc vốn đã tồn tại từ lâu đời của người dân nơi đây',//Chi tiết
        price: '250000',
        url1:'imgs/duabo/duabo1.jpg',//ảnh 4:3 
        url2:'imgs/duabo/duabo2.jpg',//ảnh 4:3 
        url3:'imgs/duabo/duabo3.jpg',//ảnh 4:3 
        url4:'imgs/duabo/duabo4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/duabo/duabo5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/duabo/duabo6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Hoa Lư',
        timeStart:'2018/04/05',
        timeEnd:'2018/04/07',
        diadiem: 'Ninh Bình',
        kinhdo:'20.1877591',
        vido:'105.5749518,10z',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Thông qua các hoạt động của Lễ hội, góp phần bảo tồn và phát huy truyền thống lịch sử văn hóa của dân tộc; quảng bá tiềm năng thế mạnh du lịch, thu hút khách trong và ngoài nước về với Ninh Bình, góp phần đẩy mạnh phát triển kinh tế - xã hội của tỉnh.Lễ hội Hoa Lư năm nay được tổ chức trong 3 ngày, từ ngày 5-7/4/2017 (tức từ ngày mùng 9 tháng 3 đến ngày 11 tháng 3 năm Đinh Dậu). Riêng lễ mở cửa đền thực hiện ngày  4/4/2017 (tức ngày 8 tháng 3 Đinh Dậu), tại Khu di tích lịch sử - văn hóa Cố đô Hoa Lư.',//Chi tiết
        price: '250000',
        url1:'imgs/hoalu/hoalu1.jpg',//ảnh 4:3 
        url2:'imgs/hoalu/hoalu2.jpg',//ảnh 4:3 
        url3:'imgs/hoalu/hoalu3.jpg',//ảnh 4:3 
        url4:'imgs/hoalu/hoalu4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoalu/hoalu5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoalu/hoalu6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Hộ Lim',
        timeStart:'2018/01/12',
        timeEnd:'2018/01/15',
        diadiem: 'Bắc Ninh',
        kinhdo:'21.1169292',
        vido:'105.9594136',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Hội Lim trở thành hội hàng tổng (hội vùng) vào thế kỷ 18. Khi quan trấn thủ xứ Thanh Hóa  Nguyễn Đình Diễn là người thôn Đình Cả, Nội Duệ, xứ Kinh Bắc, có nhiều công lao với triều đình, được phong thưởng nhiều bổng lộc, đã tự hiến nhiều ruộng vườn và tiền của cho tổng Nội Duệ trùng tu đình chùa, mở mang hội hè, gìn giữ thuần phong mỹ tục. ông còn cho xây dựng trước phần lăng mộ của mình đặt tên là lăng Hồng Vân trên núi Lim. Do có nhiều công lao với hàng tổng và việc ông đặt hậu ở chùa Hồng ân, nên khi ông mất nhân dân tổng Nội Duệ đã tôn thờ làm hậu thần, hậu Phật hàng tổng. ',//Chi tiết
        price: '250000',
        url1:'imgs/hoilim/hoilim1.jpg',//ảnh 4:3 
        url2:'imgs/hoilim/hoilim2.jpg',//ảnh 4:3 
        url3:'imgs/hoilim/hoilim3.jpg',//ảnh 4:3 
        url4:'imgs/hoilim/hoilim4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoilim/hoilim5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoilim/hoilim6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Hội Gióng',
        timeStart:'2018/04/08',
        timeEnd:'2018/04/09',
        diadiem: 'Sóc Sơn',
        kinhdo:'21.2357416',
        vido:'105.7526642',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Việt Nam',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Trước ngày hội diễn ra, bảy thôn làng đại diện cho bảy xã chuẩn bị lễ vật trong ngày mở đầu hội chính. Nhưng nghi lễ đặc biệt sẽ được làm vào đêm mùng 5 đó là lễ Dục Vọng để mời ông Gióng về với các lễ vật, lễ phẩm đã được chuẩn bị chu đáo với lòng thành kính, mong đức Thánh Gióng phù hộ cho dân làng có một cuộc sống ấm no, hạnh phúc. Ngoài ra, trong hội còn có nhiều trò chơi dân gian sôi động như chọi gà, cờ tướng, hát ca trù, hát chèo… Ngày chính hội là mùng 6, ngày thánh hoá theo truyền thuyết. Ngày khai hội, dân làng và khách thập phương dâng hương, đúng nửa đêm có lễ khai quang - tắm cho pho tượng Thánh Gióng. Nghi lễ chủ yếu trong ngày chính hội là dâng hoa tre ở đền Sóc (thờ Thánh Gióng) và chém tướng giặc. Hoa tre được làm bằng những thanh tre dài khoảng 50 cm, đường kính khoảng 1 cm, đầu được vót thành xơ và nhuộm màu.',//Chi tiết
        price: '250000',
        url1:'imgs/hoigiong/hoigiong1.jpg',//ảnh 4:3 
        url2:'imgs/hoigiong/hoigiong2.jpg',//ảnh 4:3 
        url3:'imgs/hoigiong/hoigiong3.jpg',//ảnh 4:3 
        url4:'imgs/hoigiong/hoigiong4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoigiong/hoigiong5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoigiong/hoigiong6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Hội Đấu Vật',
        timeStart:'2018/01/18',
        timeEnd:'2018/01/19',
        diadiem: 'Côn Sơn',
        kinhdo:'21.236296',
        vido:'105.5425098',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ 105.5425098,10zHồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Đấu vật là môn thể thao tác chiến giữa hai đối thủ cố gắng kềm chế đối phương bằng cách nắm, kéo, vặn, đè, v.v... nhưng không được trực tiếp đấm hay đá. Tùy theo luật lệ của từng địa phương, bàn thắng về tay người dự giải nào chiếm được nhiều ưu điểm: bằng các đè ngửa đối phương, hoặc đối phương chịu thua hay bị đẩy ra ngoài vòng thi đấu. Những vận động viên tham gia môn thể thao này được gọi là các đô vật.Đấu vật là môn thể thao có lịch sử lâu đời, tồn tại ở nhiều quốc gia trên thế giới và có nhiều biến thể khác nhau.',//Chi tiết
        price: '250000',
        url1:'imgs/hoidauvat/dauvat1.jpg',//ảnh 4:3 
        url2:'imgs/hoidauvat/dauvat2.jpg',//ảnh 4:3 
        url3:'imgs/hoidauvat/dauvat3.jpg',//ảnh 4:3 
        url4:'imgs/hoidauvat/dauvat4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoidauvat/dauvat5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoidauvat/dauvat6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Lễ Vía Bà',
        timeStart:'2018/04/24',
        timeEnd:'2018/04/27',
        diadiem: 'An giang',
        kinhdo:'10.572684',
        vido:'104.8952316',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ hội miếu Bà Chúa Xứ ở xứ Châu Đốc, An Giang. Miếu Bà Chúa Xứ là một công trình kiến trúc linh thiêng tọa lạc dưới chân núi Sam. Di tích này không chỉ nổi tiếng khắp vùng đồng bằng sông Cửu Long mà còn khắp mọi miền đất nước về độ linh thiêng thần bí. Chính vì vậy, hàng năm rất nhiều khách hàng hương về đây khấn vái cầu mong một năm an ành, làm ăn xuôi chèo mát mái.Lễ hội miếu Bà Chúa Xứ hay còn gọi là lễ Vía Bà được tổ chức hàng năm bắt đầu từ ngày 24 đến 27-4. Trong thời gian diễn ra lễ chính này, An Giang đón khoảng 2.5 triệu lượt du khách hành hương về dự lễ.',//Chi tiết
        price: '250000',
        url1:'imgs/hoiviaba/viaba1.jpg',//ảnh 4:3 
        url2:'imgs/hoiviaba/viaba2.jpg',//ảnh 4:3 
        url3:'imgs/hoiviaba/viaba3.jpg',//ảnh 4:3 
        url4:'imgs/hoiviaba/viaba4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoiviaba/viaba5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoiviaba/viaba6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },{
        nameLeHoi: 'Hội Yên Tử',
        timeStart:'2018/01/01',
        timeEnd:'2018/01/31',
        diadiem: 'Hà Nội',
        kinhdo:'21.1520211',
        vido:'106.7132119',
        lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ hội Yên Tử bắt đầu từ ngày 10 tháng Giêng và kéo dài suốt mùa xuân. Ca dao xưa có câu: "Trăm năm tích đức tu hành/Chưa đi Yên Tử, chưa thành quả tu". Vì vậy, hàng năm, lễ hội lớn nhất Việt Nam này đón khoảng 1,5 triệu lượt du khách về dự. Hành hương về Yên Tử, bạn như có một cuộc hành trình về đất Phật. Bạn sẽ được vãn cảnh chùa, am gắn liền với biết bao câu chuyện huyền thoại, được lễ Phật và nghe giảng kinh giúp tâm hồn thanh thản, an nhiên.',//Chi tiết
        price: '250000',
        url1:'imgs/hoiyentu/yentu1.jpg',//ảnh 4:3 
        url2:'imgs/hoiyentu/yentu2.jpg',//ảnh 4:3 
        url3:'imgs/hoiyentu/yentu3.jpg',//ảnh 4:3 
        url4:'imgs/hoiyentu/yentu4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoiyentu/yentu5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoiyentu/yentu6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
        
    },{
        nameLeHoi: 'lễ hội Dussehra',
        timeStart:'2018/9/25',
        timeEnd:'2018/10/05',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Dussehra là một trong nhiều lễ hội phổ biến tổ chức của người Hindu trên toàn Ấn Độ với tên gọi khác nhau trong không khí tưng bừng và rực rỡ chiến thắng của Rama vào tháng Ashvin (khoảng tầm cuối tháng 9 – đầu tháng 10 hàng năm).  Lễ hội này còn được gọi là lễ hội Vijayadashmi.  “Vijay” có nghĩa là chiến thắng và “Dashmi” có nghĩa là ngày thứ mười. Lễ hội này cũng được hiểu là “Dasa-Hara” có nghĩa là cắt mười cái đầu của vua quỷ Ravana vua xứ Lanka. Theo truyền thuyết Người Ấn-Hindu tin rằng đó là vào ngày này Rama cùng với thần Lakshman và Khỉ vương Hanuma giết chết vua quỷ Ravana sau chín ngày đêm  chiến đấu giải cứu người vợ bị bắt cóc của mình – Sita vào ngày thứ mười. Họ trở về Ayodhya trong chiến thắng và vinh quang và tổ chức lễ hội mừng chiến thắng này. Nói cách khác, Lễ hội này là sự chiến thắng của cái thiện đối với cái ác. Chiến thắng của Rama vẫn còn được lưu truyền cho đến ngày nay .',
        price: '200000',
        url1:'imgs/Dussehra-hindu/Dussehra-431.jpg',
        url2:'imgs/Dussehra-hindu/Dussehra-432.jpg', 
        url3:'imgs/Dussehra-hindu/Dussehra-433.jpg', 
        url4:'imgs/Dussehra-hindu/Dussehra-hight1.jpg',
        url5:'imgs/Dussehra-hindu/Dussehra-hight2.jpg',
        url6:'imgs/Dussehra-hindu/Dussehra-hight3.png'
    },
    {
        nameLeHoi: 'lễ hội ánh sáng Diwali',
        timeStart:'2018/10/29',
        timeEnd:'2018/11/2',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Diwali thường diễn ra vào cuối tháng 10 hoặc đầu tháng 11 dương lịch hàng năm tại Ấn Độ. Lễ hội diễn ra 5 ngày để chào đón một năm mới trong đạo Hindu và cũng thể hiện sức mạnh của chính nghĩa, đặc biệt là chiến thắng của anh hùng Lord Rama và nàng Sita-vợ anh trước những kẻ xấu. Giống như tết Nguyên đán ở Việt Nam, Diwali là lễ hội truyền thống lớn nhất ở Ấn Độ nên sinh viên các trường được nghỉ học 2 tuần để có nhiều thời gian chuẩn bị. Trong thời gian diễn ra lễ hội, Ấn Độ gần như không có đêm, ngoài pháo hoa, người dân còn đốt khá nhiều pháo sáng rực rỡ. Tất cả mọi người đều mặc quần áo mới, đặc biệt phụ nữ sẽ diện trang phục sari truyền thống, gặp gỡ vui chơi và thăm hỏi chúc tết lẫn nhau. Vào 17h ngày 27/10/2017, Lễ hội Ánh sáng truyền thống Ấn Độ sẽ được tổ chức tại Trung tâm Văn hóa Ấn Độ ở Hà Nội. Nếu có dịp đến đây vào ngày này, bạn sẽ được tham gia những hoạt động thú vị như mặc thử trang phục Sari truyền thống, xem nghệ thuật vẽ Henna, lễ thắp đèn, thưởng thức ca nhạc và nghệ thuật Diwali .',
        price: '200000',
        url1:'imgs/Diwali/diwali-431.jpg',
        url2:'imgs/Diwali/diwali-432.jpg', 
        url3:'imgs/Diwali/diwali-433.jpg', 
        url4:'imgs/Diwali/diwali-hight1.jpg',
        url5:'imgs/Diwali/diwali-hight2.jpg',
        url6:'imgs/Diwali/diwali-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Ganesha',
        timeStart:'2018/07/07',
        timeEnd:'2018/07/18',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Theo truyền thuyết Ganesha là con trai của thần Shiva và nữ thần Parvati. Nữ thần Parvati luôn bị thần Shiva nhìn với con mắt thèm muốn nên nữ thần đã tìm cách tự bảo vệ mình. Do đó bà đã tạo ra thần Ganesha khi Shiva đang trên đường đi săn. Khi Shiva đi săn trở về không nhận ra cơ thể nữ thần Parvati vì chúng được Ganesha che mất. Shiva rất tức tối và đã chặt đứt đầu Ganesha. Paravati cầu xin Shiva để Ganesha được sống và cho Ganesha một cái đầu mới. Để Paravati không đau khổ, Shiva đã ra lệnh chặt đầu con vật đầu tiên thần nhìn thấy gắn làm đầu cho Ganesha. Và con vật ấy là một con voi. Parvati người đã tạo nên hình hài của thần voi Ganesha (con trai của Shiva và Parvati) từ những phần nhơ nhuốc của cơ thể bà; sau này thần Ganesha đã được ban cho sự sống nhờ nước thánh của thần Ganga. Do đó, Ganesha được xem như có hai bà mẹ—Pārvati và Gangā, và cũng vì thế nên được gọi là Dvaimātura và Gāngeya (con trai của Ganga). Lễ hội Ganesh Chaturthi là một trong những lễ hội rất quan trọng của người Hindu (theo Ấn Độ giáo) ở Mumbai - người Ấn Độ kỷ niệm ngày sinh của thần Ganesha đầu voi. Hầu hết các giáo phái của đạo Hindu đều tôn thờ Ganesha. Ở phía nam Ấn Độ, Ganesha là thần chính. Nhiều ngày trước lễ hội tượng thần được dựng lên, vào ngày chính hội tượng thần và người dự hội được hóa trang sặc sỡ với màu chủ đạo là màu đỏ.Người tham gia lễ hội vui chơi, ca hát và nhảy múa. Ở Mumbai ngày hội này cũng là ngày nghỉ và họ chúc tụng nhau gặp nhiều may mắn, hạnh phúc .',
        price: '200000',
        url1:'imgs/Ganesha/ganesha-431.jpg', 
        url2:'imgs/Ganesha/ganesha-432.jpg',
        url3:'imgs/Ganesha/ganesha-433.jpg',
        url4:'imgs/Ganesha/ganesha-hight1.jpg',
        url5:'imgs/Ganesha/ganesha-hight2.jpg',
        url6:'imgs/Ganesha/ganesha-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội sắc màu Holi',
        timeStart:'2018/03/16',
        timeEnd:'2018/3/27',
        diadiem: 'Ấn Độ',
        kinhdo:'19.0274841',
        vido:'72.8542087',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Holi là lễ hội đặc sắc của cộng đồng người Hindu được tổ chức hàng năm vào khoảng giữa tháng 3, đánh dấu sự kết thúc của mùa đông, khởi đầu của vụ mùa bội thu sắp tới. Theo truyền thống, những người tham gia lễ hội Holi sẽ ném bột màu hoặc pha bột màu với nước và ném vào nhau, thể hiện sự tự do và không phân biệt giai cấp vốn tồn tại trong xã hội. Ai nhận được nhiều màu thì sẽ có nhiều may mắn trong năm .',
        price: '200000',
        url1:'imgs/holi-hindu/holi-431.jpg',
        url2:'imgs/holi-hindu/holi-432.jpg',
        url3:'imgs/holi-hindu/holi-433.jpg',
        url4:'imgs/holi-hindu/holi-hight1.jpg',
        url5:'imgs/holi-hindu/holi-hight2.jpg',
        url6:'imgs/holi-hindu/holi-hight3.jpg'
    },
    {
        nameLeHoi: 'lễ hội Navratri',
        timeStart:'2018/03/05',
        timeEnd:'2018/03/14',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Lễ hội Navratri được tổ chức trong 9 ngày để thờ 9 hình thái khác nhau của nữ thần Durga. Đối với người Ấn Độ theo đạo Hindu, nữ thần Durga được xem là thiên mẫu, mẹ của vũ trụ. Mỗi năm, người dân Ấn tổ chức lễ Navratri vào 2 dịp quan trọng là mùa xuân và mùa thu hoạch. Vào dịp lễ Navratri, các bé gái 9 tuổi trong gia đình sẽ được tôn thờ như nữ thần và được tặng nhiều món quà bởi người Ấn cho rằng các bé gái 9 tuổi hội đủ sức mạnh và năng lượng tinh khiết giống như nữ thần Durga. Ở một số nơi, tượng của nữ thần Durga được đắm mình trong những con sông thiêng liêng vào ngày thứ 10 .',
        price: '200000',
        url1:'imgs/Navratri-hindu/navratri-431.jpg',
        url2:'imgs/Navratri-hindu/navratri-432.jpg',
        url3:'imgs/Navratri-hindu/navratri-433.jpg', 
        url4:'imgs/Navratri-hindu/navratri-hight1.jpg',
        url5:'imgs/Navratri-hindu/navratri-hight2.jpg',
        url6:'imgs/Navratri-hindu/navratri-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Shivaratri',
        timeStart:'2018/02/26',
        timeEnd:'2018/02/27',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Shivaratri cũng là một lễ hội quan trọng của cộng đồng Hindu giáo được tổ chức để tôn thờ thần Shiva- chúa tể của sự hủy diệt. Lễ hội Shivaratri bắt đầu vào đêm ngày 13 và kéo dài hết ngày 14 của tháng Maagha theo lịch Hindu (tức là khoảng tháng 2, tháng 3 dương lịch). Những tín đồ Hindu tập trung ở các đền thờ thần Shiva và thức suốt đêm để thực hiện nghi lễ truyền thống bên biểu tượng linga của thần Shiva. Nhiều người cũng hóa trang và mặc những bộ trang phục ma vào dịp lễ hội này .',
        price: '200000',
        url1:'imgs/Shivaratri-hindu/shivaratri-431.jpg',
        url2:'imgs/Shivaratri-hindu/shivaratri-432.jpg',
        url3:'imgs/Shivaratri-hindu/shivaratri-433.jpg',
        url4:'imgs/Shivaratri-hindu/shivaratri-hight1.jpg',
        url5:'imgs/Shivaratri-hindu/shivaratri-hight2.jpg',
        url6:'imgs/Shivaratri-hindu/shivaratri-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Janmashtami',
        timeStart:'2018/09/02',
        timeEnd:'2018/09/02',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Ngày 22/08/2011 vừa qua, người theo Đạo Hindu đã tưng bừng tổ chức ngày lễ Janmashtami, kỷ niệm ngày sinh của thần Krishna, tại Ấn Độ, Bangladesh và Anh. Krishna, một trong tám hóa thân của thần Vishnu, là hiện thân của tình yêu, là sự hủy diệt cho đau khổ và tội lỗi, là người cai quản và bảo vệ âm thanh của loài bò, là sự kết nối tình yêu của con người với Thượng đế, là đại diện cho kiến thức. Trong lễ Janmashtami, trẻ em và người lớn sẽ mặc những bộ trang phục như của thần Krishna và người vợ là Radha, với gam màu sáng, trang trí công phu và nhiều đồ trang sức. Những tháp người sẽ được tạo nên để với tới chiếc bình “Dahi-Handi”. Chiếc bình này có chứa sữa, phomat, bơ, mật ong và trái cây, được treo ở độ cao từ 6 – 12m. Mọi người cùng hợp sức tạo thành một kim tự tháp người để giúp người ở vị trí cao nhất có thể chạm được chiếc bình và công bố những vật chứa trong bình đó. Lễ hội Janmashtami là một trong những lễ hội quan trọng nhất trong năm của người theo Đạo Hindu .',
        price: '200000',
        url1:'imgs/janmashtami-hindu/janmashtami-431.jpg', 
        url2:'imgs/janmashtami-hindu/janmashtami-432.jpg',
        url3:'imgs/janmashtami-hindu/janmashtami-433.jpg',
        url4:'imgs/janmashtami-hindu/janmashtami-hight1.jpg',
        url5:'imgs/janmashtami-hindu/janmashtami-hight2.jpg',
        url6:'imgs/janmashtami-hindu/janmashtami-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ hội Ugadi',
        timeStart:'2018/02/16',
        timeEnd:'2018/02/16',
        diadiem: 'Ấn Độ',
        kinhdo:'20.7689051',
        vido:'73.7301886',
        lucdia:'Châu Á',
        tongiao:'Đạo Hindu',
        chitiet:'Ngày lễ được chuẩn bị trước khoảng 1 tuần,dọn dẹp nhà cửa,mua sắm đồ dùng,vật dụng cho ngày lễ. Vào ngày lễ Ugadi,mọi người thức dậy lúc bình minh để tắm rử sau đó trang trí lối vào nhà với lá xoài tươi.Việc trang trí bằng lá xoài   liên quan đến một truyền thuyết:  Kartik (hoặc Subramanya hoặc Kumara Swamy) và Ganesha, hai người con của Shiva và Parvathi rất thích xoài, theo  truyền thuyết thì Kartik hô hào mọi người buộc lá xoài xanh vào cửa với ý nghĩa cầu mong năm mới  vụ mùa bội thu và mọi người có sức khỏe dồi dào. Mọi người cũng tưới nước phân bò tươi lên mặt đất  phía trước của ngôi nhà của họ, cầu nguyện cho sức khỏe, sự giàu có, thịnh vượng và thành công trong kinh doanh.Ugadi cũng là thời gian tốt đẹp nhất để bắt đầu các dự án mới. Trong ngày lễ  Ugadi,các món ăn đặc biệt được chuẩn bị Ở Andhra Pradesh và Telangana, các món ăn truyền thống như "pulihora, bobbatlu (Bhakshalu / polelu / oligalu) và Pachadi" cung với  các món ăn được chế biến từ xoài .',
        price: '200000',
        url1:'imgs/Ugadi-hindu/ugadi-431.jpg',
        url2:'imgs/Ugadi-hindu/ugadi-432.jpg',
        url3:'imgs/Ugadi-hindu/ugadi-433.jpg', 
        url4:'imgs/Ugadi-hindu/ugadi-hight1.jpg',
        url5:'imgs/Ugadi-hindu/ugadi-hight2.jpg',
        url6:'imgs/Ugadi-hindu/ugadi-hight3.jpg'
    },
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
        price:'350000',
        url1:'imgs/Tết Nguyên Đán/chup-anh-sang-tu-nhien.jpg',//ảnh 4:3 
        url2:'imgs/Tết Nguyên Đán/1.jpg.1440.640.jpg',//ảnh 4:3 
        url3:'imgs/Tết Nguyên Đán/2016-01-31-04-02-47-2-1454236125234_ruwx.jpg',//ảnh 4:3 
        url4:'imgs/Tết Nguyên Đán/da-nang-ban-2000-qua-phao-hoa-don-giao-thua-tet-at-mui.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Tết Nguyên Đán/qqqqq.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Tết Nguyên Đán/huong-xuat-hanh-tot-ngay-tet-binh-than-2016_XSRG.jpg'
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
        price:'350000',
        url1:'imgs/Hoa anh đào/2710011201104009k_CherryblossominYeouido.jpg',//ảnh 4:3 
        url2:'imgs/Hoa anh đào/dai-hoc-han-quoc.jpg',//ảnh 4:3 
        url3:'imgs/Hoa anh đào/hoa-anh-dao-txtd-660-2.jpg',//ảnh 4:3 
        url4:'imgs/Hoa anh đào/hoa-anh-dao-nhat-ban-17.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Hoa anh đào/artsfon.com-19198.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Hoa anh đào/nhung-hinh-anh-mua-xuan-dep-nhat-tren-the-gioi-so-3.jpg'
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
        price:'350000',
        url1:'imgs/Vu Lan/lễ-hội-vu-lan-ở-nhật-bản - Copy.jpg',//ảnh 4:3 
        url2:'imgs/Vu Lan/Tin-PG-Hoa-Ky-7.jpg',//ảnh 4:3 
        url3:'imgs/Vu Lan/Vu lan 3.jpg',//ảnh 4:3 
        url4:'imgs/Vu Lan/ni.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Vu Lan/Ohara-Matsuri-Dance-Festival-in-Kagoshima-Japan.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Vu Lan/Vu_Lan_festival_1.jpg'
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
        price:'350000',
        url1:'imgs/Màu sắc/224577.jpg',//ảnh 4:3 
        url2:'imgs/Màu sắc/631113.jpg',//ảnh 4:3 
        url3:'imgs/Màu sắc/631518.jpg',//ảnh 4:3 
        url4:'imgs/Màu sắc/holi-festival-de-colores-4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Màu sắc/holi1.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Màu sắc/Holi-Festival-of-Colours-2.jpg'
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
        price:'350000',
        url1:'imgs/Té nước/Songkran-History.jpg',//ảnh 4:3 
        url2:'imgs/Té nước/le_hoi_te_nuoc_thai_lan12.jpg',//ảnh 4:3 
        url3:'imgs/Té nước/16songkran832-2013-04-14.jpg',//ảnh 4:3 
        url4:'imgs/Té nước/883296_572265736205744_1800545570_o.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Té nước/o-SONGKRAN-900.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Té nước/Songkran-Thai-New-Year-Festival.jpg'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Giáng Sinh',
        timeStart:'2018-12-24',
        timeEnd:'2018-12-25',
        diadiem: 'Paris-Pháp',
        kinhdo:'48.8587741',
        vido:'2.2069771,11',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Nguyên thủy, lễ Giáng sinh là ngày lễ của những người theo đạo Kitô giáo, nhằm kỷ niệm ngày sinh ra của người lãnh đạo tôn giáo mình, người mà họ cho là Thiên Chúa xuống thế làm người. Dần dần, theo thời gian và qua các lễ hội của phương Tây, lễ Giáng sinh ngày càng được tổ chức linh đình. Kết quả là bây giờ, lễ Giáng sinh được xem là một ngày lễ quốc tế, với ông già Noel, cây Giáng sinh và cây thông noel.',//Chi tiết
        price:'500000',
        url1:'imgs/Lễ Giáng Sinh/12_24_trong_hang_da.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Giáng Sinh/christmas.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Giáng Sinh/Giang-sinh-la-ngay-nao-1-phunutoday_vn.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Giáng Sinh/636133854120848301-2118387170_m3iG7t1IQ8ybXCDFvoO6_Beautiful_christmas_tree-1.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Giáng Sinh/image (1).jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Giáng Sinh/image.jpg'
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
        price:'500000',
        url1:'imgs/Lễ Hiển Linh/2016cnlehienlinhmt211219.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Hiển Linh/v1.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Hiển Linh/Ve-Mien-Anh-Sang-495x343.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Hiển Linh/DaiDien_9749.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Hiển Linh/NhaThoChanhToa-Thuml.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Hiển Linh/nha-tho-lon-ha-noi-1-1.jpg'
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
        price:'500000',
        url1:'imgs/Lễ Phục Sinh/Easter-Eggs-Hunting-Chasse-aux-Oeufs-16-©-French-Moments.jpg',//ảnh 4:3 
        url2:'imgs/Lễ Phục Sinh/faces-of-mystery-easter-island-heads-cliff-wassmann.jpg',//ảnh 4:3 
        url3:'imgs/Lễ Phục Sinh/phuc-sinh.jpg',//ảnh 4:3 
        url4:'imgs/Lễ Phục Sinh/Easter-Background.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/Lễ Phục Sinh/easter-bunny.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/Lễ Phục Sinh/easter-featured-image.jpg'
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    },
    {
        nameLeHoi: 'Lễ Hội Mặt Nạ',
        tiemStart:'2018/01/24',
        timeEnd:'2018/01/25',
        diadiem: 'Bờ Biển Ngà',
        kinhdo:'7.4608409',
        vido:'-7.7926176,7',
        lucdia:'Châu Phi',
        tongiao:'Không',
        chitiet:'Bất cứ ai quan tâm đến nền văn hóa châu Phi thì đều không thể nào bỏ qua lễ hội này. Đây là lễ hội được tổ chức nhằm mục đích bày tỏ lòng kính trọng cho các linh hồn của rừng. Các vũ công sẽ đeo mặt nạ và mặc những bộ trang phục nhiều màu sắc tham gia thi khiêu vũ để dân làng chọn lựa ra vũ công xuất sắc.',
        price:'100000',
        url1:'imgs/Lễ Hội Mặt Nạ/Fetes-des-Masques1-5c399.jpg',
        url2:'imgs/Lễ Hội Mặt Nạ/human-planet-timothy-allen-04.jpg', 
        url3:'imgs/Lễ Hội Mặt Nạ/Mombasa-Carnival1-5c399.jpg', 
        url4:'imgs/Lễ Hội Mặt Nạ/img2432.jpg',
        url5:'imgs/Lễ Hội Mặt Nạ/le-hoi-bo-bien-nga-6.jpg',
        url6:'imgs/Lễ Hội Mặt Nạ/maxresdefault.jpg'
    },
    {
        nameLeHoi: 'Lễ Hội Mombasa',
        tiemStart:'2018/10/30',
        timeEnd:'2018/10/31',
        diadiem: 'Kenya',
        kinhdo:'0.1540839',
        vido:'33.4078752,6',
        lucdia:'Châu Phi',
        tongiao:'Không',
        chitiet:'Nếu bạn có cơ hội đến Kenya, hãy tham gia vào lễ hội Mombasa Carnival sôi động và nhiều màu sắc. Mọi người sẽ tham dự các cuộc diễu hành trên khắp đường phố trong những trang mục đẹp mắt, sặc sỡ sắc màu với âm nhạc sôi động.',
        price:'100000',
        url1:'imgs/Lễ Hội Mombasa/02nxg_p3_mambosa_g611qvoil102nxg_mombasa_carnival1jpg3.jpg',
        url2:'imgs/Lễ Hội Mombasa/856803-white-faced-warrior-from-africa-band.jpeg', 
        url3:'imgs/Lễ Hội Mombasa/mombasa-carnival7.jpg', 
        url4:'imgs/Lễ Hội Mombasa/cultural-festival-mombasa.jpg',
        url5:'imgs/Lễ Hội Mombasa/festival-1.jpg',
        url6:'imgs/Lễ Hội Mombasa/Kenya-maasai.jpg'
    },
    {
        nameLeHoi: 'Lễ Panafest',
        tiemStart:'2018/05/10',
        timeEnd:'2018/05/11',
        diadiem: 'Ghana',
        kinhdo:'7.8984748',
        vido:'-3.2754727,7',
        lucdia:'Châu Phi',
        tongiao:'Không',
        chitiet:'Đối với người dân đến từ lục địa đen, Panafest là một từ đã quá quen thuộc, diễn ra vào tháng 7, tháng 8 và thường được tổ chức hai năm một lần tại đất nước Ghana. Lễ hội được tổ chức lần đầu vào năm 1992, với ý tưởng quảng bá và thắt chặt tình đoàn kết giữa những đất nước châu Phi, với vô số hoạt động thú vị và đầy màu sắc như: kịch, thơ, múa, biểu diễn âm nhạc, trống và đặc biệt nhất là lễ rước tộc trưởng và vợ. Họ được rước lên đài, trong tiếng hò reo của người dân Ghana và tiếng trống đậm chất châu Phi.',
        price:'100000',
        url1:'imgs/Lễ Hội Panafest/34826f0547cb4a8a867e02a97fd71975.jpg', 
        url2:'imgs/Lễ Hội Panafest/Panafest-874x492.jpg',
        url3:'imgs/Lễ Hội Panafest/panfest.jpg',
        url4:'imgs/Lễ Hội Panafest/B9317088446Z.1_20150425185319_000_G8OAJU67F.1-0.jpg',
        url5:'imgs/Lễ Hội Panafest/DSC01083.jpg',
        url6:'imgs/Lễ Hội Panafest/Princess_Swaziland_014.jpg'
    },
    {
        nameLeHoi: 'Lễ mừng Đức Phật đản sinh',
        tiemStart:'2018/01/24',
        timeEnd:'2018/01/25',
        diadiem: 'Việt Nam',
        kinhdo:'15.7587298',
        vido:'101.4157145',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Phật Đản (chữ Nho 佛誕 -nghĩa là ngày sinh của đức Phật); hay là Vesak (Pali; tiếng Phạn: Vaiśākha, Devanagari: वैशाख, Sinhala: වෙසක් පෝය) là ngày kỷ niệm Phật Tất-đạt-đa Cồ-đàm sinh ra tại vườn Lâm-tì-ni, năm 624 TCN, diễn ra vào ngày 15 tháng 4 âm lịch hàng năm. Theo truyền thống Phật giáo Bắc tông và ảnh hưởng của Phật giáo Trung Hoa, ngày này chỉ là ngày kỷ niệm ngày sinh của đức Phật Thích Ca; tuy nhiên, theo Phật giáo Nam truyền và Phật giáo Tây Tạng thì ngày này là ngày Tam hiệp (kỷ niệm Phật đản, Phật thành đạo và Phật nhập Niết-bàn). Ngày Phật Đản hay là lễ Vesak, Tam Hiệp được kỷ niệm vào các ngày khác nhau, tùy theo quốc gia. Một số quốc gia với đa số Phật tử chịu ảnh hưởng Bắc tông (như Trung Quốc, Hàn Quốc, Nhật Bản, Việt Nam) thường tổ chức ngày lễ Phật đản vào ngày mồng 8 tháng 4 âm lịch. Các quốc gia theo Nam tông thường tổ chức vào ngày trăng tròn trong tháng 4 âm lịch hay là ngày trăng tròn trong tháng 5 dương lịch. Có những năm có 2 ngày trăng tròn trong tháng 5 dương lịch như năm 2007, có nơi tổ chức ngày Vesak vào ngày trăng tròn đầu tiên (ngày 1 tháng 5) trong khi tại nơi khác lại kỷ niệm vào ngày trăng tròn thứ 2 (ngày 31 tháng 5).[1] Cách tính kỷ nguyên Phật lịch tại các quốc gia theo truyền thống Nam tông cũng khác nhau, nên năm Phật lịch có thể cách nhau một năm.',
        price:'150000',
        url1:'imgs/Đức Phật Đản Sinh/Phậtđản-431.jpg',
        url2:'imgs/Đức Phật Đản Sinh/Phậtđản-432.JPG', 
        url3:'imgs/Đức Phật Đản Sinh/Phậtđản-433.jpg', 
        url4:'imgs/Đức Phật Đản Sinh/Phậtđản-hight1.jpg',
        url5:'imgs/Đức Phật Đản Sinh/Phậtđản-hight2.jpg',
        url6:'imgs/Đức Phật Đản Sinh/Phậtđản-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Đức Phật Dược Sư',
        tiemStart:'2018/10/30',
        timeEnd:'2018/10/31',
        diadiem: 'Trung Quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Phật Dược Sư (tiếng Phạn: bhaiṣajyaguru; chữ Hán: 藥師佛; nghĩa là "vị Phật thầy thuốc"), còn gọi là Dược Sư Lưu Ly Quang Vương Phật (bhaiṣajyaguruvaidūrya-prabha-buddha; 藥師琉璃光佛), Dược Sư Lưu Ly Quang Vương Như Lai (Phạn: Bhaiṣaijya guru vaiḍuria prabhà ràjàya tathàgatàya), Dược Sư Như Lai (Phạn: Bhaiṣaijya guru tathàgatàya), Dược Sư Lưu Ly Như Lai (Phạn: Bhaiṣaijya guru vaiḍuria tathàgatàya), Đại Y Vương Phật (Phạn: Mahà Bhaiṣaijya ràja buddha), Vương Thiện Đạo, do bổn nguyện của ngài là "cứu tất cả các bệnh khổ cho các chúng sinh" cho nên còn có tên Tiêu Tai Diên Thọ Dược Sư Phật[1], là vị Phật đại diện cho sự trọn vẹn của Phật quả ngự cõi phía đông (là cõi Tịnh Lưu ly). Tranh tượng của vị Phật này hay được vẽ với tay trái cầm thuốc chữa bệnh và tay mặt giữ Ấn thí nguyện. Phật Dược Sư thường được thờ chung với Phật Thích Ca Mâu Ni và A Di Đà, trong đó phật Dược Sư đứng bên trái còn Phật A Di Đà đứng bên phải Phật Thích Ca. Trong kinh Dược Sư, hiện nay chỉ còn bản chữ Hán và chữ Tây Tạng, người ta đọc thấy 12 lời nguyện của vị Phật này, thệ cứu độ chúng sinh, với sự giúp đỡ của chư Phật, Bồ Tát và 12 vị Hộ pháp và Thiên vương. Tại Trung Quốc, Tây Tạng, Nhật Bản và Việt Nam, Phật Dược Sư được thờ cúng rộng rãi.',
        price:'150000',
        url1:'imgs/Đức Phật Dược Sư/Đức Phât Dược Sư-431.jpg',
        url2:'imgs/Đức Phật Dược Sư/Đức Phật Dược Sư-432.jpg', 
        url3:'imgs/Đức Phật Dược Sư/Đức Phật Dược Sư-433.jpg', 
        url4:'imgs/Đức Phật Dược Sư/Đức Phật Dược Sư-hight1.jpg',
        url5:'imgs/Đức Phật Dược Sư/Đức Phật Dược Sư-hight2.jpg',
        url6:'imgs/Đức Phật Dược Sư/Đức Phật Dược Sư-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Đức Văn Thù Bồ Tát',
        tiemStart:'2018/05/10',
        timeEnd:'2018/05/11',
        diadiem: 'Trung Quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Văn-thù-sư-lợi (zh. 文殊師利, sa. mañjuśrī) là tên dịch theo âm, thường được gọi tắt là Văn-thù, dịch nghĩa là Diệu Đức (zh. 妙德), Diệu Cát Tường (zh. 妙吉祥), cũng có lúc được gọi là Diệu Âm (zh. 妙音), dịch từ tên tiếng Phạn là Mañjughoṣa, là một vị Bồ Tát tượng trưng cho trí huệ, một trong những vị Bồ Tát quan trọng của Phật giáo. Lần đầu tiên người ta nhắc đến Văn-thù trong tác phẩm Văn-thù-sư-lợi căn bản nghi quỹ (sa. ārya-mañjuśrī-mūlakalpa) ở thế kỉ thứ 4. Tranh tượng trình bày Văn-thù với lưỡi kiếm và kinh Bát-nhã-ba-la-mật-đa, được vẽ khoảng ngang đầu. Người ta xem đó là biểu tượng trí huệ phá đêm tối của Vô minh. Về sau chúng ta thường thấy Văn-thù cưỡi trên một con sư tử. Trong Phật giáo Tây Tạng, các vị luận sư xuất sắc như Tông-khách-ba thường được xem là hiện thân của Văn-thù (Châu-cô). Dưới tên Diệu Âm (zh. 妙音), "Người với tiếng nói êm dịu", Văn-thù Bồ Tát thường được tán tụng trước khi hành giả nghiên cứu kinh điển, nhất là kinh điển thuộc hệ Bát-nhã-ba-la-mật-đa và học thuyết của Trung quán tông. Văn-thù là vị Bồ Tát tượng trưng cho kinh nghiệm giác ngộ, đạt được bằng phương tiện tri thức. Văn-thù cũng xuất hiện dưới dạng một Thần thể (sa. iṣṭadevatā, sādhita, bo. yidam) phẫn nộ, có tên gọi là Diêm-mạn-đức-ca – "Người chiến thắng tử thần" (sa. yamāntaka), có dạng vị thần mang đầu bò. Dạng này là Thần thể quan trọng của phái Cách-lỗ tại Tây Tạng. Theo truyền thống Phật giáo Trung Quốc, Văn-thù được Phật Thích-ca đích thân giao phó việc truyền bá Phật pháp tại đây và Ngũ Đài sơn chính là nơi Bồ Tát thuyết pháp. Vì vậy, Ngũ Đài sơn cũng được xem là trụ xứ của Văn-thù (xem Tứ đại danh sơn). Một thuyết khác bảo rằng, Bồ Tát đã từng xuất hiện tại Trung Quốc trong thế kỉ 1, đời Hán Minh Đế. Câu niệm danh hiệu của vị bồ tát này là: "Nam mô đại trí văn thù sư lợi bồ tát".',
        price:'150000',
        url1:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-431.jpg', 
        url2:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-432.jpg',
        url3:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-433.jpg',
        url4:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-hight1.jpg',
        url5:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-hight2.jpg',
        url6:'imgs/Văn Thù Bồ Tát/Văn Thù Bồ Tát-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Đức Phổ Hiền Bồ Tát',
        tiemStart:'2018/03/28',
        timeEnd:'2018/03/29',
        diadiem: 'Trung Quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Phổ Hiền Bồ tát (dịch âm là Tam mạn đà bạt đà la, hoặc Tam mạn đà bạt đà, zh. pǔxián 普賢, sa. samantabhadra, ja. fugen, bo. kun tu bzang po ཀུན་ཏུ་བཟང་པོ་). Phổ là biến khắp, Hiền là Đẳng giác Bồ tát, Phổ Hiền là vị Bồ tát Đẳng giác có năng lực hiện thân khắp mười phương pháp giới, tùy mong cầu của chúng sanh mà hiện thân hóa độ. Ngài là một trong những vị Bồ Tát quan trọng trong Phật giáo Đại thừa. Theo kinh Pháp Hoa, Ngài là vị Bồ tát ở quốc độ của Phật Bảo Oai Đức Thượng Vương Như Lai, phía Đông cõi Ta Bà, nghe thế giới này thuyết kinh Pháp Hoa liền lãnh đạo năm trăm vị Đại Bồ tát đến nghe pháp và phát tâm hộ trì Chánh pháp của Đức Phật Thích Ca. Phổ Hiền được xem là người hộ vệ của những ai tuyên giảng đạo pháp và đại diện cho "Bình đẳng tính trí" tức là trí huệ thấu hiểu cái nhất thể của sự đồng nhất và khác biệt. Bồ Tát Phổ Hiền hay được thờ chung với Phật Thích-ca và Bồ Tát Văn-thù-sư-lợi (sa. mañjuśrī). Bồ Tát cưỡi voi trắng sáu ngà, voi trắng tượng trưng cho trí huệ vượt chướng ngại, sáu ngà cho sự chiến thắng sáu giác quan. Trong hệ thống Ngũ Phật, Phổ Hiền được xem ở trong nhóm của Phật Đại Nhật (sa. vairocana). Biểu tượng của Phổ Hiền là ngọc như ý, hoa sen, có khi là trang sách ghi thần chú của Bồ Tát. Tại Trung Quốc, Phổ Hiền được xem là một trong bốn Đại Bồ Tát, trú xứ của Phổ Hiền là núi Nga Mi, nơi Bồ Tát lưu trú sau khi cưỡi voi trắng sáu răng (sáu răng ngụ ý sáu độ, sáu phương pháp tu hành để đạt tới cõi Niết bàn; bốn chân biểu thị bốn điều như ý, bốn loại thiền định) từ Ấn Độ sang Trung Quốc.',
        price:'150000',
        url1:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-431.jpg',
        url2:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-432.jpg',
        url3:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-433.png',
        url4:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-hight1.jpg',
        url5:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-hight2.jpg',
        url6:'imgs/Phổ Hiền Bồ Tát/Phổ Hiền Bồ Tát-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Đức Chuẩn Đề Bồ Tát',
        tiemStart:'2018/05/01',
        timeEnd:'2018/05/02',
        diadiem: 'Trung Quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Phật Mẫu Chuẩn Đề tên Phạn là Cundì, Cunïdïhi(चुन्दी), tên chữ Hán là Thất Câu Chi Phật Mẫu hay Thất Câu Đê Phật Mẫu, Chuẩn Đề Bồ Tát. Ngài là một trong lục quan âm của Phật giáo, trong Tạng Giới Man Đa La ghi Chuẩn Đề là một trong 3 vị Phật Mẫu thuộc Biến Tri Viện. Chuẩn Đề là một vị bồ tát trong trường phái Đại thừa, và đặc biệt được nhắc đến nhiều trong Kim cương thừa. Bà được xem là Bhagavathi (trong tiếng Phạn có nghĩa là "nữ thần"), hay "mẹ của các Phật", và thường được xem là ngang hàng với Quán Thế Âm. Chuẩn Đề có thể có liên quan đến vị nữ thần Chandi trong Ấn Độ giáo. Thân vị Bồ-tát nầy có màu vàng trắng hay màu vàng lợt, ngồi kiết gia trên đài sen, có hào quang tỏa sáng xung quanh, mình mặc thiên y, trên đầu trang điểm ngọc anh lạc. Đầu đội mão báu có ngọc lưu ly rũ treo, có 18 tay đều đeo vòng xuyến khảm Xà Cừ và mỗi tay đều cầm các loại khí cụ biểu thị cho các Tam Muội Gia, gồm có 3 mắt. Vị Bồ-tát nầy chuyên hộ trì Phật pháp và bảo hộ những chúng sinh có mạng sống ngắn ngủi được thọ mạng lâu dài. Pháp môn tu hành của vị Bồ-tát nầy là trì tụng bài chú: Nam mô tát đa nẫm, tam miệu tam bồ đà Câu chi nẫm, đát diệt tha: án, chiết lệ chủ lệ chuẩn đề ta bà ha.',
        price:'150000',
        url1:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-431.jpg',
        url2:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-432.jpg',
        url3:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-433.jpg', 
        url4:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-hight1.jpg',
        url5:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-hight2.jpg',
        url6:'imgs/Chuẩn Đề Bồ Tát/Phật Bà Nghìn Mắt Nghìn Tay-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Địa Tạng Bồ Tát',
        tiemStart:'2018/09/09',
        timeEnd:'2018/09/10',
        diadiem: 'Trung quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Địa Tạng, Địa Tạng Vương (skt. क्षितिगर्भ, Kṣitigarbha; tiếng Trung: 地藏; bính âm: Dìzàng; Wade–Giles: Ti-tsang; jap. 地蔵, Jizō; tib. ས་ཡི་སྙིང་པོ.sai snying po, kor.: 지장, 지장보살, ji jang, ji jang bosal[1]) là một vị Bồ-tát được tôn thờ trong Phật giáo Đông Á, thường được mô tả như một tỉ-khâu phương Đông. Địa Tạng Bồ-tát được biết đến bởi lời nguyện cứu độ tất cả chúng sinh trong lục đạo luân hồi vào thời kỳ sau khi Phật Thích-ca Mâu-ni nhập Niết-bàn cho đến khi Bồ-tát Di Lặc hạ sanh, và nguyện không chứng Phật quả nếu địa ngục chưa trống rỗng. Do đó, Địa Tạng thường được xem như là vị Bồ-tát của chúng sanh dưới địa ngục hay là giáo chủ của cõi U Minh.[2] Trong văn hóa Nhật Bản, Địa Tạng là Bồ-tát hộ mệnh cho trẻ em, cũng như bảo vệ các vong linh của trẻ em hoặc bào thai chết yểu. Địa Tạng thường được mô tả là một tỉ-khâu trọc đầu với vầng hào quang, một tay cầm tích trượng để mở cửa địa ngục, tay kia cầm ngọc Như Ý tượng trưng cho ánh sáng xua tan bóng đêm. Một số tranh tượng ở Trung Quốc và Việt Nam cũng khắc họa Địa Tạng Vương Bồ tát đội mũ thất phật và mặc cà sa đỏ - hình ảnh tu sĩ Phật giáo Bắc Truyền, hình tượng nhân vật Đường Tăng trong tiểu thuyết Tây Du Ký rất giống hình tượng của Đức Bồ Tát. Địa Tạng Vương Bồ tát là một trong 6 vị bồ tát quan trọng của Phật giáo Đại thừa. 5 vị còn lại là các Quán Thế Âm Bồ tát, Đại Thế Chí Bồ tát, Văn Thù Sư Lợi Bồ tát, Phổ Hiền Bồ tát và Di Lặc Bồ tát.',
        price:'150000',
        url1:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-431.jpg',
        url2:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-432.jpg',
        url3:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-433.jpg',
        url4:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-hight1.jpg',
        url5:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-hight2.jpg',
        url6:'imgs/Địa Tạng Bồ Tát/Địa Tạng Bồ Tát-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ khánh đản Đại Thế Chí Bồ Tát',
        tiemStart:'2018/08/23',
        timeEnd:'2018/08/24',
        diadiem: 'Trung Quốc',
        kinhdo:'34.4561427',
        vido:'86.0826666',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Đại Thế Chí Bồ Tát còn được gọi là Đắc Đại Thế Bồ tát, Đại Tinh Tấn Bồ tát, Vô Biên Quang Bồ tát,Linh Cát Bồ tát,… hay vắn tắt là Thế Chí. Ngài là vị Bồ tát thường dùng ánh sáng trí tuệ chiếu khắp mọi loài, khiến chúng sanh mười phương thế giới thoát khổ đau, thành tựu đạo quả Bồ đề. Đắc Đại Thế Bồ tát vì Bồ tát có hạnh nguyện đại hùng đại lực đại từ bi, dùng hạnh nguyện này để trụ trong Ta bà thế giới, điều phục và tiếp độ chúng sanh cang cường. Trong Kinh Đại Bi Liên Hoa (Kinh Bi Hoa), tiền thân của Đại Thế Chí Bồ Tát là Ni-ma vương tử, người con thứ hai của Chuyển luân vương Vô Chánh Niệm (sau này là Đức Phật A Di Đà). Bồ tát được Phật Bảo Tạng thọ ký rằng, trong đời vị lai vô lượng vô biên kiếp, sau khi Đức Phật Biến Xuất Nhất Thiết Công Đức Sơn Vương Như Lai nhập niết bàn (tức Quán Thế Âm Bồ Tát thành Phật trong đời vị lai), Đại Thế Chí Bồ tát sẽ thay ngài tiếp quản chánh pháp và thế giới phương tây, thành Phật hiệu là Thiện Trụ Trân Bảo Sơn Vương Như Lai, Ứng cúng, Chánh biến tri, Minh hạnh túc, Thiện thệ, Thế gian giải, Vô thượng sĩ, Điều ngự trượng phu, Thiên nhân sư, Phật, Thế Tôn.',
        price:'150000',
        url1:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-431.jpg', 
        url2:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-432.jpg',
        url3:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-433.JPG',
        url4:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-hight1.jpg',
        url5:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-hight2.jpg',
        url6:'imgs/Đại Thế Chí Bồ Tát/Đại Thế Chí Bồ Tát-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ Thượng Nguyên',
        tiemStart:'2018/06/18',
        timeEnd:'2018/03/02',
        diadiem: 'Việt Nam',
        kinhdo:'15.7587298',
        vido:'101.4157145',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Rằm tháng Giêng hay Tết Nguyên Tiêu trong truyền thống Phật giáo Nam tông là lễ hội Cúng Dường Đức Phật đầu năm, mong cầu phát sinh sự an lành, hạnh phúc, theo dân gian là lễ hội kết thúc mùa lễ Tết Nguyên Đán và Nguyên Tiêu. Nguyên rằm tháng giêng bắt nguồn từ hoạt động của Phật Giáo, do vào ngày này chư Tăng tập trung đông đủ để nghe Phật thuyết pháp, nên những người theo đạo Phật dùng ngày rằm tháng giêng để tưởng nhớ và cúng dường chư Phật.Ngày lễ được bắt đầu từ giữa đêm 14 (đêm trước trăng rằm) trọn ngày 15 (ngày rằm) cho đến nửa đêm 15 (đêm trăng rằm).',
        price:'150000',
        url1:'imgs/Tết Nguyên Tiêu/thuongnguyen-431.JPG',
        url2:'imgs/Tết Nguyên Tiêu/thuongnguyen-432.JPG',
        url3:'imgs/Tết Nguyên Tiêu/thuongnguyen-433.JPG', 
        url4:'imgs/Tết Nguyên Tiêu/thuongnguyen-hight1.jpg',
        url5:'imgs/Tết Nguyên Tiêu/thuongnguyen-hight2.png',
        url6:'imgs/Tết Nguyên Tiêu/thuongnguyen-hight3.jpg'
    },
    {
        nameLeHoi: 'Lễ Vu Lan báo hiếu',
        tiemStart:'2018/08/25',
        timeEnd:'2018/08/26',
        diadiem: 'Việt Nam',
        kinhdo:'15.7587298',
        vido:'101.4157145',
        lucdia:'Châu Á',
        tongiao:'Đạo Phật',
        chitiet:'Lễ Vu Lan hay còn gọi là lễ báo hiếu cha mẹ rơi vào ngày 15 tháng 7 âm lịch là một trong những ngày lễ chXuất phát từ sự tích về Bồ tát Mục Kiền Liên đại hiếu đã cứu mẹ của mình ra khỏi kiếp ngạ quỷ. Vu Lan là ngày lễ hằng năm để tưởng nhớ công ơn cha mẹ (và tổ tiên nói chung) - cha mẹ của kiếp này và của các kiếp trước.Lễ Vu Lan: Nguồn gốc và ý nghĩa thờ cúng - Ảnh 1Lễ Vu Lan có nguồn gốc từ tích Mục Kiều Liên cứu mẹ. Theo kinh Vu Lan thì ngày xưa, Mục Kiền Liên đã tu luyện thành công nhiều phép thần thông. Mẹ ông là bà Thanh Đề đã qua đời, ông tưởng nhớ và muốn biết bây giờ mẹ như thế nào nên dùng mắt phép nhìn khắp trời đất để tìm. Thấy mẹ mình, vì gây nhiều nghiệp ác nên phải sanh làm ngạ quỷ, bị đói khát hành hạ khổ sở, ông đã đem cơm xuống tận cõi quỷ để dâng mẹ. Tuy nhiên do đói ăn lâu ngày nên mẹ của ông khi ăn đã dùng một tay che bát cơm của mình đi không cho các cô hồn khác đến tranh cướp, vì vậy khi thức ăn đưa lên miệng đã hóa thành lửa đỏ. Cũng theo kinh Vu-Lan-bồn, Mục Liên quay về tìm Phật để hỏi cách cứu mẹ, Phật dạy rằng: "Dù ông thần thông quảng đại đến đâu cũng không đủ sức cứu mẹ ông đâu. Chỉ có một cách nhờ hợp lực của chư tăng khắp mười phương mới mong giải cứu được. Ngày rằm tháng bảy là ngày thích hợp để cung thỉnh chư tăng, hãy sắm sửa lễ cúng vào ngày đó".Làm theo lời Phật, mẹ của Mục Liên đã được giải thoát. Phật cũng dạy rằng: chúng sanh ai muốn báo hiếu cho cha mẹ cũng theo cách này. Từ đó, ngày lễ Vu-lan ra đời.ính của Phật giáo và bắt nguồn từ phong tục Trung Quốc .',
        price:'150000',
        url1:'imgs/Lễ Vu Lan báo hiếu/vulan-431.jpg',
        url2:'imgs/Lễ Vu Lan báo hiếu/vulan-432.jpg', 
        url3:'imgs/Lễ Vu Lan báo hiếu/vulan-433.jpg', 
        url4:'imgs/Lễ Vu Lan báo hiếu/vulan-hight1.jpg',
        url5:'imgs/Lễ Vu Lan báo hiếu/vulan-hight2.jpg',
        url6:'imgs/Lễ Vu Lan báo hiếu/vulan-hight3.jpg'
    },
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
        url1:'imgs/haikich/haikich1.jpg',//ảnh 4:3 
        url2:'imgs/haikich/haikich2.jpg',//ảnh 4:3 
        url3:'imgs/haikich/haikich3.jpg',//ảnh 4:3 
        url4:'imgs/haikich/haikich4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/haikich/haikich5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/haikich/haikich6.jpg'//ảnh độ phân giải trên 1920
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
        chitiet:'Tháng 9, dưới tiết trời xuân Canberra mát mẻ, các loài hoa tulip, violet, thủy tiên, dạ lý hương… đua nhau khoe sắc và tỏa hương thơm nồng. Đặc biệt, đến với thủ đô Canberra, du khác sẽ tận mắt chiêm ngưỡng hàng trăm chủng loại hoa tulip nổi tiếng trên thế giới cùng hàng chục tác phẩm hoa đặc biệt. Các sắc màu như đỏ, cam, vàng, hồng… xen kẽ với nhiều kích cỡ khác nhau bừng sáng dưới vẻ đẹp tráng lệ của thủ đô Canberra xinh đẹp.',
        price: '450000',
        url1:'imgs/hoihoa/hoihoa1.jpg',//ảnh 4:3 
        url2:'imgs/hoihoa/hoihoa2.jpg',//ảnh 4:3 
        url3:'imgs/hoihoa/hoihoa3.jpg',//ảnh 4:3 
        url4:'imgs/hoihoa/hoihoa4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoihoa/hoihoa5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoihoa/hoihoa6.jpg'//ảnh độ phân giải trên 1920
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
        url1:'imgs/hoianhsang/anhsang1.jpg',//ảnh 4:3 
        url2:'imgs/hoianhsang/anhsang2.jpg',//ảnh 4:3 
        url3:'imgs/hoianhsang/anhsang3.jpg',//ảnh 4:3 
        url4:'imgs/hoianhsang/anhsang4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hoianhsang/anhsang5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hoianhsang/anhsang6.jpg'//ảnh độ phân giải trên 1920
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
        url1:'imgs/amthuc/amthuc1.jpg',//ảnh 4:3 
        url2:'imgs/amthuc/amthuc2.jpg',//ảnh 4:3 
        url3:'imgs/amthuc/amthuc3.jpg',//ảnh 4:3 
        url4:'imgs/amthuc/amthuc4.jpg',//ảnh độ phân giải trên 1920amthuc/amthuc1.jpg
        url5:'imgs/amthuc/amthuc5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/amthuc/amthuc6.jpg'//ảnh độ phân giải trên 1920
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
        url1:'imgs/duangua/duangua1.jpg',//ảnh 4:3 
        url2:'imgs/duangua/duangua2.jpg',//ảnh 4:3 
        url3:'imgs/duangua/duangua3.jpg',//ảnh 4:3 
        url4:'imgs/duangua/duangua4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/duangua/duangua5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/duangua/duangua6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },{
        
        nameLeHoi: 'Lễ hội dân gian quốc gia tại thủ đô Canberra',
        timeStart:'2018/11/02',
        timeEnd:'2018/11/05',
        diadiem: 'Canberra',
        kinhdo:'-35.2813043,149',
        vido:'1204446,15z',
        lucdia:'Châu Úc',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Thiên Chúa',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Dành cho những người yêu thích dòng nhạc nhẹ nhàng, có tâm hồn lãng mạn, lễ hội dân gian tại thủ đô Canberra sẽ đưa du khách chìm đắm trong một không gian văn hóa cổ điển với nhiều loại hình biểu diễn như buổi hòa nhạc, giao lưu thơ ca, khiêu vũ hay hội thảo giao lưu văn hóa.',//Chi tiết
        price: '450000',
        url1:'imgs/dangian/dangian1.jpg',//ảnh 4:3 
        url2:'imgs/dangian/dangian2.jpg',//ảnh 4:3 
        url3:'imgs/dangian/dangian3.jpg',//ảnh 4:3 
        url4:'imgs/dangian/dangian4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/dangian/dangian5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/dangian/dangian6.jpg'//ảnh độ phân giải trên 1920
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
        url1:'imgs/adelaide/adelaide1.jpg',//ảnh 4:3 
        url2:'imgs/adelaide/adelaide2.jpg',//ảnh 4:3 
        url3:'imgs/adelaide/adelaide3.jpg',//ảnh 4:3 
        url4:'imgs/adelaide/adelaide4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/adelaide/adelaide5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/adelaide/adelaide6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920   
    },
    { 
        nameLeHoi: 'Ramadan',
        timeStart:'2018/07/09',
        timeEnd:'2018/08/07',
        diadiem: 'Libya',
        kinhdo:'26.2998677,12',
        vido:'8350442,6z',
        lucdia:'Châu Phi',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Lễ Ramadan của người Hồi giáo trên khắp thế giới thường diễn ra vào cuối mùa hè. Đó là khoảng thời gian một tháng mà những người theo đạo Hồi sẽ nhịn ăn, uống, hút thuốc, quan hệ luyến ái từ lúc mặt trời mọc cho đến khi mặt trời lặn.',//Chi tiết
        url1:'imgs/ramadan/ramadan1.jpg',//ảnh 4:3 
        url2:'imgs/ramadan/ramadan2.jpg',//ảnh 4:3 
        url3:'imgs/ramadan/ramadan3.jpg',//ảnh 4:3 
        url4:'imgs/ramadan/ramadan4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/ramadan/ramadan5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/ramadan/ramadan6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },

       {
        nameLeHoi: 'Lễ Tế Sinh',
        timeStart:'2018/12/10',
        timeEnd:'2018/12/12',
        diadiem: 'Indonesia',
        kinhdo:'-2.2759043,99',
        vido:'4534267,4z',
        lucdia:'Châu Á',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Người Hồi giáo trên toàn thế giới đang thực hành nghi lễ Eid Mubarak, hay còn còn gọi là Eid al-Adha, một trong hai dịp lễ lớn và quan trọng nhất trong năm của người Hồi giáo và được coi như là Tết năm mới của các tín đồ theo đạo Hồi.',//Chi tiết
        url1:'imgs/letesinh/letesinh1.jpg',//ảnh 4:3 
        url2:'imgs/letesinh/letesinh2.jpg',//ảnh 4:3 
        url3:'imgs/letesinh/letesinh3.jpg',//ảnh 4:3 
        url4:'imgs/letesinh/letesinh4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/letesinh/letesinh5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/letesinh/letesinh6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },

       {
        nameLeHoi: 'Lễ diễu hành tại Binche',
        timeStart:'2018/12/10',
        timeEnd:'2018/12/12',
        diadiem: 'Binche',
        kinhdo:'50.3982284,4',
        vido:'0842302,12z',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Phần cuối buổi lễ, các chú hề Gilles sẽ ném cam vào đám đông để ban phước cho mọi người. Đặc biệt là nếu ai “bị” Gilles ném trúng quả cam vào trán, người đó sẽ được ban phước lành và có thể gặp may mắn cả năm.',//Chi tiết
        url1:'imgs/dieuhanh/dieuhanh1.jpg',//ảnh 4:3 
        url2:'imgs/dieuhanh/dieuhanh2.jpg',//ảnh 4:3 
        url3:'imgs/dieuhanh/dieuhanh3.jpg',//ảnh 4:3 
        url4:'imgs/dieuhanh/dieuhanh4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/dieuhanh/dieuhanh5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/dieuhanh/dieuhanh6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },

        {
        nameLeHoi: 'Lễ hội hình nhân Falles',
        timeStart:'2018/01/10',
        timeEnd:'2018/01/13',
        diadiem: 'Valencia',
        kinhdo:'39.4077013',
        vido:'-0.5015962,11z',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Một lễ hội không kém phần đặc sắc ở xứ bò tót là lễ hội hình nhân Falles. Người dân của thành phố Valencia phải chuẩn bị một năm trời cho việc gây quỹ và chế tác những hình nhân làm từ giấy, sáp, bột cứng và các nguyên liệu khác.',//Chi tiết
        url1:'imgs/hinhnhan/hinhnhan1.jpg',//ảnh 4:3 
        url2:'imgs/hinhnhan/hinhnhan2.jpg',//ảnh 4:3 
        url3:'imgs/hinhnhan/hinhnhan3.jpg',//ảnh 4:3 
        url4:'imgs/hinhnhan/hinhnhan4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/hinhnhan/hinhnhan5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/hinhnhan/hinhnhan6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },

        {
        nameLeHoi: 'Lễ diễu hành tại Binche',
        timeStart:'2018/12/10',
        timeEnd:'2018/12/12',
        diadiem: 'Binche',
        kinhdo:'50.3982284,4',
        vido:'0842302,12z',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Phần cuối buổi lễ, các chú hề Gilles sẽ ném cam vào đám đông để ban phước cho mọi người. Đặc biệt là nếu ai “bị” Gilles ném trúng quả cam vào trán, người đó sẽ được ban phước lành và có thể gặp may mắn cả năm.',//Chi tiết
        url1:'imgs/dieuhanh/dieuhanh1.jpg',//ảnh 4:3 
        url2:'imgs/dieuhanh/dieuhanh2.jpg',//ảnh 4:3 
        url3:'imgs/dieuhanh/dieuhanh3.jpg',//ảnh 4:3 
        url4:'imgs/dieuhanh/dieuhanh4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/dieuhanh/dieuhanh5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/dieuhanh/dieuhanh6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
       },

        {
        nameLeHoi: 'Lễ hội kinh khí cầu',
        timeStart:'2018/03/07',
        timeEnd:'2018/03/15',
        diadiem: 'Australia',
        kinhdo:'-21.1694649,95',
        vido:'3982768,3z',
        lucdia:'Châu Âu',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
        tongiao:'Đạo Hồi',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
        chitiet:'Australia được bà mẹ thiên nhiên ưu đãi trong khí hậu và cảnh quan đẹp. Trong đó, mùa thu là một trong những mùa được nhiều du khách lựa chọn tham quan trong tour du lịch Úc. Không  chỉ có cảnh quan đẹp, mà mùa thu ở Úc còn xuất hiện những lễ hội như lễ hội khinh khí cầu  Canberra Balloon Fiesta',//Chi tiết
        url1:'imgs/khinhkhicau/khinhkhicau1.jpg',//ảnh 4:3 
        url2:'imgs/khinhkhicau/khinhkhicau2.jpg',//ảnh 4:3 
        url3:'imgs/khinhkhicau/khinhkhicau3.jpg',//ảnh 4:3 khinhkhicau/khinhkhicau1.jpg
        url4:'imgs/khinhkhicau/khinhkhicau4.jpg',//ảnh độ phân giải trên 1920
        url5:'imgs/khinhkhicau/khinhkhicau5.jpg',//ảnh độ phân giải trên 1920
        url6:'imgs/khinhkhicau/khinhkhicau6.jpg'//ảnh độ phân giải trên 1920
        // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    }
];
	Festival.insertMany(rawDocuments)
	    .then(function(mongooseDocuments) {
			console.log('Add Many -- Oke Bro');
            return;
	    })
	    .catch(function(err) {
	        console.log(err);
	    });	

}
