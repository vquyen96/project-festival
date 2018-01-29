exports.add = function(req, resp){  
    var rawDocuments = [
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
    url1:'ramadan/ramadan1.jpg',//ảnh 4:3 
    url2:'ramadan/ramadan2.jpg',//ảnh 4:3 
    url3:'ramadan/ramadan3.jpg',//ảnh 4:3 
    url4:'ramadan/ramadan4.jpg',//ảnh độ phân giải trên 1920
    url5:'ramadan/ramadan5.jpg',//ảnh độ phân giải trên 1920
    url6:'ramadan/ramadan6.jpg'//ảnh độ phân giải trên 1920
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
    url1:'letesinh/letesinh1.jpg',//ảnh 4:3 
    url2:'letesinh/letesinh2.jpg',//ảnh 4:3 
    url3:'letesinh/letesinh3.jpg',//ảnh 4:3 
    url4:'letesinh/letesinh4.jpg',//ảnh độ phân giải trên 1920
    url5:'letesinh/letesinh5.jpg',//ảnh độ phân giải trên 1920
    url6:'letesinh/letesinh6.jpg'//ảnh độ phân giải trên 1920
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
    url1:'dieuhanh/dieuhanh1.jpg',//ảnh 4:3 
    url2:'dieuhanh/dieuhanh2.jpg',//ảnh 4:3 
    url3:'dieuhanh/dieuhanh3.jpg',//ảnh 4:3 
    url4:'dieuhanh/dieuhanh4.jpg',//ảnh độ phân giải trên 1920
    url5:'dieuhanh/dieuhanh5.jpg',//ảnh độ phân giải trên 1920
    url6:'dieuhanh/dieuhanh6.jpg'//ảnh độ phân giải trên 1920
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
    url1:'hinhnhan/hinhnhan1.jpg',//ảnh 4:3 
    url2:'hinhnhan/hinhnhan2.jpg',//ảnh 4:3 
    url3:'hinhnhan/hinhnhan3.jpg',//ảnh 4:3 
    url4:'hinhnhan/hinhnhan4.jpg',//ảnh độ phân giải trên 1920
    url5:'hinhnhan/hinhnhan5.jpg',//ảnh độ phân giải trên 1920
    url6:'hinhnhan/hinhnhan6.jpg'//ảnh độ phân giải trên 1920
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
    url1:'dieuhanh/dieuhanh1.jpg',//ảnh 4:3 
    url2:'dieuhanh/dieuhanh2.jpg',//ảnh 4:3 
    url3:'dieuhanh/dieuhanh3.jpg',//ảnh 4:3 
    url4:'dieuhanh/dieuhanh4.jpg',//ảnh độ phân giải trên 1920
    url5:'dieuhanh/dieuhanh5.jpg',//ảnh độ phân giải trên 1920
    url6:'dieuhanh/dieuhanh6.jpg'//ảnh độ phân giải trên 1920
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
    url1:'khinhkhicau/khinhkhicau1.jpg',//ảnh 4:3 
    url2:'khinhkhicau/khinhkhicau2.jpg',//ảnh 4:3 
    url3:'khinhkhicau/khinhkhicau3.jpg',//ảnh 4:3 khinhkhicau/khinhkhicau1.jpg
    url4:'khinhkhicau/khinhkhicau4.jpg',//ảnh độ phân giải trên 1920
    url5:'khinhkhicau/khinhkhicau5.jpg',//ảnh độ phân giải trên 1920
    url6:'khinhkhicau/khinhkhicau6.jpg'//ảnh độ phân giải trên 1920
    // có tất cả 6 ảnh : 3 ảnh là cỡ 4:3, 3 ảnh độ phân giải trên 1920
   }

 ];