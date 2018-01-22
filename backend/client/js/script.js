var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlMenu', function($scope, $http){
    var ownerId = localStorage.getItem("ownerId");
    var tokenKey = localStorage.getItem("tokenKey");
    var level = localStorage.getItem("level");
    if(ownerId != null && tokenKey != null && level != 1){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users/"+ownerId,
        }).then(function mySuccess(response) {
            console.log(response);
            if (response != null) {
                alert('OK');
            }
            else{
                alert('not OK');
            }
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    if(level == 1){
        
    }
    else{

    }
    $scope.logOut = function(){
        localStorage.removeItem("ownerId");
        localStorage.removeItem("tokenKey");
        localStorage.removeItem("level");
    }
});
app.controller('ctrlListUser', function($scope, $http){
    var countName = 1;
    var countEmail = 1;
    var countLevel = 1;
    var countBirthDay = 1;
    function getList(value, rev){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users",
        }).then(function mySuccess(response) {
            
            if (value == 'none') {
                $scope.listUser = response.data;
            }
            else{
                var dataObj = response.data.slice(0);
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

                console.log('by name:');
                console.log(dataObj);
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
    $scope.btnSortName = function(){
        if(countName % 2){
            getList('username', 'n');
        }
        else{
            getList('username', 'y');
        }
        countName++;
    }
    $scope.btnSortEmail = function(){
        if(countEmail % 2){
            getList('email', 'n');
        }
        else{
            getList('email', 'y');
        }
        countEmail++;
    }
    $scope.btnSortLevel = function(){
        if(countLevel % 2){
            getList('level', 'n');
        }
        else{
            getList('level', 'y');
        }
        countLevel++;
    }
    $scope.btnSortBirthDay = function(){
        if(countBirthDay % 2){
            getList('birthday', 'n');
        }
        else{
            getList('birthday', 'y');
        }
        countBirthDay++;
    }
    getList('none', 'n');
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
    //nếu hidden input đúng dữ liệu
    if (typeAdd == 'edit') {
        //điền dữ liệu vào input
        function getDetail(){
            $http({
                method : "GET",
                url : "http://localhost:3000/api/users/"+editID,
            }).then(function mySuccess(response) {
                console.log(response);
                $('#username').val(response.data.username);
                $('#email').val(response.data.email);
                $('#birthday').val(response.data.birthday);
                $('#level').val(response.data.level);
                $('#avaUrl').val(response.data.avaUrl);
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        $('#password').attr('style','display:none;');
        $('#btnPass').attr('style','display:block;');
        $scope.btnPass = function(){
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
            console.log($scope.user);
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
app.controller('ctrlListLucDia', function($scope, $http){
    function getList(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/lucdia",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listData = response.data;
            
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getList();
    $scope.btnAdd = function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addLucDia";
    }    
    $scope.btnEdit = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
        window.location.href = "index.html#!/addLucDia";
    }
    $scope.btnDelete = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa Lục Địa : " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/lucdia/"+id,
            }).then(function mySuccess(response) {
                
                getList();
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
                
                $('#nameLucDia').val(response.data.nameLeHoi);
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
app.controller('ctrlListTonGiao', function($scope, $http){
    function getList(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/tongiao",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listData = response.data;
            
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getList();
    $scope.btnAdd = function(){
        $('#userid').attr('name','add');
        window.location.href = "index.html#!/addTonGiao";
    }    
    $scope.btnEdit = function(id){
        $('#userid').attr('value',id);
        $('#userid').attr('name','edit');
        window.location.href = "index.html#!/addTonGiao";
    }
    $scope.btnDelete = function(id ,name){
        var r = confirm("Bạn chắc chắn muốn xóa Tôn Giáo : " +  name);
        if (r == true) {
            $http({
                method : "DELETE",
                url : "http://localhost:3000/api/tongiao/"+id,
            }).then(function mySuccess(response) {
                
                getList();
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
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
                
                $('#nameTonGiao').val(response.data.nameLeHoi);
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        //Khi click nút sửa
        $scope.btnAdd = function() {
            $scope.data = {
                "nameTonGiao": $('#nameTonGiao').val()
            };
            
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
    function getList(value, rev){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals",
        }).then(function mySuccess(response) {
            if (value == 'none') {
                $scope.listUser = response.data;
            }
            else{
                var dataObj = response.data.slice(0);
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
                    }
                });
                console.log('by name:');
                console.log(dataObj);
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
    $scope.btnSortName = function(){
        if (countName % 2) {
            getList('name','n');
        }
        else{
            getList('name','y');
        } 
        countName++;   
    }
    $scope.btnSortPlace = function(){
        if (countPlace % 2) {
            getList('place','n');
        }
        else{
            getList('place','y');
        }  
        countPlace++;
    }
    $scope.btnSortLucDia = function(){
        if (countLucDia % 2) {
            getList('lucdia','n');
        }
        else{
            getList('lucdia','y');
        }  
        countLucDia++;  
    }
    $scope.btnSortTonGiao = function(){
        if (countTonGiao % 2) {
            getList('tongiao','n');
        }
        else{
            getList('tongiao','y');
        }
        countTonGiao++;    
    }
    getList('none','n');
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
                
                $('#nameLeHoi').val(response.data.nameLeHoi);
                $('#timeStart').val(response.data.timeStart);
                $('#timeEnd').val(response.data.timeEnd);
                $('#diadiem').val(response.data.diadiem);
                $('#kinhdo').val(response.data.kinhdo);
                $('#vido').val(response.data.vido);
                $('#btnSbm').val('Sửa Lại');
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
        getDetail();
        //Khi click nút sửa
        $scope.btnAdd = function() {
            $scope.festival = {
                "nameLeHoi": $('#nameLeHoi').val(),
                "timeStart": $('#timeStart').val(),
                "timeEnd": $('#timeEnd').val(),
                "diadiem": $('#diadiem').val(),
                "kinhdo": $('#kinhdo').val(),
                "vido": $('#vido').val(),
                "lucdia": $('#lucdia').val(),
                "tongiao": $('#tongiao').val(),
                "chitiet": $('#chitiet').val()
            };
            
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
            $scope.festival = {
                "nameLeHoi": $('#nameLeHoi').val(),
                "timeStart": $('#timeStart').val(),
                "timeEnd": $('#timeEnd').val(),
                "diadiem": $('#diadiem').val(),
                "kinhdo": $('#kinhdo').val(),
                "vido": $('#vido').val(),
                "lucdia": $('#lucdia').val(),
                "tongiao": $('#tongiao').val(),
                "chitiet": $('#chitiet').val()
            };
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
                $scope.festival.nameLeHoi = "";
                $scope.festival.timeStart = "";
                $scope.festival.timeEnd = "";
                $scope.festival.diadiem = "";
                $scope.festival.kinhdo = "1";
                $scope.festival.vido = "1";
                $scope.festival.lucdia = "1";
                $scope.festival.tongiao = "1";
                $scope.festival.chitiet = "1";
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
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "chucnang/listUser.html"
    })
    .when("/addUser", {
        templateUrl : "chucnang/addUser.html"
    })
    .when("/listLucDia", {
        templateUrl : "chucnang/listLucDia.html"
    })
    .when("/addLucDia", {
        templateUrl : "chucnang/addLucDia.html"
    })
    .when("/listTonGiao", {
        templateUrl : "chucnang/listTonGiao.html"
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
    .when("/user", {
        templateUrl : "chucnang/user.html"
    })
});
