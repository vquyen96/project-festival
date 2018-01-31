"use strict";
var app = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);
app.controller('ctrlMenu', function($scope, $http){
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
            if (response != null) {
                $scope.avaUrl = response.data.avaUrl;
            }
            else{
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
});
app.controller('ctrlListUser', function($scope, $http){
    var countName = 1;
    var countEmail = 1;
    var countLevel = 1;
    var countBirthDay = 1;
    var tokenKey = localStorage.getItem("tokenKey");
    getList('none', 'n');
    function getList(value, rev, page){
        var limit = 8;
        if (page == null) {
            page = 1;
        }
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users?page="+page+"&limit="+limit,
        }).then(function mySuccess(response) {
            console.log(response);
            var totalPage = response.data.totalPage;
            $scope.currentPage = page;
            $scope.totalItems  = totalPage*limit;
            if (value == 'none') {
                $scope.listUser = response.data.listUser;
            }
            else{
                var dataObj = response.data.listUser.slice(0);
                dataObj.sort(function(a,b) {
                    if (value == 'username') {
                        var x = a.username.toLowerCase();
                        var y = b.username.toLowerCase();
                        return x < y ? -1 : x > y ? 1 : 0;
                    }
                    if (value == 'email') {
                        var x = a.email.toLowerCase();
                        var y = b.email.toLowerCase(); 
                        return x < y ? -1 : x > y ? 1 : 0; 
                    }
                    if (value == 'level') {
                        return a.level - b.level;
                    }
                    if (value == 'birthday') {
                        return a.birthday - b.birthday;
                    }
                });
                if (rev == 'y') {
                    $scope.listUser = dataObj.reverse();
                }else{
                    $scope.listUser = dataObj;
                }
            }
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    $scope.setPage = function (pageNo) {
        getList('username', 'n', pageNo);
        $scope.currentPage = pageNo;
    };
    $scope.btnSortName = function(currentPage){
        if(countName % 2){
            getList('username', 'n', currentPage);
        }
        else{
            getList('username', 'y', currentPage);
        }
        countName++;
    }
    $scope.btnSortEmail = function(currentPage){
        if(countEmail % 2){
            getList('email', 'n', currentPage);
        }
        else{
            getList('email', 'y', currentPage);
        }
        countEmail++;
    }
    $scope.btnSortLevel = function(currentPage){
        if(countLevel % 2){
            getList('level', 'n', currentPage);
        }
        else{
            getList('level', 'y', currentPage);
        }
        countLevel++;
    }
    $scope.btnSortBirthDay = function(currentPage){
        if(countBirthDay % 2){
            getList('birthday', 'n', currentPage);
        }
        else{
            getList('birthday', 'y', currentPage);
        }
        countBirthDay++;
    }
    $scope.btnAddUser = function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addUser";
    }    
    $scope.btnEdit = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
        window.location.href = "index.html#!/addUser";
    }
    $scope.btnDelete = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa thành viên" +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/users/"+id,
            }).then(function mySuccess(response) {
                console.log(response);
                getList();
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }

});
app.controller('ctrlAddUser', function($scope, $http){
    //lấy dữ liệu từ hidden input
    var typeAdd = $('#userid').attr('name');
    var editID = $('#userid').val();
    var tokenKey = localStorage.getItem("tokenKey");
    //nếu hidden input đúng dữ liệu
    console.log(editID);
    console.log(typeAdd);
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
                // $('#username').val(response.data.username);
                // $('#email').val(response.data.email);
                // $('#birthday').val(response.data.birthday);
                $('#level').val(response.data.level);
                // $('#avaUrl').val(response.data.avaUrl);
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        $('#password').attr('style','display:none;');
        $('#btnPass').attr('style','display:block;');
        $scope.btnPass = function(){
            $scope.user.password = "";
            $('#btnPass').attr('style','display:none;');
            $('#password').attr('style','display:block;');
        }
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
    var countName = 1;
    var countPlace = 1;
    var countLucDia = 1;
    var countTonGiao = 1;
    var countTimeStart = 1;

    getList('none','n','1');
    function getList(value, rev, page){
        var limit = 10
        if(page == null){
            page=1;
        }
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals?page="+page+"&limit="+limit,
        }).then(function mySuccess(response) {
            var content = '';
            var totalPage = response.data.totalPage;
            $scope.currentPage = page;
            $scope.totalItems  = totalPage*limit;
            console.log(response);
            if (value == 'none') {
                $scope.listUser = response.data.listFestival;
            }
            else{
                var dataObj = response.data.listFestival.slice(0);
                dataObj.sort(function(a,b) {
                    switch(value){
                        case 'name': {
                            var x = a.nameLeHoi.toLowerCase();
                            var y = b.nameLeHoi.toLowerCase();
                            return x < y ? -1 : x > y ? 1 : 0;
                        }
                        break;
                        case 'place': {
                            var x = a.diadiem.toLowerCase();
                            var y = b.diadiem.toLowerCase();
                            return x < y ? -1 : x > y ? 1 : 0;
                        }
                        break;
                        case 'lucdia': {
                            var x = a.lucdia.toLowerCase();
                            var y = b.lucdia.toLowerCase();
                            return x < y ? -1 : x > y ? 1 : 0;
                        }
                        break;
                        case 'tongiao': {
                            var x = a.tongiao.toLowerCase();
                            var y = b.tongiao.toLowerCase();
                            return x < y ? -1 : x > y ? 1 : 0;
                        }
                        break;
                        case 'timeStart': {
                            return a.timeStart - b.timeStart;
                        }
                        break;
                    }
                });
                if (rev == 'y') {
                    $scope.listUser = dataObj.reverse();
                }else{
                    $scope.listUser = dataObj;
                }
            }
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    $scope.btnSortName = function(currentPage){
        if (countName % 2) {
            getList('name','n', currentPage);
        }
        else{
            getList('name','y', currentPage);
        } 
        countName++;   
    }
    $scope.btnSortPlace = function(currentPage){
        if (countPlace % 2) {
            getList('place','n', currentPage);
        }
        else{
            getList('place','y', currentPage);
        }  
        countPlace++;
    }
    $scope.btnSortLucDia = function(currentPage){
        if (countLucDia % 2) {
            getList('lucdia','n', currentPage);
        }
        else{
            getList('lucdia','y', currentPage);
        }  
        countLucDia++;  
    }
    $scope.btnSortTonGiao = function(currentPage){
        if (countTonGiao % 2) {
            getList('tongiao','n', currentPage);
        }
        else{
            getList('tongiao','y', currentPage);
        }
        countTonGiao++;    
    }
    // $scope.btnSortTimeStart = function(currentPage){

    //     if (countTimeStart % 2) {
    //         getList('timeStart','n', currentPage);
    //     }
    //     else{
    //         getList('timeStart','y', currentPage);
    //     }
    //     countTimeStart++;    
    // }
    $scope.setPage = function (pageNo) {
        getList('username', 'n', pageNo);
        $scope.currentPage = pageNo;
    };
    
    $scope.btnAddUser = function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addLeHoi";
    }    
    $scope.btnEdit = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
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
    var typeAdd = $('#userid').attr('name');
    var editID = $('#userid').val();
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
                // $('#nameLeHoi').val(response.data.nameLeHoi);
                // $('#timeStart').val(response.data.timeStart);
                // $('#timeEnd').val(response.data.timeEnd);
                // $('#diadiem').val(response.data.diadiem);
                // $('#kinhdo').val(response.data.kinhdo);
                // $('#vido').val(response.data.vido);
                // $('#chitiet').val(response.data.chitiet);
                // $('#url1').val(response.data.url1);
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

// app.controller('ctrlListComment', function($scope, $http){
//     function listComment(){
//        $http({
//             method : "GET",
//             url : "http://localhost:3000/api/comments",
//         }).then(function mySuccess(response) {
//             $scope.listData = response.data;
//             // var listData = response.data;
//             // var listLeHoi = {};
//             // var i, arrlehoiName = [], arrlehoiID = [] ;
//             // //gán mảnng
//             // for ( i = 0; i< listData.length; i++){
//             //     arrlehoiName[i] = listData[i].lehoiName;
//             //     arrlehoiID[i] = listData[i].lehoiID;
//             // }
            
//             // var lenlehoiName = arrlehoiName.length,
//             //     outlehoiName = [],
//             //     objlehoiName = { },
//             //     lenlehoiID = arrlehoiID.length,
//             //     outlehoiID = [],
//             //     objlehoiID = { };
//             // //lọc mảng lehoiName
//             // for (i = 0; i < lenlehoiName; i++) {
//             //     objlehoiName[arrlehoiName[i]] = 0;
//             // }
//             // for (i in objlehoiName) {
//             //     outlehoiName.push(i);
//             // }
            
//             // //lọc mảng lehoiID
//             // for (i = 0; i < lenlehoiID; i++) {
//             //     objlehoiID[arrlehoiID[i]] = 0;
//             // }
//             // for (i in objlehoiID) {
//             //     outlehoiID.push(i);
//             // }
//             // // $scope.listLeHoi = outlehoiName;
//             // // $scope.listLeHoi.ID = outlehoiID;
//             // var content = "";
//             // for(i = 0; i < outlehoiID.length; i++){
//             //     content += "<div><div>"+outlehoiName[i]+"</div><div><div>"
//             //     $http({
//             //         method : "GET",
//             //         url : "http://localhost:3000/api/comments/"+outlehoiID[i],
//             //     }).then(function mySuccess(response) {
//             //         console.log(response.data.length);
//             //         for(var j = 0; j < response.data.length; j++){
//             //             content += "<a>"+response.data[j].userName+"</a>"+response.data[j].content+"</div></div></div>";
//             //         }
//             //         console.log(content);
//             //         // $scope.listComment = response.data;
//             //     }, function myError(response) {
//             //         console.log(response.statusText);
//             //     });
//             // }
//             // console.log(content);
//             // $('#content').html(content);
//             // console.log(outlehoiName);
//             // console.log(outlehoiID);
//         }, function myError(response) {
//             console.log(response);
//         }); 
//     }
//     listComment();
// });
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
    .when("/contact", {
        templateUrl : "chucnang/contact.html"
    })
});
