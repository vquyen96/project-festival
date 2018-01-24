var app = angular.module("myApp", ["ngRoute"]);

app.controller('ctrlHead', function($scope, $http){
    var ownerId = localStorage.getItem("ownerId");
    var tokenKey = localStorage.getItem("tokenKey");
    if (tokenKey != null && ownerId != null) {
        $http({
            method : "GET",
            url : "http://localhost:3000/api/users/" + ownerId,
        }).then(function mySuccess(response) {
            console.log(response);
            $scope.avaUrl = response.data.avaUrl;
            $scope.loggedInUsername = response.data.username;
            $scope.isLoggedIn = true;
        }, function myError(response) {
            $scope.isLoggedIn = false;
            console.log(response.statusText);
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
app.controller('ctrlNav', function($scope, $http){
    $scope.menuSearchLucDia = function(name){
        $('#headSearch').attr('value', name);
        $('#headSearch').attr('name','lucdia');
    }
    $scope.menuSearchTonGiao = function(name){
        $('#headSearch').val(name);
        $('#headSearch').attr('name','tongiao');
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

});
app.controller('ctrlDetail', function($scope, $http){

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
    var videoFrame = document.getElementById("video-frame");
    
    $scope.showVideo = function(videoId){
        videoFrame.src = videoId;
        setTimeout(function(){ 
            $('#modal-video').modal();
        }, 300);
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
    .when("/vietnam", {
        templateUrl : "chucnang/search.html"
    })
});
