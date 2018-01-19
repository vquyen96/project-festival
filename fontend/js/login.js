var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlLogin', function($scope, $http){
	$scope.btnSbm = function(){
		console.log($scope.data);
		$http({
            method : "POST",
            url : "http://localhost:3000/api/authentications",
            data: $scope.data
        }).then(function mySuccess(response) {
            console.log(response);
            if(response.data.level == 1){
            	window.location.href = "../index.html";
            }
            else{
            	window.location.href = "../../backend/client/index.html";
            }
            
        }, function myError(response) {
            console.log(response.statusText);
        });
	}
    $scope.btnRegister = function(){
    	window.location.href = "register.html";
    };

});