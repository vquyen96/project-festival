var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlHead', function($scope, $http){
    
});
app.controller('ctrlHead', function($scope, $http){

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
});
