"use strict";
var app = angular.module("myApp", ["ngRoute"]);

app.controller('ctrlHead', function($scope, $http){
    var ownerId = localStorage.getItem("ownerId");
    var tokenKey = localStorage.getItem("tokenKey");
    var level = localStorage.getItem("level");
    if (tokenKey != null && ownerId != null) {
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users/" + ownerId,
            headers: {
                "Authorization": tokenKey
            }
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.avaUrl = response.data.avaUrl;
            $scope.loggedInUsername = response.data.username;
            localStorage.setItem("ownerName", response.data.username);
            localStorage.setItem("ownerUrl", response.data.avaUrl);
            $scope.isLoggedIn = true;
        }, function myError(response) {
            $scope.isLoggedIn = false;
            console.log(response);
            alert(response.data);
        });

    }
    $scope.btnLogOut = function(){
        localStorage.removeItem("ownerId");
        localStorage.removeItem("tokenKey");
        localStorage.removeItem("level");
        window.location.href = "index.html";
    }
    
    $scope.btnHeaderBar = function(){
        $('nav').slideToggle();
    }

});
app.controller('ctrlbtnCart', function($scope, $http){
    var level = localStorage.getItem("level");
    //phan quyen` admin
    if (level == 2|| level == 3) {
        $('#btnChangeAdminimg').attr('src','imgs/logochange.png');

    }
    //phan quyen user
    else{
        $('#btnChangeAdminimg').attr('src','imgs/icon_cart.png');
        //lấy đơn hàng
        var cart = localStorage.getItem('cart');
        //nếu đơn hàng tồn tại
        if (cart != null && cart != undefined) {
            //chuyển sang json
            cart = JSON.parse(cart);
            //set giá trị
            $('.countCart').text(cart.products.length);
        } 
    }
    //Khi click nut cart = changeadmin
    $scope.btnChangeAdmin = function(){
        if(level == 2|| level == 3){
            window.location.href = "../backend/client/index.html";
        }
        else{
            window.location.href = "index.html#!/cart"; 
        }
    }
});
app.controller('ctrlNav', function($scope, $http){
    $scope.menuSearch = function(val){
        localStorage.setItem("find", val);
        window.open('index.html#!/search');
    }
    
    $scope.navItemDrop1 = function(){
        $('.navDrop1').slideToggle("slow");
    }
    $scope.navItemDrop2 = function(){
        $('.navDrop2').slideToggle("slow");
    }
});
app.controller('ctrlFooter', function($scope, $http){

});
app.controller('ctrlMain', function($scope, $http){

    function getListLeHoi(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals?page=1&limit=10",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listData = response.data.listFestival;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getListLeHoi();
    setInterval(function() { 
        $('.mainSlide2').fadeIn(1000);
        setTimeout(function(){
            $('.mainSlide2').fadeOut(1000);
        }, 4000);
        setTimeout(function(){
            $('.mainSlide3').fadeIn(1000);
        }, 4000);
        setTimeout(function(){
            $('.mainSlide3').fadeOut(1000);
        }, 9000);
    },  12000);

    setInterval(function() { 
        $('.mainSlide5').fadeIn(1000);
        setTimeout(function(){
            $('.mainSlide5').fadeOut(1000);
        }, 3000);
        setTimeout(function(){
            $('.mainSlide6').fadeIn(1000);
        }, 3000);
        setTimeout(function(){
            $('.mainSlide6').fadeOut(1000);
        }, 6000);
    },  8000);

    setInterval(function() { 
        $('.mainSlide8').fadeIn(1000);
        setTimeout(function(){
            $('.mainSlide8').fadeOut(1000);
        }, 5000);
        setTimeout(function(){
            $('.mainSlide9').fadeIn(1000);
        }, 5000);
        setTimeout(function(){
            $('.mainSlide9').fadeOut(1000);
        }, 10000);
    },  15000);
    $scope.detailPage = function(_id){
        localStorage.setItem("lehoiID", _id);
        window.location.href = "index.html#!/detail";
    }
});
app.controller('ctrlDetail', function($scope, $http){
    var idLeHoi = localStorage.getItem("lehoiID");
    function getDetailLeHoi(idLeHoi){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals/"+idLeHoi,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.data = response.data;
            $scope.url4 = response.data.url4;
            $scope.url5 = response.data.url5;
            $scope.url6 = response.data.url6;
            localStorage.setItem("kinhdo", response.data.kinhdo);
            localStorage.setItem("vido", response.data.vido);
            localStorage.setItem("lehoiName", response.data.nameLeHoi);
            localStorage.setItem("lehoiName", response.data.nameLeHoi);
            if (response.data.tongiao == 'Không') {
                switch(response.data.lucdia){
                    case 'Việt Nam':localStorage.setItem("find", 0);
                    break;
                    case 'Châu Á':localStorage.setItem("find", 1);
                    break;
                    case 'Châu Âu':localStorage.setItem("find", 2);
                    break;
                    case 'Châu Mỹ':localStorage.setItem("find", 3);
                    break;
                    case 'Châu Phi':localStorage.setItem("find", 4);
                    break;
                    case 'Châu Úc':localStorage.setItem("find", 5);
                    break;
                }
            }
            else{
                switch(response.data.tongiao){
                    case 'Đạo Phật':localStorage.setItem("find", 6);
                    break;
                    case 'Đạo Hồi':localStorage.setItem("find", 7);
                    break;
                    case 'Đạo Thiên Chúa':localStorage.setItem("find", 8);
                    break;
                    case 'Đạo Hindu':localStorage.setItem("find", 9);
                    break;
                }
            }

        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getDetailLeHoi(idLeHoi);
    $scope.btnAddToCart = function(productId, productName, productPrice, quantity){
        var cart = localStorage.getItem('cart');    
        if (cart == null){
            // Nếu chưa thì tạo mới giỏ hàng với products là danh sách các sản phẩm
            // kèm số lượng.
            if(quantity > 0){
                cart = {
                    'products': [
                        {
                            'id': productId,
                            'name': productName,
                            'price': productPrice,
                            'quantity': quantity
                        }
                    ]
                }   
            }                       
        } else{
            // Nếu đã tồn tại sản phẩm.
            // Parse thông tin giỏ hàng về json object.
            cart = JSON.parse(cart);
            // Kiểm tra sự tồn tại của trường products trong giỏ hàng.
            if(cart.products != undefined && cart.products != null){
                // Kiểm tra sự tồn tại của sản phầm trong giỏ hàng.
                var existsItem = false;
                for (var i = 0; i < cart.products.length; i++) {
                    // Nếu tồn tại sản phẩm.
                    if(cart.products[i].id == productId){
                        existsItem = true;
                        // tăng số lượng sản phẩm trong giỏ hàng lên 1.
                        if(quantity == 1){
                            cart.products[i].quantity += quantity;
                        }
                        else{
                            cart.products[i].quantity = quantity;
                        }
                        quantity = cart.products[i].quantity;
                        if(quantity <= 0){
                            // Xoá bỏ sản phẩm khỏi giỏ hàng trong trường hợp số lượng nhỏ hơn 0.
                            cart.products.splice(i, 1);
                        }
                        break;
                    }
                }
                // Nếu không tồn tại sản phẩm trong giỏ hàng.
                if(!existsItem){
                    // Thêm mới sản phẩm với quantity default là 1.
                    cart.products.push({
                        'id': productId,
                        'quantity': quantity,
                        'name': productName,
                        'price': productPrice,
                        'totalItemPrice': 0
                    });
                }                   
            }                               
        }
        alert('Đặt vé' + productName + ' vào giỏ hàng thành công. Số lượng ' + quantity);
        // Lưu lại thông tin giỏ hàng vào localStorage.
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    // function getDetailComment(idLeHoi){
    //     $http({
    //         method : "GET",
    //         url : "http://localhost:3000/api/comments/"+idLeHoi,
    //     }).then(function mySuccess(response) {
    //         console.log(response);
    //         $scope.listComment = response.data;
    //     }, function myError(response) {
    //         console.log(response.statusText);
    //     });
    // }
    // getDetailComment(idLeHoi);
    
    // $scope.btnComment = function(){
    //     var userID = localStorage.getItem("ownerId"),
    //         userName = localStorage.getItem("ownerName"),
    //         userUrl = localStorage.getItem("ownerUrl"),
    //         lehoiID = localStorage.getItem("lehoiID"),
    //         lehoiName = localStorage.getItem("lehoiName"),
    //         content = $('#commentContent').val();
    //     if(userID != null && userID != undefined && lehoiID != null && lehoiID != undefined){
    //         var comments = {
    //             userID : userID,
    //             userName : userName,
    //             userUrl : userUrl,
    //             lehoiID : lehoiID,
    //             lehoiName: lehoiName,
    //             content : content
    //         }
    //         $http({
    //             method : "POST",
    //             url : "http://localhost:3000/api/comments",
    //             data: comments
    //         }).then(function mySuccess(response) {
    //             console.log(response);
    //             $('#commentContent').val(' ');
    //         }, function myError(response) {
    //             console.log(response.statusText);
    //         });
    //         setTimeout(function(){ 
    //             getDetailComment(idLeHoi);
    //         }, 1000);
    //     }
    //     else{
    //         alert('Bạn phải đăng nhập nhé ! ^^');
    //     }
        
    // }
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $scope.detailDowload=function () {   
        doc.fromHTML($('#detailcontent').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('festivals-file.pdf');
    };
    function initMap() {
        var vido = localStorage.getItem("vido");
        var vido1 = parseFloat(vido);
        var kinhdo = localStorage.getItem("kinhdo");
        var kinhdo1 = parseFloat(kinhdo);
        var uluru = {lat: kinhdo1, lng: vido1};
        console.log(uluru);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    setTimeout(function(){ 
        initMap();
    }, 2000);
    setTimeout(function(){ 
        var searchVal = localStorage.getItem("find");

        switch(searchVal){
            case '0': $scope.searchTitle = 'Việt Nam';
            break;
            case '1': $scope.searchTitle = 'Châu Á';
            break;
            case '2': $scope.searchTitle = 'Châu Âu';
            break;
            case '3': $scope.searchTitle = 'Châu Mỹ';
            break;
            case '4': $scope.searchTitle = 'Châu Phi';
            break;
            case '5': $scope.searchTitle = 'Châu Úc';
            break;
            case '6': $scope.searchTitle = 'Đạo Phật';
            break;
            case '7': $scope.searchTitle = 'Đạo Hồi';
            break;
            case '8': $scope.searchTitle = 'Đạo Thiên Chúa';
            break;
            case '9': $scope.searchTitle = 'Đạo Hindu';
            break;
            default: $scope.searchTitle = 'Tất Cả';      
        }
        searchVal = Number(searchVal);
        
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals?page=1&limit=5&find="+searchVal,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listDataLeft = response.data.listFestival;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }, 2000);
    $scope.btnDetail = function(_id){
        localStorage.setItem("lehoiID", _id);
         window.open('index.html#!/detail');
    }
    
    
});
app.controller('ctrlSearch', function($scope, $http){
    var searchVal = localStorage.getItem("find");

    switch(searchVal){
        case '0': $scope.searchTitle = 'Việt Nam';
        break;
        case '1': $scope.searchTitle = 'Châu Á';
        break;
        case '2': $scope.searchTitle = 'Châu Âu';
        break;
        case '3': $scope.searchTitle = 'Châu Mỹ';
        break;
        case '4': $scope.searchTitle = 'Châu Phi';
        break;
        case '5': $scope.searchTitle = 'Châu Úc';
        break;
        case '6': $scope.searchTitle = 'Đạo Phật';
        break;
        case '7': $scope.searchTitle = 'Đạo Hồi';
        break;
        case '8': $scope.searchTitle = 'Đạo Thiên Chúa';
        break;
        case '9': $scope.searchTitle = 'Đạo Hindu';
        break;
        default: $scope.searchTitle = 'Tất Cả';      
    }
    searchVal = Number(searchVal);
    $http({
        method : "GET",
        url : "http://localhost:3000/api/festivals?page=1&limit=10",
    }).then(function mySuccess(response) {
        console.log(response);
        $scope.listDataRight = response.data.listFestival;
    }, function myError(response) {
        console.log(response.statusText);
    });
    function search(){

    }
    $http({
        method : "GET",
        url : "http://localhost:3000/api/festivals?page=1&limit=5&find="+searchVal,
    }).then(function mySuccess(response) {
        console.log(response);
        $scope.listDataLeft = response.data.listFestival;
    }, function myError(response) {
        console.log(response.statusText);
    });
    $scope.btnDetail = function(_id){
        localStorage.setItem("lehoiID", _id);
        window.location.href = "index.html#!/detail";
    }
});
app.controller('ctrlAbout', function($scope, $http){
    function initMap() {
      var uluru = {lat: 21.028843, lng: 105.782392};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
    initMap();
});

app.controller('ctrlMedia', function($scope, $http){
    function getListLeHoi(){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/festivals?page=1&limit=20",
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listData = response.data.listFestival;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getListLeHoi();
    var videoFrame = document.getElementById("video-frame");
    $scope.showVideo = function(videoId, nameLeHoi, _id){
        localStorage.setItem("lehoiID", _id);
        $('#nameLeHoi').text(nameLeHoi);
        videoFrame.src = videoId;
        setTimeout(function(){ 
            $('#modal-video').modal();
        }, 300);
        
    }
    $scope.mediaBtnDetail = function(){
        $('#modal-video').modal('hide')
        window.location.href = "index.html#!/detail";
    }
});
app.controller('ctrlContact', function($scope, $http){
});

app.controller('ctrlCart', function($scope, $http){
    function loadCart(){
        var cart = localStorage.getItem('cart');
        // Kiểm tra sự tồn tại của giỏ hàng.            
        if (cart == null){
            alert('Hiện tại chưa có sản phẩm trong giỏ hàng.');
            return;
        }
        // Parse thông tin giỏ hàng.
        cart = JSON.parse(cart);
        // Kiểm tra thông tin sản phẩm trong giỏ hàng.
        if(cart.products == undefined || cart.products == null){
            alert('Hiện tại chưa có sản phẩm trong giỏ hàng.');
            return;
        }
        var totalPrice = 0;
        for(var i = 0; i < cart.products.length; i++){
            cart.products[i].totalItemPrice =  cart.products[i].quantity * cart.products[i].price;
            totalPrice += cart.products[i].totalItemPrice;
        }
        $('.CartTotalPrice').html(totalPrice+' <b>VND</b>');
        // alert('Tổng giá tiền: '+ totalPrice);
        $scope.listData = cart.products;
    }
    loadCart();


    $scope.btnAddToCart = function(productId, productName, productPrice, quantity){
        var cart = localStorage.getItem('cart');    
        if (cart == null){
            // Nếu chưa thì tạo mới giỏ hàng với products là danh sách các sản phẩm
            // kèm số lượng.
            if(quantity > 0){
                cart = {
                    'products': [
                        {
                            'id': productId,
                            'name': productName,
                            'price': productPrice,
                            'quantity': quantity
                        }
                    ]
                }   
            }                       
        } else{
            // Nếu đã tồn tại sản phẩm.
            // Parse thông tin giỏ hàng về json object.
            cart = JSON.parse(cart);
            // Kiểm tra sự tồn tại của trường products trong giỏ hàng.
            if(cart.products != undefined && cart.products != null){
                // Kiểm tra sự tồn tại của sản phầm trong giỏ hàng.
                var existsItem = false;
                for (var i = 0; i < cart.products.length; i++) {
                    // Nếu tồn tại sản phẩm.
                    if(cart.products[i].id == productId){
                        existsItem = true;
                        // tăng số lượng sản phẩm trong giỏ hàng lên 1.
                        if(quantity == 1 || quantity == -1 ){
                            cart.products[i].quantity += quantity;
                        }
                        else{
                            cart.products[i].quantity = quantity;
                        }
                        quantity = cart.products[i].quantity;
                        if(quantity <= 0){
                            // Xoá bỏ sản phẩm khỏi giỏ hàng trong trường hợp số lượng nhỏ hơn 0.
                            cart.products.splice(i, 1);
                        }
                        break;
                    }
                }
                // Nếu không tồn tại sản phẩm trong giỏ hàng.
                if(!existsItem){
                    // Thêm mới sản phẩm với quantity default là 1.
                    cart.products.push({
                        'id': productId,
                        'quantity': quantity,
                        'name': productName,
                        'price': productPrice,
                        'totalItemPrice': 0
                    });
                }                   
            }                               
        }
        alert('Đặt vé' + productName + ' vào giỏ hàng thành công. Số lượng ' + quantity);
        // Lưu lại thông tin giỏ hàng vào localStorage.
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    $scope.btnPay = function(){
        var cart = localStorage.getItem('cart');
        cart = JSON.parse(cart);
        
        var arrayProducts = [];
        for (var i = 0; i < cart.products.length; i++) {
            var product = {
                'id': cart.products[i].id,
                'quantity': cart.products[i].quantity                   
            };
            arrayProducts.push(product);
        }
        var data = {
            'products': JSON.stringify(arrayProducts)
        }   
        $http({
            method : "POST",
            url : "http://localhost:3000/api/cart",
            data: data
        }).then(function mySuccess(response) {
            console.log(response);
        }, function myError(response) {
            console.log(response.statusText);
        });   
    }
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "chucnang/main.html"
    })
    .when("/detail", {
        templateUrl : "chucnang/detail.html"
    })
    .when("/media", {
        templateUrl : "chucnang/media.html"
    })
    .when("/about", {
        templateUrl : "chucnang/about.html"
    })
    .when("/contact", {
        templateUrl : "chucnang/contact.html"
    })
    .when("/login", {
        templateUrl : "chucnang/login.html"
    })
    .when("/register", {
        templateUrl : "chucnang/register.html"
    })
    .when("/search", {
        templateUrl : "chucnang/search.html"
    })
    .when("/profile", {
        templateUrl : "chucnang/accoutcenter.html"
    }) 
    .when("/cart", {
        templateUrl : "chucnang/cart.html"
    })    
});
// AIzaSyDTUdSTKgfHqp4a0WOAY5JuBmkgl2obY5o 
