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
    $scope.btnChangeAdmin = function(){
        if(level == 1){
            alert('Bạn không được chuyển trang vì bạn không phải quản lý')
        }
        else{
            window.location.href = "../backend/client/index.html";
        }
    }
    $scope.btnHeaderBar = function(){
        $('nav').slideToggle();
    }

});
app.controller('ctrlNav', function($scope, $http){
    $scope.menuSearch = function(val){
        localStorage.setItem("find", val);
        // window.location.href('index.html#!/search');
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
    function getDetailComment(idLeHoi){
        $http({
            method : "GET",
            url : "http://localhost:3000/api/comments/"+idLeHoi,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.listComment = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }
    getDetailComment(idLeHoi);
    
    $scope.btnComment = function(){
        var userID = localStorage.getItem("ownerId"),
            userName = localStorage.getItem("ownerName"),
            userUrl = localStorage.getItem("ownerUrl"),
            lehoiID = localStorage.getItem("lehoiID"),
            lehoiName = localStorage.getItem("lehoiName"),
            content = $('#commentContent').val();
        if(userID != null && userID != undefined && lehoiID != null && lehoiID != undefined){
            var comments = {
                userID : userID,
                userName : userName,
                userUrl : userUrl,
                lehoiID : lehoiID,
                lehoiName: lehoiName,
                content : content
            }
            $http({
                method : "POST",
                url : "http://localhost:3000/api/comments",
                data: comments
            }).then(function mySuccess(response) {
                console.log(response);
                $('#commentContent').val(' ');
            }, function myError(response) {
                console.log(response.statusText);
            });
            setTimeout(function(){ 
                getDetailComment(idLeHoi);
            }, 1000);
        }
        else{
            alert('Bạn phải đăng nhập nhé ! ^^');
        }
        
    }
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
});
// AIzaSyDTUdSTKgfHqp4a0WOAY5JuBmkgl2obY5o 
