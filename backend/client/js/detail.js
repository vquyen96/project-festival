var users = [{ 
        username: 'thanh',
        password: '123456', 
        email: 'thanhvtd00554@fpt.edu.vn',
        birthday: '1999/02/15',
        level: '2',//1 = nguoi dung ; 2 = quanly ; 3 = chu 
        avaUrl: 'imgs/abc.jpg',///ảnh đại diện
    },
    { 
        username: 'John',
        password: '0011223', 
        email: 'John123@fpt.edu.vn',
        birthday: '1999/04/23',
        level: '1',
        avaUrl: 'imgs/john.jpg',
    },
    { 
        username: 'Pink',
        password: '090909', 
        email: 'pink123@fpt.edu.vn',
        birthday: '2000/06/21',
        level: '1',
        avaUrl: 'imgs/pink.jpg',
    },
];
var  festival = [{
    nameLeHoi: 'Đua Thuyền',
    timeStart:'2018/04/23',
    timeEnd:'2018/04/30',
    diadiem: 'Nghệ An',
    kingdo:'19.2734477',
    vido:'104.2799854,9z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội đền Quả xã Bạch Ngọc, huyện Đô Lương, Nghệ An có đua thuyền rồng. Vùng này có nơi toàn các tay đua nữ thi đấu với nhau như ở Xa Long, huyện Hương Sơn, còn thường thì nam thi với nam, nam thi với nữ cũng có nhưng ít hơn. Trước khi hạ thủy thuyền đua, có tục lệ trai đinh rước 12 thuyền rồng sau 4 ngựa gỗ, gồm hai ngựa hồng, hai ngựa bạch từ đền Quả đến hạ thủy ở sông Lam. Tương truyền, dân ở đây đua thuyền để tỏ lòng biết ơn công đức của Hoàng tử Uy Minh Vương, con trai thứ tám của vua Lý Thái Tổ.',//Chi tiết
    url1:'duathuyen/duathuyen1.jpg',//ảnh 4:3 
    url2:'duathuyen/duathuyen2.jpg',//ảnh 4:3 
    url3:'duathuyen/duathuyen3.jpg',//ảnh 4:3 
    url4:'duathuyen/duathuyen4.jpg',//ảnh độ phân giải trên 1920
    url5:'duathuyen/duathuyen5.jpg',//ảnh độ phân giải trên 1920
    url6:'duathuyen/duathuyen6',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Đền Hùng',
    timeStart:'2018/03/09',
    timeEnd:'2018/03/13',
    diadiem: 'Phú Thọ',
    kingdo:'21.3179784',
    vido:'104.8550264,10z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Hội mở từ ngày 9 đến 13 tháng Ba, chính hội vào ngày 10 tháng Ba âm lịch, có các nghi thức rước bánh chưng - bánh giầy tại đền Hùng (Hy Cương, Phong Châu, Phú Thọ). Từ trước chính hội, lễ hội đã diễn ra với những phong tục như đâm đuống (đánh trống đồng) của dân tộc Mường, hành hương tưởng niệm các vua Hùng và kết thúc vào ngày 10 tháng 3 âm lịch với lễ rước kiệu, dâng hương trên đền Thượng.Phần lễ trong ngày hội chính gồm 2 phần là: Lễ rước kiệu vua và lễ dâng hương. Phần hội có nhiều trò chơi dân gian đặc sắc. Đó là những cuộc thi hát xoan (tức hát ghẹo), thi đấu vật, thi kéo co, thi bơi,...',//Chi tiết
    url1:'denhung/denhung1.jpg',//ảnh 4:3 
    url2:'denhung/denhung2.jpg',//ảnh 4:3 
    url3:'denhung/denhung3.jpg',//ảnh 4:3 
    url4:'denhung/denhung4.jpg',//ảnh độ phân giải trên 1920
    url5:'denhung/denhung5.jpg',//ảnh độ phân giải trên 1920
    url6:'denhung/denhung6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Đua Bò',
    timeStart:'2018/08/29',
    timeEnd:'2018/09/01',
    diadiem: 'An Giang',
    kingdo:'10.572684',
    vido:'104.8952316,10z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội đua bò Bảy Núi ở Châu Đốc (An Giang) là phong tục truyền thống độc đáo của đồng bào dân tộc Khmer Nam Bộ, tổ chức từ 29/8 đến 1/9 Âm lịch, cùng dịp lễ hội Dolta. Những cuộc đua luôn diễn ra hấp dẫn và quyết liệt, thu hút hàng nghìn du khách mỗi năm, vừa giúp phát triển du lịch tỉnh An Giang, vừa giữ gìn được nét văn hóa đặc sắc vốn đã tồn tại từ lâu đời của người dân nơi đây'//Chi tiết
    url1:'duabo/duabo1.jpg',//ảnh 4:3 
    url2:'duabo/duabo2.jpg',//ảnh 4:3 
    url3:'duabo/duabo3.jpg',//ảnh 4:3 
    url4:'duabo/duabo4.jpg',//ảnh độ phân giải trên 1920
    url5:'duabo/duabo5.jpg',//ảnh độ phân giải trên 1920
    url6:'duabo/duabo6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Hoa Lư',
    timeStart:'2018/04/05',
    timeEnd:'2018/04/07',
    diadiem: 'Ninh Bình',
    kingdo:'20.1877591',
    vido:'105.5749518,10z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Thông qua các hoạt động của Lễ hội, góp phần bảo tồn và phát huy truyền thống lịch sử văn hóa của dân tộc; quảng bá tiềm năng thế mạnh du lịch, thu hút khách trong và ngoài nước về với Ninh Bình, góp phần đẩy mạnh phát triển kinh tế - xã hội của tỉnh.Lễ hội Hoa Lư năm nay được tổ chức trong 3 ngày, từ ngày 5-7/4/2017 (tức từ ngày mùng 9 tháng 3 đến ngày 11 tháng 3 năm Đinh Dậu). Riêng lễ mở cửa đền thực hiện ngày  4/4/2017 (tức ngày 8 tháng 3 Đinh Dậu), tại Khu di tích lịch sử - văn hóa Cố đô Hoa Lư.',//Chi tiết
    url1:'hoalu/hoalu1.jpg',//ảnh 4:3 
    url2:'hoalu/hoalu2.jpg',//ảnh 4:3 
    url3:'hoalu/hoalu3.jpg',//ảnh 4:3 
    url4:'hoalu/hoalu4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoalu/hoalu5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoalu/hoalu6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Hộ Lim',
    timeStart:'2018/01/12',
    timeEnd:'2018/01/15',
    diadiem: 'Bắc Ninh',
    kingdo:'21.1169292',
    vido:'105.9594136,11z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Hội Lim trở thành hội hàng tổng (hội vùng) vào thế kỷ 18. Khi quan trấn thủ xứ Thanh Hóa  Nguyễn Đình Diễn là người thôn Đình Cả, Nội Duệ, xứ Kinh Bắc, có nhiều công lao với triều đình, được phong thưởng nhiều bổng lộc, đã tự hiến nhiều ruộng vườn và tiền của cho tổng Nội Duệ trùng tu đình chùa, mở mang hội hè, gìn giữ thuần phong mỹ tục. ông còn cho xây dựng trước phần lăng mộ của mình đặt tên là lăng Hồng Vân trên núi Lim. Do có nhiều công lao với hàng tổng và việc ông đặt hậu ở chùa Hồng ân, nên khi ông mất nhân dân tổng Nội Duệ đã tôn thờ làm hậu thần, hậu Phật hàng tổng. ',//Chi tiết
    url1:'hoilim/hoilim1.jpg',//ảnh 4:3 
    url2:'hoilim/hoilim2.jpg',//ảnh 4:3 
    url3:'hoilim/hoilim3.jpg',//ảnh 4:3 
    url4:'hoilim/hoilim4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoilim/hoilim5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoilim/hoilim6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Hội Gióng',
    timeStart:'2018/04/08',
    timeEnd:'2018/04/09',
    diadiem: 'Sóc Sơn',
    kingdo:'21.2357416',
    vido:'105.7526642,12z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Việt Nam',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Trước ngày hội diễn ra, bảy thôn làng đại diện cho bảy xã chuẩn bị lễ vật trong ngày mở đầu hội chính. Nhưng nghi lễ đặc biệt sẽ được làm vào đêm mùng 5 đó là lễ Dục Vọng để mời ông Gióng về với các lễ vật, lễ phẩm đã được chuẩn bị chu đáo với lòng thành kính, mong đức Thánh Gióng phù hộ cho dân làng có một cuộc sống ấm no, hạnh phúc. Ngoài ra, trong hội còn có nhiều trò chơi dân gian sôi động như chọi gà, cờ tướng, hát ca trù, hát chèo… Ngày chính hội là mùng 6, ngày thánh hoá theo truyền thuyết. Ngày khai hội, dân làng và khách thập phương dâng hương, đúng nửa đêm có lễ khai quang - tắm cho pho tượng Thánh Gióng. Nghi lễ chủ yếu trong ngày chính hội là dâng hoa tre ở đền Sóc (thờ Thánh Gióng) và chém tướng giặc. Hoa tre được làm bằng những thanh tre dài khoảng 50 cm, đường kính khoảng 1 cm, đầu được vót thành xơ và nhuộm màu.',//Chi tiết
    url1:'hoigiong/hoigiong1.jpg',//ảnh 4:3 
    url2:'hoigiong/hoigiong2.jpg',//ảnh 4:3 
    url3:'hoigiong/hoigiong3.jpg',//ảnh 4:3 
    url4:'hoigiong/hoigiong4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoigiong/hoigiong5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoigiong/hoigiong6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Hội Đấu Vật',
    timeStart:'2018/01/18',
    timeEnd:'2018/01/19',
    diadiem: 'Côn Sơn',
    kingdo:'21.236296',
    vido:'105.5425098,10z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ 105.5425098,10zHồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Đấu vật là môn thể thao tác chiến giữa hai đối thủ cố gắng kềm chế đối phương bằng cách nắm, kéo, vặn, đè, v.v... nhưng không được trực tiếp đấm hay đá. Tùy theo luật lệ của từng địa phương, bàn thắng về tay người dự giải nào chiếm được nhiều ưu điểm: bằng các đè ngửa đối phương, hoặc đối phương chịu thua hay bị đẩy ra ngoài vòng thi đấu. Những vận động viên tham gia môn thể thao này được gọi là các đô vật.Đấu vật là môn thể thao có lịch sử lâu đời, tồn tại ở nhiều quốc gia trên thế giới và có nhiều biến thể khác nhau.',//Chi tiết
    url1:'hoidauvat/dauvat1.jpg',//ảnh 4:3 
    url2:'hoidauvat/dauvat2.jpg',//ảnh 4:3 
    url3:'hoidauvat/dauvat3.jpg',//ảnh 4:3 
    url4:'hoidauvat/dauvat4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoidauvat/dauvat5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoidauvat/dauvat6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Lễ Vía Bà',
    timeStart:'2018/04/24',
    timeEnd:'2018/04/27',
    diadiem: 'An giang',
    kingdo:'10.572684',
    vido:'104.8952316,10z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội miếu Bà Chúa Xứ ở xứ Châu Đốc, An Giang. Miếu Bà Chúa Xứ là một công trình kiến trúc linh thiêng tọa lạc dưới chân núi Sam. Di tích này không chỉ nổi tiếng khắp vùng đồng bằng sông Cửu Long mà còn khắp mọi miền đất nước về độ linh thiêng thần bí. Chính vì vậy, hàng năm rất nhiều khách hàng hương về đây khấn vái cầu mong một năm an ành, làm ăn xuôi chèo mát mái.Lễ hội miếu Bà Chúa Xứ hay còn gọi là lễ Vía Bà được tổ chức hàng năm bắt đầu từ ngày 24 đến 27-4. Trong thời gian diễn ra lễ chính này, An Giang đón khoảng 2.5 triệu lượt du khách hành hương về dự lễ.',//Chi tiết
    url1:'hoiviaba/viaba1.jpg',//ảnh 4:3 
    url2:'hoiviaba/viaba2.jpg',//ảnh 4:3 
    url3:'hoiviaba/viaba3.jpg',//ảnh 4:3 
    url4:'hoiviaba/viaba4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoiviaba/viaba5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoiviaba/viaba6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920

    nameLeHoi: 'Hội Yên Tử',
    timeStart:'2018/01/01',
    timeEnd:'2018/01/31',
    diadiem: 'Hà Nội',
    kingdo:'21.1520211',
    vido:'106.7132119,9z',
    lucdia:'Việt Nam',//Việt Nam, Châu Á, Châu Âu, Châu Mỹ, Châu Phi, Châu Úc
    ton giao:'Không',//Không, Đạo Phật, Đâọ Hồi, Đạo Thiên Chúa, Đâọ Hindu
    chitiet:'Lễ hội Yên Tử bắt đầu từ ngày 10 tháng Giêng và kéo dài suốt mùa xuân. Ca dao xưa có câu: "Trăm năm tích đức tu hành/Chưa đi Yên Tử, chưa thành quả tu". Vì vậy, hàng năm, lễ hội lớn nhất Việt Nam này đón khoảng 1,5 triệu lượt du khách về dự. Hành hương về Yên Tử, bạn như có một cuộc hành trình về đất Phật. Bạn sẽ được vãn cảnh chùa, am gắn liền với biết bao câu chuyện huyền thoại, được lễ Phật và nghe giảng kinh giúp tâm hồn thanh thản, an nhiên.',//Chi tiết
    url1:'hoiyentu/yentu1.jpg',//ảnh 4:3 
    url2:'hoiyentu/yentu2.jpg',//ảnh 4:3 
    url3:'hoiyentu/yentu3.jpg',//ảnh 4:3 
    url4:'hoiyentu/yentu4.jpg',//ảnh độ phân giải trên 1920
    url5:'hoiyentu/yentu5.jpg',//ảnh độ phân giải trên 1920
    url6:'hoiyentu/yentu6.jpg',//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
    
},
];