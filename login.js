var URL = 'https://festival-number1.appspot.com';
// var URL = 'http://localhost:3000';
var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlLogin', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
    function alertError(data){
        $('.alert-danger').text(data);
        $('.alert-danger').attr('style','display : block');
        setTimeout(function(){
           $('.alert-danger').attr('style','display : none');
        },3000);
    }
    function alertSuccess(data){
        $('.alert-success').text(data);
        $('.alert-success').attr('style','display : block');
        setTimeout(function(){
           $('.alert-success').attr('style','display : none');
        },3000);
    }
	$scope.btnSbm = function(){
		console.log($scope.data);
		$http({
            method : "POST",
            url : URL+"/api/authentications",
            data: $scope.data
        }).then(function mySuccess(response) {
            console.log(response);
            alertSuccess('Đăng nhập thành công');
            var ownerId = localStorage.setItem("ownerId", response.data.ownerId);
            var tokenKey = localStorage.setItem("tokenKey", response.data.tokenKey);
            var level = localStorage.setItem("level", response.data.level);
            if(response.data.level == 2 || response.data.level == 3){
            	window.location.href = "backend/client/index.html";
            }
            else{
                window.location.href = "fontend/index.html";
            }
            
        }, function myError(response) {
            console.log(response.data);
            alertError(response.data);
        });
	}
    $scope.btnRegister = function(){
    	window.location.href = "register.html";
    };

});