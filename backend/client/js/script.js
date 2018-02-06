
var app = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);
app.controller('ctrlMenu', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    var ownerId = localStorage.getItem("ownerId");
    var tokenKey = localStorage.getItem("tokenKey");
    var level = localStorage.getItem("level");
    if(ownerId != null && tokenKey != null && level != 1){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users/"+ownerId,
            headers: {
                "Authorization": tokenKey
            }
        }).then(function mySuccess(response) {
            console.log(response);
            if (response.data != null && response.data != undefined && response.data != '') {
                $scope.user = response.data;
            }
            else{
                alert('Bạn chưa đăng nhập');
                localStorage.removeItem("ownerId");
                localStorage.removeItem("tokenKey");
                localStorage.removeItem("level"); 
                window.location.href = "../../fontend/index.html";
            }
        }, function myError(response) {
            console.log(response);
            alert(response.data);
            window.location.href = "../../fontend/index.html";
        });
    }
    else{
        alert('Bạn không có quyền vào đây');
        window.location.href = "../../fontend/index.html";
    }
    $scope.btnFontEnd = function(){
        window.location.href = "../../fontend/index.html";
    }
    $scope.logOut = function(){
        localStorage.removeItem("ownerId");
        localStorage.removeItem("tokenKey");
        localStorage.removeItem("level");
        window.location.href = "../../fontend/index.html";
    }
    $scope.btnHeaderBar = function(){
        $('.dropmenu').slideToggle();
    }
    $scope.btnEdit = function(id){
        localStorage.setItem("editId", id);
        localStorage.setItem("type", 'edit');
       
        window.location.href = "index.html#!/addUser";
    }
});
app.controller('ctrlListUser', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    var ownerId = localStorage.getItem("ownerId");
    var limit = 8,
        page= 1;
    $scope.perPage = 10;
    $scope.currentPage = 1;
    var tokenKey = localStorage.getItem("tokenKey");
    getList();
    function getList(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users?page="+page+"&limit="+limit,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.totalItems  = response.data.length;
            $scope.listUser = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.btnSortName = function(currentPage){
        $scope.listUserSort = 'username';
    }
    $scope.btnSortEmail = function(currentPage){
        $scope.listUserSort = 'email';
    }
    $scope.btnSortLevel = function(currentPage){
        $scope.listUserSort = 'level';
    }
    $scope.btnSortBirthDay = function(currentPage){
        $scope.listUserSort = 'birthday';
    }
    $scope.btnAddUser = function(){
        localStorage.setItem("type", "add");
        window.location.href = "index.html#!/addUser";
    }    
    $scope.btnEdit = function(id){
        localStorage.setItem("editId", id);
        localStorage.setItem("type", 'edit');
        window.location.href = "index.html#!/addUser";
    }
    $scope.btnDelete = function(id ,name){
        if(id == ownerId){
            alert('Bạn không được phép xóa chính mình');
        }
        else{
            var r = confirm("Bạn chắc chắn muốn xóa thành viên" +  name);
            if (r == true) {
                $http({
                    method : "DELETE",
                    url : "http://localhost:3000/api/users/"+id,
                }).then(function mySuccess(response) {
                    console.log(response);
                    window.location.href = "index.html";
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }
        
    }

});
app.controller('ctrlAddUser', function($scope, $http){
    //lấy dữ liệu từ hidden input
    var typeAdd = localStorage.getItem("type");
    var editID = localStorage.getItem("editId");
    var tokenKey = localStorage.getItem("tokenKey");
    //nếu hidden input đúng dữ liệu
    
    if (typeAdd == 'edit') {
        //điền dữ liệu vào input
        function getDetail(){
            $http({
                method : "GET",
                url : "http://localhost:3000/api/users/"+editID,
                headers: {
                    "Authorization": tokenKey
                }
            }).then(function mySuccess(response) {
                console.log(response);
                $scope.user = response.data;
                $scope.user.birthday = new Date(response.data.birthday) ;
                $scope.user.password = "";
                $('#level').val(response.data.level);
                // $('#avaUrl').val(response.data.avaUrl);
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        // $('#password').attr('style','display:none;');
        // $('#btnPass').attr('style','display:block;');
        // $scope.btnPass = function(){
        //     $scope.user.password = "";
        //     $('#btnPass').attr('style','display:none;');
        //     $('#password').attr('style','display:block;');
        // }
        //Khi click nút sửa
        $scope.btnAdd = function() {
            
            console.log($scope.user);
            $http({
                method : "PUT",
                url : "http://localhost:3000/api/users/"+editID,
                data : $scope.user
            }).then(function mySuccess(response) {
                console.log(response);
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });
        };
        getDetail();
    }
    else{
        $scope.user = {
            level: '1'
        };
        $scope.btnAdd = function() {
            console.log($scope.user);
            var day = $scope.user.birthday.getTime();
            var today = new Date();
            today=today.getTime();
            if(today>day){
                  $http({
                    method : "POST",
                    url : "http://localhost:3000/api/users",
                    data : $scope.user
                }).then(function mySuccess(response) {
                    console.log(response);
                    //Thông báo khi thành công
                    $('.alert-success').text('Thành Công');
                    $('.alert-success').attr('style','display : inline-block');
                    //Xóa thông báo sau 3s
                    setTimeout(function(){
                        $('.alert-success').attr('style','display : none');
                    },3000);
                    //Xóa các trường input khi thành công
                    $scope.user.username = "";
                    $scope.user.password = "";
                    $scope.user.email = "";
                    $scope.user.birthday = "";
                    $scope.user.level = "1";
                    $scope.user.avaUrl = "";
                }, function myError(response) {
                    console.log(response);
                    //Thông báo khi có lỗi                      
                    $('.alert-danger').text(response.data);
                    $('.alert-danger').attr('style','display : inline-block');
                    //Xóa thông báo sau 3s
                    setTimeout(function(){
                        $('.alert-danger').attr('style','display : none');
                    },3000);
                });     
 
            }
            else{
                alert("Bạn không được chon ngày tương lai !");
            }   

        };
    }
       
});

app.controller('ctrlListDanhmuc', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    function getListLucdia(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/lucdia",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listLucDia = response.data;
            
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getListLucdia();
    $scope.btnAddLucDia = function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addLucDia";
    }    
    $scope.btnEditLucDia = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
        window.location.href = "index.html#!/addLucDia";
    }
    $scope.btnDeleteLucDia = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa Lục Địa : " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/lucdia/"+id,
            }).then(function mySuccess(response) {
                
                getListLucdia();
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }
    
    function getListTongiao(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/tongiao",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listTonGiao = response.data;
            
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getListTongiao();
    $scope.btnAddTonGiao= function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addTonGiao";
    }    
    $scope.btnEditTonGiao = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
        window.location.href = "index.html#!/addTonGiao";
    }
    $scope.btnDeleteTonGiao = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa Tôn Giáo : " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/tongiao/"+id,
            }).then(function mySuccess(response) {
                
                getListTongiao();
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }
});

app.controller('ctrlAddLucDia', function($scope, $http){
    //lấy dữ liệu từ hidden input
    var typeAdd = $('#userid').attr('name');
    var editID = $('#userid').val();
    //nếu hidden input đúng dữ liệu
    if (typeAdd == 'edit') {
        //điền dữ liệu vào input
        function getDetail(){
            $http({
                method : "GET",
                url : "http://localhost:3000/api/lucdia/"+editID,
            }).then(function mySuccess(response) {
                $scope.data = response.data;
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        //Khi click nút sửa
        $scope.btnAdd = function() {
            $scope.data = {
                "nameLucDia": $('#nameLucDia').val()
            };
            
            $http({
                method : "PUT",
                url : "http://localhost:3000/api/lucdia/"+editID,
                data : $scope.data
            }).then(function mySuccess(response) {
                
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });
        };
        getDetail();
    }
    else{
        $scope.btnAdd = function() {
            $scope.data = {
                "nameLucDia": $('#nameLucDia').val()
            };
            $http({
                method : "POST",
                url : "http://localhost:3000/api/lucdia",
                data : $scope.data
            }).then(function mySuccess(response) {
                console.log(response);
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
                $scope.data.nameLucDia = "";
                
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });

        };
    }
});

app.controller('ctrlAddTonGiao', function($scope, $http){
    //lấy dữ liệu từ hidden input
    var typeAdd = $('#userid').attr('name');
    var editID = $('#userid').val();
    //nếu hidden input đúng dữ liệu
    if (typeAdd == 'edit') {
        //điền dữ liệu vào input
        function getDetail(){
            $http({
                method : "GET",
                url : "http://localhost:3000/api/tongiao/"+editID,
            }).then(function mySuccess(response) {
                $scope.data = response.data;
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        //Khi click nút sửa
        $scope.btnAdd = function() {
            $http({
                method : "PUT",
                url : "http://localhost:3000/api/tongiao/"+editID,
                data : $scope.data
            }).then(function mySuccess(response) {     
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });
        };
        getDetail();
    }
    else{
        $scope.btnAdd = function() {
            $scope.data = {
                "nameTonGiao": $('#nameTonGiao').val()
            };
            $http({
                method : "POST",
                url : "http://localhost:3000/api/tongiao",
                data : $scope.data
            }).then(function mySuccess(response) {
                console.log(response);
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
                $scope.data.nameLucDia = "";
                
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });

        };
    }
});
app.controller('ctrlListLeHoi', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    $scope.perPage = 10;
    $scope.currentPage = 1;
    $scope.listLeHoiRun = function(perPage){
        limit = perPage;
        getList('1');
    }
    getList('1');
    function getList(page){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listUser = response.data;
            $scope.totalItems  = response.data.length;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    $scope.btnSortName = function(currentPage){
       $scope.listUserSort = 'nameLeHoi';
    }
    $scope.btnSortPlace = function(currentPage){
        $scope.listUserSort = 'diadiem';
    }
    $scope.btnSortLucDia = function(currentPage){
        $scope.listUserSort = 'lucdia';
    }
    $scope.btnSortTonGiao = function(currentPage){
        $scope.listUserSort = 'tongiao';   
    }
    $scope.btnSortTimeStart = function(currentPage){

        $scope.listUserSort = 'timeStart';   
    }
    $scope.setPage = function (pageNo) {
        getList(pageNo);
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };
    $scope.btnAddUser = function(){
        localStorage.setItem("type", 'add');
        window.location.href = "index.html#!/addLeHoi";
    } 
    $scope.btnEdit = function(id){
        localStorage.setItem("editId", id);
        localStorage.setItem("type", 'edit');
        window.location.href = "index.html#!/addLeHoi";
    }   
    $scope.btnDelete = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa Lế Hội " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/festivals/"+id,
            }).then(function mySuccess(response) {
                
                getList();
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }
});
app.controller('ctrlAddLeHoi', function($scope, $http){
    //lấy dữ liệu từ hidden input
    var typeAdd = localStorage.getItem("type");
    var editID = localStorage.getItem("editId");
    //nếu hidden input đúng dữ liệu
    if (typeAdd == 'edit') {
        //điền dữ liệu vào input
        function getDetail(){
            $http({
                method : "GET",
                url : "http://localhost:3000/api/festivals/"+editID,
            }).then(function mySuccess(response) {
                console.log(response);
                $scope.festival = response.data;
                $scope.festival.timeStart = new Date(response.data.timeStart) ;
                $scope.festival.timeEnd = new Date(response.data.timeEnd) ;
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        //Khi click nút sửa
        $scope.btnAdd = function() {
            // $scope.festival = {
            //     "nameLeHoi": $('#nameLeHoi').val(),
            //     "timeStart": $('#timeStart').val(),
            //     "timeEnd": $('#timeEnd').val(),
            //     "diadiem": $('#diadiem').val(),
            //     "kinhdo": $('#kinhdo').val(),
            //     "vido": $('#vido').val(),
            //     "lucdia": $('#lucdia').val(),
            //     "tongiao": $('#tongiao').val(),
            //     "chitiet": $('#chitiet').val()
            // };
            
            $http({
                method : "PUT",
                url : "http://localhost:3000/api/festivals/"+editID,
                data : $scope.festival
            }).then(function mySuccess(response) {
                
                //Thông báo khi thành công
                $('.alert-success').text('Thành Công');
                $('.alert-success').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-success').attr('style','display : none');
                },3000);
                //Xóa các trường input khi thành công
            }, function myError(response) {
                console.log(response);
                //Thông báo khi có lỗi                      
                $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                $('.alert-danger').attr('style','display : inline-block');
                //Xóa thông báo sau 3s
                setTimeout(function(){
                    $('.alert-danger').attr('style','display : none');
                },3000);
            });
        };
        getDetail();
    }
    else{
        $scope.festival = {
            lucdia : 'Việt Nam',
            tongiao: 'Không'
        };
        $scope.btnAdd = function() {
            var daystart = $scope.festival.timeStart.getTime();
            var dayend = $scope.festival.timeEnd.getTime();
            var today = new Date();
            today = today.getTime;
            if (timeStart>today && timeStart<timeEnd) {
                $http({
                    method : "POST",
                    url : "http://localhost:3000/api/festivals",
                    data : $scope.festival
                }).then(function mySuccess(response) {
                    console.log(response);
                    //Thông báo khi thành công
                    $('.alert-success').text('Thành Công');
                    $('.alert-success').attr('style','display : inline-block');
                    //Xóa thông báo sau 3s
                    setTimeout(function(){
                        $('.alert-success').attr('style','display : none');
                    },3000);
                    //Xóa các trường input khi thành công
                    $scope.festival = "";
                    // $scope.festival.timeStart = "";
                    // $scope.festival.timeEnd = "";
                    // $scope.festival.diadiem = "";
                    // $scope.festival.kinhdo = "1";
                    // $scope.festival.vido = "1";
                    // $scope.festival.lucdia = "1";
                    // $scope.festival.tongiao = "1";
                    // $scope.festival.chitiet = "1";
                }, function myError(response) {
                    console.log(response);
                    //Thông báo khi có lỗi                      
                    $('.alert-danger').text(response.data.errors[0].title + " " + response.data.errors[0].detail);
                    $('.alert-danger').attr('style','display : inline-block');
                    //Xóa thông báo sau 3s
                    setTimeout(function(){
                        $('.alert-danger').attr('style','display : none');
                    },3000);
                });
            }
        else{
            alert("Sự kiện không hợp lệ !");
        }


        };
    }    
});
app.controller('ctrlListFeedBack', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    $scope.currentPage = 1;
    $scope.perPage = 10;
    getList();
    function getList(){
        
        $http({
            method : "GET",
            url : "http://localhost:3000/api/feedback",
        }).then(function mySuccess(response) {
            $scope.listFeedBack = response.data;
            $scope.totalItems  = response.data.length;
            console.log(response);
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    $scope.btnSortName = function(currentPage){
        $scope.listFeedbackSort = 'username';
    }
    $scope.btnSortEmail = function(currentPage){
        $scope.listFeedbackSort = 'email';
    }
    $scope.btnSortCreatedAt = function(currentPage){
        $scope.listFeedbackSort = 'createdAt';
    }
    $scope.btnSortTitle = function(currentPage){
        $scope.listFeedbackSort = 'title';
    }
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.btnDelFeedBack = function(id, name){
        var r = confirm("Bạn chắc chắn muốn xóa góp ý của " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/feedback/"+id,
            }).then(function mySuccess(response) {
                console.log(response);
                window.location.href = "index.html#!/listFeedBack";
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }
    $scope.btnDelUser = function(userid, name, _id){
        var r = confirm("Bạn chắc chắn muốn xóa tài khoản : " +  name);
        if (r == true) {
            

            $http({
                method : "GET",
                url : "http://localhost:3000/api/feedback/"+userid,
            }).then(function mySuccess(response) {
                for(var i = 0 ; i < response.data.length; i++){
                    alert(response.data[i]._id);
                    $http({
                        method : "DELETE",
                        url : "http://localhost:3000/api/feedback/"+response.data[i]._id,
                    }).then(function mySuccess(response) {
                        console.log(response);
                    }, function myError(response) {
                        console.log(response.statusText);
                    });
                }
            }, function myError(response) {
                console.log(response.statusText);
            });

            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/users/"+userid,
            }).then(function mySuccess(response) {
                console.log(response);
                window.location.href = "index.html#!/listFeedBack";
            }, function myError(response) {
                console.log(response.statusText);
            });

        }
    }
});

app.controller('ctrlListOrder', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500); 
    });
    $scope.currentPage = 1;
    $scope.perPage = 10;
    function getList(timeSta, timeEnd){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/order",
        }).then(function mySuccess(response) {
            var totalPricePage = 0 ;
            var orders = response.data;
            console.log(orders);
            var listOrder = [];
            var price = 0;
            for(var i = 0; i < orders.length; i++){
                var createdAt = orders[i].createdAt;
                createdAt = new Date(createdAt).getTime();
                if(createdAt > timeSta && createdAt < timeEnd){
                    listOrder.push(orders[i]);
                    if (orders[i].status == 0) {
                        totalPricePage += orders[i].totalPrice;
                    }  
                }
            }
            $scope.totalPricePage = totalPricePage;
            console.log(listOrder);
            $scope.totalItems  = listOrder.length;
            $scope.listData = listOrder;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    //
    $scope.setDate = '1';
    getDatePer();
    $scope.btnOrderDetail = function(order_id, orderfullName, ordertotalPrice, orderemail, orderphone, orderadress){
        $('#modalOrderDetail').modal();
        $scope.fullName = orderfullName;
        $scope.price = ordertotalPrice;
        $scope.email = orderemail;
        $scope.phone = orderphone;
        $scope.adress = orderadress;
        $http({
            method : "GET",
            url : "http://localhost:3000/api/orderdetail/"+order_id,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.orderDetail = response.data;
        }, function myError(response) {
            console.log(response.data);
        });
    }
    $scope.btnDone = function(fullName, id, status){
        if (status == 1) {
            var r = confirm("Bạn sẽ nhận đơn hàng của " +  name);
            if (r == true) {
                $http({
                    method : "PUT",
                    url : "http://localhost:3000/api/order/"+id,
                    data: {
                        "status" : status
                    }
                }).then(function mySuccess(response) {
                    console.log(response);
                    
                    getList(1);
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }
        else if(status == 0){
            var r = confirm("Bạn chắc chắn đã làm việc xong với " +  name);
            if (r == true) {
                $http({
                    method : "PUT",
                    url : "http://localhost:3000/api/order/"+id,
                    data: {
                        "status" : status
                    }
                }).then(function mySuccess(response) {
                    console.log(response);
                    
                    getList(1);
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }
        else{
            var r = confirm("Bạn chắc chắn không còn vé cho " +  name);
            if (r == true) {
               $http({
                    method : "PUT",
                    url : "http://localhost:3000/api/order/"+id,
                    data: {
                        "status" : status
                    }
                }).then(function mySuccess(response) {
                    console.log(response);
                    getList(1);
                }, function myError(response) {
                    console.log(response.statusText);
                }); 
            }
        }
    }
    $scope.offModal = function(){
        $('#modalOrderDetail').modal('hide');
    }
    function getDatePer(){
        switch($scope.setDate){
            case '1': {
                $scope.timeEn = new Date();
                $scope.timeEn.setHours(0);
                var timeEnd = $scope.timeEn.getTime() + 86400000;
                $scope.timeSt = new Date(timeEnd - 86400000*3);
                var timeSta = $scope.timeSt.getTime();    
            }
            break;
            case '2': {
                $scope.timeEn = new Date();
                $scope.timeEn.setHours(0);
                var timeEnd = $scope.timeEn.getTime() + 86400000;
                $scope.timeSt = new Date(timeEnd - 86400000*7);
                var timeSta = $scope.timeSt.getTime();
            }
            break;
            case '3': {
                $scope.timeEn = new Date();
                $scope.timeEn.setHours(0);
                var timeEnd = $scope.timeEn.getTime() + 86400000;
                $scope.timeSt = new Date(timeEnd - 86400000*30);
                var timeSta = $scope.timeSt.getTime();
            }
            break;
            case '4': {
                $scope.timeEn = new Date();
                $scope.timeEn.setHours(0);
                var timeEnd = $scope.timeEn.getTime() + 86400000;
                $scope.timeSt = new Date(timeEnd - 86400000*365);
                var timeSta = $scope.timeSt.getTime();
            }
            break;
        }
        getList(timeSta,timeEnd);
    }
    $scope.getDate = function(){
        getDatePer();
    }
    $scope.btnTotalPrice = function(){
        var timeSta = $scope.timeSt.getTime();
        if ($scope.timeEn == null || $scope.timeEn == undefined)   {
            $scope.timeEn = new Date();
            $scope.timeEn.setHours(0);
        } 
        console.log($scope.timeEn);
        var timeEnd = $scope.timeEn.getTime() + 86400000;
        getList();
        
    }
});

app.controller('ctrlContact', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    function getContact(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/contact",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.contact = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getContact()
    $scope.btnEditContact = function(id){
        console.log($scope.contact);
        $http({
            method : "PUT",
            url : "http://localhost:3000/api/contact/"+id,
            data: $scope.contact
        }).then(function mySuccess(response) {
            console.log(response);
            
            getContact();
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "chucnang/listUser.html"
    })
    .when("/addUser", {
        templateUrl : "chucnang/addUser.html"
    })
    .when("/addLucDia", {
        templateUrl : "chucnang/addLucDia.html"
    })
    .when("/listDanhmuc", {
        templateUrl : "chucnang/listDanhmuc.html"
    })
    .when("/addTonGiao", {
        templateUrl : "chucnang/addTonGiao.html"
    })
    .when("/listLeHoi", {
        templateUrl : "chucnang/listLeHoi.html"
    })
    .when("/addLeHoi", {
        templateUrl : "chucnang/addLeHoi.html"
    })
    .when("/listFeedBack", {
        templateUrl : "chucnang/listFeedBack.html"
    })
    .when("/listOrder", {
        templateUrl : "chucnang/listOrder.html"
    })
    .when("/contact", {
        templateUrl : "chucnang/contact.html"
    })
});
